import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import React from "react";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
const greatVibes = localFont({
  src: "./fonts/GreatVibes-Regular.ttf",
  variable: "--font-great-vibes",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Gyllene Droppen",
  description: "Whiskygemenskap",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${greatVibes.variable} antialiased`}
      >
      <div className="h-screen grid items-center max-w-2xl mx-auto">
        {children}
      </div>
      </body>
    </html>
  );
}
