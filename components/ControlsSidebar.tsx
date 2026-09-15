"use client";

import { useRef, useState, type ReactNode } from "react";
import { FONT_OPTIONS } from "@/types/card";
import { UseCardStateReturn } from "@/hooks/useCardState";
import { readImageFile } from "@/lib/image";

type Props = Pick<UseCardStateReturn, "state" | "updateDetails" | "updateStyle" | "updateGradient" | "reset">;

export function ControlsSidebar({ state, updateDetails, updateStyle, updateGradient, reset }: Props) {
  const { details, style } = state;
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [imageError, setImageError] = useState<string | null>(null);

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      setImageError(null);
      const dataUrl = await readImageFile(file);
      updateStyle({ backgroundMode: "image", backgroundImage: dataUrl });
    } catch (err) {
      setImageError(err instanceof Error ? err.message : "Upload failed.");
    } finally {
      e.target.value = ""; // allow re-uploading the same file
    }
  };

  const removeImage = () => {
    updateStyle({ backgroundImage: null, backgroundMode: "gradient" });
  };

  return (
    <aside className="flex w-full max-w-sm flex-col gap-6 overflow-y-auto border-r border-neutral-200 bg-white p-6">
      <div className="flex flex-col p-4">
          <h1 className="text-xl font-extrabold text-[#E97451] ">Ink and Paint</h1>
          <p className="text-sm text-gray-500">Create your customize party invitation card</p>
      </div>
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">Customize</h2>
        <button onClick={reset} className="text-xs text-neutral-500 underline hover:text-neutral-800 cursor-pointer">
          Reset
        </button>
      </div>

      {/* Text fields */}
      <section className="space-y-3">
        <h3 className="text-sm font-medium text-neutral-700">Invitation Details</h3>

        <Field label="Host Name">
          <input
            type="text"
            value={details.hostName}
            onChange={(e) => updateDetails({ hostName: e.target.value })}
            className="input text-black"
            placeholder="Alex"
          />
        </Field>

        <Field label="Event Name">
          <input
            type="text"
            value={details.eventName}
            onChange={(e) => updateDetails({ eventName: e.target.value })}
            className="input text-black"
            placeholder="Birthday Party"
          />
        </Field>

        <Field label="Date">
          <input
            type="text"
            value={details.date ?? ""}
            onChange={(e) => updateDetails({ date: e.target.value })}
            className="input text-black"
            placeholder="August 20, 2026"
          />
        </Field>

        <Field label="Time">
          <input
            type="text"
            value={details.time ?? ""}
            onChange={(e) => updateDetails({ time: e.target.value })}
            className="input text-black"
            placeholder="7:00 PM"
          />
        </Field>

        <Field label="Venue">
          <input
            type="text"
            value={details.venue ?? ""}
            onChange={(e) => updateDetails({ venue: e.target.value })}
            className="input text-black"
            placeholder="The Garden Terrace"
          />
        </Field>

        <Field label="Custom Note">
          <textarea
            value={details.note ?? ""}
            onChange={(e) => updateDetails({ note: e.target.value })}
            className="input min-h-[70px] resize-none text-black"
            placeholder="Come ready to dance!"
          />
        </Field>
      </section>

      {/* Background */}
      <section className="space-y-3">
        <h3 className="text-sm font-medium text-neutral-700">Background</h3>

        <div className="flex gap-2">
          {(["solid", "gradient", "image"] as const).map((mode) => (
            <button
              key={mode}
              onClick={() => {
                if (mode === "image" && !style.backgroundImage) {
                  fileInputRef.current?.click();
                  return;
                }
                updateStyle({ backgroundMode: mode });
              }}
              className={`flex-1 rounded-lg border px-3 py-1.5 text-sm capitalize ${
                style.backgroundMode === mode
                  ? "border-neutral-900 bg-neutral-900 text-white"
                  : "border-neutral-300 text-neutral-600"
              }`}
            >
              {mode}
            </button>
          ))}
        </div>

        {style.backgroundMode === "solid" && (
          <Field label="Color">
            <input
              type="color"
              value={style.backgroundColor}
              onChange={(e) => updateStyle({ backgroundColor: e.target.value })}
              className="h-10 w-full cursor-pointer rounded-md border border-neutral-300"
            />
          </Field>
        )}

        {style.backgroundMode === "gradient" && (
          <div className="grid grid-cols-2 gap-3">
            <Field label="From">
              <input
                type="color"
                value={style.gradient.from}
                onChange={(e) => updateGradient({ from: e.target.value })}
                className="h-10 w-full cursor-pointer rounded-md border border-neutral-300"
              />
            </Field>
            <Field label="To">
              <input
                type="color"
                value={style.gradient.to}
                onChange={(e) => updateGradient({ to: e.target.value })}
                className="h-10 w-full cursor-pointer rounded-md border border-neutral-300"
              />
            </Field>
            <Field label={`Angle (${style.gradient.angle}°)`}>
              <input
                type="range"
                min={0}
                max={360}
                value={style.gradient.angle}
                onChange={(e) => updateGradient({ angle: Number(e.target.value) })}
                className="w-full"
              />
            </Field>
          </div>
        )}

        {style.backgroundMode === "image" && (
          <div className="space-y-3">
            {style.backgroundImage ? (
              <div className="space-y-2">
                <img
                  src={style.backgroundImage}
                  alt="Uploaded background preview"
                  className="h-24 w-full rounded-md object-cover"
                />
                <div className="flex gap-2">
                  <button
                    onClick={() => fileInputRef.current?.click()}
                    className="flex-1 rounded-md border border-neutral-300 px-3 py-1.5 text-xs text-neutral-700 hover:border-neutral-900"
                  >
                    Replace image
                  </button>
                  <button
                    onClick={removeImage}
                    className="flex-1 rounded-md border border-red-300 px-3 py-1.5 text-xs text-red-600 hover:border-red-600"
                  >
                    Remove
                  </button>
                </div>
                <Field label={`Dim overlay (${Math.round(style.backgroundImageDim * 100)}%)`}>
                  <input
                    type="range"
                    min={0}
                    max={0.8}
                    step={0.05}
                    value={style.backgroundImageDim}
                    onChange={(e) => updateStyle({ backgroundImageDim: Number(e.target.value) })}
                    className="w-full"
                  />
                </Field>
              </div>
            ) : (
              <button
                onClick={() => fileInputRef.current?.click()}
                className="w-full rounded-lg border-2 border-dashed border-neutral-300 px-3 py-6 text-sm text-neutral-500 hover:border-neutral-900 hover:text-neutral-900"
              >
                Click to upload an image
              </button>
            )}
            {imageError && <p className="text-xs text-red-600">{imageError}</p>}
          </div>
        )}

        {/* Hidden native file input, triggered by the buttons above */}
        <input
          ref={fileInputRef}
          type="file"
          accept="image/png,image/jpeg,image/webp,image/gif"
          className="hidden"
          onChange={handleImageUpload}
        />
      </section>

      {/* Typography */}
      <section className="space-y-3">
        <h3 className="text-sm font-medium text-neutral-700">Typography</h3>

        <Field label="Font Family">
          <select
            value={style.fontFamily}
            onChange={(e) => updateStyle({ fontFamily: e.target.value })}
            className="input"
          >
            {FONT_OPTIONS.map((f) => (
              <option key={f.value} value={f.value}>
                {f.label}
              </option>
            ))}
          </select>
        </Field>

        <Field label="Text Color">
          <input
            type="color"
            value={style.textColor}
            onChange={(e) => updateStyle({ textColor: e.target.value })}
            className="h-10 w-full cursor-pointer rounded-md border border-neutral-300"
          />
        </Field>

        <Field label={`Event Name Size (${style.fontSize}px)`}>
          <input
            type="range"
            min={24}
            max={64}
            value={style.fontSize}
            onChange={(e) => updateStyle({ fontSize: Number(e.target.value) })}
            className="w-full"
          />
        </Field>
      </section>
    </aside>
  );
}

function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <label className="block space-y-1">
      <span className="text-xs font-medium text-neutral-500">{label}</span>
      {children}
    </label>
  );
}