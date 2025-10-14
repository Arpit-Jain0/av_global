"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import clsx from "clsx"

const images = [
  "/fnf1.png",
  "/fnf4.png",
 "/metal_products2.png",
 "/metal_products3.png",
 "/fnf6.png",
 "/pc1.png",
 "/plastic_products1.png"
]

export function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 2000) // 2 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative w-full h-[500px] sm:h-[600px] overflow-hidden rounded-lg shadow-lg">

      {images.map((src, index) => (
        <Image
          key={index}
          src={src}
          alt={`Slide ${index + 1}`}
          fill
          className={clsx(
            "absolute inset-0 object-cover transition-opacity duration-1000 ease-in-out",
            {
              "opacity-100 z-10": index === currentIndex,
              "opacity-0 z-0": index !== currentIndex,
            }
          )}
        />
      ))}
    </div>
  )
}
