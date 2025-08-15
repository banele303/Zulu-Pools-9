import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import "./globals.css"
import { FloatingActions } from "@/components/floating-actions"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
})

export const metadata: Metadata = {
  title: "Zulu Pool's Builder | Premium Pool Construction & Maintenance in Pretoria",
  description:
    "Professional pool construction, renovation, and maintenance services in Pretoria, Centurion, and surrounding areas. New pool installations, pool maintenance, renovations, lapas, and fish ponds. Contact us at 076 688 5958.",
  keywords:
    "pool construction, pool builders, pool maintenance, pool renovation, swimming pools, Pretoria pools, Centurion pools, pool installation, lapas, fish ponds, Akasia, Montana, Annlin",
  authors: [{ name: "Zulu Pool's Builder" }],
  creator: "Zulu Pool's Builder",
  publisher: "Zulu Pool's Builder",
  robots: "index, follow",
  openGraph: {
    title: "Zulu Pool's Builder | Premium Pool Construction & Maintenance",
    description:
      "Professional pool construction, renovation, and maintenance services in Pretoria and surrounding areas.",
    url: "https://www.zulupoools.co.za",
  siteName: "Zulu Pool's Builder",
    images: [
      {
        url: "/images/zulu-pools.png",
        width: 1200,
        height: 630,
  alt: "Zulu Pool's Builder - Professional Pool Services",
      },
    ],
    locale: "en_ZA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zulu Pool's Builder | Premium Pool Construction & Maintenance",
    description:
      "Professional pool construction, renovation, and maintenance services in Pretoria and surrounding areas.",
  images: ["/images/zulu-pools.png"],
  },
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#0891b2",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <link rel="canonical" href="https://www.zulupoools.co.za" />
        <meta name="geo.region" content="ZA-GP" />
        <meta name="geo.placename" content="Pretoria" />
        <meta name="geo.position" content="-25.7479;28.2293" />
        <meta name="ICBM" content="-25.7479, 28.2293" />
      </head>
  <body className="antialiased pt-20 md:pt-24 pb-20 md:pb-0 pb-safe">
        {children}
        <FloatingActions />
      </body>
    </html>
  )
}
