"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Globe, Phone, Mail } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground py-2 px-0">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-0">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6">
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span>+971-504563645</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <span>info@avglobalfzc.com</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Globe className="h-4 w-4" />
            <span>Serving Globally</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-background/95 backdrop-blur-md shadow-lg" : "bg-background"
        }`}
      >
        <div className="max-w-7xl mx-auto px-0">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">AV</span>
              </div>
              <div>
                <div className="font-bold text-xl text-foreground">AV GLOBAL FZC</div>
                <div className="text-xs text-muted-foreground">Recycling Excellence</div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-foreground hover:text-primary transition-colors">
                Home
              </Link>
              <Link href="/about" className="text-foreground hover:text-primary transition-colors">
                About Us
              </Link>
              <Link href="/products" className="text-foreground hover:text-primary transition-colors">
                Products
              </Link>
              <Link href="/contact" className="text-foreground hover:text-primary transition-colors">
                Contact
              </Link>
              
            </nav>

            {/* Mobile Menu Button */}
            <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-background border-t border-border">
            <div className="px-4 sm:px-6 lg:px-8 py-4 space-y-4">
              <Link href="/" className="block text-foreground hover:text-primary transition-colors">
                Home
              </Link>
              <Link href="/about" className="block text-foreground hover:text-primary transition-colors">
                About Us
              </Link>
              <Link href="/products" className="block text-foreground hover:text-primary transition-colors">
                Products
              </Link>
              <Link href="/contact" className="block text-foreground hover:text-primary transition-colors">
                Contact
              </Link>

            </div>
          </div>
        )}
      </header>
    </>
  )
}
