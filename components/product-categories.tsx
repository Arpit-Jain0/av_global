"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Package, Factory, Recycle, Leaf, Droplets, Zap } from "lucide-react"

const productCategories = [
  {
    icon: Package,
    title: "Plastics & Polymers",
    description: "Complete range of recycled and virgin plastic materials for sustainable manufacturing",
    color: "bg-blue-500",
    products: [
      {
        name: "R-PET (Recycled PET)",
        description: "Premium-grade recycled PET from used bottles, suitable for food industry and commercial sectors",
        specifications: ["Food Grade", "Clear & Colored", "Hot Wash Available", "Various Viscosities"],
      },
      {
        name: "PET Scrap",
        description: "Including bottles, fines, lumps, flakes, preforms, regrind, popcorn, sheets and rolls",
        specifications: ["Bottles", "Flakes", "Preforms", "Sheets & Rolls"],
      },
      {
        name: "Near Prime/Off Grade",
        description: "LDPE, LLDPE, HDPE, PP & PC materials at competitive prices",
        specifications: ["LDPE", "LLDPE", "HDPE", "PP", "PC"],
      },
      {
        name: "Regrinds & Recycled Granules",
        description: "PE, PP, PE-PP Mix, PS & PC recycled materials",
        specifications: ["PE Regrind", "PP Granules", "Mixed Materials", "PS & PC"],
      },
    ],
  },
  {
    icon: Factory,
    title: "Metals & Alloys",
    description: "Ferrous and non-ferrous metals for industrial applications and recycling",
    color: "bg-gray-500",
    products: [
      {
        name: "Steel Scrap",
        description: "High-quality ferrous metal scrap including HMS, PNS, and various steel grades",
        specifications: ["HMS 1&2", "PNS", "Shredded Steel", "Plate & Structural"],
      },
      {
        name: "Aluminum Scrap",
        description: "Various grades of aluminum scrap for recycling and reprocessing",
        specifications: ["UBC", "Extrusion", "Wire", "Mixed Aluminum"],
      },
      {
        name: "Copper & Brass",
        description: "Non-ferrous metals including copper wire, brass, and bronze materials",
        specifications: ["Copper Wire", "Brass Scrap", "Bronze", "Mixed Copper"],
      },
      {
        name: "Stainless Steel",
        description: "Various grades of stainless steel scrap for specialized applications",
        specifications: ["304 Grade", "316 Grade", "Mixed SS", "Turnings"],
      },
    ],
  },
  {
    icon: Recycle,
    title: "Paper & Cardboard",
    description: "Stock lot paper materials and recyclables for paper industry",
    color: "bg-amber-500",
    products: [
      {
        name: "OCC (Old Corrugated Cardboard)",
        description: "High-quality corrugated cardboard in bales for paper manufacturing",
        specifications: ["Grade 11", "Grade 12", "Mixed OCC", "Baled & Loose"],
      },
      {
        name: "Mixed Paper",
        description: "Various grades of mixed paper waste for recycling",
        specifications: ["Sorted Office Paper", "Mixed Magazines", "Newspaper", "Book Paper"],
      },
      {
        name: "Kraft Paper",
        description: "Stock lot kraft paper materials in rolls and sheets",
        specifications: ["Brown Kraft", "White Kraft", "Rolls", "Sheets"],
      },
      {
        name: "Specialty Papers",
        description: "Various specialty paper grades for specific applications",
        specifications: ["Coated Paper", "Newsprint", "Tissue Paper", "Packaging Paper"],
      },
    ],
  },
  {
    icon: Leaf,
    title: "Rubber Materials",
    description: "Used rubber materials and compounds for recycling and reprocessing",
    color: "bg-green-500",
    products: [
      {
        name: "Butyl Rubber Tubes",
        description: "Used inner butyl rubber tubes from tires for recycling",
        specifications: ["Car Tubes", "Truck Tubes", "Motorcycle Tubes", "Clean & Sorted"],
      },
      {
        name: "Crumb Rubber",
        description: "Ground rubber from tire recycling for various applications",
        specifications: ["Fine Mesh", "Coarse Mesh", "Steel-Free", "Fiber-Free"],
      },
      {
        name: "Tire Rubber",
        description: "Whole tires and tire components for recycling",
        specifications: ["Passenger Tires", "Truck Tires", "OTR Tires", "Tire Chips"],
      },
      {
        name: "Industrial Rubber",
        description: "Various industrial rubber compounds and materials",
        specifications: ["Conveyor Belts", "Rubber Sheets", "Gaskets", "Seals"],
      },
    ],
  },
  {
    icon: Droplets,
    title: "Oleo Chemicals",
    description: "Crude and refined glycerin and other oleo chemical products",
    color: "bg-purple-500",
    products: [
      {
        name: "Crude Glycerin",
        description: "Raw glycerin from biodiesel production for industrial use",
        specifications: ["80% Purity", "85% Purity", "Methanol Free", "Various Origins"],
      },
      {
        name: "Technical Glycerin",
        description: "Refined glycerin for technical and industrial applications",
        specifications: ["95% Purity", "99% Purity", "USP Grade", "Kosher Certified"],
      },
      {
        name: "Fatty Acids",
        description: "Various fatty acids for industrial and chemical applications",
        specifications: ["Oleic Acid", "Stearic Acid", "Palmitic Acid", "Mixed Fatty Acids"],
      },
      {
        name: "Soap Stock",
        description: "Soap stock and acid oil from vegetable oil refining",
        specifications: ["Soybean", "Palm", "Sunflower", "Mixed Origins"],
      },
    ],
  },
  {
    icon: Zap,
    title: "Organic Fertilizers",
    description: "Sustainable fertilizer solutions for modern agriculture",
    color: "bg-emerald-500",
    products: [
      {
        name: "Organic Pellets",
        description: "Cylindrical organic fertilizer pellets for easy application",
        specifications: ["NPK Balanced", "Slow Release", "Organic Certified", "Various Sizes"],
      },
      {
        name: "Liquid Fertilizer",
        description: "Concentrated liquid organic fertilizers for direct application",
        specifications: ["Foliar Feed", "Root Application", "Organic Certified", "Custom Blends"],
      },
      {
        name: "Compost",
        description: "High-quality compost from organic waste materials",
        specifications: ["Mature Compost", "Screened", "Pathogen Free", "Various Grades"],
      },
      {
        name: "Bio-Fertilizer",
        description: "Microbial fertilizers for enhanced plant growth",
        specifications: ["Nitrogen Fixing", "Phosphate Solubilizing", "Growth Promoting", "Soil Conditioning"],
      },
    ],
  },
]

