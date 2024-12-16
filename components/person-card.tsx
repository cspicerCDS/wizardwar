"use client"

import Image from "next/image"

interface PersonCardProps {
  img: string
  name: string
  description: string
}

export default function PersonCard({
  img,
  name,
  description,

}: PersonCardProps) {

  return (
    <div className="flex gap-4 mt-8">
        <Image src={img} alt={name} width="500" height="500" className="cover " />
        <div>
            <h2 className="text-xl font-bold">{name}</h2>
            <p className="mt-2 mb-4">{description}</p>
        </div>
    </div>
  )
} 

