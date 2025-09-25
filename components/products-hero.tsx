"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function ProductsHero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative h-[80vh] bg-gradient-to-br from-primary to-secondary overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="grid grid-cols-1 md:grid-cols-2 h-full items-center gap-8">
          {/* LEFT SIDE - Content */}
          <div
            className={`flex items-center justify-center transition-all duration-1000 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
          >
            <div className="max-w-lg">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Our Product Portfolio
              </h1>
              <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
                Comprehensive range of recyclable raw materials supporting the circular economy across multiple
                industries
              </p>
              <Link href="/contact">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-4">
                  Contact Us
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>

          {/* RIGHT SIDE - Background Image */}
          <div className="flex items-center justify-center h-full">
            <img
              src="image.jpg"
              alt="Our Products"
              className="w-full max-h-[60vh] object-contain rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
