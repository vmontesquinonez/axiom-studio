import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import ChatWidget from "@/components/ChatWidget";

const geist = Geist({ variable: "--font-sans", subsets: ["latin"], display: "swap" });
const geistMono = Geist_Mono({ variable: "--font-mono", subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "AXIOM — Experiencias Digitales con IA",
  description:
    "Construimos sitios web de nueva generación potenciados por inteligencia artificial. Animaciones de élite, rendimiento extremo.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${geist.variable} ${geistMono.variable} grain`}>
        <SmoothScroll>{children}</SmoothScroll>
        <ChatWidget />
      </body>
    </html>
  );
}