export function ProductCategories() {
  const [isVisible, setIsVisible] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState(0)
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
    <section ref={sectionRef} className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 text-balance">Product Categories</h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto text-pretty">
            Explore our comprehensive range of recyclable raw materials, each category designed to support sustainable
            manufacturing and circular economy principles.
          </p>
        </div>

        {/* Category Tabs */}
        <div
          className={`flex flex-wrap justify-center gap-4 mb-12 transition-all duration-1000 delay-200 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
        >
          {productCategories.map((category, index) => {
            const Icon = category.icon
            return (
              <button
                key={category.title}
                onClick={() => setSelectedCategory(index)}
                className={`flex items-center gap-3 px-6 py-3 rounded-lg transition-all duration-300 ${
                  selectedCategory === index
                    ? "bg-primary text-primary-foreground shadow-lg"
                    : "bg-card text-card-foreground hover:bg-primary/10"
                }`}
              >
                <Icon className="h-5 w-5" />
                <span className="font-medium">{category.title}</span>
              </button>
            )
          })}
        </div>

        {/* Selected Category Details */}
        <div className={`transition-all duration-1000 delay-400 ${isVisible ? "animate-scale-in" : "opacity-0"}`}>
          <Card className="mb-8">
            <CardHeader>
              <div className="flex items-center gap-4">
                <div
                  className={`w-16 h-16 ${productCategories[selectedCategory].color} rounded-lg flex items-center justify-center`}
                >
                  {(() => {
                    const Icon = productCategories[selectedCategory].icon
                    return <Icon className="h-8 w-8 text-white" />
                  })()}
                </div>
                <div>
                  <CardTitle className="text-2xl">{productCategories[selectedCategory].title}</CardTitle>
                  <p className="text-muted-foreground">{productCategories[selectedCategory].description}</p>
                </div>
              </div>
            </CardHeader>
          </Card>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {productCategories[selectedCategory].products.map((product, index) => (
              <Card key={product.name} className="hover-lift">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-3">{product.name}</h3>
                  <p className="text-muted-foreground mb-4 text-pretty">{product.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {product.specifications.map((spec) => (
                      <Badge key={spec} variant="secondary" className="text-xs">
                        {spec}
                      </Badge>
                    ))}
                  </div>
                  
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
