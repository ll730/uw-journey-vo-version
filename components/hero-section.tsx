import Link from "next/link"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                Welcome to YourBrand
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Your compelling tagline goes here. Describe what makes your brand unique and why visitors should care.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild size="lg">
                <Link href="#features">Get Started</Link>
              </Button>
              <Button variant="outline" size="lg">
                Learn More
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative h-[300px] w-full md:h-[400px] lg:h-[500px]">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/50 rounded-lg flex items-center justify-center text-white text-lg font-medium">
                Hero Image Placeholder
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

