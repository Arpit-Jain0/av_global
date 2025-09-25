"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Target, Lightbulb, CheckCircle } from "lucide-react"

const coreValues = [
  "Experienced professionals with industry expertise",
  "Superior products with strict quality standards",
  "Exceptional services with customer focus",
  "Reliable partnerships built on trust",
  "Cost-effective solutions for all clients",
]

const fourTs = [
  {
    title: "Tonnage",
    description: "Handling substantial volumes to meet global demand",
  },
  {
    title: "Technical Knowhow",
    description: "Deep expertise in materials and processes",
  },
  {
    title: "Technology",
    description: "Advanced systems for efficient operations",
  },
  {
    title: "Team",
    description: "Skilled professionals driving excellence",
  },
]

export function VisionMission() {
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
    <section ref={sectionRef} className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 text-balance">Vision & Mission</h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto text-pretty">
            Our commitment to excellence drives everything we do, from our vision for the future to our daily mission
          </p>
        </div>

        {/* Vision & Mission Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <Card className={`hover-lift transition-all duration-1000 ${isVisible ? "animate-scale-in" : "opacity-0"}`}>
            <CardContent className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Our Vision</h3>
              </div>
              <p className="text-muted-foreground mb-6 text-pretty">
                Our aim is to become the most trusted supplier and reliable service provider in the regions we operate.
                Our primary goal is to achieve total client satisfaction, and we empower ourselves with a vision to
                excel through exceptional teamwork and a commitment to quality in all our endeavors.
              </p>
              <p className="text-muted-foreground text-pretty">
                We strive to make a modest contribution to preserving our shared planet for future generations by
                transforming waste into renewed raw materials, adhering to the principle of recycling.
              </p>
            </CardContent>
          </Card>

          <Card
            className={`hover-lift transition-all duration-1000 delay-200 ${isVisible ? "animate-scale-in" : "opacity-0"}`}
          >
            <CardContent className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <Lightbulb className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Our Mission</h3>
              </div>
              <p className="text-muted-foreground mb-6 text-pretty">
                It is our objective to fulfill our clients' requirements through innovative solutions while providing
                value for their investment, bolstered by our industry knowledge, market intelligence, and expertise.
              </p>
              <p className="text-muted-foreground text-pretty">
                We are dedicated to advancing our business in alignment with ecological and economic sustainability,
                ensuring that every partnership contributes to a circular economy.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* The 4Ts */}
        <div
          className={`mb-16 transition-all duration-1000 delay-400 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Our Mission: The 4Ts</h3>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
              Our Mission relies on 4Ts namely Tonnage, Technical knowhow, Technology and Team. The goal of all have
              been underlined in phases in a time bound manner.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {fourTs.map((item, index) => (
              <Card
                key={item.title}
                className={`text-center hover-lift transition-all duration-1000 ${isVisible ? "animate-scale-in" : "opacity-0"}`}
                style={{ animationDelay: `${600 + index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-primary-foreground font-bold text-lg">{item.title[0]}</span>
                  </div>
                  <h4 className="text-lg font-bold text-foreground mb-2">{item.title}</h4>
                  <p className="text-sm text-muted-foreground text-pretty">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Core Values */}
        <div className={`transition-all duration-1000 delay-800 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Our Core Values</h3>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
              These represent our fundamental principles centered on sustainability, quality, and dedication
            </p>
          </div>

          <Card className="max-w-4xl mx-auto">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {coreValues.map((value, index) => (
                  <div key={value} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">{value}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
