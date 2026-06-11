import type { Metadata, Viewport } from "next";

import { Navbar } from "@/components/navbar";

import "./globals.css";

export const metadata: Metadata = {
  title: "Moon",
  description: "An interactive visual study of the moon.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#05060a",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
