"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Globe, MapPin, Truck, Ship } from "lucide-react"

const regions = [
  {
    name: "Middle East",
    description: "Our headquarters in UAE serves as the hub for Middle Eastern operations",
    countries: ["UAE", "Saudi Arabia", "Qatar", "Kuwait", "Oman", "Bahrain"],
    color: "bg-red-500",
  },
  {
    name: "Europe",
    description: "Strong presence across European markets with established partnerships",
    countries: ["Germany", "Netherlands", "Belgium", "Italy", "Spain", "France"],
    color: "bg-blue-500",
  },
  {
    name: "Far East",
    description: "Extensive network covering major Asian manufacturing centers",
    countries: ["China", "India", "Thailand", "Malaysia", "Singapore", "Vietnam"],
    color: "bg-green-500",
  },
  {
    name: "North America",
    description: "Growing operations across North and South American markets",
    countries: ["United States", "Canada", "Mexico"],
    color: "bg-purple-500",
  },
  {
    name: "South America",
    description: "Key partnerships and market growth in the South American region",
    countries: ["Brazil", "Argentina", "Colombia", "Chile", "Peru", "Ecuador"],
    color: "bg-orange-500",
  },
  {
    name: "Southeast Asia",
    description: "Strategic presence in rapidly growing Southeast Asian markets",
    countries: ["Indonesia", "Philippines", "Myanmar", "Cambodia", "Laos", "Bangladesh"],
    color: "bg-teal-500",
  },
]

export function GlobalPresence() {
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
    <section ref={sectionRef} className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 text-balance">Global Presence</h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto text-pretty">
          Our strength lies in the relationships we build. We source from a trusted and strategically diversified network of suppliers across key industrial regions, ensuring consistent quality, regulatory compliance, and supply chain resilience.
          </p>
        </div>

        {/* Global Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <Card
            className={`text-center hover-lift transition-all duration-1000 ${isVisible ? "animate-scale-in" : "opacity-0"}`}
          >
            <CardContent className="p-8">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <Globe className="h-8 w-8 text-primary" />
                </div>
              </div>
              <div className="text-3xl font-bold text-primary mb-2">6</div>
              <div className="text-lg font-semibold text-foreground mb-2">Continents</div>
              <p className="text-sm text-muted-foreground">Global reach across all major regions</p>
            </CardContent>
          </Card>

          <Card
            className={`text-center hover-lift transition-all duration-1000 delay-200 ${isVisible ? "animate-scale-in" : "opacity-0"}`}
          >
            <CardContent className="p-8">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <MapPin className="h-8 w-8 text-primary" />
                </div>
              </div>
              <div className="text-3xl font-bold text-primary mb-2">50+</div>
              <div className="text-lg font-semibold text-foreground mb-2">Countries</div>
              <p className="text-sm text-muted-foreground">Active trading partnerships worldwide</p>
            </CardContent>
          </Card>

          <Card
            className={`text-center hover-lift transition-all duration-1000 delay-400 ${isVisible ? "animate-scale-in" : "opacity-0"}`}
          >
            <CardContent className="p-8">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <Ship className="h-8 w-8 text-primary" />
                </div>
              </div>
              <div className="text-3xl font-bold text-primary mb-2">100+</div>
              <div className="text-lg font-semibold text-foreground mb-2">Shipping Routes</div>
              <p className="text-sm text-muted-foreground">Comprehensive logistics network</p>
            </CardContent>
          </Card>
        </div>

        {/* Regional Presence */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regions.map((region, index) => (
            <Card
              key={region.name}
              className={`hover-lift transition-all duration-1000 ${isVisible ? "animate-scale-in" : "opacity-0"}`}
              style={{ animationDelay: `${600 + index * 100}ms` }}
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-4 h-4 ${region.color} rounded-full`}></div>
                  <h3 className="text-xl font-bold text-foreground">{region.name}</h3>
                </div>
                <p className="text-muted-foreground mb-4 text-pretty">{region.description}</p>
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-foreground">Key Markets:</h4>
                  <div className="flex flex-wrap gap-2">
                    {region.countries.map((country) => (
                      <span key={country} className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded">
                        {country}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Infrastructure */}
        <div
          className={`mt-16 transition-all duration-1000 delay-1200 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
        >
          <Card className="bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Strategic Infrastructure</h3>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
                  We have established a systematic infrastructure comprising multiple strategically chosen warehouses,
                  logistics partners, shipping lines, and relationships with various suppliers.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="flex justify-center mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">Strategic Warehouses</h4>
                  <p className="text-sm text-muted-foreground">Multiple locations for efficient distribution</p>
                </div>
                <div className="text-center">
                  <div className="flex justify-center mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Truck className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">Logistics Partners</h4>
                  <p className="text-sm text-muted-foreground">Reliable transportation networks</p>
                </div>
                <div className="text-center">
                  <div className="flex justify-center mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Ship className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">Shipping Lines</h4>
                  <p className="text-sm text-muted-foreground">Global maritime connections</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
