import * as htmlToImage from "html-to-image";

// Simple cache for converted images to avoid repeated conversions
const imageCache = new Map<string, string>();

// Helper function to convert any image to base64 with better error handling
const convertImageToBase64 = async (
  imgElement: HTMLImageElement
): Promise<string> => {
  return new Promise((resolve) => {
    try {
      // If it's already a data URL, return as is
      if (imgElement.src.startsWith("data:")) {
        console.log("Image is already base64, using as is");
        resolve(imgElement.src);
        return;
      }

      // For local images, return as is
      if (
        !imgElement.src.startsWith("http") ||
        imgElement.src.includes(window.location.hostname)
      ) {
        console.log("Local image detected, using as is");
        resolve(imgElement.src);
        return;
      }

      // Check cache first
      const cacheKey = imgElement.src;
      if (imageCache.has(cacheKey)) {
        console.log("Using cached conversion for:", cacheKey);
        resolve(imageCache.get(cacheKey)!);
        return;
      }

      console.log("Converting external image:", imgElement.src);

      // Try multiple approaches for better compatibility
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d", { willReadFrequently: true });

      if (!ctx) {
        console.warn("Could not get canvas context, generating fallback");
        resolve(generateFallbackAvatar(imgElement));
        return;
      }

      // Strategy 1: Try to use the current image if it's already loaded and displayed
      if (
        imgElement.complete &&
        imgElement.naturalWidth > 0 &&
        imgElement.naturalHeight > 0
      ) {
        try {
          canvas.width = imgElement.naturalWidth;
          canvas.height = imgElement.naturalHeight;
          ctx.drawImage(imgElement, 0, 0);

          // Test if canvas is tainted by trying to get image data
          ctx.getImageData(0, 0, 1, 1);

          const dataURL = canvas.toDataURL("image/png", 1.0);
          console.log("Successfully converted loaded image to base64");
          imageCache.set(cacheKey, dataURL);
          resolve(dataURL);
          return;
        } catch (error) {
          console.warn(
            "Canvas is tainted or failed to convert loaded image:",
            error
          );
          // Fall through to alternative methods
        }
      }

      // Strategy 2: Create a new image with CORS handling
      const tempImg = new Image();
      tempImg.crossOrigin = "anonymous";

      let timeoutId: NodeJS.Timeout;
      let resolved = false;

      const resolveOnce = (value: string) => {
        if (!resolved) {
          resolved = true;
          clearTimeout(timeoutId);
          resolve(value);
        }
      };

      tempImg.onload = () => {
        try {
          canvas.width = tempImg.naturalWidth || 128;
          canvas.height = tempImg.naturalHeight || 128;
          ctx.drawImage(tempImg, 0, 0);

          // Test if canvas is tainted
          ctx.getImageData(0, 0, 1, 1);

          const dataURL = canvas.toDataURL("image/png", 1.0);
          console.log("Successfully converted new image to base64");
          imageCache.set(cacheKey, dataURL);
          resolveOnce(dataURL);
        } catch (error) {
          console.warn(
            "Failed to convert new image, generating fallback:",
            error
          );
          resolveOnce(generateFallbackAvatar(imgElement));
        }
      };

      tempImg.onerror = () => {
        console.warn("Failed to load image with CORS, generating fallback");
        resolveOnce(generateFallbackAvatar(imgElement));
      };

      // Strategy 3: Use optimized URLs for known services or route via local proxy to avoid CORS
      let srcUrl = imgElement.src;

      if (srcUrl.includes("ui-avatars.com")) {
        const url = new URL(srcUrl);
        url.searchParams.set("format", "png");
        url.searchParams.set("size", "128");
        url.searchParams.set("background", "random");
        url.searchParams.set("color", "ffffff");
        srcUrl = url.toString();
        console.log("Optimized UI Avatars URL:", srcUrl);
      } else if (srcUrl.includes("randomuser.me")) {
        // RandomUser.me images are typically CORS-enabled
        console.log("RandomUser.me image detected");
      }

      // If image is cross-origin, route through our local proxy so final canvas isn't tainted
      try {
        const origin = window.location.origin;
        const isExternal =
          /^https?:\/\//i.test(srcUrl) &&
          !srcUrl.includes(window.location.hostname);
        if (isExternal) {
          const proxied = new URL(`/api/image-proxy`, origin);
          proxied.searchParams.set("url", srcUrl);
          srcUrl = proxied.toString();
          console.log("Using proxy for external image:", srcUrl);
        }
      } catch {}

      // Set timeout for loading (reduced to 2 seconds for better UX)
      timeoutId = setTimeout(() => {
        console.warn("Image loading timeout, generating fallback");
        resolveOnce(generateFallbackAvatar(imgElement));
      }, 2000);

      tempImg.src = srcUrl;
    } catch (error) {
      console.warn(
        "Error in convertImageToBase64, generating fallback:",
        error
      );
      resolve(generateFallbackAvatar(imgElement));
    }
  });
};

