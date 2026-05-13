import type { Metadata } from "next";
import localFont from "next/font/local";
import { Geist_Mono } from "next/font/google";
import "./globals.css";

const afFoundry = localFont({
  src: "../fonts/af.woff2",
  variable: "--font-af-foundary",
  weight: "100 900",
  display: "swap",
});

const ppMondwest = localFont({
  src: "../fonts/ppmondwest.woff2",
  variable: "--font-mondwest",
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "General Intelligence Company",
  description:
    "Automate your life with natural language. Cofounder plugs into your existing tools, writes automations, and organizes workflows.",
  icons: {
    icon: [
      { url: "/images/favicon32.png", sizes: "32x32" },
      { url: "/images/favicon256.png", sizes: "256x256" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${afFoundry.variable} ${ppMondwest.variable} ${geistMono.variable} antialiased bg-neutral-50`}
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}
