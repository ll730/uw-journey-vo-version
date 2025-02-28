"use client"

import * as React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function MainNav() {
  const [isOpen, setIsOpen] = React.useState(false)

  const routes = [
    {
      href: "/",
      label: "Home",
    },
    {
      href: "/features",
      label: "Features",
    },
    {
      href: "/about",
      label: "About",
    },
    {
      href: "/contact",
      label: "Contact",
    },
  ]

  return (
    <div className="flex items-center">
      <Link href="/" className="mr-6 flex items-center space-x-2">
        <span className="font-bold text-xl">YourBrand</span>
      </Link>
      <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
        {routes.map((route) => (
          <Link key={route.href} href={route.href} className={cn("transition-colors hover:text-primary")}>
            {route.label}
          </Link>
        ))}
      </nav>
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild className="md:hidden">
          <Button variant="ghost" size="icon">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <nav className="flex flex-col gap-4 text-lg font-medium">
            {routes.map((route) => (
              <Link key={route.href} href={route.href} className="hover:text-primary" onClick={() => setIsOpen(false)}>
                {route.label}
              </Link>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  )
}

