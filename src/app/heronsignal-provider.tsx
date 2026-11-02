"use client";

import { useEffect } from "react";
import { initHeronSignal } from "@heronsignal/web";

export function HeronSignalProvider() {
  useEffect(() => {
    void initHeronSignal({ publicKey: "pk_3RFbremtnDr7RHQbujYoEvSGsVKDbEz4" });
  }, []);

  return null;
}
