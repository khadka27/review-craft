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

    // Sync scroll positions from original node to cloned node (general fallback)
    const originalScrollables = Array.from(node.querySelectorAll('.overflow-y-auto, [style*="overflow-y: auto"], [style*="overflow: auto"]'));
    const clonedScrollables = Array.from(cloneNode.querySelectorAll('.overflow-y-auto, [style*="overflow-y: auto"], [style*="overflow: auto"]'));
    
    originalScrollables.forEach((orig, idx) => {
      const cloned = clonedScrollables[idx] as HTMLElement;
      if (cloned) {
        cloned.scrollTop = (orig as HTMLElement).scrollTop;
        cloned.scrollLeft = (orig as HTMLElement).scrollLeft;
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

    // Detect scroll container in original node to check if pagination is needed
    const originalScrollElement = node.querySelector('.overflow-y-auto') as HTMLElement;
    const clonedScrollContainer = cloneNode.querySelector('.overflow-y-auto') as HTMLElement;
    
    const clientHeight = originalScrollElement ? originalScrollElement.clientHeight : 0;
    const scrollHeight = originalScrollElement ? originalScrollElement.scrollHeight : 0;
    // If scroll height is significantly greater than client height, paginated export is required
    const isScrollable = originalScrollElement && scrollHeight > clientHeight + 15;

    // Helper function to capture the image of the clone node at a specific scroll offset
    const capturePage = async (pageIdx: number): Promise<string> => {
      if (clonedScrollContainer && originalScrollElement) {
        const targetScroll = Math.min(pageIdx * clientHeight, scrollHeight - clientHeight);
        clonedScrollContainer.scrollTop = targetScroll;
      }
      
      // Allow scroll offset to settle
      await new Promise((r) => setTimeout(r, 150));
      
      if (activeFormat === 'webp') {
        const canvas = await toCanvas(cloneNode);
        return canvas.toDataURL('image/webp', quality);
      } else if (activeFormat === 'jpeg' || activeFormat === 'jpg') {
        return await toJpeg(cloneNode, { quality, backgroundColor: '#ffffff' });
      } else {
        return await toPng(cloneNode, { pixelRatio: 2 });
      }
    };

    // PDF Export
    if (activeFormat === 'pdf') {
      const pdf = new jsPDF({
        orientation: exportWidth > exportHeight ? 'landscape' : 'portrait',
        unit: 'px',
        format: [exportWidth, exportHeight]
      });

      if (isScrollable) {
        const totalPages = Math.ceil(scrollHeight / clientHeight);
        for (let i = 0; i < totalPages; i++) {
          const targetScroll = Math.min(i * clientHeight, scrollHeight - clientHeight);
          if (clonedScrollContainer) {
            clonedScrollContainer.scrollTop = targetScroll;
          }
          await new Promise((r) => setTimeout(r, 150));
          const dataUrl = await toPng(cloneNode, { pixelRatio: 2 });
          
          if (i > 0) {
            pdf.addPage([exportWidth, exportHeight], exportWidth > exportHeight ? 'landscape' : 'portrait');
          }
          pdf.addImage(dataUrl, 'PNG', 0, 0, exportWidth, exportHeight);
        }
      } else {
        const dataUrl = await toPng(cloneNode, { pixelRatio: 2 });
        pdf.addImage(dataUrl, 'PNG', 0, 0, exportWidth, exportHeight);
      }
      
      pdf.save(`${fileName}.pdf`);
      return;
    }

    // Image Export (PNG/JPG/WEBP)
    if (isScrollable) {
      const totalPages = Math.ceil(scrollHeight / clientHeight);
      for (let i = 0; i < totalPages; i++) {
        const dataUrl = await capturePage(i);
        let fileExt = activeFormat === 'webp' ? 'webp' : (activeFormat === 'jpeg' || activeFormat === 'jpg' ? 'jpg' : 'png');
        
        const link = document.createElement('a');
        link.download = `${fileName}-page-${i + 1}.${fileExt}`;
        link.href = dataUrl;
        link.click();
        
        // Wait 600ms between downloads to prevent chrome from blocking simultaneous downloads
        await new Promise((r) => setTimeout(r, 600));
      }
    } else {
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
      link.click();
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
