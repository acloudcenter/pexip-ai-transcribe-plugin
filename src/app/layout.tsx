import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// Importing Geist and Geist_Mono fonts from Google Fonts.
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

// Importing Geist_Mono font for monospaced text.
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Metadata for the application, including title and description.
export const metadata: Metadata = {
  title: "Pexip AI Transcription",
  description: "AI-powered transcription service for Pexip meetings",
};

// Root layout component that wraps the application with global styles and fonts.
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
