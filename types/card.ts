export type BackgroundMode = "solid" | "gradient" | "image";

export interface GradientStops {
  from: string;
  to: string;
  angle: number; // degrees
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
  backgroundImage: string | null; // data URL of uploaded image
  backgroundImageDim: number; // 0–1, dark overlay strength for text readability
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
    hostName: "",
    eventName: "",
    date: "",
    time: "",
    venue: "",
    note: "",
  },
  style: {
    backgroundMode: "gradient",
    backgroundColor: "#1e1b4b",
    gradient: { from: "#7c3aed", to: "#db2777", angle: 135 },
    backgroundImage: null,
    backgroundImageDim: 0.35,
    fontFamily: FONT_OPTIONS[0].value,
    textColor: "#ffffff",
    fontSize: 40,
  },
};