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
  keywords: "Business document translation, PDF translation, Accurate document translation, professional translation, PDF translation with formatting intact, Translate legal contracts without losing formatting", 
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