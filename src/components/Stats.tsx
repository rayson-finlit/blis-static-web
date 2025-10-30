import { TrendingUp, Users, Clock, CheckCircle } from "lucide-react"

const stats = [
  {
    icon: Users,
    value: "50K+",
    label: "Active Users",
    description: "People using BLIS monthly"
  },
  {
    icon: CheckCircle,
    value: "85%",
    label: "Approval Rate",
    description: "Pre-qualified applicants approved"
  },
  {
    icon: Clock,
    value: "5 min",
    label: "Average Time",
    description: "To complete assessment"
  },
  {
    icon: TrendingUp,
    value: "3x",
    label: "Conversion",
    description: "Increase in qualified leads"
  }
]

export function Stats() {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-br from-blue-50 via-white to-green-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="relative overflow-hidden rounded-2xl bg-white p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="rounded-lg bg-gradient-to-br from-blue-500 to-green-500 p-3">
                    <stat.icon className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="text-4xl font-bold text-gray-900">{stat.value}</p>
                  <p className="text-sm font-semibold text-gray-700">{stat.label}</p>
                  <p className="text-sm text-gray-500">{stat.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
