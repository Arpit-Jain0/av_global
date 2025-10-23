"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import clsx from "clsx"

const images = [
  "/home1.jpg",
"/home2.jpg",
"/home3.jpg",
"/home4.jpg",
"/home5.jpg",
"/home6.jpg",
"/home8.jpg",
"/home9.jpg",
"/home11.jpg",
"/home12.jpg",
"/home13.jpg",
"/home14.jpg",
"/home15.jpg",
"/home16.jpg"
]

export function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 2500) // 2 seconds

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
