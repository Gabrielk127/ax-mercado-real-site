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
  title: "Indicação Premiada — AX Mercado Real",
  description: "Indique contatos para a AX Mercado Real e ganhe prêmios premium quando sua indicação resultar na compra de uma carta de crédito.",
  generator: "v0.app",
  openGraph: {
    title: "Indicação Premiada — AX Mercado Real",
    description: "Indique contatos para a AX Mercado Real e ganhe prêmios premium quando sua indicação resultar na compra de uma carta de crédito.",
    type: "website",
    locale: "pt_BR",
    images: [
      {
        url: "/hero-image.png",
        width: 1200,
        height: 630,
        alt: "Campanha Indicação Premiada — AX Mercado Real",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Indicação Premiada — AX Mercado Real",
    description: "Indique contatos para a AX Mercado Real e ganhe prêmios premium.",
    images: ["/hero-image.png"],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${publicSans.className} font-sans antialiased`}>
        {children}
        <Toaster />
        <Analytics />
      </body>
    </html>
  )
}
