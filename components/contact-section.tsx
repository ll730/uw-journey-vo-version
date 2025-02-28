import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Phone } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Contact Us</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Have questions or want to learn more? Get in touch with our team.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:gap-12 pt-8 md:pt-12">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <MapPin className="h-5 w-5 text-primary" />
              <p>123 Main Street, City, Country</p>
            </div>
            <div className="flex items-center space-x-3">
              <Mail className="h-5 w-5 text-primary" />
              <p>contact@yourbrand.com</p>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="h-5 w-5 text-primary" />
              <p>+1 (555) 123-4567</p>
            </div>
            <div className="relative h-[200px] w-full md:h-[300px] rounded-lg bg-muted flex items-center justify-center text-muted-foreground">
              Map Placeholder
            </div>
          </div>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Input placeholder="First Name" />
              </div>
              <div className="space-y-2">
                <Input placeholder="Last Name" />
              </div>
            </div>
            <div className="space-y-2">
              <Input placeholder="Email" type="email" />
            </div>
            <div className="space-y-2">
              <Textarea placeholder="Your Message" className="min-h-[120px]" />
            </div>
            <Button className="w-full">Send Message</Button>
          </div>
        </div>
      </div>
    </section>
  )
}

