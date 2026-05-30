import type React from "react"
import type { Metadata } from "next"
import { Public_Sans } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Toaster } from "@/components/ui/toaster"
import "./globals.css"

const publicSans = Public_Sans({ subsets: ["latin"], display: "swap" })

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000")

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "AX Negócios, Créditos & Investimentos — Soluções Financeiras em Londrina",
    template: "%s — AX Negócios, Créditos & Investimentos",
  },
  description:
    "Consórcios, financiamentos imobiliários e de veículos, carta contemplada e assessoria financeira personalizada. Soluções completas para pessoas físicas e empresas em Londrina - PR.",
  keywords: ["consórcio", "financiamento", "carta contemplada", "assessoria financeira", "investimentos", "Londrina", "AX Negócios"],
  authors: [{ name: "AX Negócios, Créditos & Investimentos" }],
  openGraph: {
    title: "AX Negócios, Créditos & Investimentos",
    description:
      "Consórcios, financiamentos e assessoria financeira personalizados. Realize seus objetivos com quem entende do mercado.",
    type: "website",
    locale: "pt_BR",
    siteName: "AX Negócios, Créditos & Investimentos",
    images: [
      {
        url: "/hero-advisor.png",
        width: 1200,
        height: 630,
        alt: "AX Negócios, Créditos & Investimentos",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AX Negócios, Créditos & Investimentos",
    description: "Consórcios, financiamentos e assessoria financeira personalizados em Londrina - PR.",
    images: ["/hero-advisor.png"],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className="dark">
      <body className={`${publicSans.className} font-sans antialiased bg-[#1c1c1c] text-[#d4d3ce]`}>
        {children}
        <Toaster />
        <Analytics />
      </body>
    </html>
  )
}
