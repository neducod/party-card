export interface PatternOption {
    id: string;
    label: string;
    svgDataUrl: string;
  }
  
  export const PATTERN_OPTIONS: PatternOption[] = [
    {
      id: "none",
      label: "None",
      svgDataUrl: "",
    },
    {
      id: "dots",
      label: "Polka Dots",
      svgDataUrl: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><circle cx="3" cy="3" r="1.5" fill="%23ffffff"/></svg>`,
    },
    {
      id: "grid",
      label: "Geometric Grid",
      svgDataUrl: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30"><path d="M 30 0 L 0 0 0 30" fill="none" stroke="%23ffffff" stroke-width="0.8"/></svg>`,
    },
    {
      id: "diagonal-stripes",
      label: "Subtle Stripes",
      svgDataUrl: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path d="M0 20L20 0M0 0L20 20" stroke="%23ffffff" stroke-width="0.5" fill="none"/></svg>`,
    },
    {
      id: "border-frame",
      label: "Decorative Border",
      svgDataUrl: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%"><rect x="12" y="12" width="calc(100% - 24px)" height="calc(100% - 24px)" fill="none" stroke="%23ffffff" stroke-width="2" stroke-dasharray="6,4" rx="12"/></svg>`,
    },
  ];