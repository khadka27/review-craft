import { toPng, toJpeg, toCanvas } from 'html-to-image';
import { jsPDF } from 'jspdf';

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

  try {
    const { format = 'png', quality = 0.95 } = options;
    const activeFormat = format.toLowerCase();

    // PDF Export
    if (activeFormat === 'pdf') {
      const dataUrl = await toPng(node, { pixelRatio: 2 });
      const width = node.offsetWidth;
      const height = node.offsetHeight;
      
      const pdf = new jsPDF({
        orientation: width > height ? 'landscape' : 'portrait',
        unit: 'px',
        format: [width, height]
      });
      
      pdf.addImage(dataUrl, 'PNG', 0, 0, width, height);
      pdf.save(`${fileName}.pdf`);
      return;
    }

    // Image Export
    let dataUrl: string;
    let fileExt = activeFormat;

    if (activeFormat === 'webp') {
      const canvas = await toCanvas(node);
      dataUrl = canvas.toDataURL('image/webp', quality);
    } else if (activeFormat === 'jpeg' || activeFormat === 'jpg') {
      dataUrl = await toJpeg(node, { quality, backgroundColor: '#ffffff' });
      fileExt = 'jpg';
    } else {
      dataUrl = await toPng(node, { pixelRatio: 2 });
      fileExt = 'png';
    }

    const link = document.createElement('a');
    link.download = `${fileName}.${fileExt}`;
    link.href = dataUrl;
    link.click();
  } catch (error) {
    console.error('Error exporting file:', error);
  }
};
