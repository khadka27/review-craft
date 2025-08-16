import * as htmlToImage from "html-to-image";

// Fallback copy function for browsers that don't support the modern clipboard API
const fallbackCopyTextToClipboard = (text: string): void => {
  const textArea = document.createElement("textarea");
  textArea.value = text;

  // Avoid scrolling to bottom
  textArea.style.top = "0";
  textArea.style.left = "0";
  textArea.style.position = "fixed";

  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();

  try {
    // eslint-disable-next-line deprecation/deprecation
    document.execCommand("copy");
  } catch (err) {
    console.error("Fallback: Oops, unable to copy", err);
  }

  document.body.removeChild(textArea);
};

export const downloadReviewAsImage = async (
  elementId: string,
  filename: string = "review",
  format: "png" | "jpeg" = "png"
): Promise<void> => {
  try {
    console.log(`Starting download for element: ${elementId}`);

    const element = document.getElementById(elementId);
    if (!element) {
      throw new Error(`Element with ID "${elementId}" not found`);
    }

    console.log(`Element found:`, {
      width: element.offsetWidth,
      height: element.offsetHeight,
      visible: element.offsetParent !== null,
      children: element.children.length,
    });

    // Check if element is visible
    if (element.offsetWidth === 0 || element.offsetHeight === 0) {
      throw new Error(
        "Element has zero dimensions. Make sure it's visible and has content."
      );
    }

    // Wait for images to load
    const images = element.querySelectorAll("img");
    console.log(`Found ${images.length} images in element`);

    await Promise.all(
      Array.from(images).map(
        (img) =>
          new Promise((resolve) => {
            if (img.complete) {
              resolve(undefined);
            } else {
              img.onload = () => resolve(undefined);
              img.onerror = () => {
                console.warn("Image failed to load:", img.src);
                resolve(undefined); // Continue even if image fails
              };
              // Timeout after 3 seconds
              setTimeout(() => resolve(undefined), 3000);
            }
          })
      )
    );

    // Add a longer delay to ensure the element is fully rendered
    await new Promise((resolve) => setTimeout(resolve, 500));

    const options = {
      quality: format === "jpeg" ? 0.95 : 1,
      pixelRatio: 1, // Reduced from 2 to avoid memory issues
      backgroundColor: "#ffffff",
      useCORS: true,
      allowTaint: false, // Changed to false to avoid CORS issues
      style: {
        transform: "scale(1)",
        transformOrigin: "top left",
        margin: "0",
        padding: "0",
      },
      width: element.offsetWidth,
      height: element.offsetHeight,
      filter: (node: HTMLElement) => {
        // Filter out any problematic nodes
        if (node.tagName === "SCRIPT") return false;
        if (node.tagName === "LINK") return false;
        return true;
      },
    };

    console.log(`Generating ${format.toUpperCase()} with options:`, options);

    let dataUrl: string;

    try {
      if (format === "png") {
        dataUrl = await htmlToImage.toPng(element, options);
      } else {
        dataUrl = await htmlToImage.toJpeg(element, options);
      }
    } catch (imageError) {
      console.error("html-to-image error:", imageError);
      // Try with even simpler options
      const simpleOptions = {
        backgroundColor: "#ffffff",
        pixelRatio: 1,
        filter: (node: HTMLElement) => {
          // Skip any external images that might cause CORS issues
          if (node.tagName === "IMG") {
            const img = node as HTMLImageElement;
            if (
              img.src.startsWith("http") &&
              !img.src.includes(window.location.hostname)
            ) {
              return false;
            }
          }
          return true;
        },
      };
      console.log("Retrying with simpler options:", simpleOptions);

      if (format === "png") {
        dataUrl = await htmlToImage.toPng(element, simpleOptions);
      } else {
        dataUrl = await htmlToImage.toJpeg(element, simpleOptions);
      }
    }

    if (!dataUrl || dataUrl === "data:,") {
      throw new Error("Failed to generate image data URL - empty result");
    }

    console.log("Image generated successfully, starting download");

    // Create and trigger download
    const link = document.createElement("a");
    link.download = `${filename}.${format}`;
    link.href = dataUrl;
    link.style.display = "none";

    document.body.appendChild(link);
    link.click();

    // Clean up after a short delay
    setTimeout(() => {
      document.body.removeChild(link);
    }, 100);

    console.log("Download triggered successfully");
  } catch (error) {
    console.error("Error downloading image:", error);
    throw new Error(
      `Failed to download image: ${
        error instanceof Error ? error.message : "Unknown error"
      }`
    );
  }
};

export const copyToClipboard = async (elementId: string): Promise<void> => {
  try {
    const element = document.getElementById(elementId);
    if (!element) {
      throw new Error(`Element with ID "${elementId}" not found`);
    }

    // Add a small delay to ensure the element is fully rendered
    await new Promise((resolve) => setTimeout(resolve, 100));

    const options = {
      quality: 1,
      pixelRatio: 2,
      backgroundColor: "#ffffff",
      width: element.offsetWidth,
      height: element.offsetHeight,
    };

    const dataUrl = await htmlToImage.toPng(element, options);

    if (!dataUrl) {
      throw new Error("Failed to generate image data URL");
    }

    // Check if clipboard API is available and supports writing images
    if (navigator.clipboard && ClipboardItem) {
      try {
        const response = await fetch(dataUrl);
        if (!response.ok) {
          throw new Error(`Failed to fetch image data: ${response.statusText}`);
        }

        const blob = await response.blob();

        await navigator.clipboard.write([
          new ClipboardItem({
            "image/png": blob,
          }),
        ]);
        return;
      } catch (clipboardError) {
        console.warn(
          "Modern clipboard API failed, trying fallback:",
          clipboardError
        );
      }
    }

    // Fallback: copy the data URL as text
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(dataUrl);
      console.info("Copied image data URL to clipboard as fallback");
      return;
    }

    // Last resort fallback using deprecated execCommand
    fallbackCopyTextToClipboard(dataUrl);
    console.info("Used deprecated execCommand as final fallback");
  } catch (error) {
    console.error("Error copying to clipboard:", error);
    throw new Error(
      `Failed to copy to clipboard: ${
        error instanceof Error ? error.message : "Unknown error"
      }`
    );
  }
};
