import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const sans = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pinsara Weerasinghe — Senior Backend Engineer",
  description:
    "Senior Backend Engineer building Python microservices on Kubernetes, AWS serverless architectures, and high-throughput data pipelines.",
  metadataBase: new URL("https://pinsara.com"),
  openGraph: {
    title: "Pinsara Weerasinghe",
    description:
      "Senior Backend Engineer building Python microservices on Kubernetes, AWS serverless architectures, and high-throughput data pipelines.",
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
    <html lang="en" className={`${sans.variable} dark`}>
      <body className="antialiased leading-relaxed">{children}</body>
    </html>
  );
}
