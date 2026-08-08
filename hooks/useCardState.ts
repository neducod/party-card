"use client";

import { useCallback, useState } from "react";
import { CardDetails, CardState, CardStyle, DEFAULT_CARD_STATE } from "@/types/card";

export function useCardState() {
  const [state, setState] = useState<CardState>(DEFAULT_CARD_STATE);

  const updateDetails = useCallback((patch: Partial<CardDetails>) => {
    setState((prev) => ({ ...prev, details: { ...prev.details, ...patch } }));
  }, []);

  const updateStyle = useCallback((patch: Partial<CardStyle>) => {
    setState((prev) => ({ ...prev, style: { ...prev.style, ...patch } }));
  }, []);

  const updateGradient = useCallback((patch: Partial<CardStyle["gradient"]>) => {
    setState((prev) => ({
      ...prev,
      style: { ...prev.style, gradient: { ...prev.style.gradient, ...patch } },
    }));
  }, []);

  const reset = useCallback(() => setState(DEFAULT_CARD_STATE), []);

  return { state, updateDetails, updateStyle, updateGradient, reset };
}

export type UseCardStateReturn = ReturnType<typeof useCardState>;