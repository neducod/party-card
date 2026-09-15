"use client";

import { useRef } from "react";
import { useCardState } from "@/hooks/useCardState";
import { ControlsSidebar } from "@/components/ControlsSidebar";
import { CardPreview } from "@/components/CardPreview";
import { ExportBar } from "@/components/ExportBar";

export default function Home() {
  const cardState = useCardState();
  const previewRef = useRef<HTMLDivElement>(null);

  return (
    <main className="flex h-screen w-full flex-col md:flex-row">
      <ControlsSidebar
        state={cardState.state}
        updateDetails={cardState.updateDetails}
        updateStyle={cardState.updateStyle}
        updateGradient={cardState.updateGradient}
        reset={cardState.reset}
      />

      <section className="flex flex-1 flex-col items-center justify-center gap-6 bg-neutral-100 p-8">
        <CardPreview ref={previewRef} state={cardState.state} />
        <ExportBar targetRef={previewRef} fileName={cardState.state.details.eventName || "invitation"} />
      </section>
    </main>
  );
}