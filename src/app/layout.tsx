import type { Metadata } from "next";
import { Rajdhani, Space_Grotesk } from "next/font/google";
import Script from "next/script";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from '@vercel/analytics/next';

import "./globals.css";
import NavigationBar from "@/components/navigation-bar";

export const metadata: Metadata = {
  title: "Barış Emren | Web Software Developer",
  description:
    "Barış Emren - Self-taught Web Software Developer specializing in modern frontend development, based in Turkey",
  keywords: [
    "web developer",
    "software developer",
    "frontend developer",
    "React developer",
    "Next.js developer",
    "Turkey",
  ],
  authors: [{ name: "Barış Emren" }],
  creator: "Barış Emren",
  openGraph: {
    title: "Barış Emren | Web Software Developer",
    description:
      "Self-taught Web Software Developer specializing in modern frontend development, based in Turkey",
    url: "https://barisemren.dev", // Replace with your actual domain
    siteName: "Barış Emren Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://barisemren.dev/og-image.svg",
        width: 930,
        height: 350,
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const rajdhani = Rajdhani({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-rajdhani",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-space-grotesk",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${rajdhani.variable} ${spaceGrotesk.variable} antialiased w-[100dvw] h-[100dvh] bg-dark`}
      >
        <SpeedInsights />
        <Script id="schema-org" type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Barış Emren",
              "url": "https://barisemren.com",
              "jobTitle": "Software Developer",
              "worksFor": {
                "@type": "Organization",
                "name": "Sufle"
              },
              "sameAs": [
                "https://github.com/barisemren",
                "https://www.linkedin.com/in/barisemren/"
              ]
            }
          `}
        </Script>
        <main className="py-20 h-full font-sans font-medium">{children}</main>
        <NavigationBar />
        <Analytics />
      </body>
    </html>
  );
}
