"use client";

import { useEffect, useState } from "react";

// Tint overlay color (rgba) that changes with NYC time of day
// Updates every minute; starts transparent to avoid SSR mismatch flash
function getNYCHour(): number {
  return parseInt(
    new Intl.DateTimeFormat("en-US", {
      timeZone: "America/New_York",
      hour: "numeric",
      hour12: false,
    }).format(new Date()),
    10,
  );
}

function tintForHour(h: number): string {
  if (h >= 5 && h < 8)   return "rgba(110,130,210,0.22)"; // dawn — cool blue
  if (h >= 8 && h < 11)  return "rgba(255,220,110,0.14)"; // morning — soft warm
  if (h >= 11 && h < 16) return "rgba(255,255,255,0)";    // midday — clear
  if (h >= 16 && h < 19) return "rgba(255,155,30,0.26)";  // golden hour — amber
  if (h >= 19 && h < 21) return "rgba(200,60,15,0.22)";   // evening — red-orange
  return "rgba(8,12,50,0.52)";                             // night — deep dark blue
}

export function useNYCTimeTint(): string {
  const [tint, setTint] = useState("rgba(255,255,255,0)");

  useEffect(() => {
    const update = () => setTint(tintForHour(getNYCHour()));
    update();
    const id = setInterval(update, 60_000);
    return () => clearInterval(id);
  }, []);

  return tint;
}
