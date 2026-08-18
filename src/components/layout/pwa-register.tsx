"use client";

import { useEffect } from "react";
import { Capacitor } from "@capacitor/core";

export function PwaRegister() {
  useEffect(() => {
    if (Capacitor.isNativePlatform()) return;

    if ("serviceWorker" in navigator && process.env.NODE_ENV === "production") {
      navigator.serviceWorker.register("/sw.js").catch((err) => {
        console.error("Service worker registration failed:", err);
      });
    }
  }, []);

  return null;
}
