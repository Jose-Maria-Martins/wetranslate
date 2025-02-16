import { Button } from "@/components/ui/button"
import Link from "next/link"
import { CheckCircle2 } from "lucide-react"

export const metadata = {
  title: "About PDF Translator - Professional Document Translation",
  description:
    "Transform your documents into any language while maintaining perfect formatting. Fast, accurate, and secure document translation service.",
  keywords: "pdf translator, document translation, professional translation, secure translation, document translation service, document translation with formatting, about doc-translate.com",
}

export default function AboutPage() {
  return (
    <div className="flex flex-col gap-12 py-8 md:gap-16 md:py-12">
      <section className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-[800px] text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
            Professional Document Translation
          </h1>
          <p className="mt-4 text-base text-muted-foreground sm:text-lg md:text-xl">
            Transform your documents into any language while maintaining perfect formatting
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 md:px-6">
        <div className="mx-auto grid max-w-5xl gap-8 sm:grid-cols-2 md:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.title} className="flex flex-col items-center gap-2 text-center">
              <div className="rounded-full bg-primary/10 p-4">
                <CheckCircle2 className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
              </div>
              <h3 className="text-lg font-bold sm:text-xl">{feature.title}</h3>
              <p className="text-sm text-muted-foreground sm:text-base">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 md:px-6">
        <div className="mx-auto flex max-w-[600px] flex-col gap-4 text-center">
          <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">Ready to translate your documents?</h2>
          <p className="text-sm text-muted-foreground sm:text-base">
            Join thousands of satisfied users who trust our service for their translation needs
          </p>
          <div className="mt-2 sm:mt-4">
            <Button asChild size="lg" className="rounded-full px-6 sm:px-8">
              <Link href="/">Get Started</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

const features = [
  {
    title: "Accurate Translation",
    description:
      "Our advanced AI technology ensures precise and contextually accurate translations across multiple languages.",
  },
  {
    title: "Format Preservation",
    description: "Maintain the original layout and formatting of your PDF documents after translation.",
  },
  {
    title: "Secure & Private",
    description: "Your documents are encrypted and automatically deleted after translation for maximum security.",
  },
]
