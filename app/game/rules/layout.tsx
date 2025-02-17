"use client";

import "../../globals.css";
import Header from "@/components/header";
import ReturnToTop from "@/components/return-to-top";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function RulesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <>
      <Header />
      <div className="grid grid-rows-[auto_1fr] min-h-screen bg-black">
        {/* Top Navigation */}
        <nav className="bg-black/50 backdrop-blur-sm border-b border-white/10">
          <div className="w-screen overflow-x-auto no-scrollbar">
            <div className="flex h-16 items-center space-x-4 px-2">
              {/* <Link href="/game/rules/overview" className="text-white hover:text-gray-300 whitespace-nowrap">Overview</Link> */}
              <Link href="/game/rules/" 
             
              className={`p-2 text-white hover:text-gray-300 hover:rounded-lg whitespace-nowrap ${pathname === '/game/rules/' ? 'bg-neutral-700 rounded-lg' : 'hover:bg-neutral-800'}`}
>Rules</Link>
              <Link href="/game/rules/create/" 
                            className={`p-2 text-white hover:text-gray-300 hover:rounded-lg whitespace-nowrap ${pathname === '/game/rules/create/' ? 'bg-neutral-700 rounded-lg ' : 'hover:bg-neutral-800'}`}
>Create Character</Link>
              <Link href="/game/rules/bestiary"               
              className={`p-2 text-white hover:text-gray-300 hover:rounded-lg whitespace-nowrap ${pathname === '/game/rules/bestiary/' ? 'bg-neutral-700 rounded-lg' : 'hover:bg-neutral-800'}`}
              >Bestiary</Link>
               <Link href="/game/vault/"               
              className={`p-2 text-white hover:text-gray-300 hover:rounded-lg whitespace-nowrap ${pathname === '/game/vault/' ? 'bg-neutral-700 rounded-lg' : 'hover:bg-neutral-800'}`}
              >Vault Dwellings</Link>
            </div>
          </div>
        </nav>

        {/* Content Area with Side Navigation */}
        <div className="flex flex-row min-h-0">
          {/* Side Navigation */}
    {/*       <nav className="bg-neutral-900 p-4 w-64 hidden md:block">
            <ul className="space-y-2">
              <li>
                <Link 
                  href="/game/rules"
                  className={`block p-2 rounded ${pathname === '/game/rules' ? 'bg-neutral-700' : 'hover:bg-neutral-800'}`}
                >
                  Core Rules
                </Link>
              </li>
              <li>
                <Link 
                  href="/game/rules/bestiary"
                  className={`block p-2 rounded ${pathname === '/game/rules/bestiary' ? 'bg-neutral-700' : 'hover:bg-neutral-800'}`}
                >
                  Bestiary
                </Link>
              </li>
            </ul>
          </nav> */}

          {/* Main Content */}
          <main className="flex-1 p-4 overflow-auto">
            {children}
          </main>
        </div>
      </div>
      <ReturnToTop />
    </>
  );
} 