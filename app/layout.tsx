import type { Metadata } from "next";
import { Geist, Geist_Mono, Quicksand, Raleway, Red_Hat_Display } from "next/font/google";
import "./globals.css";
import ScrollRestoration from "./util/scrollRestoration";
import MotionWrapper from "./util/motionWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const quicksand = Quicksand({
  variable: "--font-quicksand",
  subsets: ["latin"],
});

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
});

const redHat = Red_Hat_Display({
  variable: "--font-red-hat-display",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nyuh ♡",
  description: "hiiiii~ ヾ(・ω・)",
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png" },
      { url: "/favicon.ico", type: "image/x-icon" }
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${quicksand.variable} ${raleway.variable} ${redHat.variable} antialiased w-full`}
        suppressHydrationWarning={true}
      >
        <ScrollRestoration />
        <MotionWrapper>
          {children}
        </MotionWrapper>
      </body>
    </html>
  );
}
