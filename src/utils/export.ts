import { toPng, toJpeg, toCanvas } from 'html-to-image';
import { jsPDF } from 'jspdf';

// Helper to convert an image element's source to a Base64 data URL via local proxy
const convertImageToBase64 = async (img: HTMLImageElement): Promise<string> => {
  return new Promise((resolve) => {
    try {
      if (img.src.startsWith("data:")) {
        resolve(img.src);
        return;
      }

      // If it's a local path or same-origin, resolve as-is
      if (!img.src.startsWith("http") || img.src.includes(window.location.hostname)) {
        resolve(img.src);
        return;
      }

      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      if (!ctx) {
        resolve(img.src);
        return;
      }

      // Try loading with CORS first
      const tempImg = new Image();
      tempImg.crossOrigin = "anonymous";
      
      // Route through our local proxy to avoid CORS blocks
      let srcUrl = img.src;
      try {
        const origin = window.location.origin;
        const proxied = new URL(`/api/image-proxy`, origin);
        proxied.searchParams.set("url", srcUrl);
        srcUrl = proxied.toString();
      } catch {}

      const timeout = setTimeout(() => {
        resolve(img.src); // Fallback to original src on timeout
      }, 6000);

      tempImg.onload = () => {
        clearTimeout(timeout);
        try {
          canvas.width = tempImg.naturalWidth || img.naturalWidth || 128;
          canvas.height = tempImg.naturalHeight || img.naturalHeight || 128;
          ctx.drawImage(tempImg, 0, 0);
          const dataUrl = canvas.toDataURL("image/png");
          resolve(dataUrl);
        } catch {
          resolve(img.src);
        }
      };

      tempImg.onerror = () => {
        clearTimeout(timeout);
        resolve(img.src);
      };

      tempImg.src = srcUrl;
    } catch {
      resolve(img.src);
    }
  });
};

