import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Space_Grotesk } from "next/font/google";
import "./globals.css";

const sans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const heading = Space_Grotesk({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Pinsara Weerasinghe — Software Engineer & Associate Tech Lead",
  description:
    "Senior Software Engineer, Associate Technical Lead and Cloud Consultant specializing in AWS, Serverless, and high-throughput data pipelines.",
  metadataBase: new URL("https://pinsara.com"),
  openGraph: {
    title: "Pinsara Weerasinghe",
    description:
      "Senior Software Engineer & Cloud Consultant specializing in AWS, Serverless, and high-throughput data pipelines.",
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
    <html lang="en" className={`${sans.variable} ${heading.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
