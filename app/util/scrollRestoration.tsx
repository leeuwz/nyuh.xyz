"use client";
import { useEffect } from "react";

export default function ScrollRestoration() {
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual"; // disables auto scroll restore
    }
  }, []);

  return null;
}