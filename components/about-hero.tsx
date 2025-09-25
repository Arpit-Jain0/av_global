"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Users } from "lucide-react"

export function AboutHero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative py-32 bg-gradient-to-br from-primary to-secondary overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className={`transition-all duration-1000 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <div className="flex justify-center mb-8">
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center animate-float">
              <Users className="h-10 w-10 text-white" />
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 text-balance">About AV Global FZC</h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-4xl mx-auto text-pretty">
            We are Professionals Worldwide who hold customer trust, integrity, and commitment in high regard
          </p>

          <div
            className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-300 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
          >
           
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-4 bg-transparent"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
