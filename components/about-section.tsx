"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Leaf, Target, Users, Lightbulb } from "lucide-react"

export function AboutSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-10 sm:py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-0">
        <div
          className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
        >
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-foreground mb-4 sm:mb-6 text-balance">
            About ATLAS GREEN TRADE
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-4xl mx-auto text-pretty">
            ATLAS GREEN TRADE is a versatile and proactive partner, approachable and straightforward to collaborate with for
            a circular economy initiative. We operate as a worldwide sourcing, distribution, and sales partner in the
            trade of recyclable, prime, and non-prime raw materials.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center mb-12 sm:mb-16">
          <div
            className={`transition-all duration-1000 delay-200 ${isVisible ? "animate-slide-in-left" : "opacity-0"}`}
          >
            <img
              src="/modern-sustainable-recycling-facility-with-workers.jpg"
              alt="ATLAS GREEN TRADE Operations"
              className="rounded-lg shadow-2xl w-full h-auto max-h-96 sm:max-h-none object-cover"
            />
          </div>

          <div
            className={`transition-all duration-1000 delay-400 ${isVisible ? "animate-slide-in-right" : "opacity-0"}`}
          >
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-4 sm:mb-6">
              Our Commitment to Sustainability
            </h3>
            <p className="text-base sm:text-lg text-muted-foreground mb-4 sm:mb-6 text-pretty">
              We deal in a diverse range of products, including Plastics, Rubber, Paper, Metals (both Ferrous and
              Non-Ferrous), Oleo chemicals, and Fertilizers. Most importantly, we align with our clients' priorities
              regarding the wellbeing of individuals and the environment.
            </p>
            <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8 text-pretty">
              We are deeply committed to the collection, reuse, and recycling of certain recyclable raw materials. These
              materials can be easily repaired, remanufactured, repurposed, upgraded, and ultimately reprocessed into
              new materials at the conclusion of their lifecycle.
            </p>

            <div className="space-y-4">
              <div className="flex items-start sm:items-center gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1 sm:mt-0">
                  <Leaf className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground text-sm sm:text-base">Environmental Focus</h4>
                  <p className="text-muted-foreground text-sm sm:text-base">
                    Committed to sustainable practices and circular economy
                  </p>
                </div>
              </div>
              <div className="flex items-start sm:items-center gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1 sm:mt-0">
                  <Users className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground text-sm sm:text-base">Global Partnership</h4>
                  <p className="text-muted-foreground text-sm sm:text-base">
                    Worldwide sourcing and distribution network
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Vision & Mission */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          <Card
            className={`hover-lift transition-all duration-1000 delay-600 ${isVisible ? "animate-scale-in" : "opacity-0"}`}
          >
            <CardContent className="p-6 sm:p-8">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Target className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-foreground">Our Vision</h3>
              </div>
              <p className="text-muted-foreground text-pretty text-sm sm:text-base">
              We deliver technically compliant, high-quality, and specialized scrap and chemical products to both niche and mainstream markets, 
              prioritizing quality, traceability, and long-term value over transactional volume. Our commitment lies in fostering lasting relationships through transparent operations, ethical sourcing, 
              and precision-driven logistics—ensuring every shipment upholds our core values of trust, accountability, and excellence.
              </p>
            </CardContent>
          </Card>

          <Card
            className={`hover-lift transition-all duration-1000 delay-800 ${isVisible ? "animate-scale-in" : "opacity-0"}`}
          >
            <CardContent className="p-6 sm:p-8">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Lightbulb className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-foreground">Our Mission</h3>
              </div>
              <p className="text-muted-foreground text-pretty text-sm sm:text-base">
              To deliver technically compliant, high-quality & Specialize scrap and chemical products to both niche and conventional markets, emphasizing quality, traceability, and long-term value over transactional volume. We are committed to building enduring relationships through transparent operations, ethical sourcing, 
              and precision-driven logistics—ensuring every shipment reflects our core values of trust, accountability, and excellence.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
