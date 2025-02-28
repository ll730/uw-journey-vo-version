import { CheckCircle } from "lucide-react"

export function FeaturesSection() {
  const features = [
    {
      title: "Feature One",
      description: "Description of your first amazing feature and the benefits it provides to your users.",
    },
    {
      title: "Feature Two",
      description: "Description of your second amazing feature and the benefits it provides to your users.",
    },
    {
      title: "Feature Three",
      description: "Description of your third amazing feature and the benefits it provides to your users.",
    },
    {
      title: "Feature Four",
      description: "Description of your fourth amazing feature and the benefits it provides to your users.",
    },
  ]

  return (
    <section id="features" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Features</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Discover what makes our product stand out from the competition.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8 pt-8 md:pt-12">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col space-y-2 border p-6 rounded-lg">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-primary" />
                <h3 className="font-bold">{feature.title}</h3>
              </div>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

