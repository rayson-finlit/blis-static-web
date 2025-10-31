import { GraduationCap, Target, Filter, Smartphone } from "lucide-react"
import { BackgroundPaths } from "@/components/ui/background-paths"

const features = [
  {
    icon: GraduationCap,
    title: "Educate Before Application",
    description:
      "Help users understand loan requirements, terms, and eligibility criteria before they apply, ensuring informed decisions and better preparation.",
  },
  {
    icon: Target,
    title: "Assess Suitability",
    description:
      "Intelligent assessment system evaluates applicant profiles and matches them with suitable loan products before submission to the bank.",
  },
  {
    icon: Filter,
    title: "Qualified Leads Only",
    description:
      "Filter out low-quality leads and funnel only pre-qualified applicants, saving valuable time for bank processing teams.",
  },
  {
    icon: Smartphone,
    title: "WhatsApp Accessibility",
    description:
      "Reach the general population on the platform they use daily. No app downloads, no complex registration - just WhatsApp.",
  },
]

export function Features() {
  return (
    <section
      id="features"
      className="py-20 sm:py-32 bg-linear-to-br from-cyan-50 via-white to-teal-50 relative overflow-hidden"
    >
      {/* Background Paths */}
      <div className="absolute inset-0 opacity-30">
        <BackgroundPaths />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <div className="inline-flex items-center justify-center p-2 bg-[#02A1B2]/10 rounded-full mb-4">
            <span className="px-4 py-1 text-sm font-semibold text-[#02A1B2]">
              Key Features
            </span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
            Why Choose MoneyMama BLIS?
          </h2>
          <p className="text-lg text-gray-600">
            Transform your loan application process with intelligent automation
            and accessibility
          </p>
        </div>

        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="group relative bg-white rounded-2xl p-8 border border-gray-200 hover:border-[#02A1B2]/30 hover:shadow-lg transition-all duration-300"
              >
                {/* Icon */}
                <div className="mb-6">
                  <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-[#02A1B2] shadow-md">
                    <feature.icon className="h-7 w-7 text-white" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
