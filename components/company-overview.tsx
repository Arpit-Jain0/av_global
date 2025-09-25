"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Globe, Award, Users, Handshake } from "lucide-react"

const stats = [
  {
    icon: Globe,
    number: "20+",
    label: "Years Experience",
    description: "Two decades of proven experience in international trading",
  },
  {
    icon: Award,
    number: "100+",
    label: "Countries Served",
    description: "Global operations spanning multiple continents",
  },
  {
    icon: Users,
    number: "50+",
    label: "Team Members",
    description: "Highly skilled professionals with industry expertise",
  },
  {
    icon: Handshake,
    number: "1000+",
    label: "Satisfied Clients",
    description: "Long-term partnerships built on trust and quality",
  },
]

export function CompanyOverview() {
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
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 text-balance">Who Are We?</h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto text-pretty">
            We, AV International FZC, part of the AV Group, present ourselves as one of the leading trading companies in
            the UAE, with operations spanning the Middle East, Europe, the USA, Africa, the Far East, and Southeast
            Asia.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <Card
                key={stat.label}
                className={`text-center hover-lift transition-all duration-1000 ${isVisible ? "animate-scale-in" : "opacity-0"}`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <CardContent className="p-8">
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                  <div className="text-lg font-semibold text-foreground mb-2">{stat.label}</div>
                  <p className="text-sm text-muted-foreground text-pretty">{stat.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Company Description */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div
            className={`transition-all duration-1000 delay-800 ${isVisible ? "animate-slide-in-left" : "opacity-0"}`}
          >
            <img
              src="/av-global-team-office-meeting.jpg"
              alt="AV Global FZC Team"
              className="rounded-lg shadow-2xl w-full h-auto"
            />
          </div>

          <div
            className={`transition-all duration-1000 delay-1000 ${isVisible ? "animate-slide-in-right" : "opacity-0"}`}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Our Strategy & Infrastructure</h3>
            <p className="text-lg text-muted-foreground mb-6 text-pretty">
              Our strategy at AV is to enhance the value chain between producers and end-users. We have established a
              systematic infrastructure comprising multiple strategically chosen warehouses, logistics partners,
              shipping lines, and relationships with various suppliers across Europe, the Middle East, Far East, South
              America, and Canada.
            </p>
            <p className="text-lg text-muted-foreground mb-8 text-pretty">
              We are a small staff team of highly skilled professionals based on product experience of more than one
              decade. Our vibrant company places a high value on business ethics and has carved out a niche for itself
              by providing all of its clients around the world with the best services available.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Complete Recycling Principle</h4>
                  <p className="text-muted-foreground text-sm">
                    We send scraps to recyclers and purchase their reprocessed output as raw material for new products
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Global Network</h4>
                  <p className="text-muted-foreground text-sm">
                    Strategic partnerships across multiple continents for comprehensive supply chain coverage
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Value Addition</h4>
                  <p className="text-muted-foreground text-sm">
                    Focus on creating added value in connections between producers and end-users
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
