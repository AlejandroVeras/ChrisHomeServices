"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Johnson",
    location: "Baltimore, MD",
    rating: 5,
    text: "Excellent service! They completely renovated my kitchen and the result exceeded my expectations. Very professional and punctual.",
    service: "Kitchen Remodeling",
  },
  {
    name: "Michael Davis",
    location: "Towson, MD",
    rating: 5,
    text: "Fixed a leak in my bathroom quickly and efficiently. The price was very fair and the quality of work was impeccable.",
    service: "Plumbing",
  },
  {
    name: "Jennifer Martinez",
    location: "Columbia, MD",
    rating: 5,
    text: "Painted my entire house and it looks perfect. Very careful with furniture and cleaned everything when finished. I recommend them 100%.",
    service: "Interior Painting",
  },
  {
    name: "Robert Wilson",
    location: "Annapolis, MD",
    rating: 5,
    text: "New electrical installation in my business. Very professional work, following all safety standards. Very satisfied with the results.",
    service: "Electrical Work",
  },
]

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4">What Our Customers Say</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Customer satisfaction is our best recommendation in the Baltimore area
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <Card className="bg-muted/50 border-none shadow-lg">
              <CardContent className="p-8 lg:p-12">
                <div className="text-center space-y-6">
                  <Quote className="w-12 h-12 text-accent mx-auto opacity-50" />

                  <blockquote className="text-xl lg:text-2xl text-foreground leading-relaxed">
                    "{testimonials[currentIndex].text}"
                  </blockquote>

                  <div className="flex justify-center mb-4">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  <div className="space-y-2">
                    <div className="font-semibold text-lg text-foreground">{testimonials[currentIndex].name}</div>
                    <div className="text-muted-foreground">
                      {testimonials[currentIndex].location} • {testimonials[currentIndex].service}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Navigation Buttons */}
            <Button
              variant="outline"
              size="icon"
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm"
              onClick={prevTestimonial}
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm"
              onClick={nextTestimonial}
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? "bg-accent" : "bg-muted-foreground/30"
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