// Generate a fallback avatar using Canvas API
const generateFallbackAvatar = (imgElement: HTMLImageElement): string => {
  try {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    if (!ctx) {
      return generateColorAvatar("User");
    }

    canvas.width = 128;
    canvas.height = 128;

    // Extract name from alt attribute or use default
    const name = imgElement.alt || "User";
    const initials = name
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase())
      .join("")
      .substring(0, 2);

    // Generate a consistent color based on the name
    let hash = 0;
    for (let i = 0; i < name.length; i++) {
      hash = name.charCodeAt(i) + ((hash << 5) - hash);
    }

    const hue = Math.abs(hash) % 360;
    const bgColor = `hsl(${hue}, 70%, 50%)`;
    const textColor = "white";

    // Draw background
    ctx.fillStyle = bgColor;
    ctx.fillRect(0, 0, 128, 128);

    // Draw initials
    ctx.fillStyle = textColor;
    ctx.font = "bold 48px Arial, sans-serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(initials, 64, 64);

    console.log("Generated fallback avatar with initials:", initials);
    return canvas.toDataURL("image/png", 1.0);
  } catch (error) {
    console.warn("Failed to generate fallback avatar:", error);
    return generateColorAvatar("U");
  }
};

// Simple color avatar generator as ultimate fallback
const generateColorAvatar = (text: string): string => {
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");

  if (!ctx) {
    // Return a minimal base64 image as last resort
    return "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg==";
  }

  canvas.width = 128;
  canvas.height = 128;

  // Simple colored square with letter
  ctx.fillStyle = "#6366f1";
  ctx.fillRect(0, 0, 128, 128);

  ctx.fillStyle = "white";
  ctx.font = "bold 64px Arial";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(text.charAt(0).toUpperCase(), 64, 64);

  return canvas.toDataURL("image/png", 1.0);
};

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
  let hiddenContainer: HTMLDivElement | null = null;
  let renderTarget: HTMLElement | null = null;
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
      computedStyle: window.getComputedStyle(element).display,
    });

    // Check if element is visible and has dimensions
    if (element.offsetWidth === 0 || element.offsetHeight === 0) {
      throw new Error(
        "Element has zero dimensions. Make sure it's visible and has content."
      );
    }

    // Check if element is actually visible in the DOM
    const computedStyle = window.getComputedStyle(element);
    if (
      computedStyle.display === "none" ||
      computedStyle.visibility === "hidden"
    ) {
      throw new Error(
        "Element is hidden. Make sure it's visible before downloading."
      );
    }

    // Clone into off-screen container so we don't mutate the visible DOM
    hiddenContainer = document.createElement("div");
    hiddenContainer.style.position = "fixed";
    hiddenContainer.style.left = "-10000px";
    hiddenContainer.style.top = "-10000px";
    hiddenContainer.style.pointerEvents = "none";
    hiddenContainer.style.opacity = "0";
    hiddenContainer.style.zIndex = "-1";

    renderTarget = element.cloneNode(true) as HTMLElement;
    // Ensure the clone uses the same layout width for consistent rendering
    renderTarget.style.width = `${element.offsetWidth}px`;

    hiddenContainer.appendChild(renderTarget);
    document.body.appendChild(hiddenContainer);

    // Store original image sources to restore later (inside the clone)
    const images = renderTarget.querySelectorAll("img");

    console.log(`Found ${images.length} images in element`);

    // Convert external images to base64 and store originals
    const imageConversionPromises: Promise<void>[] = [];

    for (const img of Array.from(images)) {
      // We operate on the clone only, so no need to restore originals

      // Convert ALL external images, not just HTTP ones
      if (
        img.src.startsWith("http") &&
        !img.src.includes(window.location.hostname)
      ) {
        console.log("Converting external image:", img.src, "Alt:", img.alt);

        // Convert images in parallel for better performance
        const conversionPromise = convertImageToBase64(img)
          .then((base64Src) => {
            console.log("Original src:", img.src);
            console.log("Converted to base64 length:", base64Src.length);
            img.src = base64Src;
            console.log(
              "Image conversion completed for:",
              img.alt || "unnamed image"
            );

            // Force image reload to ensure it's displayed
            img.onload = () => {
              console.log("Converted image loaded successfully");
            };
            img.onerror = () => {
              console.error("Converted image failed to load");
            };
          })
          .catch((error) => {
            console.warn("Image conversion failed, keeping original:", error);
            // Keep original source on error
          });

        imageConversionPromises.push(conversionPromise);
      } else {
        console.log(
          "Local or data image detected:",
          img.src.substring(0, 50) + "..."
        );
      }
    }

    // Wait for all image conversions to complete
    if (imageConversionPromises.length > 0) {
      console.log(
        `Converting ${imageConversionPromises.length} external images...`
      );
      await Promise.allSettled(imageConversionPromises);
      console.log("All image conversions completed");
    }

    // Add delay to ensure images are rendered and check image loading status
    await new Promise((resolve) => setTimeout(resolve, 800));

    // Debug: Check if all images are properly loaded and fix broken ones
    console.log("=== Image Loading Status ===");
    const brokenImageFixes: Promise<void>[] = [];

    images.forEach((img, index) => {
      const imageInfo = {
        src: img.src.substring(0, 100) + (img.src.length > 100 ? "..." : ""),
        alt: img.alt,
        complete: img.complete,
        naturalWidth: img.naturalWidth,
        naturalHeight: img.naturalHeight,
        width: img.width,
        height: img.height,
        isDataUrl: img.src.startsWith("data:"),
      };

      console.log(`Image ${index + 1}:`, imageInfo);

      // If image failed to load (naturalWidth is 0), replace with fallback
      if (
        img.complete &&
        img.naturalWidth === 0 &&
        !img.src.startsWith("data:")
      ) {
        console.warn(`Image ${index + 1} failed to load, generating fallback`);

        const fixPromise = (async () => {
          const fallbackSrc = generateFallbackAvatar(img);
          img.src = fallbackSrc;
          console.log(`Image ${index + 1} replaced with fallback`);
        })();

        brokenImageFixes.push(fixPromise);
      }
    });

    // Wait for any broken image fixes
    if (brokenImageFixes.length > 0) {
      console.log(`Fixing ${brokenImageFixes.length} broken images...`);
      await Promise.all(brokenImageFixes);
      // Give a moment for the new images to load
      await new Promise((resolve) => setTimeout(resolve, 200));
    }

    console.log("=== End Image Status ===");

    // More robust options for html-to-image with better image handling
    const options = {
      quality: format === "jpeg" ? 0.95 : 1,
      pixelRatio: 1,
      backgroundColor: "#ffffff",
      width: element.offsetWidth,
      height: element.offsetHeight,
      useCORS: true,
      allowTaint: true, // Allow tainted canvas to handle converted images
      cacheBust: true,
      includeQueryParams: true,
      imagePlaceholder: undefined, // Let it handle images naturally
      style: {
        transform: "scale(1)",
        transformOrigin: "top left",
      },
      filter: (node: any) => {
        // Filter out problematic elements but keep images
        if (node.tagName === "SCRIPT") return false;
        if (node.tagName === "LINK") return false;
        if (node.tagName === "STYLE") return false;
        // Always include IMG elements
        if (node.tagName === "IMG") {
          console.log("Including IMG element:", node.src?.substring(0, 50));
          return true;
        }
        return true;
      },
    };

    console.log(`Generating ${format.toUpperCase()} with options:`, options);

    let dataUrl: string;

    try {
      if (format === "png") {
        dataUrl = await htmlToImage.toPng(renderTarget, options);
      } else {
        dataUrl = await htmlToImage.toJpeg(renderTarget, options);
      }
    } catch (imageError) {
      console.error("html-to-image error:", imageError);

      // Log more details about the error
      console.error("Error details:", {
        message:
          imageError instanceof Error ? imageError.message : "Unknown error",
        stack:
          imageError instanceof Error ? imageError.stack : "No stack trace",
        elementInfo: {
          id: element.id,
          width: element.offsetWidth,
          height: element.offsetHeight,
          childCount: element.children.length,
        },
      });

      // Wait a bit more before retry
      await new Promise((resolve) => setTimeout(resolve, 500));

      // Try with much simpler options
      const simpleOptions = {
        backgroundColor: "#ffffff",
        pixelRatio: 1,
        width: element.offsetWidth,
        height: element.offsetHeight,
        skipFonts: true, // Skip custom fonts that might cause issues
      };

      console.log("Retrying with simpler options:", simpleOptions);

      try {
        if (format === "png") {
          dataUrl = await htmlToImage.toPng(renderTarget, simpleOptions);
        } else {
          dataUrl = await htmlToImage.toJpeg(renderTarget, simpleOptions);
        }
        console.log("Second attempt succeeded");
      } catch (secondError) {
        console.error("Second attempt failed:", secondError);

        // Try toCanvas as last resort with minimal options
        try {
          console.log("Attempting canvas fallback...");
          const minimalOptions = {
            backgroundColor: "#ffffff",
          };
          const canvas = await htmlToImage.toCanvas(
            renderTarget,
            minimalOptions
          );
          dataUrl = canvas.toDataURL(
            format === "jpeg" ? "image/jpeg" : "image/png",
            0.9
          );
          console.log("Canvas fallback succeeded");
        } catch (canvasError) {
          console.error("Canvas attempt failed:", canvasError);

          // Ultimate fallback: try to at least capture the element content as a simple canvas
          try {
            console.log("Attempting manual canvas creation...");
            const fallbackCanvas = document.createElement("canvas");
            const ctx = fallbackCanvas.getContext("2d");

            if (ctx) {
              fallbackCanvas.width = element.offsetWidth || 400;
              fallbackCanvas.height = element.offsetHeight || 300;

              // Fill with white background
              ctx.fillStyle = "#ffffff";
              ctx.fillRect(0, 0, fallbackCanvas.width, fallbackCanvas.height);

              // Add a simple error message
              ctx.fillStyle = "#666666";
              ctx.font = "16px Arial, sans-serif";
              ctx.textAlign = "center";
              ctx.fillText(
                "Review Image",
                fallbackCanvas.width / 2,
                fallbackCanvas.height / 2 - 10
              );
              ctx.fillText(
                "(Download Error)",
                fallbackCanvas.width / 2,
                fallbackCanvas.height / 2 + 15
              );

              dataUrl = fallbackCanvas.toDataURL(
                format === "jpeg" ? "image/jpeg" : "image/png"
              );
              console.log("Manual canvas fallback created");
            } else {
              throw new Error("Cannot create fallback canvas");
            }
          } catch (fallbackError) {
            console.error("All fallback attempts failed:", fallbackError);
            throw new Error(
              `Failed to generate image. This may be due to external image loading issues or browser security restrictions. ` +
                `Original error: ${
                  imageError instanceof Error
                    ? imageError.message
                    : "Unknown error"
                }`
            );
          }
        }
      }
    }

    if (!dataUrl || dataUrl === "data:,") {
      throw new Error("Failed to generate image data URL - empty result");
    }

    console.log("Image generated successfully, starting download");

    // Create and trigger download with better handling
    const link = document.createElement("a");
    link.download = `${filename}.${format}`;
    link.href = dataUrl;
    link.style.display = "none";

    document.body.appendChild(link);

    // Use setTimeout to ensure the click happens after DOM update
    setTimeout(() => {
      link.click();

      // Clean up after successful download
      setTimeout(() => {
        if (document.body.contains(link)) {
          document.body.removeChild(link);
        }

        // Clean up the hidden container
        if (hiddenContainer && document.body.contains(hiddenContainer)) {
          document.body.removeChild(hiddenContainer);
        }

        console.log("Download completed and images restored");
      }, 100);
    }, 10);

    console.log("Download triggered successfully");
  } catch (error) {
    console.error("Error downloading image:", error);

    // Clean up the hidden container even on error
    if (hiddenContainer && document.body.contains(hiddenContainer)) {
      document.body.removeChild(hiddenContainer);
    }

    // Provide more detailed error information
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error occurred";
    const errorDetails =
      error instanceof Error ? error.stack : "No additional details";

    console.error("Download error details:", {
      message: errorMessage,
      stack: errorDetails,
      elementId: elementId,
    });

    throw new Error(`Failed to download image: ${errorMessage}`);
  }
};

