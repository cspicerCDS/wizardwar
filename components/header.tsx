import React from 'react'
import Image from 'next/image'
import { getBasePath } from "@/lib/utils";
import Link from 'next/link';

const header = () => {
  return (
    <header className="bg-black flex justify-center p-3">
    <Link href="/" className="bg-black flex justify-center p-3">
    <Image
          src={`${getBasePath()}/images/ww-logo.svg`}
          alt="Logo"
          className="object-contain w-1/2"
          width={454}
          height={98}
          priority
        />
        </Link>
    </header>
  )
}

export default header