"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Package, Recycle, Factory, Leaf, Zap, Droplets } from "lucide-react"
import Link from "next/link"

const products = [
  {
    icon: Package,
    title: "Plastics",
    description:
      "R-PET, PET Scraps, LDPE, HDPE, PP, PC, and recycled granules. Complete range of plastic materials for sustainable manufacturing.",
    items: ["R-PET Bottles", "PET Flakes", "LDPE/HDPE", "PP Granules", "Engineering Plastics"],
    color: "bg-blue-500",
  },
  {
    icon: Factory,
    title: "Metals",
    description: "Both Ferrous and Non-Ferrous metals including steel scrap, aluminum scrap, and various metal alloys.",
    items: ["Steel Scrap", "Aluminum Scrap", "Copper", "Brass", "Stainless Steel"],
    color: "bg-gray-500",
  },
  {
    icon: Recycle,
    title: "Paper",
    description: "Stock lot paper raw materials and recyclables including kraft paper, OCC in rolls and bales.",
    items: ["Kraft Paper", "OCC Bales", "Mixed Paper", "Cardboard", "Newsprint"],
    color: "bg-amber-500",
  },
  {
    icon: Leaf,
    title: "Rubber",
    description: "Used inner butyl rubber tubes, crumb rubber, and various rubber compounds for recycling.",
    items: ["Butyl Tubes", "Crumb Rubber", "Tire Rubber", "Industrial Rubber", "Rubber Compounds"],
    color: "bg-green-500",
  },
  {
    icon: Droplets,
    title: "Oleo Chemicals",
    description: "Crude Glycerin, Tech Glycerin, and various oleo chemical products for industrial applications.",
    items: ["Crude Glycerin", "Tech Glycerin", "Fatty Acids", "Soap Stock", "Bio-Diesel"],
    color: "bg-purple-500",
  },
  {
    icon: Zap,
    title: "Fertilizers",
    description: "Organic fertilizers in cylindrical pellets form and liquid fertilizers for sustainable agriculture.",
    items: ["Organic Pellets", "Liquid Fertilizer", "Compost", "Bio-Fertilizer", "NPK Blends"],
    color: "bg-emerald-500",
  },
]

export function ProductsSection() {
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
    <section ref={sectionRef} className="py-16 sm:py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
        >
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-foreground mb-4 sm:mb-6 text-balance">
            Our Product Portfolio
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-4xl mx-auto text-pretty">
            We offer a diverse range of recyclable raw materials, supporting the circular economy with quality products
            across multiple industries.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {products.map((product, index) => {
            const Icon = product.icon
            return (
              <Card
                key={product.title}
                className={`hover-lift transition-all duration-1000 ${isVisible ? "animate-scale-in" : "opacity-0"}`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                    <div
                      className={`w-10 h-10 sm:w-12 sm:h-12 ${product.color} rounded-lg flex items-center justify-center flex-shrink-0`}
                    >
                      <Icon className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                    </div>
                    <CardTitle className="text-lg sm:text-xl">{product.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-muted-foreground mb-4 sm:mb-6 text-pretty text-sm sm:text-base">
                    {product.description}
                  </p>
                  <div className="space-y-2 mb-4 sm:mb-6">
                    {product.items.map((item) => (
                      <div key={item} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary rounded-full flex-shrink-0"></div>
                        <span className="text-xs sm:text-sm text-muted-foreground">{item}</span>
                      </div>
                    ))}
                  </div>
                  
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div
          className={`text-center mt-12 sm:mt-16 transition-all duration-1000 delay-600 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
        >
          <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8 max-w-3xl mx-auto text-pretty">
            "Waste is not deemed as waste until it has been fully utilized. On the other hand, it represents a resource
            filled with possibilities."
          </p>
          <Link href="/products">
            <Button size="lg" className="gradient-primary text-primary-foreground text-sm sm:text-base px-6 sm:px-8">
              View All Products
              <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
