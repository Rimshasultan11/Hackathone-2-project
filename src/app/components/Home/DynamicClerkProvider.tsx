import dynamic from "next/dynamic";

const DynamicClerkProvider = dynamic<{ children: React.ReactNode }>(
    async () => {
      const mod = await import("@clerk/nextjs");
      return mod.ClerkProvider as unknown as React.ComponentType<{ children: React.ReactNode }>;
    },
    { ssr: false }
  );

  export default DynamicClerkProvider;