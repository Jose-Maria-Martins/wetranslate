import { Button } from "@/components/ui/button"
import Link from "next/link"
import { CheckCircle2, Globe, FileText, Shield, Clock, Award, UserCheck, Mail, Star, ArrowRight, Zap, Sparkles } from "lucide-react"

export const metadata = {
  title: "About PDF Translator - Professional Document Translation Services",
  description:
    "Transform your documents into any language while maintaining perfect formatting. Fast, accurate, and secure business document translation service.",
  keywords: "pdf translator, document translation service, professional translation, secure translation, document translation service, document translation with formatting, multilingual document translation",
  openGraph: {
    title: "About PDF Translator - Professional Document Translation Services",
    description: "Transform your documents into any language while maintaining perfect formatting. Fast, accurate, and secure business document translation service.",
    type: "website",
    locale: "en_US",
    url: "https://doc-translate.com/about",
  },
  alternates: {
    canonical: "https://doc-translate.com/about",
  }
}

export default function AboutPage() {
  return (
    <div className="flex flex-col pb-16 bg-gradient-to-b from-sky-100 to-sky-100">      
    {/* Hero Section */}
      <section className="container mx-auto px-4 md:px-6 pt-16 md:pt-24 pb-16 md:pb-24">
        <div className="mx-auto max-w-[1000px] text-center">
          <div className="flex items-center justify-center mb-6">
            <div className="px-4 py-1 rounded-full bg-primary/10 text-primary font-medium text-sm inline-flex items-center">
              <Sparkles className="h-4 w-4 mr-2" />
              Document Translation Reimagined
            </div>
          </div>
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
            Translate Documents With <span className="text-primary">Perfect Precision</span>
          </h1>
          <p className="mt-6 text-base text-muted-foreground sm:text-lg md:text-xl max-w-[800px] mx-auto">
            Transform your PDFs and documents into any language while preserving every detail of your original formatting. 
            Enterprise-grade accuracy meets startup speed.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="rounded-full px-8 py-6 text-lg h-auto">
              <Link href="/">Start Translating Now</Link>
            </Button>
          </div>
          <div className="mt-8 flex items-center justify-center text-sm text-muted-foreground">
            <Shield className="h-4 w-4 mr-2" />
            <span>Totally free and private.</span>
          </div>
        </div>
      </section>

      {/* Social Proof Section 
      <section className="container mx-auto px-4 md:px-6 py-8">
        <div className="flex flex-col items-center justify-center gap-6">
          <p className="text-muted-foreground text-sm font-medium">TRUSTED BY COMPANIES WORLDWIDE</p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-70">
            {['Microsoft', 'Google', 'Amazon', 'Meta', 'Adobe', 'Spotify'].map((company) => (
              <div key={company} className="flex items-center justify-center">
                <span className="text-lg font-bold text-muted-foreground">{company}</span>
              </div>
            ))}
          </div>
        </div>
      </section>*/}

      {/* Features Section */}
      <section className="container mx-auto px-4 md:px-6 py-16 md:py-24">
        <div className="text-center mb-16">
          <div className="inline-flex items-center mb-4 px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
            <Zap className="h-4 w-4 mr-2" /> 
            Our Core Features
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Why Thousands Choose Our Translation Service
          </h2>
          <p className="mt-4 text-muted-foreground max-w-[700px] mx-auto text-lg">
            Experience the perfect balance of AI technology and human expertise for your document translation needs
          </p>
        </div>
        <div className="mx-auto grid max-w-6xl gap-8 sm:grid-cols-2 md:grid-cols-3">
          {features.map((feature) => (
            <div 
              key={feature.title} 
              className="flex flex-col items-center gap-4 text-center p-8 rounded-xl border bg-card/30 hover:bg-card/60 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="rounded-full bg-primary/10 p-5">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl">
              Powering Global Communication
            </h2>
            <p className="mt-4 text-muted-foreground max-w-[600px] mx-auto">
              Our translation service is trusted by businesses and individuals worldwide
            </p>
          </div>
          <div className="mx-auto grid max-w-5xl gap-8 text-center sm:grid-cols-2 md:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.value} className="flex flex-col items-center gap-2 p-6 rounded-xl bg-background/80 border">
                <div className="text-4xl font-bold text-primary">{stat.value}</div>
                <p className="text-sm text-muted-foreground font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section 
      <section className="container mx-auto px-4 md:px-6 py-16 md:py-24">
        <div className="text-center mb-16">
          <div className="inline-flex items-center mb-4 px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
            <Star className="h-4 w-4 mr-2" /> 
            What Our Users Say
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            See Why Users Love Our Service
          </h2>
          <p className="mt-4 text-muted-foreground max-w-[700px] mx-auto text-lg">
            Join thousands of satisfied customers who have transformed how they handle document translation
          </p>
        </div>
        <div className="mx-auto grid max-w-6xl gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="flex flex-col gap-4 p-8 rounded-xl border bg-card/30"
            >
              <div className="flex items-center gap-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-muted-foreground italic">"{testimonial.quote}"</p>
              <div className="flex items-center gap-3 mt-4">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="font-bold text-primary">{testimonial.name.charAt(0)}</span>
                </div>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
*/}
      {/* How It Works Section */}
      <section className="container mx-auto px-4 md:px-6 py-16 md:py-24">
        <div className="text-center mb-16">
          <div className="inline-flex items-center mb-4 px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
            <Zap className="h-4 w-4 mr-2" /> 
            Simple Process
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            How It Works
          </h2>
          <p className="mt-4 text-muted-foreground max-w-[700px] mx-auto text-lg">
            Transform your documents in three simple steps
          </p>
        </div>
        <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-3">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center gap-4 text-center"
            >
              <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg">
                {index + 1}
              </div>
              <h3 className="text-xl font-bold">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Preview Section 
      <section className="container mx-auto px-4 md:px-6 py-16 md:py-20">
        <div className="text-center mb-12">
          <div className="inline-flex items-center mb-4 px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
            <Zap className="h-4 w-4 mr-2" /> 
            Flexible Plans
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            Choose Your Perfect Plan
          </h2>
          <p className="mt-4 text-muted-foreground max-w-[700px] mx-auto text-lg">
            We offer plans for everyone from individuals to large enterprises
          </p>
        </div>
        <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-3">
          {pricing.map((plan) => (
            <div 
              key={plan.name} 
              className={`flex flex-col p-8 rounded-xl border ${plan.featured ? 'bg-primary/10 border-primary/30 shadow-lg' : 'bg-card/30'}`}
            >
              <div className="mb-4">
                {plan.featured && (
                  <div className="inline-block mb-3 px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-medium">
                    Most Popular
                  </div>
                )}
                <h3 className="text-xl font-bold">{plan.name}</h3>
                <p className="mt-2 text-muted-foreground text-sm">{plan.description}</p>
              </div>
              <div className="mb-6">
                <div className="flex items-baseline">
                  <span className="text-3xl font-bold">${plan.price}</span>
                  <span className="text-muted-foreground ml-2">/month</span>
                </div>
              </div>
              <ul className="space-y-3 mb-8 flex-grow">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircle2 className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button 
                asChild 
                size="lg" 
                variant={plan.featured ? "default" : "outline"} 
                className="rounded-full mt-auto"
              >
                <Link href="/pricing">{plan.featured ? 'Get Started' : 'Learn More'}</Link>
              </Button>
            </div>
          ))}
        </div>
      </section>*/}

      {/* FAQ Section */}
      <section className="container mx-auto px-4 md:px-6 py-16 md:py-24">
        <div className="text-center mb-16">
          <div className="inline-flex items-center mb-4 px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
            <Zap className="h-4 w-4 mr-2" /> 
            Common Questions
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-muted-foreground max-w-[700px] mx-auto text-lg">
            Everything you need to know about our translation service
          </p>
        </div>
        <div className="mx-auto max-w-3xl space-y-6">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="rounded-xl border bg-card/30 p-6"
            >
              <h3 className="text-lg font-bold mb-2">{faq.question}</h3>
              <p className="text-muted-foreground">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 md:px-6 py-16">
        <div className="mx-auto max-w-[900px] flex flex-col gap-8 text-center bg-gradient-to-r from-primary/10 to-primary/5 p-10 md:p-16 rounded-3xl">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Ready to transform your documents?</h2>
          <p className="text-lg text-muted-foreground max-w-[600px] mx-auto">
            Join the satisfied users who trust our service for their translation needs. 
            Get started with your first document today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-4">
            <Button asChild size="lg" className="rounded-full px-10 py-6 text-lg h-auto">
              <Link href="/">Get Started Now</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full px-10 py-6 text-lg h-auto">
              <Link href="mailto:jose.maria.martins@protonmail.com" className="flex items-center">
                <Mail className="mr-2 h-5 w-5" /> Contact Sales
              </Link>
            </Button>
          </div>
          <div className="text-sm text-muted-foreground flex items-center justify-center mt-4">
            <CheckCircle2 className="h-4 w-4 mr-2 text-primary" />
            <span>100% Free • No Credit Card Required • Private & Secure </span>
          </div>
        </div>
      </section>
    </div>
  )
}

const features = [
  {
    icon: <Globe className="h-7 w-7 text-primary" />,
    title: "Accurate Translation",
    description:
      "Our advanced AI technology ensures precise and contextually accurate translations across different languages.",
  },
  {
    icon: <FileText className="h-7 w-7 text-primary" />,
    title: "Perfect Formatting",
    description: "Maintain the original layout, images, tables and formatting of your documents after translation.",
  },
  {
    icon: <Shield className="h-7 w-7 text-primary" />,
    title: "Secure & Private",
    description: "Your documents are encrypted and automatically deleted after translation for maximum security.",
  },
  {
    icon: <Clock className="h-7 w-7 text-primary" />,
    title: "Lightning Fast",
    description: "Get your translated documents in minutes, not days, without sacrificing quality or accuracy.",
  },
  {
    icon: <Award className="h-7 w-7 text-primary" />,
    title: "Professional Quality",
    description: "AI-powered translation with professional-grade terminology for business and technical documents.",
  },
  {
    icon: <UserCheck className="h-7 w-7 text-primary" />,
    title: "Easy to Use",
    description: "Simple drag-and-drop interface makes translating documents accessible to everyone.",
  },
]

const stats = [
  { value: "6+", label: "Supported Languages" },
  { value: "78.8%", label: "Formatting Accuracy" },
  { value: "100+", label: "Documents Translated" },
  { value: "5+", label: "Happy Users" },
]

const testimonials = [
  {
    quote: "This translation service saved us countless hours of manual formatting work. The documents look exactly like the originals, just in a different language!",
    name: "Sarah Johnson",
    title: "Marketing Director at TechCorp"
  },
  {
    quote: "We use this for all our international contracts. The accuracy is outstanding and the turnaround time is incredibly fast.",
    name: "Michael Chen",
    title: "Legal Counsel at GlobalFirm"
  },
  {
    quote: "As someone who frequently works with multilingual documents, this service has been a game-changer for our team's productivity.",
    name: "Elena Rodriguez",
    title: "Project Manager at InnovateCo"
  }
]

const steps = [
  {
    title: "Upload Document",
    description: "Simply drag and drop your PDF or document file into our secure platform."
  },
  {
    title: "Select Language",
    description: "Choose the target languages for your translation."
  },
  {
    title: "Download Result",
    description: "Receive your perfectly translated document with original formatting intact."
  }
]

const pricing = [
  {
    name: "Free",
    description: "Perfect for occasional translation needs",
    price: "0",
    features: [
      "3 documents per month",
      "Up to 5 pages per document",
      "20 supported languages",
      "Basic formatting preservation"
    ],
    featured: false
  },
  {
    name: "Pro",
    description: "Ideal for individuals and small teams",
    price: "29",
    features: [
      "50 documents per month",
      "Up to 25 pages per document",
      "100+ supported languages",
      "Perfect formatting preservation",
      "Priority processing",
      "Email support"
    ],
    featured: true
  },
  {
    name: "Enterprise",
    description: "For organizations with advanced needs",
    price: "99",
    features: [
      "Unlimited documents",
      "Unlimited pages per document",
      "100+ supported languages",
      "Perfect formatting preservation",
      "API access",
      "Dedicated account manager",
      "Custom terminology database"
    ],
    featured: false
  }
]

const faqs = [
  {
    question: "How accurate are the translations?",
    answer: "Our translations achieve over 98% accuracy for most common languages. We use a combination of advanced AI models and professional review processes to ensure high-quality results."
  },
  {
    question: "What file formats are supported?",
    answer: "Currently, we support only PDF files for translation. However, we are working on adding support for other formats in the near future. "
    //answer: "We support PDF, Word (DOCX, DOC), PowerPoint (PPTX, PPT), Excel (XLSX, XLS), and plain text files (TXT). All documents maintain their original formatting after translation."
  },
  {
    question: "My language is not supported. What can I do?",
    answer: "We would love to know which languages you need! Please reach out to us at jose.maria.martins@protonmail[dot]com with your language request."
  },
  {
    question: "How secure is my data?",
    answer: "We take security seriously. All uploads are encrypted using TLS/SSL, and documents are automatically deleted from our servers after 24 hours. We never share or sell your data."
  },
  {
    question: "How long does translation take?",
    answer: "Each pages takes, in average, 3-5 seconds being translated. The total time depends on the number of pages and the complexity of the document."
    //answer: "Most documents under 20 pages are translated within 5-10 minutes. Larger documents may take longer, but we prioritize both speed and accuracy."
  },
  {
    question: "Does it support scanned documents?",
    answer: "No, we currently do not support scanned documents. The text in your document must be selectable and copy-pasteable for translation."
  },
  {
    question: "Can I translate technical or specialized content?",
    answer: "Yes! Our system is trained on diverse content including technical, medical, legal, and financial documents."
    //answer: "Yes! Our system is trained on diverse content including technical, medical, legal, and financial documents. For highly specialized content, our Enterprise plan offers custom terminology databases."
  }
]