export const downloadComponentAsImage = async (
  elementId: string, 
  fileName: string = 'screenshot',
  options: { format?: 'png' | 'jpeg' | 'jpg' | 'webp' | 'pdf'; quality?: number } = {}
) => {
  const node = document.getElementById(elementId);
  if (!node) {
    console.error(`Element with id ${elementId} not found`);
    return;
  }

  let hiddenContainer: HTMLDivElement | null = null;

  try {
    const { format = 'png', quality = 0.95 } = options;
    const activeFormat = format.toLowerCase();

    // Clone node into off-screen container to perform image conversion safely
    hiddenContainer = document.createElement("div");
    hiddenContainer.style.position = "fixed";
    hiddenContainer.style.left = "-9999px";
    hiddenContainer.style.top = "-9999px";
    hiddenContainer.style.pointerEvents = "none";
    hiddenContainer.style.opacity = "0";
    hiddenContainer.style.zIndex = "-999";

    const cloneNode = node.cloneNode(true) as HTMLElement;
    
    const originalWidth = node.offsetWidth;
    const originalHeight = node.offsetHeight;
    
    // Set standard mobile screen dimensions for the export clone to ensure high-quality downloads on narrow/mobile viewports
    const isMobileAspect = originalWidth / originalHeight < 0.6;
    let exportWidth = originalWidth;
    let exportHeight = originalHeight;
    
    if (isMobileAspect) {
      exportWidth = originalWidth > 320 ? originalWidth : 375;
      exportHeight = originalHeight > 600 ? originalHeight : 812;
    }
    
    cloneNode.style.width = `${exportWidth}px`;
    cloneNode.style.height = `${exportHeight}px`;
    cloneNode.style.display = "flex";
    cloneNode.style.flexDirection = "column";

    hiddenContainer.appendChild(cloneNode);
    document.body.appendChild(hiddenContainer);

    // Sync scroll positions from original node to cloned node using CSS translate transform
    // This is because html-to-image internally clones the node again and loses the scrollTop property values of scrollable elements.
    const originalScrollables = Array.from(node.querySelectorAll('.overflow-y-auto, [style*="overflow-y: auto"], [style*="overflow: auto"]'));
    const clonedScrollables = Array.from(cloneNode.querySelectorAll('.overflow-y-auto, [style*="overflow-y: auto"], [style*="overflow: auto"]'));
    
    originalScrollables.forEach((orig, idx) => {
      const cloned = clonedScrollables[idx] as HTMLElement;
      if (cloned) {
        const scrollTop = (orig as HTMLElement).scrollTop;
        const scrollLeft = (orig as HTMLElement).scrollLeft;
        
        if (scrollTop > 0 || scrollLeft > 0) {
          const wrapperDiv = document.createElement('div');
          wrapperDiv.style.transform = `translate(-${scrollLeft}px, -${scrollTop}px)`;
          wrapperDiv.style.width = '100%';
          wrapperDiv.style.display = 'flex';
          wrapperDiv.style.flexDirection = 'column';
          wrapperDiv.style.flex = '1';
          
          // Copy layouts & spacing classes to preserve message gaps
          Array.from(cloned.classList).forEach(cls => {
            if (cls.startsWith('space-y-') || cls.startsWith('space-x-') || cls.startsWith('gap-') || cls.startsWith('flex-')) {
              wrapperDiv.classList.add(cls);
            }
          });
          
          while (cloned.firstChild) {
            wrapperDiv.appendChild(cloned.firstChild);
          }
          cloned.appendChild(wrapperDiv);
        }
        
        cloned.style.scrollbarWidth = 'none';
        cloned.style.setProperty('-ms-overflow-style', 'none');
      }
    });

    // Inject styles to hide scrollbars during screenshot generation
    const styleElement = document.createElement("style");
    styleElement.textContent = `
      ::-webkit-scrollbar {
        display: none !important;
      }
      .overflow-y-auto {
        scrollbar-width: none !important;
        -ms-overflow-style: none !important;
      }
    `;
    cloneNode.appendChild(styleElement);

    // Convert all images to base64 in the cloned node
    const images = cloneNode.querySelectorAll("img");
    const imagePromises = Array.from(images).map(async (img) => {
      const base64 = await convertImageToBase64(img);
      img.src = base64;
      
      // Wait for the base64 source to load in the cloned image
      return new Promise<void>((r) => {
        if (img.complete && img.naturalWidth > 0) {
          r();
          return;
        }
        img.onload = () => r();
        img.onerror = () => r();
        setTimeout(r, 2000); // 2 second timeout per image load fallback
      });
    });

    await Promise.all(imagePromises);
    
    // Give a brief moment for layout/rendering to settle
    await new Promise((r) => setTimeout(r, 250));

    // Helper to trigger webp download in addition
    const triggerWebpDownload = async () => {
      try {
        const canvas = await toCanvas(cloneNode);
        const webpDataUrl = canvas.toDataURL('image/webp', quality);
        const webpLink = document.createElement('a');
        webpLink.download = `${fileName}.webp`;
        webpLink.href = webpDataUrl;
        document.body.appendChild(webpLink);
        webpLink.click();
        document.body.removeChild(webpLink);
      } catch (err) {
        console.error('Error generating additional WebP download:', err);
      }
    };

    // PDF Export
    if (activeFormat === 'pdf') {
      const dataUrl = await toPng(cloneNode, { pixelRatio: 2 });
      const width = exportWidth;
      const height = exportHeight;
      
      const pdf = new jsPDF({
        orientation: width > height ? 'landscape' : 'portrait',
        unit: 'px',
        format: [width, height]
      });
      
      pdf.addImage(dataUrl, 'PNG', 0, 0, width, height);
      pdf.save(`${fileName}.pdf`);
      
      // Also download webp
      await triggerWebpDownload();
      return;
    }

    // Image Export (PNG/JPG/WEBP)
    let dataUrl: string;
    let fileExt = activeFormat;

    if (activeFormat === 'webp') {
      const canvas = await toCanvas(cloneNode);
      dataUrl = canvas.toDataURL('image/webp', quality);
    } else if (activeFormat === 'jpeg' || activeFormat === 'jpg') {
      dataUrl = await toJpeg(cloneNode, { quality, backgroundColor: '#ffffff' });
      fileExt = 'jpg';
    } else {
      dataUrl = await toPng(cloneNode, { pixelRatio: 2 });
      fileExt = 'png';
    }

    const link = document.createElement('a');
    link.download = `${fileName}.${fileExt}`;
    link.href = dataUrl;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Also download webp if the main format wasn't webp
    if (activeFormat !== 'webp') {
      await triggerWebpDownload();
    }
  } catch (error) {
    console.error('Error exporting file:', error);
  } finally {
    // Clean up off-screen element
    if (hiddenContainer && document.body.contains(hiddenContainer)) {
      document.body.removeChild(hiddenContainer);
    }
  }
};
