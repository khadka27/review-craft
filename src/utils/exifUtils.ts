import piexif from "piexifjs";

const US_LOCATIONS = [
  { city: "New York, NY", lat: 40.7128, lng: -74.0060 },
  { city: "Los Angeles, CA", lat: 34.0522, lng: -118.2437 },
  { city: "Chicago, IL", lat: 41.8781, lng: -87.6298 },
  { city: "Houston, TX", lat: 29.7604, lng: -95.3698 },
  { city: "Phoenix, AZ", lat: 33.4484, lng: -112.0740 },
  { city: "Philadelphia, PA", lat: 39.9526, lng: -75.1652 },
  { city: "San Antonio, TX", lat: 29.4241, lng: -98.4936 },
  { city: "San Diego, CA", lat: 32.7157, lng: -117.1611 },
  { city: "Dallas, TX", lat: 32.7767, lng: -96.7970 },
  { city: "San Jose, CA", lat: 37.3382, lng: -121.8863 },
  { city: "Austin, TX", lat: 30.2672, lng: -97.7431 },
  { city: "Jacksonville, FL", lat: 30.3322, lng: -81.6557 },
  { city: "San Francisco, CA", lat: 37.7749, lng: -122.4194 },
  { city: "Seattle, WA", lat: 47.6062, lng: -122.3321 },
  { city: "Denver, CO", lat: 39.7392, lng: -104.9903 },
  { city: "Miami, FL", lat: 25.7617, lng: -80.1918 },
  { city: "Boston, MA", lat: 42.3601, lng: -71.0589 },
  { city: "Las Vegas, NV", lat: 36.1716, lng: -115.1398 },
  { city: "Washington, DC", lat: 38.9072, lng: -77.0369 },
  { city: "Atlanta, GA", lat: 33.7490, lng: -84.3880 }
];

const MOBILE_DEVICES = [
  { make: "Apple", model: "iPhone 15 Pro Max" },
  { make: "Apple", model: "iPhone 15 Pro" },
  { make: "Apple", model: "iPhone 14 Pro" },
  { make: "Apple", model: "iPhone 13" },
  { make: "Samsung", model: "Galaxy S24 Ultra" },
  { make: "Samsung", model: "Galaxy S23 Ultra" },
  { make: "Samsung", model: "Galaxy S22" },
  { make: "Samsung", model: "Galaxy Z Fold 5" },
  { make: "Google", model: "Pixel 8 Pro" },
  { make: "Google", model: "Pixel 7 Pro" },
  { make: "Google", model: "Pixel 7a" },
  { make: "OnePlus", model: "OnePlus 12" },
  { make: "Motorola", model: "Edge 40 Pro" }
];

const LAPTOP_DEVICES = [
  // Ultrabooks / Premium
  { make: "Apple", model: "MacBook Air M3" },
  { make: "Apple", model: "MacBook Pro 14" },
  { make: "Dell", model: "XPS 13 Ultrabook" },
  { make: "HP", model: "Spectre x360 Convertible" },
  { make: "ASUS", model: "Zenbook 14 OLED" },
  { make: "Lenovo", model: "Yoga Slim 7i" },
  
  // Business / Productivity
  { make: "Lenovo", model: "ThinkPad X1 Carbon Gen 11" },
  { make: "Lenovo", model: "ThinkPad T14s Gen 4" },
  { make: "Dell", model: "Latitude 7440" },
  { make: "HP", model: "EliteBook 840 G10" },
  
  // Gaming Laptops
  { make: "ASUS", model: "ROG Zephyrus G14 Gaming" },
  { make: "ASUS", model: "TUF Gaming A15" },
  { make: "Razer", model: "Blade 16 Gaming Laptop" },
  { make: "Lenovo", model: "Legion Pro 5i" },
  { make: "MSI", model: "Raider GE78 HX" },
  { make: "Acer", model: "Predator Helios 16" },
  
  // Creator / High Performance Workstations
  { make: "Apple", model: "MacBook Pro 16 M3 Max" },
  { make: "Dell", model: "Precision 5680 Workstation" },
  { make: "HP", model: "ZBook Studio G10" },
  { make: "ASUS", model: "ProArt Studiobook 16" },
  { make: "Gigabyte", model: "AERO 16 Creator" }
];

/**
 * Returns a random device based on screen mode (mobile vs. laptop).
 */
export const getRandomDevice = (isMobile: boolean): { make: string; model: string } => {
  const deviceList = isMobile ? MOBILE_DEVICES : LAPTOP_DEVICES;
  return deviceList[Math.floor(Math.random() * deviceList.length)];
};

/**
 * Generates binary EXIF metadata bytes.
 */
