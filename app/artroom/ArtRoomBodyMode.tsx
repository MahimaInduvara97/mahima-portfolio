"use client";

import { useEffect } from "react";

export function ArtRoomBodyMode({ children }: Readonly<{ children: React.ReactNode }>) {
  useEffect(() => {
    document.body.classList.add("artroom-mode");
    return () => document.body.classList.remove("artroom-mode");
  }, []);

  return <>{children}</>;
}
