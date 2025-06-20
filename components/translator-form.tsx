"use client"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Upload, Languages, ArrowRight, Download } from "lucide-react"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { cn } from "@/lib/utils"

interface TranslatedFile {
  name: string
  url: string
}

const languages = [
  { code: "Inglês", name: "English" },
  { code: "Espanhol", name: "Spanish" },
  { code: "Francês", name: "French" },
  { code: "Alemão", name: "German" },
  { code: "Catalão", name: "Catalan" },
  { code: "Português", name: "Portuguese" },
  { code: "Polish", name: "Polish"},
]

interface TranslatorFormProps {
  preSelectedFrom?: string;
  preSelectedTo?: string;
}

export function TranslatorForm({ preSelectedFrom, preSelectedTo }: TranslatorFormProps) {
  const [sourceLanguage, setSourceLanguage] = useState("")
  const [targetLanguage, setTargetLanguage] = useState("")
  const [file, setFile] = useState<File | null>(null)
  const [translatedFiles, setTranslatedFiles] = useState<TranslatedFile[]>([])
  const [isTranslating, setIsTranslating] = useState(false)
  const [downloadError, setDownloadError] = useState<string | null>(null)

  // Initialize with pre-selected languages if provided
  useEffect(() => {
    if (preSelectedFrom) {
      setSourceLanguage(preSelectedFrom)
    }
    if (preSelectedTo) {
      setTargetLanguage(preSelectedTo)
    }
  }, [preSelectedFrom, preSelectedTo])

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0])
    }
  }

  const handleTranslate = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    if (!file || !sourceLanguage || !targetLanguage) return;
    setIsTranslating(true)
    setTranslatedFiles([])
    setDownloadError(null)
    
    const formData = new FormData()
    formData.append("file", file)
    formData.append("lang_in", sourceLanguage) // Send code (e.g., "Inglês")
    formData.append("lang_out", targetLanguage) // Send code (e.g., "Espanhol")

    try {
      const response = await fetch("https://api.doc-translate.com/translate", {
        method: "POST",
        body: formData,
      })

      if (!response.ok) throw new Error("Translation failed")

      const data = await response.json()
      setTranslatedFiles([
        { name: "Mono Translation", url: "https://api.doc-translate.com" + data.mono_pdf_url },
        { name: "Dual Translation", url: "https://api.doc-translate.com" + data.dual_pdf_url },
      ])
    } catch (error) {
      console.error("Translation failed:", error)
      setDownloadError("Translation failed. Please try again.")
    } finally {
      setIsTranslating(false)
    }
  }

  return (
    <div className="space-y-6">
      <Card className="border-none bg-card/50 shadow-lg">
        <CardHeader className="space-y-1 pb-4">
          <h2 className="text-xl font-semibold tracking-tight">Translate Document</h2>
          <p className="text-sm text-muted-foreground">Upload your PDF and select languages</p>
        </CardHeader>
        <form>
          <CardContent className="space-y-4 pb-0">
            <div className="grid gap-4">
              <div className="grid gap-2">
                <label className="text-sm font-medium leading-none">Source Language</label>
                <Select value={sourceLanguage} onValueChange={setSourceLanguage}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select language" />
                  </SelectTrigger>
                  <SelectContent>
                    {languages.map((lang) => (
                      <SelectItem key={lang.code} value={lang.code}>
                        {lang.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <Separator className="w-full" />
                </div>
                <div className="relative flex justify-center">
                  <div className="bg-card px-2">
                    <ArrowRight className="h-4 w-4 text-muted-foreground" />
                  </div>
                </div>
              </div>
              <div className="grid gap-2">
                <label className="text-sm font-medium leading-none">Target Language</label>
                <Select value={targetLanguage} onValueChange={setTargetLanguage}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select target language" />
                  </SelectTrigger>
                  <SelectContent>
                    {languages.map((lang) => (
                      <SelectItem key={lang.code} value={lang.code}>
                        {lang.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="grid gap-2">
              <label htmlFor="file" className="text-sm font-medium leading-none">
                Upload PDF
              </label>
              <div className="flex h-24 cursor-pointer items-center justify-center rounded-md border border-dashed bg-muted/50">
                <label htmlFor="file" className="flex cursor-pointer flex-col items-center justify-center gap-1.5">
                  <Upload className="h-6 w-6 text-muted-foreground" />
                  <span className="text-xs text-muted-foreground">
                    {file ? file.name : "Drop your file here or click to browse"}
                  </span>
                  <input id="file" type="file" accept=".pdf" className="hidden" onChange={handleFileChange} />
                </label>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex items-center justify-between pt-4">
            <p className="text-xs text-muted-foreground">Max file size: 5MB</p>
            <Button
              disabled={!file || !sourceLanguage || !targetLanguage || isTranslating}
              type="submit"
              onClick={handleTranslate}
              className={cn("gap-2", isTranslating && "animate-pulse")}
            >
              <Languages className={cn("h-4 w-4", isTranslating && "animate-spin")} />
              {isTranslating ? "Translating..." : "Translate"}
            </Button>
          </CardFooter>
        </form>
      </Card>
      {translatedFiles.length > 0 && (
        <Card className="border-none bg-card/50 shadow-lg">
        <CardHeader className="space-y-1 pb-4">
          <h2 className="text-xl font-semibold tracking-tight">Translation Complete!</h2>
          <p className="text-sm text-muted-foreground">Your translated files are ready for download:</p>
        </CardHeader>
        <CardContent className="space-y-2">
        {translatedFiles.map((file, index) => (
                <Button
                  key={index}
                  variant="outline"
                  className="w-full justify-start gap-2"
                  asChild
                >
                  <a href={file.url} download>
                    <Download className="h-4 w-4" />
                    {file.name}
                  </a>
                </Button>
          ))}
        </CardContent>
      </Card>
    )}
    {downloadError && (
      <div className="text-red-500 text-sm">{downloadError}</div>
    )}
  </div>
)}