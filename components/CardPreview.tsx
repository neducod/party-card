"use client";

import { forwardRef } from "react";
import { CardState } from "@/types/card";

interface CardPreviewProps {
  state: CardState;
}

export const CardPreview = forwardRef<HTMLDivElement, CardPreviewProps>(
  function CardPreview({ state }, ref) {
    const { details, style } = state;

    const background =
      style.backgroundMode === "gradient"
        ? `linear-gradient(${style.gradient.angle}deg, ${style.gradient.from}, ${style.gradient.to})`
        : style.backgroundColor;

    return (
      <div
        ref={ref}
        className="relative flex aspect-[3/4] w-full max-w-md flex-col items-center justify-center overflow-hidden rounded-2xl px-8 py-12 text-center shadow-2xl"
        style={{
          background,
          color: style.textColor,
          fontFamily: style.fontFamily,
        }}
      >
        <p className="tracking-wide opacity-90" style={{ fontSize: style.fontSize * 0.35 }}>
          I am inviting you
        </p>

        <p className="mt-2 tracking-wide opacity-90" style={{ fontSize: style.fontSize * 0.35 }}>
          to my
        </p>

        <h1 className="mt-3 font-bold leading-tight" style={{ fontSize: style.fontSize }}>
          {details.eventName || "Event Name"}
        </h1>

        <p className="mt-4 text-sm opacity-90" style={{ fontSize: style.fontSize * 0.32 }}>
          Hosted by {details.hostName || "Host Name"}
        </p>

        {(details.date || details.time || details.venue) && (
          <div
            className="mt-6 space-y-1 border-t border-current/30 pt-4 text-sm opacity-90"
            style={{ fontSize: style.fontSize * 0.3 }}
          >
            {details.date && <p>{details.date}</p>}
            {details.time && <p>{details.time}</p>}
            {details.venue && <p>{details.venue}</p>}
          </div>
        )}

        {details.note && (
          <p className="mt-6 max-w-xs text-sm italic opacity-80" style={{ fontSize: style.fontSize * 0.28 }}>
            {details.note}
          </p>
        )}
      </div>
    );
  }
);