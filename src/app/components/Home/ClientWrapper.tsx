"use client";

import { ClerkProvider } from "@clerk/nextjs";
import { useState, useEffect } from "react";

export default function ClientWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null; // Wait until mounted

  return <ClerkProvider>{children}</ClerkProvider>;
}
