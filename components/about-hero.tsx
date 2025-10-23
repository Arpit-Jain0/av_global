"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Users } from "lucide-react"
import Link from "next/link"

export function AboutHero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section
      className="relative py-32 bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{
        backgroundImage: "url('/image copy.png')", 
      }}
    >
      {/* Gradient overlay for better text contrast */}
      
      {/* Optional darker layer for readability */}
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          {/* Floating Icon */}
          <div className="flex justify-center mb-8">
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center animate-float">
              <Users className="h-10 w-10 text-white" />
            </div>
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 text-balance">
            About Atlas GreenTrade
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-4xl mx-auto text-pretty">
          With over 15 years of specialized experience, ATLAS GREENTRADE is a trusted name in the recycling and chemical trading industry. We serve both niche and traditional markets with precision, integrity, and technical expertise.
          
          </p>

          {/* Button */}
          <div
            className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-300 ${
              isVisible ? "animate-fade-in-up" : "opacity-0"
            }`}
          >
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-4 bg-transparent backdrop-blur-sm"
              >
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
