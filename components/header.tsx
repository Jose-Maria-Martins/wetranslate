"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronDown, Menu } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full">
      <div className="container flex h-[4.5rem] items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center space-x-2 ml-2 md:ml-4">
          <span className="text-2xl font-bold">doc-translate</span>
        </Link>
        <div className="flex items-center gap-4">
          <nav className="hidden rounded-full bg-white/95 px-6 py-2.5 shadow-sm md:flex md:items-center md:gap-8">
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium outline-none">
                Features
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start">
                <DropdownMenuItem>Accurate Translation</DropdownMenuItem>
                <DropdownMenuItem>Format Preservation</DropdownMenuItem>
                <DropdownMenuItem>Secure & Private</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Link href="/about" className="text-sm font-medium">
              About
            </Link>
          </nav>
          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
              </SheetHeader>
              <div className="mt-6 flex flex-col gap-4">
                <div className="flex flex-col gap-2 border-b pb-4">
                  <div className="px-2 text-lg font-semibold">Features</div>
                  <Link href="#" className="px-4 py-2 text-sm hover:bg-accent rounded-md">
                    Accurate Translation
                  </Link>
                  <Link href="#" className="px-4 py-2 text-sm hover:bg-accent rounded-md">
                    Format Preservation
                  </Link>
                  <Link href="#" className="px-4 py-2 text-sm hover:bg-accent rounded-md">
                    Secure & Private
                  </Link>
                </div>
                <Link href="/pricing" className="px-2 text-lg font-semibold">
                  Pricing
                </Link>
                <Link href="/about" className="px-2 text-lg font-semibold">
                  About
                </Link>
                <div className="flex flex-col gap-2 border-b pb-4">
                  <div className="px-2 text-lg font-semibold">Resources</div>
                  <Link href="#" className="px-4 py-2 text-sm hover:bg-accent rounded-md">
                    Documentation
                  </Link>
                  <Link href="#" className="px-4 py-2 text-sm hover:bg-accent rounded-md">
                    API Reference
                  </Link>
                  <Link href="#" className="px-4 py-2 text-sm hover:bg-accent rounded-md">
                    Support
                  </Link>
                </div>
                <div className="mt-4 flex flex-col gap-2">
                  <Button variant="ghost" className="w-full justify-start">
                    Sign in
                  </Button>
                  <Button className="w-full">Sign up</Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

