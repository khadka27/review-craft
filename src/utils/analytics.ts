"use client";

import { sendGAEvent } from "@next/third-parties/google";

// Event tracking utility functions
export const trackEvent = (
  eventName: string,
  parameters: Record<string, any> = {}
) => {
  if (typeof window !== "undefined" && process.env.NEXT_PUBLIC_GA_ID) {
    sendGAEvent("event", eventName, parameters);
  }
};

// Specific event tracking functions for ReviewCraft
export const trackReviewGenerated = (platform: string) => {
  trackEvent("review_generated", {
    platform: platform,
    value: 1,
  });
};

export const trackDownload = (platform: string, format: string) => {
  trackEvent("download", {
    platform: platform,
    format: format,
    value: 1,
  });
};

export const trackPlatformSwitch = (
  fromPlatform: string,
  toPlatform: string
) => {
  trackEvent("platform_switch", {
    from_platform: fromPlatform,
    to_platform: toPlatform,
  });
};

export const trackFeatureUse = (feature: string) => {
  trackEvent("feature_use", {
    feature_name: feature,
    value: 1,
  });
};

export const trackPageView = (pageName: string) => {
  trackEvent("page_view", {
    page_name: pageName,
    value: 1,
  });
};

export const trackButtonClick = (buttonName: string, location?: string) => {
  trackEvent("button_click", {
    button_name: buttonName,
    location: location || "unknown",
    value: 1,
  });
};

export const trackFormSubmission = (formName: string) => {
  trackEvent("form_submission", {
    form_name: formName,
    value: 1,
  });
};

export const trackError = (errorType: string, errorMessage?: string) => {
  trackEvent("error", {
    error_type: errorType,
    error_message: errorMessage || "Unknown error",
  });
};
