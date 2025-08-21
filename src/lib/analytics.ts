// Google Analytics 4 setup
declare global {
  interface Window {
    gtag: (command: string, targetId: string, config?: any) => void;
  }
}

export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID || "";

// Track page views
export const pageview = (url: string) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("config", GA_TRACKING_ID, {
      page_location: url,
    });
  }
};

// Track events
export const event = ({
  action,
  category,
  label,
  value,
}: {
  action: string;
  category: string;
  label?: string;
  value?: number;
}) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Track review generations
export const trackReviewGeneration = (platform: string) => {
  event({
    action: "generate_review",
    category: "engagement",
    label: platform,
  });
};

// Track downloads
export const trackDownload = (platform: string, format: string) => {
  event({
    action: "download_review",
    category: "conversion",
    label: `${platform}_${format}`,
  });
};

// Track copies
export const trackCopy = (platform: string) => {
  event({
    action: "copy_review",
    category: "engagement",
    label: platform,
  });
};
