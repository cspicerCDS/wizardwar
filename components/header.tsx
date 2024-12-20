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
              <SheetDescription className="sr-only">
                Navigation menu for rules and character creation
              </SheetDescription>
              <div className="grid gap-4">
              <Collapsible>
  <CollapsibleTrigger className="flex items-center gap-2 group" aria-controls="rules-content" aria-expanded="false">
    Rules
    <ChevronDown className="h-4 w-4 transition-transform duration-200 group-data-[state=open]:rotate-180" aria-hidden="true" />
  </CollapsibleTrigger>
  <CollapsibleContent id="rules-content" className="flex flex-col gap-4 ml-4">
  <Link
                  href="/game/rules/"
                  className="text-sm font-medium hover:underline mt-2"
                >
                  Introduction
                </Link>
                <Link
                  href="/game/rules/attributes/"
                  className="text-sm font-medium hover:underline"
                >
                  Attributes
                </Link>
                <Link
                  href="/game/rules/species/"
                  className="text-sm font-medium hover:underline"
                >
                  Species
                </Link>
                <Link
                  href="/game/rules/classes/"
                  className="text-sm font-medium hover:underline"
                >
                  Classes
                </Link>
                <Link
                  href="/game/rules/backgrounds/"
                  className="text-sm font-medium hover:underline"
                >
                  Backgrounds
                </Link>
                <Link
                  href="/game/rules/mutations/"
                  className="text-sm font-medium hover:underline"
                >
                  Mutations
                </Link>
  </CollapsibleContent>
</Collapsible>
              
                <Link
                  href="/game/rules/create/"
                  className="text-sm font-medium hover:underline"
                >
                  Create Character
                </Link>
                <Link
                  href="/game/rules/bestiary/"
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