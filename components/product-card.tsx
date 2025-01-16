"use client"

import Image from "next/image"
import {Badge} from "@/components/ui/badge"

interface ProductCardProps {
  url: string
  img: string
  name: string
  description?: string
  price: number | string
  discount?: number
  tags?: string[]
}

export default function ProductCard({
  url,
  img,
  name,
  description,
  price,
  discount,
  tags,
}: ProductCardProps) {
  const calculateDiscountedPrice = (originalPrice: number | string, discount: number) => {
    const numPrice = typeof originalPrice === 'string' ? parseFloat(originalPrice) : originalPrice;
    return (numPrice * (1 - discount / 100)).toFixed(2);
  };

  return (
    <a href={url} className="flex flex-col group cursor-pointer ">
      <div className="relative overflow-hidden rounded-lg">
        <Image 
          src={img} 
          alt={name} 
          width="400" 
          height="300" 
          className="aspect-square object-cover w-full h-full max-h-[275px] transition-transform duration-300 ease-in-out group-hover:scale-110" 
        />
        {discount && (
          <div className="absolute bottom-0 right-0">
            <div className="text-sm text-neutral-800 bg-neutral-200 p-2 capitalize">{discount}% off</div>
        </div>
      )}
      </div>
        <div className="flex content-between justify-between">
            <div className="font-bold">{name}</div>
            <div className="flex gap-2 items-center">
              {discount ? (
                <>
                  <span className="line-through text-neutral-400">${price}</span>
                  <span className="font-bold">${calculateDiscountedPrice(price, discount)}</span>
                </>
              ) : (
                <span>${price}</span>
              )}
            </div>
            
        </div>
        {description && (
        <div className="flex gap-2 mt-2">
            <div className="text-sm text-neutral-600 capitalize">{description}</div>
        </div>
        )}
        {tags && (
        <div className="flex gap-2 mt-2">
                {tags?.map((tag) => (
                    <Badge key={tag} className="text-[12px] font-normal" variant="outline">{tag}</Badge>
                ))}
        </div>
        )}  
        
    </a>
  )
} 

