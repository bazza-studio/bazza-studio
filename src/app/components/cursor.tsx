"use client";
import { Cursor as DotCursor } from "react-dot-cursor";
import { useEffect, useState } from "react";

export function Cursor() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return <DotCursor />;
}
