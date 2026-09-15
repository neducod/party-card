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
  const [justDownloaded, setJustDownloaded] = useState(false);

  const withNode = async (action: (node: HTMLElement) => Promise<void>, kind: "download" | "share") => {
    const node = targetRef.current;
    if (!node) return;
    try {
      setBusy(kind);
      await action(node);
      if (kind === "download") {
        setJustDownloaded(true);
        setTimeout(() => setJustDownloaded(false), 2000);
      }
    } catch (err) {
      console.error("Export failed:", err);
    } finally {
      setBusy(null);
    }
  };

  return (
    <div className="flex w-full max-w-md flex-col gap-3">
      {/* Format Selector */}
      <div className="flex gap-2 self-center">
        {(["png", "jpeg"] as const).map((f) => (
          <button
            key={f}
            onClick={() => setFormat(f)}
            className={`rounded-md border px-3 py-1.5 text-xs font-medium uppercase transition ${
              format === f
                ? "border-neutral-900 bg-neutral-900 text-white"
                : "border-neutral-300 bg-white text-neutral-600 hover:border-neutral-400"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Action Buttons */}
      <div className="flex gap-2 sm:flex-row">
        <button
          disabled={busy !== null}
          onClick={() => withNode((n) => downloadCard(n, { format, fileName }), "download")}
          className="flex-1 rounded-lg bg-red-600 px-4 py-3 text-sm font-semibold text-black transition hover:bg-red-700 disabled:opacity-50"
        >
          {busy === "download" ? "Preparing…" : justDownloaded ? "Downloaded ✓" : "Download Image"}
        </button>

        {canUseWebShare() && (
          <button
            disabled={busy !== null}
            onClick={() => withNode((n) => shareCard(n, { format, fileName }).then(() => {}), "share")}
            className="flex-1 rounded-lg border border-neutral-900 bg-white px-4 py-3 text-sm font-semibold text-neutral-900 transition hover:bg-neutral-100 disabled:opacity-50"
          >
            {busy === "share" ? "Sharing…" : "Share"}
          </button>
        )}
      </div>
    </div>
  );
}