import { TranslatorForm } from "@/components/translator-form"
import Link from "next/link"

export default function HomePage() {
  // Popular language pairs for quick access
  const popularPairs = [
    { from: "english", to: "spanish" },
    { from: "english", to: "french" },
    { from: "spanish", to: "english" },
    { from: "french", to: "english" },
    { from: "german", to: "english" },
    { from: "english", to: "portuguese" }
  ]

  return (
    <main className="container flex min-h-[calc(100vh-4.5rem)] flex-col items-center py-8 px-4 md:px-6 lg:py-12">
      <div className="mx-auto grid w-full max-w-6xl gap-8 lg:grid-cols-[400px_1fr] lg:gap-12">
        <div className="w-full max-w-[400px] mx-auto lg:max-w-none">
          <TranslatorForm />
        </div>
        <div className="flex flex-col justify-center space-y-4 text-center lg:text-left">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">Translate Your Documents</h1>
          <p className="text-muted-foreground md:text-xl">
            Professional-grade PDF translation service. Fast, accurate, and secure.
          </p>
        </div>
      </div>
      
      {/* Popular translation pairs */}
      <div className="w-full max-w-6xl mt-16">
        <h2 className="text-2xl font-bold mb-6 text-center">Popular Translation Pairs</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {popularPairs.map((pair, index) => (
            <Link 
              key={index} 
              href={`/translate/${pair.from}/${pair.to}`}
              className="bg-card/50 p-4 rounded-lg shadow-sm text-center hover:bg-card/70 transition-colors"
            >
              <div className="font-medium">
                {pair.from.charAt(0).toUpperCase() + pair.from.slice(1)} to {pair.to.charAt(0).toUpperCase() + pair.to.slice(1)}
              </div>
            </Link>
          ))}
        </div>
      </div>
      
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            "name": "PDF Translator",
            "description": "Professional-grade PDF translation service. Fast, accurate, and secure.",
            "applicationCategory": "BusinessApplication",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD"
            }
          })
        }}
      />
    </main>
  )
}