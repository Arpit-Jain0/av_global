"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Globe, CheckCircle, FileText, Truck, Handshake, Shield, Settings, Leaf, Lightbulb } from "lucide-react"

export function Leadership() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 💪 Our Strengths */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            💪 Our Strengths
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto text-pretty">
            At <span className="font-semibold text-primary">Atlas GreenTrade</span>, we combine global reach with
            technical precision to deliver reliable, high-quality scrap and chemical trading solutions.
          </p>
        </div>

        {/* Strengths List */}
        <div className="space-y-5 mb-20 max-w-3xl mx-auto">
          <div className="flex items-start gap-4">
            <Globe className="h-6 w-6 text-primary mt-1" />
            <div>
              <h4 className="font-semibold text-foreground">🌍 Global Sourcing</h4>
              <p className="text-muted-foreground ">
                Trusted suppliers across Europe, the Middle East, Far East, North & South America.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <CheckCircle className="h-6 w-6 text-primary mt-1" />
            <div>
              <h4 className="font-semibold text-foreground">✅ Verified Quality</h4>
              <p className="text-muted-foreground ">
                Every material is graded, inspected, and documented to meet international standards.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <FileText className="h-6 w-6 text-primary mt-1" />
            <div>
              <h4 className="font-semibold text-foreground">📑 Compliance Expertise</h4>
              <p className="text-muted-foreground ">
                We handle documentation with precision—ensuring full regulatory alignment and audit readiness.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Truck className="h-6 w-6 text-primary mt-1" />
            <div>
              <h4 className="font-semibold text-foreground">🚢 Smart Logistics</h4>
              <p className="text-muted-foreground ">
                Efficient logistics systems ensuring smooth, timely, and cost-effective deliveries.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Handshake className="h-6 w-6 text-primary mt-1" />
            <div>
              <h4 className="font-semibold text-foreground">🤝 Reliable Partnerships</h4>
              <p className="text-muted-foreground ">
                Long-term relationships built on trust, responsiveness, and shared success.
              </p>
            </div>
          </div>
        </div>

        {/* 🧭 Our Core Values */}
        <div
          className={`transition-all duration-1000 delay-400 ${
            isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">🧭 Our Core Values</h3>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
              At <span className="font-semibold text-primary">Atlas GreenTrade</span>, our values are more than
              principles—they’re the foundation of every shipment, partnership, and decision we make.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="hover-lift">
              <CardContent className="p-8 text-center">
                <Shield className="h-10 w-10 text-primary mx-auto mb-4" />
                <h4 className="text-xl font-bold text-foreground mb-4">🔍 Integrity & Transparency</h4>
                <p className="text-muted-foreground  text-pretty">
                  We operate with honesty, clarity, and traceability. From documentation to delivery, clients know
                  exactly what they’re getting—and why it matters.
                </p>
              </CardContent>
            </Card>

            <Card className="hover-lift">
              <CardContent className="p-8 text-center">
                <Settings className="h-10 w-10 text-primary mx-auto mb-4" />
                <h4 className="text-xl font-bold text-foreground mb-4">⚙️ Technical Excellence</h4>
                <p className="text-muted-foreground  text-pretty">
                  Rigorous standards in grading, compliance, and logistics—backed by precision and expertise.
                </p>
              </CardContent>
            </Card>

            <Card className="hover-lift">
              <CardContent className="p-8 text-center">
                <Leaf className="h-10 w-10 text-primary mx-auto mb-4" />
                <h4 className="text-xl font-bold text-foreground mb-4">🌍 Sustainability</h4>
                <p className="text-muted-foreground  text-pretty">
                  Responsible trade supporting circular economies and reducing environmental impact.
                </p>
              </CardContent>
            </Card>

            <Card className="hover-lift">
              <CardContent className="p-8 text-center">
                <Handshake className="h-10 w-10 text-primary mx-auto mb-4" />
                <h4 className="text-xl font-bold text-foreground mb-4">🤝 Partnership-Driven</h4>
                <p className="text-muted-foreground  text-pretty">
                  Long-term relationships built on trust, responsiveness, and shared goals.
                </p>
              </CardContent>
            </Card>

            <Card className="hover-lift">
              <CardContent className="p-8 text-center">
                <Lightbulb className="h-10 w-10 text-primary mx-auto mb-4" />
                <h4 className="text-xl font-bold text-foreground mb-4">📈 Innovation & Adaptability</h4>
                <p className="text-muted-foreground  text-pretty">
                  We stay ahead through continuous improvement and smarter digital solutions.
                </p>
              </CardContent>
            </Card>

            <Card className="hover-lift">
              <CardContent className="p-8 text-center">
                <Shield className="h-10 w-10 text-primary mx-auto mb-4" />
                <h4 className="text-xl font-bold text-foreground mb-4">🛡️ Compliance & Accountability</h4>
                <p className="text-muted-foreground  text-pretty">
                  Our operations align with international trade laws, environmental protocols, and ethical business
                  practices—always.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
