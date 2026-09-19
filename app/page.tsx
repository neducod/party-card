"use client";

import { useRef } from "react";
import { useCardState } from "@/hooks/useCardState";
import { ControlsSidebar } from "@/components/ControlsSidebar";
import { CardPreview } from "@/components/CardPreview";
import { ExportBar } from "@/components/ExportBar";

export default function Home() {
  const cardState = useCardState();
  const previewRef = useRef<HTMLDivElement>(null);
//flex h-screen w-full flex-col md:flex-row
  return (
    <main className="flex min-h-screen w-full flex-col md:h-screen md:flex-row bg-white">
      <ControlsSidebar
        state={cardState.state}
        updateDetails={cardState.updateDetails}
        updateStyle={cardState.updateStyle}
        updateGradient={cardState.updateGradient}
        reset={cardState.reset}
      />
      {/*flex flex-1 flex-col items-center justify-center gap-6 bg-neutral-100 p-8  */}
      <section className="flex flex-1 flex-col items-center justify-start gap-8 bg-neutral-100 p-4 py-6 md:justify-center md:p-8">
        <CardPreview ref={previewRef} state={cardState.state} />
        <ExportBar targetRef={previewRef as React.RefObject<HTMLDivElement>} fileName={cardState.state.details.eventName || "invitation"} 
/>
        {/* <ExportBar targetRef={previewRef} fileName={cardState.state.details.eventName || "invitation"} /> */}
      </section>
    </main>
  );
}