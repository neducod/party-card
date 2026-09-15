"use client";

import { toPng, toJpeg } from "html-to-image";

export type ExportFormat = "png" | "jpeg";

interface ExportOptions {
  format?: ExportFormat;
  quality?: number;
  pixelRatio?: number;
  fileName?: string;
}

async function renderToDataUrl(
  node: HTMLElement,
  { format = "png", quality = 0.95, pixelRatio = 3 }: ExportOptions
): Promise<string> {
  const options = {
    quality,
    pixelRatio,
    cacheBust: true,
    // 1. Skip font inlining to prevent security exceptions on external stylesheets
    skipFonts: true,
    // 2. Filter out cross-origin <link> stylesheets that fail CORS checks
    filter: (element: HTMLElement) => {
      if (
        element.tagName === "LINK" &&
        (element as HTMLLinkElement).rel === "stylesheet"
      ) {
        const href = (element as HTMLLinkElement).href;
        // Keep internal styles; exclude cross-origin stylesheet URLs
        if (typeof window !== "undefined") {
          return href.startsWith(window.location.origin);
        }
      }
      return true;
    },
  };

  return format === "jpeg" ? toJpeg(node, options) : toPng(node, options);
}

export async function downloadCard(node: HTMLElement, opts: ExportOptions = {}) {
  const { format = "png", fileName = "invitation-card" } = opts;
  const dataUrl = await renderToDataUrl(node, opts);

  const link = document.createElement("a");
  link.download = `${fileName}.${format === "jpeg" ? "jpg" : "png"}`;
  link.href = dataUrl;
  link.click();
}

export function canUseWebShare(): boolean {
  // Prevent SSR crashes during build step on Vercel
  if (typeof window === "undefined" || typeof navigator === "undefined") {
    return false;
  }
  return !!navigator.share && !!navigator.canShare;
}

export async function shareCard(node: HTMLElement, opts: ExportOptions = {}) {
  const { format = "png", fileName = "invitation-card" } = opts;
  const dataUrl = await renderToDataUrl(node, opts);
  const blob = await (await fetch(dataUrl)).blob();
  const file = new File([blob], `${fileName}.${format === "jpeg" ? "jpg" : "png"}`, {
    type: blob.type,
  });

  if (canUseWebShare() && navigator.canShare({ files: [file] })) {
    await navigator.share({
      files: [file],
      title: "You're Invited!",
      text: "Check out this invitation.",
    });
    return true;
  }

  await downloadCard(node, opts);
  return false;
}