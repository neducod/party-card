"use client";

import { RefObject, useState } from "react";
import { canUseWebShare, downloadCard, shareCard, ExportFormat } from "@/lib/export";

interface Props {
  targetRef: RefObject<HTMLDivElement>;
  fileName?: string;
}

export function ExportBar({ targetRef, fileName = "invitation-card" }: Props) {
  const [format, setFormat] = useState<ExportFormat>("png");
  const [busy, setBusy] = useState<"download" | "share" | null>(null);

  const withNode = async (action: (node: HTMLElement) => Promise<void>, kind: "download" | "share") => {
    const node = targetRef.current;
    if (!node) return;
    try {
      setBusy(kind);
      await action(node);
    } catch (err) {
      console.error("Export failed:", err);
    } finally {
      setBusy(null);
    }
  };

  return (
    <div className="flex w-full max-w-md flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex gap-2">
        {(["png", "jpeg"] as const).map((f) => (
          <button
            key={f}
            onClick={() => setFormat(f)}
            className={`rounded-md border px-3 py-1.5 text-xs uppercase ${
              format === f
                ? "border-neutral-900 bg-neutral-900 text-white"
                : "border-neutral-300 text-neutral-600"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="flex gap-2">
        {canUseWebShare() && (
          <button
            disabled={busy !== null}
            onClick={() => withNode((n) => shareCard(n, { format, fileName }).then(() => {}), "share")}
            className="rounded-lg bg-neutral-900 px-4 py-2 text-sm font-medium text-white disabled:opacity-50"
          >
            {busy === "share" ? "Sharing…" : "Share"}
          </button>
        )}
        <button
          disabled={busy !== null}
          onClick={() => withNode((n) => downloadCard(n, { format, fileName }), "download")}
          className="rounded-lg border border-neutral-900 px-4 py-2 text-sm font-medium text-neutral-900 disabled:opacity-50"
        >
          {busy === "download" ? "Preparing…" : "Download"}
        </button>
      </div>
    </div>
  );
}