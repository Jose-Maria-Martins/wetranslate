import { TranslatorForm } from "@/components/translator-form"
import Head from "next/head"

export default function HomePage() {
  return (
    <>
      <Head>
        <script type="application/ld+json">
          {`
            {
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
            }
          `}
        </script>
      </Head>
    <main className="container flex min-h-[calc(100vh-4.5rem)] items-center py-8 px-4 md:px-6 lg:py-12">
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
    </main>
    </>
  )
}

