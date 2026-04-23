import { toPng, toJpeg } from 'html-to-image';

export const downloadComponentAsImage = async (
  elementId: string, 
  fileName: string = 'screenshot',
  options: { format?: 'png' | 'jpeg'; quality?: number } = {}
) => {
  const node = document.getElementById(elementId);
  if (!node) {
    console.error(`Element with id ${elementId} not found`);
    return;
  }

  try {
    const { format = 'png', quality = 0.95 } = options;
    let dataUrl: string;

    if (format === 'jpeg') {
      dataUrl = await toJpeg(node, { quality, backgroundColor: '#ffffff' });
    } else {
      dataUrl = await toPng(node, { pixelRatio: 2 }); // High quality PNG
    }

    const link = document.createElement('a');
    link.download = `${fileName}.${format}`;
    link.href = dataUrl;
    link.click();
  } catch (error) {
    console.error('Error exporting image:', error);
  }
};
