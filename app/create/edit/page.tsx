"use client";
/* 
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";*/
import Image from "next/image"; 
import { getBasePath } from "@/lib/utils";

export default function EditCharacter() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] justify-items-center min-h-screen p-8 pb-20 sm:p-20  bg-black text-white">
      <main className="flex flex-col gap-8 row-start-2 items-center w-full max-w-md">
        <Image
          src={`${getBasePath()}/images/ww-logo.svg`}   
          alt="Logo"
          className="object-contain w-full"
          width={454}
          height={98}
          priority
        />
        
        <h1 className="text-3xl font-dirt text-white uppercase text-center">Edit Your Character</h1>
<p>tbd</p>
      </main>
    </div>
  );
}
