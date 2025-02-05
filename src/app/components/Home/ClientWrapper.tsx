"use client";

import { ClerkProvider, ClerkLoaded } from "@clerk/nextjs";

export default function ClientWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <ClerkLoaded>{children}</ClerkLoaded>
    </ClerkProvider>
  );
}
