"use client"

import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { getBasePath } from "@/lib/utils"

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-black">
      <div className="container flex h-14 max-w-screen-2xl items-center relative">
        <div className="w-10">
          <Sheet>
            <SheetTrigger className="ml-2">
              <Menu className="h-6 w-6 text-white" />
            </SheetTrigger>
            <SheetContent side="left" className="bg-black text-white">
              <SheetTitle className="hidden">Rules</SheetTitle>
              <div className="grid gap-4">
                <Link
                  href="/game/rules"
                  className="text-sm font-medium hover:underline"
                >
                  Rules
                </Link>
                <Link
                  href="/create"
                  className="text-sm font-medium hover:underline"
                >
                  Create Character
                </Link>
                <Link
                  href="/game/rules/bestiary"
                  className="text-sm font-medium hover:underline"
                >
                  Bestiary
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>

        <div className="absolute left-1/2 -translate-x-1/2">
          <Link href="/" className="flex items-center">
            <Image
              src={`${getBasePath()}/images/ww-logo.svg`}
              alt="Wizard War"
              width={150}
              height={32}
              priority
            />
          </Link>
        </div>

        <div className="w-10" />
      </div>
    </header>
  )
}