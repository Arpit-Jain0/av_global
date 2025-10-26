"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, CheckCircle } from "lucide-react"

const qualityFeatures = [
  "Strict quality control processes",
  "Regular material testing and analysis",
  "Certified laboratory partnerships",
  "Traceability documentation",
  "Customer specification compliance",
  "Continuous improvement programs",
]

export function QualityAssurance() {
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
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 text-balance">Quality Assurance</h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto text-pretty">
            What is of utmost importance is Quality and Service. Trust serves as the cornerstone of commerce.
          </p>
        </div>

    

        {/* Quality Features */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div
            className={`transition-all duration-1000 delay-600 ${isVisible ? "animate-slide-in-left" : "opacity-0"}`}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Our Quality Commitment</h3>
            <p className="text-lg text-muted-foreground mb-8 text-pretty">
              Our trading firm possesses multiple quality certifications to guarantee the highest standards. These
              certifications provide our customers with the assurance that they can depend on us for reliable trading
              services.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {qualityFeatures.map((feature) => (
                <div key={feature} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground">{feature}</span>
                </div>
              ))}
            </div>

            
          </div>

          <div
            className={`transition-all duration-1000 delay-800 ${isVisible ? "animate-slide-in-right" : "opacity-0"}`}
          >
            <Card className="bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="h-8 w-8 text-primary" />
                  </div>
                  <h4 className="text-xl font-bold text-foreground mb-2">Quality Promise</h4>
                </div>

                <blockquote className="text-center text-lg text-muted-foreground italic mb-6 text-pretty">
                  "We greatly value your genuine support. The product is the cornerstone of any business, and we
                  maintain strict adherence to our quality standards."
                </blockquote>

                <div className="text-center">
                  <Badge variant="outline" className="text-primary border-primary">
                    15+ Years of Excellence
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
