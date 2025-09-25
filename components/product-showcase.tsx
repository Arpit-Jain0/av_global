"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle, Award, Globe, Recycle } from "lucide-react"
import Link from "next/link"

const showcaseItems = [
  {
    title: "R-PET Excellence",
    description: "Transforming used PET bottles into premium-grade recyclate for food industry and commercial sectors",
    image: "/download.jpg",
    features: ["Food Grade Quality", "Hot Wash Process", "Clear & Colored Options", "Various Viscosities"],
  },
  {
    title: "Metal Recovery",
    description: "Comprehensive metal recycling solutions including ferrous and non-ferrous materials",
    image: "/metals.jpg",
    features: ["HMS 1&2 Grade", "Aluminum UBC", "Copper Wire", "Stainless Steel"],
  },
  {
    title: "Paper Solutions",
    description: "High-quality paper waste materials for sustainable paper manufacturing",
    image: "/paper.jpg",
    features: ["OCC Grade 11&12", "Mixed Paper", "Kraft Paper", "Specialty Grades"],
  },
]

const strengths = [
  {
    icon: Award,
    title: "Sourcing Experts",
    description: "Seasoned specialists in plastic scrap and recycled raw materials with deep industry knowledge",
  },
  {
    icon: Globe,
    title: "Professional Team",
    description: "Highly skilled professionals with expertise in industry complexities and customer needs",
  },
  {
    icon: CheckCircle,
    title: "Best Products & Services",
    description: "Committed to delivering finest products with strict adherence to quality standards",
  },
  {
    icon: Recycle,
    title: "Added Value",
    description: "Creating value connections between producers and end-users as a Value Adding Partner",
  },
]

export function ProductShowcase() {
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
        {/* Product Showcase */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 text-balance">Product Showcase</h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto text-pretty">
            Discover our flagship products that exemplify our commitment to quality and sustainability
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {showcaseItems.map((item, index) => (
            <Card
              key={item.title}
              className={`hover-lift overflow-hidden p-0 transition-all duration-1000 ${isVisible ? "animate-scale-in" : "opacity-0"}`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-muted-foreground mb-4 text-pretty">{item.description}</p>
                <div className="space-y-2 mb-6">
                  {item.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
                
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Our Strengths */}
        <div
          className={`text-center mb-16 transition-all duration-1000 delay-600 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">Our Strengths</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Built on fundamental principles centered on sustainability, quality, and dedication
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {strengths.map((strength, index) => {
            const Icon = strength.icon
            return (
              <Card
                key={strength.title}
                className={`text-center hover-lift transition-all duration-1000 delay-800 ${isVisible ? "animate-scale-in" : "opacity-0"}`}
                style={{ animationDelay: `${800 + index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-3">{strength.title}</h3>
                  <p className="text-muted-foreground text-sm text-pretty">{strength.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
