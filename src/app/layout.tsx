import type { Metadata } from "next";
import { Outfit, Source_Serif_4 } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const sourceSerif = Source_Serif_4({
  variable: "--font-source-serif",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Pinsara K. Weerasinghe — Software Engineer",
  description:
    "Software engineer and CSE undergraduate at University of Moratuwa. Web and mobile development, data analytics, and machine learning.",
  metadataBase: new URL("https://pinsara.com"),
  openGraph: {
    title: "Pinsara K. Weerasinghe",
    description:
      "Software engineer — full-stack development, mobile apps, data engineering, and research.",
    type: "website",
    url: "https://pinsara.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${sourceSerif.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