export const generateExifBytes = (device: { make: string; model: string }): Uint8Array => {
  try {
    const location = US_LOCATIONS[Math.floor(Math.random() * US_LOCATIONS.length)];

    const zeroth: any = {};
    const gps: any = {};

    // 0th directory (Basic device tags)
    zeroth[piexif.ImageIFD.Make] = device.make;
    zeroth[piexif.ImageIFD.Model] = device.model;
    zeroth[piexif.ImageIFD.Software] = "ReviewCraft";
    zeroth[piexif.ImageIFD.DateTime] = new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '').replace(/-/g, ':');

    // GPS directory (US coordinates)
    const lat = location.lat;
    const lng = location.lng;

    gps[piexif.GPSIFD.GPSLatitudeRef] = lat < 0 ? "S" : "N";
    gps[piexif.GPSIFD.GPSLatitude] = piexif.GPSHelper.degToDmsRational(lat);
    gps[piexif.GPSIFD.GPSLongitudeRef] = lng < 0 ? "W" : "E";
    gps[piexif.GPSIFD.GPSLongitude] = piexif.GPSHelper.degToDmsRational(lng);
    gps[piexif.GPSIFD.GPSVersionID] = [2, 2, 0, 0];

    const exifObj = {
      "0th": zeroth,
      "GPS": gps
    };

    const exifString = piexif.dump(exifObj);
    const len = exifString.length;
    const bytes = new Uint8Array(len);
    for (let i = 0; i < len; i++) {
      bytes[i] = exifString.charCodeAt(i);
    }
    return bytes;
  } catch (error) {
    console.error("Error generating EXIF bytes:", error);
    return new Uint8Array();
  }
};

/**
 * Injects EXIF bytes into a JPEG data URL.
 */
export const injectExifToJpeg = (jpegDataUrl: string, exifBytes: Uint8Array): string => {
  try {
    let exifBinaryString = "";
    const len = exifBytes.length;
    for (let i = 0; i < len; i++) {
      exifBinaryString += String.fromCharCode(exifBytes[i]);
    }
    return piexif.insert(exifBinaryString, jpegDataUrl);
  } catch (error) {
    console.error("Failed to inject EXIF to JPEG:", error);
    return jpegDataUrl;
  }
};

/**
 * CRC-32 Lookup Table and Generator for PNG chunk calculation.
 */
const crcTable = (() => {
  let c;
  const table = [];
  for (let n = 0; n < 256; n++) {
    c = n;
    for (let k = 0; k < 8; k++) {
      c = ((c & 1) ? (0xEDB88320 ^ (c >>> 1)) : (c >>> 1));
    }
    table[n] = c;
  }
  return table;
})();

const calculateCrc32 = (bytes: Uint8Array): number => {
  let crc = 0 ^ -1;
  const len = bytes.length;
  for (let i = 0; i < len; i++) {
    crc = (crc >>> 8) ^ crcTable[(crc ^ bytes[i]) & 0xFF];
  }
  return (crc ^ -1) >>> 0;
};

const base64ToUint8Array = (base64: string): Uint8Array => {
  const binaryString = atob(base64.split(",")[1] || base64);
  const len = binaryString.length;
  const bytes = new Uint8Array(len);
  for (let i = 0; i < len; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }
  return bytes;
};

