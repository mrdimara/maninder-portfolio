import type { Metadata } from "next";
import { bebasNeue, dmSans, ibmPlexMono } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Maninder Singh — Power Electronics & Motor Drives",
  description:
    "IIT (ISM) Dhanbad EE student · IEEE PEDES 2026 (submitted) · " +
    "Six-phase IRFOC · ISRO VLSI 6th · Formula Bharat · EMPES IIT Bombay intern. " +
    "Power electronics, motor drives, mixed-signal, EV systems.",
  keywords: [
    "power electronics",
    "motor drives",
    "IRFOC",
    "EV systems",
    "IIT Dhanbad",
    "EMPES IIT Bombay",
    "gate driver",
    "NGSpice",
  ],
  openGraph: {
    title: "Maninder Singh — Power Electronics & Motor Drives",
    description: "IIT EE student. IEEE PEDES 2026. Formula Bharat EV.",
    url: "https://maninder-portfolio-ten.vercel.app",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${bebasNeue.variable} ${dmSans.variable} ${ibmPlexMono.variable} font-body antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
