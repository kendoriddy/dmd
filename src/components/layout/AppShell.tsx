"use client";

import { LanguageProvider } from "@/context/LanguageContext";
import { Header } from "./Header";
import { Footer } from "./Footer";

export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <LanguageProvider>
      <Header />
      <div className="flex-1">{children}</div>
      <Footer />
    </LanguageProvider>
  );
}
