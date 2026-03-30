import type { Metadata } from "next";
import { Syne, Source_Serif_4 } from "next/font/google";
import "./globals.css";
import { AppShell } from "@/components/layout/AppShell";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const sourceSerif = Source_Serif_4({
  variable: "--font-source-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default:
      "DMD SILVERLINE | Bridging African Resources with Global Technology",
    template: "%s | DMD SILVERLINE",
  },
  description:
    "International business development and consultancy. Responsible investment, technology transfer, and strategic partnerships across the Japan–Nigeria corridor and West Africa.",
  metadataBase: new URL("https://dmdsilverline.net/"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${syne.variable} ${sourceSerif.variable} h-full antialiased`}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col bg-charcoal-deep">
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
