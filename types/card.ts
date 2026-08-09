export type BackgroundMode = "solid" | "gradient" | "image";


export interface GradientStops {
  from: string;
  to: string;
  angle: number;
}

export interface CardDetails {
  hostName: string;
  eventName: string;
  date?: string;
  time?: string;
  venue?: string;
  note?: string;
}

export interface CardStyle {
  backgroundMode: BackgroundMode;
  backgroundColor: string;
  gradient: GradientStops;
  fontFamily: string;
  textColor: string;
  fontSize: number;
}

export interface CardState {
  details: CardDetails;
  style: CardStyle;
}

export const FONT_OPTIONS = [
  { label: "Playfair Display", value: "'Playfair Display', serif" },
  { label: "Poppins", value: "'Poppins', sans-serif" },
  { label: "Great Vibes", value: "'Great Vibes', cursive" },
  { label: "Inter", value: "'Inter', sans-serif" },
  { label: "Space Mono", value: "'Space Mono', monospace" },
] as const;

export const DEFAULT_CARD_STATE: CardState = {
  details: {
    hostName: "Alex",
    eventName: "Birthday Party",
    date: "August 20, 2026",
    time: "7:00 PM",
    venue: "The Garden Terrace",
    note: "Come ready to dance!",
  },
  style: {
    backgroundMode: "gradient",
    backgroundColor: "#1e1b4b",
    gradient: { from: "#7c3aed", to: "#db2777", angle: 135 },
    fontFamily: FONT_OPTIONS[0].value,
    textColor: "#ffffff",
    fontSize: 40,
  },
};
export interface Cardstyle {
    backgroundMode: BackgroundMode;
    backgroundColor: string;
    gradient: GradientStops;
    imageUrl?: string;        // Base64 data URL or image path
    overlayOpacity: number;   // 0.1 to 1.0 for blending
    fontFamily: string;
    textColor: string;
    fontSize: number;
}