export const copyToClipboard = async (elementId: string): Promise<void> => {
  // Store original image sources
  const originalSources: { img: HTMLImageElement; src: string }[] = [];

  try {
    const element = document.getElementById(elementId);
    if (!element) {
      throw new Error(`Element with ID "${elementId}" not found`);
    }

    // Store original image sources and convert external images to base64
    const images = element.querySelectorAll("img");

    // Convert all external images to base64
    for (const img of Array.from(images)) {
      originalSources.push({ img, src: img.src });

      if (
        img.src.startsWith("http") &&
        !img.src.includes(window.location.hostname)
      ) {
        const base64Src = await convertImageToBase64(img);
        img.src = base64Src;
      }
    }

    // Add delay to ensure all converted images are fully rendered
    await new Promise((resolve) => setTimeout(resolve, 300));

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

        // Restore original image sources after successful copy
        originalSources.forEach(({ img, src }) => {
          img.src = src;
        });

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

      // Restore original image sources
      originalSources.forEach(({ img, src }) => {
        img.src = src;
      });

      return;
    }

    // Last resort fallback using deprecated execCommand
    fallbackCopyTextToClipboard(dataUrl);
    console.info("Used deprecated execCommand as final fallback");

    // Restore original image sources after copying
    originalSources.forEach(({ img, src }) => {
      img.src = src;
    });
  } catch (error) {
    console.error("Error copying to clipboard:", error);

    // Restore original image sources even on error
    originalSources.forEach(({ img, src }) => {
      img.src = src;
    });

    throw new Error(
      `Failed to copy to clipboard: ${
        error instanceof Error ? error.message : "Unknown error"
      }`
    );
  }
};
