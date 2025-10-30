import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { GraduationCap, Target, Filter, Smartphone } from "lucide-react"

const features = [
  {
    icon: GraduationCap,
    title: "Educate Before Application",
    description:
      "Help users understand loan requirements, terms, and eligibility criteria before they apply, ensuring informed decisions and better preparation.",
    gradient: "from-[#02A1B2] to-cyan-500",
  },
  {
    icon: Target,
    title: "Assess Suitability",
    description:
      "Intelligent assessment system evaluates applicant profiles and matches them with suitable loan products before submission to the bank.",
    gradient: "from-[#02A1B2] to-teal-500",
  },
  {
    icon: Filter,
    title: "Qualified Leads Only",
    description:
      "Filter out low-quality leads and funnel only pre-qualified applicants, saving valuable time for bank processing teams.",
    gradient: "from-cyan-500 to-[#02A1B2]",
  },
  {
    icon: Smartphone,
    title: "WhatsApp Accessibility",
    description:
      "Reach the general population on the platform they use daily. No app downloads, no complex registration - just WhatsApp.",
    gradient: "from-teal-500 to-[#02A1B2]",
  },
]

export function Features() {
  return (
    <section className="py-20 sm:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Why Choose MoneyMama BLIS?
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Transform your loan application process with intelligent automation
            and accessibility
          </p>
        </div>

        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-12">
            {features.map((feature) => (
              <Card
                key={feature.title}
                className="border-2 hover:shadow-lg transition-shadow"
              >
                <CardHeader>
                  <div
                    className={`inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br ${feature.gradient} mb-4`}
                  >
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
