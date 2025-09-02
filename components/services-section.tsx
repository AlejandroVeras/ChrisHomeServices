import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Wrench, Zap, Paintbrush, Hammer, Droplets, Home, ToyBrick as Brick, Files as Tiles } from "lucide-react"

const services = [
  {
    icon: Hammer,
    title: "Drywall",
    description: "Professional drywall installation, repair, and finishing services for your home.",
    features: ["Drywall installation", "Hole repairs", "Texture matching"],
  },
  {
    icon: Wrench,
    title: "Carpentry",
    description: "Custom carpentry work including trim, doors, windows, and built-in solutions.",
    features: ["Custom trim work", "Door installation", "Window repairs"],
  },
  {
    icon: Paintbrush,
    title: "Painting",
    description: "Interior and exterior painting services with quality finishes and attention to detail.",
    features: ["Interior painting", "Exterior painting", "Color consultation"],
  },
  {
    icon: Home,
    title: "Flooring",
    description: "Flooring installation and repair services for various materials and styles.",
    features: ["Hardwood flooring", "Laminate installation", "Floor repairs"],
  },
  {
    icon: Zap,
    title: "Basic Electrical Repairs",
    description: "Basic electrical repair services to keep your home safe and functional.",
    features: ["Outlet repairs", "Switch replacement", "Light fixture installation"],
  },
  {
    icon: Droplets,
    title: "Basic Plumbing Repairs",
    description: "Basic plumbing repairs and maintenance to solve common household issues.",
    features: ["Leak repairs", "Faucet replacement", "Drain cleaning"],
  },
  {
    icon: Wrench,
    title: "Basic HVAC Repairs",
    description: "Basic HVAC repair services and ductwork modifications for improved comfort.",
    features: ["Ductwork modifications", "Filter replacement", "Basic repairs"],
  },
  {
    icon: Brick,
    title: "Masonry",
    description: "Stone, brick, block and concrete work for both repair and new construction.",
    features: ["Brick repair", "Stone work", "Concrete projects"],
  },
  {
    icon: Tiles,
    title: "Tile Work",
    description: "Professional tile installation for showers, floors, and kitchens.",
    features: ["Shower tile", "Floor tiling", "Kitchen backsplash"],
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4">Our Services</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Quality and your satisfaction is our goal for all jobs. Professional services you can trust.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-300 hover:border-accent/50 cursor-pointer"
              >
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                    <IconComponent className="w-8 h-8 text-accent group-hover:text-accent-foreground" />
                  </div>
                  <CardTitle className="text-xl font-bold text-foreground group-hover:text-accent transition-colors">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">{service.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2 text-sm">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
            Contact Us for Estimate
          </Button>
        </div>
      </div>
    </section>
  )
}
