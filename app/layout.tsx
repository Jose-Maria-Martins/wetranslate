import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/header"
import type React from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "PDF Translator - Professional Document Translation Service",
  description:
    "Translate business files (PDF) while preserving formatting. Fast, accurate, and secure translations for all industries.",
    keywords: "PDF translation service, document translator with formatting, multilingual PDF converter, business document translation, legal document translation, preserve PDF formatting, translate PDF online, professional document translation",
  openGraph: {
    title: "PDF Translator - Professional Document Translation Service",
    description: "Translate business documents with perfect formatting preserved. Fast, accurate, secure translations.",
    type: "website",
    locale: "en_US",
    url: "https://doc-translate.com/",
  },
  twitter: {
    card: "summary_large_image",
    title: "PDF Translator - Professional Document Translation Service",
    description: "Translate business documents with perfect formatting preserved. Fast, accurate, secure translations.",
  },
  alternates: {
    canonical: "https://doc-translate.com",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen bg-gradient-to-b from-sky-100 to-white`}>
        <Header />
        {children}
      </body>
    </html>
  )
}



import './globals.css'