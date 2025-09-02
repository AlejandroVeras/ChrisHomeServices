"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone } from "lucide-react"
import Image from "next/image"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-background border-b border-border sticky top-0 z-50 backdrop-blur-sm bg-background/95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Image
              src="/chris-home-logo-updated.png"
              alt="Chris Home Services & More LLC"
              width={240}
              height={150}
              className="h-24 w-auto transition-transform duration-300 hover:scale-105"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#home"
              className="text-foreground hover:text-accent transition-all duration-300 hover:scale-105 font-medium relative group"
            >
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="#services"
              className="text-foreground hover:text-accent transition-all duration-300 hover:scale-105 font-medium relative group"
            >
              Services
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="#testimonials"
              className="text-foreground hover:text-accent transition-all duration-300 hover:scale-105 font-medium relative group"
            >
              Testimonials
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="#contact"
              className="text-foreground hover:text-accent transition-all duration-300 hover:scale-105 font-medium relative group"
            >
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
            </a>
          </nav>

          {/* Contact Info & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-accent transition-colors duration-300 cursor-pointer">
              <Phone className="w-4 h-4" />
              <span>443-717-3264</span>
            </div>
            <Button className="bg-accent hover:bg-accent/90 text-accent-foreground transition-all duration-300 hover:scale-105 hover:shadow-lg">
              Get Quote
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden transition-transform duration-300 hover:scale-110"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 rotate-180 transition-transform duration-300" />
            ) : (
              <Menu className="w-6 h-6 transition-transform duration-300" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border animate-in slide-in-from-top-2 duration-300">
            <nav className="flex flex-col space-y-4 mt-4">
              <a
                href="#home"
                className="text-foreground hover:text-accent transition-all duration-300 hover:translate-x-2 font-medium"
              >
                Home
              </a>
              <a
                href="#services"
                className="text-foreground hover:text-accent transition-all duration-300 hover:translate-x-2 font-medium"
              >
                Services
              </a>
              <a
                href="#testimonials"
                className="text-foreground hover:text-accent transition-all duration-300 hover:translate-x-2 font-medium"
              >
                Testimonials
              </a>
              <a
                href="#contact"
                className="text-foreground hover:text-accent transition-all duration-300 hover:translate-x-2 font-medium"
              >
                Contact
              </a>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground pt-2 hover:text-accent transition-colors duration-300">
                <Phone className="w-4 h-4" />
                <span>443-717-3264</span>
              </div>
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground w-full transition-all duration-300 hover:shadow-lg">
                Get Quote
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
