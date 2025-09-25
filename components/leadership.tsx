"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Award, TrendingUp } from "lucide-react"

export function Leadership() {
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
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 text-balance">Leadership & Our Journey</h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto text-pretty">
            Led by experienced professionals with decades of industry expertise, driving innovation in sustainable
            materials trading
          </p>
        </div>

        {/* Leadership Philosophy */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className={`transition-all duration-1000 ${isVisible ? "animate-slide-in-left" : "opacity-0"}`}>
            <img
              src="/professional-business-team-meeting.jpg"
              alt="AV Global Leadership Team"
              className="rounded-lg shadow-2xl w-full h-auto"
            />
          </div>

          <div
            className={`transition-all duration-1000 delay-200 ${isVisible ? "animate-slide-in-right" : "opacity-0"}`}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Our Leadership Philosophy</h3>
            <p className="text-lg text-muted-foreground mb-6 text-pretty">
              We are a small staff team of highly skilled professionals based on product experience of more than one
              decade. Our leadership team combines deep industry knowledge with innovative thinking to drive sustainable
              growth.
            </p>
            <p className="text-lg text-muted-foreground mb-8 text-pretty">
              Our vibrant company places a high value on business ethics and has carved out a niche for itself by
              providing all of its clients around the world with the best services available.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Team Excellence</h4>
                  <p className="text-muted-foreground text-sm">Highly skilled professionals with decade+ experience</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Business Ethics</h4>
                  <p className="text-muted-foreground text-sm">High value on integrity and ethical practices</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Global Excellence</h4>
                  <p className="text-muted-foreground text-sm">Best services to clients worldwide</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Journey Timeline */}
        <div className={`transition-all duration-1000 delay-400 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Our Journey</h3>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
              Two decades of growth, innovation, and commitment to sustainable materials trading
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="hover-lift">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-primary-foreground font-bold text-xl">1</span>
                </div>
                <h4 className="text-xl font-bold text-foreground mb-4">Foundation</h4>
                <p className="text-muted-foreground mb-4 text-pretty">
                  Established as a trading company in UAE with focus on recyclable materials and sustainable practices
                </p>
                <Badge variant="secondary">2000s</Badge>
              </CardContent>
            </Card>

            <Card className="hover-lift">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-primary-foreground font-bold text-xl">2</span>
                </div>
                <h4 className="text-xl font-bold text-foreground mb-4">Global Expansion</h4>
                <p className="text-muted-foreground mb-4 text-pretty">
                  Extended operations across Middle East, Europe, Far East, Americas, and Africa with strategic
                  partnerships
                </p>
                <Badge variant="secondary">2010s</Badge>
              </CardContent>
            </Card>

            <Card className="hover-lift">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-primary-foreground font-bold text-xl">3</span>
                </div>
                <h4 className="text-xl font-bold text-foreground mb-4">Innovation & Growth</h4>
                <p className="text-muted-foreground mb-4 text-pretty">
                  Leading sustainable materials trading with advanced technology and comprehensive product portfolio
                </p>
                <Badge variant="secondary">2020s</Badge>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Work with Us */}
        {/* <div
          className={`mt-16 transition-all duration-1000 delay-800 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
        >
          <Card className="bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Work with Us</h3>
              <p className="text-lg text-muted-foreground mb-6 max-w-3xl mx-auto text-pretty">
                Join our team of professionals and be part of the sustainable materials revolution. We offer exciting
                career opportunities for talented individuals.
              </p>
              <Badge variant="outline" className="text-primary border-primary">
                Job Openings Available
              </Badge>
            </CardContent>
          </Card>
        </div> */}
      </div>
    </section>
  )
}
