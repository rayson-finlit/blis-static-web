import { GraduationCap, Clock, Target } from "lucide-react"

const stats = [
  {
    icon: GraduationCap,
    value: "100%",
    label: "Educated Applicants",
    description: "Users understand loan requirements before applying",
  },
  {
    icon: Clock,
    value: "5 min",
    label: "Average Time",
    description: "Quick and efficient assessment process",
  },
  {
    icon: Target,
    value: "Better",
    label: "Quality Leads",
    description: "Only qualified applicants reach bank officers",
  },
]

export function Stats() {
  return (
    <section className="py-20 sm:py-32 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-linear-to-br from-cyan-50/50 via-transparent to-[#02A1B2]/5"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
            Benefits for Everyone
          </h2>
          <p className="text-lg text-gray-600">
            Empowering applicants and simplifying work for bank officers
          </p>
        </div>

        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-md border-2 border-gray-100 hover:border-[#02A1B2]/50 hover:shadow-xl transition-all duration-300"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-linear-to-br from-[#02A1B2]/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div className="relative">
                  {/* Icon */}
                  <div className="mb-6 inline-flex">
                    <div className="rounded-xl bg-linear-to-br from-[#02A1B2] to-cyan-600 p-3 group-hover:scale-110 transition-transform duration-300">
                      <stat.icon className="h-6 w-6 text-white" />
                    </div>
                  </div>

                  {/* Value */}
                  <div className="mb-3">
                    <p className="text-5xl font-bold text-gray-900 group-hover:text-[#02A1B2] transition-colors duration-300">
                      {stat.value}
                    </p>
                  </div>

                  {/* Label */}
                  <p className="text-base font-semibold text-gray-700 mb-2">
                    {stat.label}
                  </p>

                  {/* Description */}
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {stat.description}
                  </p>
                </div>

                {/* Accent line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-[#02A1B2] to-cyan-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom accent */}
        <div className="mt-16 flex justify-center">
          <div className="h-1 w-32 bg-linear-to-r from-transparent via-[#02A1B2] to-transparent rounded-full"></div>
        </div>
      </div>
    </section>
  )
}
