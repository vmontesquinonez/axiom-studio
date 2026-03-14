import type { Metadata } from "next";
import { Geist } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

const geist = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AXIOM — AI-Crafted Digital Experiences",
  description:
    "We build next-generation websites powered by artificial intelligence. Stunning animations, elite performance, built to convert.",
  keywords: ["AI websites", "web design", "animated websites", "AI agency"],
  openGraph: {
    title: "AXIOM — AI-Crafted Digital Experiences",
    description: "Next-generation websites powered by AI.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geist.variable}`}>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
