"use client"

import { useEffect, useRef, useState } from "react"
import { Leaf, Target, Users, Lightbulb } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Globe, Award, Handshake, Recycle, Truck, FileText  } from "lucide-react"

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
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            Our Commitment to Sustainability
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto text-pretty">
            At <span className="font-semibold text-primary">Atlas GreenTrade</span>, sustainability is not a checkbox—it’s our foundation.
            As a next-generation scrap and chemical trading company, we are redefining how industrial waste is valued,
            moved, and repurposed across global markets.
            Our operations are built on a deep understanding of global supply chains, regulatory compliance, and sustainable resource management. We specialize in sourcing, processing, and supplying a wide range of industrial-grade materials.
          </p>
        </div>

        <div className={`max-w-5xl mx-auto mb-20 transition-all duration-1000 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <h3 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-12">
            ♻️ Principles That Drive Us
          </h3>

          <div className="space-y-10">
            {[
              {
                icon: Recycle,
                title: "Circular Economy Leadership",
                desc: "We champion the reintegration of scrap into manufacturing cycles, reducing landfill dependency and conserving raw materials.",
              },
              {
                icon: Globe,
                title: "Ethical Sourcing",
                desc: "Every shipment is vetted for origin, compliance, and environmental impact. We work only with transparent and traceable partners.",
              },
              {
                icon: Truck,
                title: "Carbon-Conscious Logistics",
                desc: "We optimize routes, containers, and digital workflows to reduce emissions and minimize operational waste.",
              },
              {
                icon: FileText,
                title: "Regulatory Excellence",
                desc: "We comply with the Basel Convention, ISPM-15, and regional waste laws to ensure global compliance and accountability.",
              },
              {
                icon: Lightbulb,
                title: "Innovation in Waste Valorization",
                desc: "We invest in technologies that transform scrap into high-value industrial inputs—turning waste into opportunity.",
              },
            ].map(({ icon: Icon, title, desc }, i) => (
              <div
                key={title}
                className={`flex items-start gap-6 transition-all duration-1000 ${
                  isVisible ? "animate-slide-in-up" : "opacity-0"
                }`}
                style={{ animationDelay: `${i * 150}ms` }}
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-foreground mb-1">{title}</h4>
                  <p className="text-muted-foreground text-sm text-pretty">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Company Description */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div
            className={`transition-all duration-1000 delay-800 ${isVisible ? "animate-slide-in-left" : "opacity-0"}`}
          >
            <img
              src="/image.png"
              alt="ATLAS GREENTRADE Team"
              className="rounded-lg shadow-2xl w-full h-auto"
            />
          </div>

          <div
            className={`transition-all duration-1000 delay-1000 ${isVisible ? "animate-slide-in-right" : "opacity-0"}`}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Our Strategy & Infrastructure</h3>
            <p className="text-lg text-muted-foreground mb-6 text-pretty">
            We believe that operational excellence begins with strategic clarity and robust infrastructure. 
            Our approach is built on precision, agility, and long-term value creation.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Market Diversification</h4>
                  <p className="text-muted-foreground text-sm">
                  We serve both niche and mainstream sectors, balancing high-spec chemical streams with bulk scrap flows to ensure resilience and reach.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Client-Centric Partnerships</h4>
                  <p className="text-muted-foreground text-sm">
                  We tailor solutions to each client’s operational and regulatory needs, offering flexible terms, transparent communication, and technical support
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Quality-First Trading</h4>
                  <p className="text-muted-foreground text-sm">
                  Every transaction is backed by rigorous documentation, technical validation, and compliance audits—ensuring trust across borders.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Digital Integration</h4>
                  <p className="text-muted-foreground text-sm">
                  Our workflows are powered by smart platforms for container tracking, document comparison, and real-time logistics visibility.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
        <div className="grid grid-cols-1 gap-8 mt-12">
          <Card
            className={`hover-lift transition-all duration-1000 delay-600 ${
              isVisible ? "animate-scale-in" : "opacity-0"
            }`}
          >
            <CardContent className="p-6 sm:p-8">
              <div className="flex flex-col items-center gap-4 mb-4 sm:mb-6 text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Target className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-foreground">Our Vision</h3>
              </div>
              <p className="text-muted-foreground text-pretty text-sm sm:text-base">
  To become a globally respected trading enterprise that redefines industrial value through:
</p>

<ul className="list-disc list-inside mt-4 space-y-2 text-muted-foreground text-sm sm:text-base">
  <li>
    <strong>Market balance:</strong> Strategically serving specialized and mainstream sectors with performance-validated materials
  </li>
  <li>
    <strong>Quality elevation:</strong> Upholding rigorous standards of product integrity, compliance, and technical excellence
  </li>
  <li>
    <strong>Relational capital:</strong> Building enduring partnerships rooted in trust, responsiveness, and shared growth
  </li>
  <li>
    <strong>Diversified reach:</strong> Expanding across geographies and industries while maintaining operational depth
  </li>
  <li>
    <strong>Ethical governance:</strong> Embedding sustainability, transparency, and professional ethics into every facet of our business
  </li>
  <li>
    <strong>Circular innovation:</strong> Advancing a recycling economy that connects raw material demand with resource protection—minimizing waste and maximizing industrial efficiency
  </li>
</ul>

<p className="text-muted-foreground text-pretty text-sm sm:text-base mt-4">
  We envision a future where our company is not just a supplier—but a strategic enabler of industrial transformation, known for its technical acumen, relational strength, and unwavering commitment to sustainable value creation.
</p>

            </CardContent>
          </Card>

          {/* Mission */}
          <Card
            className={`hover-lift transition-all duration-1000 delay-800 ${
              isVisible ? "animate-scale-in" : "opacity-0"
            }`}
          >
            <CardContent className="p-6 sm:p-8">
              <div className="flex flex-col items-center gap-4 mb-4 sm:mb-6 text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Lightbulb className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-foreground">Our Mission</h3>
              </div>
              <p className="text-muted-foreground text-pretty text-sm sm:text-base">
  Our mission is to deliver technically compliant, high-quality, and specialized scrap and chemical products to both niche and mainstream markets. We emphasize quality, traceability, and long-term value over transactional volume—ensuring every shipment meets rigorous technical, environmental, and performance standards.
</p>

<p className="text-muted-foreground text-pretty text-sm sm:text-base mt-4">
  We are committed to forging resilient, trust-based partnerships across industries and geographies through transparent operations, ethical sourcing, and precision-driven logistics. Our goal is not only to meet demand, but to anticipate it—empowering clients with dependable supply chains, real-time responsiveness, and value-rich solutions tailored to evolving industrial needs.
</p>

<p className="text-muted-foreground text-pretty text-sm sm:text-base mt-4">
  Through our continuous investment in operational innovation, global market intelligence, and compliance excellence, we enable sustainable industrial growth while actively reducing waste, emissions, and inefficiencies. Our teams are driven by purpose and accountability—ensuring every action we take reflects our unwavering commitment to environmental responsibility, professional ethics, and technical advancement.
</p>

<p className="text-muted-foreground text-pretty text-sm sm:text-base mt-4">
  Above all, our mission is to be more than a materials supplier—we strive to be a strategic partner that empowers transformation across industries, connects recovery with opportunity, and advances a circular economy where performance, responsibility, and impact coexist.
</p>

            </CardContent>
          </Card>
          </div>
      </div>
    </section>
  )
}
