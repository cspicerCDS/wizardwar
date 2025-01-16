"use client"

import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from "@/components/ui/sheet"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { Menu, ChevronDown } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { getBasePath } from "@/lib/utils"
//import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs"
import { useState } from "react"


export default function Header() {
  const [isSheetOpen, setIsSheetOpen] = useState(false)

  const handleLinkClick = () => {
    setIsSheetOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-black">
      <div className="container flex h-14 max-w-screen-2xl items-center relative">
        <div className="w-10">
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger className="ml-2">
              <Menu className="h-6 w-6 text-white" />
            </SheetTrigger>
            <SheetContent side="left" className="bg-black text-white">
              <SheetTitle className="hidden">Rules</SheetTitle>
              <SheetDescription className="sr-only">
                Navigation menu for rules and character creation
              </SheetDescription>
              <div className="grid gap-4">
                <Collapsible>
                  <CollapsibleTrigger className="flex items-center gap-2 group">
                    Rules
                    <ChevronDown className="h-4 w-4 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                  </CollapsibleTrigger>
                  <CollapsibleContent id="rules-content" className="flex flex-col gap-4 ml-4">
                    <Link
                      href="/game/rules/"
                      className="text-sm font-medium hover:underline mt-2"
                      onClick={handleLinkClick}
                    >
                      Introduction
                    </Link>
                    <Link
                      href="/game/rules/attributes/"
                      className="text-sm font-medium hover:underline"
                      onClick={handleLinkClick}
                    >
                      Attributes
                    </Link>
                    <Link
                      href="/game/rules/species/"
                      className="text-sm font-medium hover:underline"
                      onClick={handleLinkClick}
                    >
                      Species
                    </Link>
                    <Link
                      href="/game/rules/classes/"
                      className="text-sm font-medium hover:underline"
                      onClick={handleLinkClick}
                    >
                      Classes
                    </Link>
                    <Link
                      href="/game/rules/backgrounds/"
                      className="text-sm font-medium hover:underline"
                      onClick={handleLinkClick}
                    >
                      Backgrounds
                    </Link>
                    <Link
                      href="/game/rules/mutations/"
                      className="text-sm font-medium hover:underline"
                      onClick={handleLinkClick}
                    >
                      Mutations
                    </Link>
                  </CollapsibleContent>
                </Collapsible>
                
                <Link
                  href="/game/rules/create/"
                  className="text-sm font-medium hover:underline"
                  onClick={handleLinkClick}
                >
                  Create Character
                </Link>
                <Link
                  href="/game/vault/"
                  className="text-sm font-medium hover:underline"
                  onClick={handleLinkClick}
                >
                  
                  Vault Dwellings
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

        <div className="ml-auto mr-2">
        {/*   <SignedOut>
            <SignInButton mode="modal" className="text-white" />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn> */}
        </div>
      </div>
    </header>
  )
}