const uint8ArrayToBase64 = (bytes: Uint8Array, mimeType: string): string => {
  let binary = "";
  const len = bytes.byteLength;
  for (let i = 0; i < len; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return `data:${mimeType};base64,` + btoa(binary);
};

/**
 * Injects EXIF bytes into a PNG data URL using the "eXIf" chunk.
 */
export const injectExifToPng = (pngDataUrl: string, exifBytes: Uint8Array): string => {
  try {
    const pngBytes = base64ToUint8Array(pngDataUrl);
    
    // Check PNG signature
    if (
      pngBytes[0] !== 0x89 ||
      pngBytes[1] !== 0x50 ||
      pngBytes[2] !== 0x4E ||
      pngBytes[3] !== 0x47
    ) {
      console.warn("Invalid PNG file signature, skipping EXIF injection");
      return pngDataUrl;
    }

    // Strip JPEG APP1 "Exif\0\0" header to get raw TIFF header for PNG
    let startOffset = 0;
    if (
      exifBytes.length > 6 &&
      exifBytes[0] === 0x45 && // 'E'
      exifBytes[1] === 0x78 && // 'x'
      exifBytes[2] === 0x69 && // 'i'
      exifBytes[3] === 0x66 && // 'f'
      exifBytes[4] === 0x00 &&
      exifBytes[5] === 0x00
    ) {
      startOffset = 6;
    }
    const rawTiffBytes = exifBytes.subarray(startOffset);

    const exifLen = rawTiffBytes.length;
    // Chunk size: 4 bytes length + 4 bytes type + content + 4 bytes CRC
    const chunkBytes = new Uint8Array(4 + 4 + exifLen + 4);

    // 1. Write Length (4 bytes, big endian)
    chunkBytes[0] = (exifLen >>> 24) & 0xff;
    chunkBytes[1] = (exifLen >>> 16) & 0xff;
    chunkBytes[2] = (exifLen >>> 8) & 0xff;
    chunkBytes[3] = exifLen & 0xff;

    // 2. Write Type ("eXIf" chunk)
    chunkBytes[4] = 101; // 'e'
    chunkBytes[5] = 88;  // 'X'
    chunkBytes[6] = 73;  // 'i'
    chunkBytes[7] = 102; // 'f'

    // 3. Write Data
    chunkBytes.set(rawTiffBytes, 8);

    // 4. Calculate and write CRC (Type + Data)
    const typeAndData = chunkBytes.subarray(4, 8 + exifLen);
    const crcValue = calculateCrc32(typeAndData);
    chunkBytes[8 + exifLen] = (crcValue >>> 24) & 0xff;
    chunkBytes[8 + exifLen + 1] = (crcValue >>> 16) & 0xff;
    chunkBytes[8 + exifLen + 2] = (crcValue >>> 8) & 0xff;
    chunkBytes[8 + exifLen + 3] = crcValue & 0xff;

    // Insert immediately after IHDR chunk (Offset 8, IHDR chunk size = 25 bytes)
    const insertIndex = 33;
    const newPng = new Uint8Array(pngBytes.length + chunkBytes.length);
    newPng.set(pngBytes.subarray(0, insertIndex), 0);
    newPng.set(chunkBytes, insertIndex);
    newPng.set(pngBytes.subarray(insertIndex), insertIndex + chunkBytes.length);

    console.log("EXIF: Successfully inserted eXIf chunk into PNG!");
    return uint8ArrayToBase64(newPng, "image/png");
  } catch (error) {
    console.error("Failed to inject EXIF to PNG:", error);
    return pngDataUrl;
  }
};

/**
 * Injects EXIF bytes into a WebP data URL by appending an "EXIF" chunk and updating the RIFF file size.
 */
export const injectExifToWebP = (webpDataUrl: string, exifBytes: Uint8Array): string => {
  try {
    const webpBytes = base64ToUint8Array(webpDataUrl);

    // Verify RIFF signature
    if (
      webpBytes[0] !== 0x52 || // 'R'
      webpBytes[1] !== 0x49 || // 'I'
      webpBytes[2] !== 0x46 || // 'F'
      webpBytes[3] !== 0x46    // 'F'
    ) {
      console.warn("Invalid WebP file signature, skipping EXIF injection");
      return webpDataUrl;
    }

    // Strip JPEG APP1 "Exif\0\0" header to get raw TIFF header for WebP
    let startOffset = 0;
    if (
      exifBytes.length > 6 &&
      exifBytes[0] === 0x45 && // 'E'
      exifBytes[1] === 0x78 && // 'x'
      exifBytes[2] === 0x69 && // 'i'
      exifBytes[3] === 0x66 && // 'f'
      exifBytes[4] === 0x00 &&
      exifBytes[5] === 0x00
    ) {
      startOffset = 6;
    }
    const rawTiffBytes = exifBytes.subarray(startOffset);

    const exifLen = rawTiffBytes.length;
    const padding = exifLen % 2 === 1 ? 1 : 0;
    const chunkLen = 4 + 4 + exifLen + padding; // Tag + Size + Data + Padding

    const newWebp = new Uint8Array(webpBytes.length + chunkLen);
    
    // Copy original WebP data
    newWebp.set(webpBytes, 0);

    // Write EXIF chunk at the end
    const insertIndex = webpBytes.length;

    // 1. Tag ("EXIF")
    newWebp[insertIndex] = 69;     // 'E'
    newWebp[insertIndex + 1] = 88; // 'X'
    newWebp[insertIndex + 2] = 73; // 'I'
    newWebp[insertIndex + 3] = 70; // 'F'

    // 2. Size (4 bytes, little endian)
    newWebp[insertIndex + 4] = exifLen & 0xff;
    newWebp[insertIndex + 5] = (exifLen >>> 8) & 0xff;
    newWebp[insertIndex + 6] = (exifLen >>> 16) & 0xff;
    newWebp[insertIndex + 7] = (exifLen >>> 24) & 0xff;

    // 3. Payload
    newWebp.set(rawTiffBytes, insertIndex + 8);

    // 4. Padding byte
    if (padding > 0) {
      newWebp[insertIndex + 8 + exifLen] = 0;
    }

    // 5. Update RIFF size in header (bytes 4-7, little-endian)
    const newFileSize = newWebp.length - 8;
    newWebp[4] = newFileSize & 0xff;
    newWebp[5] = (newFileSize >>> 8) & 0xff;
    newWebp[6] = (newFileSize >>> 16) & 0xff;
    newWebp[7] = (newFileSize >>> 24) & 0xff;

    console.log("EXIF: Successfully appended EXIF chunk to WebP!");
    return uint8ArrayToBase64(newWebp, "image/webp");
  } catch (error) {
    console.error("Failed to inject EXIF to WebP:", error);
    return webpDataUrl;
  }
};
