import { Metadata } from "next"
import { TranslatorForm } from "@/components/translator-form"
import { notFound } from "next/navigation"

// Define valid language codes
const validLanguages = {
  "english": "Inglês",
  "spanish": "Espanhol",
  "french": "Francês",
  "german": "Alemão",
  "catalan": "Catalão",
  "portuguese": "Português",
  "polish": "Polish"
}

// Language name mapping for display
const languageDisplayNames = {
  "english": "English",
  "spanish": "Spanish",
  "french": "French",
  "german": "German",
  "catalan": "Catalan",
  "portuguese": "Portuguese",
  "polish": "Polish"
}

// FAQ content based on language pair
const generateFAQs = (from: string, to: string) => {
  return [
    {
      question: `How do I translate a PDF from ${from} to ${to}?`,
      answer: `Simply upload your ${from} PDF document, select ${from} as the source language and ${to} as the target language, then click "Translate". You'll receive both a mono and dual translation version.`
    },
    {
      question: `How accurate is the ${from} to ${to} translation?`,
      answer: `Our AI-powered translation technology delivers professional-grade translations between ${from} and ${to} with high accuracy, particularly for formal and business documents.`
    },
    {
      question: `Is my ${from} document secure when translating to ${to}?`,
      answer: `Yes, we prioritize document security. Your ${from} files are processed securely, and we don't store the content of your documents after translation is complete.`
    },
    {
      question: `How long does ${from} to ${to} translation take?`,
      answer: `Translation time depends on document length and complexity, but most ${from} to ${to} translations are completed within minutes.`
    }
  ]
}

// Generate metadata for each dynamic page
export async function generateMetadata({ params }: { params: { from: string, to: string } }): Promise<Metadata> {
  const from = params.from.toLowerCase()
  const to = params.to.toLowerCase()
  
  const fromDisplayName = languageDisplayNames[from as keyof typeof languageDisplayNames]
  const toDisplayName = languageDisplayNames[to as keyof typeof languageDisplayNames]
  
  if (!fromDisplayName || !toDisplayName) {
    return {
      title: "Translation Service | Professional Document Translation",
      description: "Fast, accurate, and secure document translation service."
    }
  }

  return {
    title: `Translate ${fromDisplayName} to ${toDisplayName} | AI-Powered Translation`,
    description: `Instantly translate ${fromDisplayName} to ${toDisplayName}. Upload your document for a fast and accurate professional-grade translation.`,
    openGraph: {
      title: `${fromDisplayName} to ${toDisplayName} Translation Service`,
      description: `Professional PDF translation from ${fromDisplayName} to ${toDisplayName}. Fast, accurate, and secure.`,
      type: 'website',
    }
  }
}

// Check if a language pair is valid
function isValidLanguagePair(from: string, to: string) {
  const fromCode = validLanguages[from as keyof typeof validLanguages]
  const toCode = validLanguages[to as keyof typeof validLanguages]
  
  // Check if languages exist and aren't the same
  return fromCode && toCode && from !== to
}

// Generate static paths for all valid language combinations
export async function generateStaticParams() {
  const pairs = []
  const languages = Object.keys(validLanguages)
  
  for (const from of languages) {
    for (const to of languages) {
      if (from !== to) {
        pairs.push({ from, to })
      }
    }
  }
  
  return pairs
}

export default function TranslatePage({ params }: { params: { from: string, to: string } }) {
  const from = params.from.toLowerCase()
  const to = params.to.toLowerCase()
  
  // Redirect to 404 if invalid language pair
  if (!isValidLanguagePair(from, to)) {
    notFound()
  }
  
  const fromCode = validLanguages[from as keyof typeof validLanguages]
  const toCode = validLanguages[to as keyof typeof validLanguages]
  const fromDisplayName = languageDisplayNames[from as keyof typeof languageDisplayNames]
  const toDisplayName = languageDisplayNames[to as keyof typeof languageDisplayNames]
  
  // Generate FAQs for this language pair
  const faqs = generateFAQs(fromDisplayName, toDisplayName)

  return (
    <main className="container flex min-h-[calc(100vh-4.5rem)] flex-col items-center py-8 px-4 md:px-6 lg:py-12">
      <div className="mx-auto grid w-full max-w-6xl gap-8 lg:grid-cols-[400px_1fr] lg:gap-12">
        <div className="w-full max-w-[400px] mx-auto lg:max-w-none">
          <TranslatorForm preSelectedFrom={fromCode} preSelectedTo={toCode} />
        </div>
        <div className="flex flex-col justify-center space-y-4 text-center lg:text-left">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
            Translate {fromDisplayName} to {toDisplayName}
          </h1>
          <p className="text-muted-foreground md:text-xl">
            Professional-grade PDF translation from {fromDisplayName} to {toDisplayName}. Fast, accurate, and secure.
          </p>
        </div>
      </div>
      
      {/* FAQ Section */}
      <div className="w-full max-w-6xl mt-16">
        <h2 className="text-2xl font-bold mb-8 text-center">Frequently Asked Questions about {fromDisplayName} to {toDisplayName} Translation</h2>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-card/50 p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-lg mb-2">{faq.question}</h3>
              <p className="text-muted-foreground">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
      
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map(faq => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
              }
            }))
          })
        }}
      />
      
      {/* WebApplication schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            "name": `${fromDisplayName} to ${toDisplayName} PDF Translator`,
            "description": `Professional-grade PDF translation service from ${fromDisplayName} to ${toDisplayName}. Fast, accurate, and secure.`,
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