"use client"

import { useEffect, useState } from "react"
import { Mail } from "lucide-react"

export function ContactHero() {
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
              <Mail className="h-10 w-10 text-white" />
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 text-balance">Contact Us</h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-4xl mx-auto text-pretty">
            Get in touch with our team for inquiries about products, partnerships, or any questions about sustainable
            materials trading
          </p>

          <div className={`transition-all duration-1000 delay-300 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
            <p className="text-lg text-white/80 max-w-2xl mx-auto text-pretty">
              We do not change our bank details. Please contact customer service for any banking inquiries.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
