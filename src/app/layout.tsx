import type { Metadata } from "next";
import { barlowCondensed, inter, robotoMono } from "@/lib/fonts";
import GlobalSiteChrome from "@/components/GlobalSiteChrome";
import "./globals.css";

export const metadata: Metadata = {
  title: "MECHMERISE 2K26 — SVPCET Nagpur",
  description:
    "Annual technical festival of the Department of Mechanical Engineering, St. Vincent Pallotti College of Engineering and Technology, Nagpur.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${barlowCondensed.variable} ${inter.variable} ${robotoMono.variable}`}
    >
      <body className="min-h-screen bg-carbon carbon-texture">
        <GlobalSiteChrome>{children}</GlobalSiteChrome>
      </body>
    </html>
  );
}
