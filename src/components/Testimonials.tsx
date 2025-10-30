import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Ahmad",
    role: "Loan Officer, BSN",
    initials: "SA",
    content:
      "BLIS has transformed how we handle loan applications. We're seeing 3x more qualified leads and spending less time on initial screening.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Branch Manager, Maybank",
    initials: "MC",
    content:
      "The WhatsApp interface is brilliant. Our customers love the accessibility and the assessment quality is outstanding.",
    rating: 5,
  },
  {
    name: "Nurul Huda",
    role: "Customer Success, CIMB",
    initials: "NH",
    content:
      "Applicants arrive much better prepared. They understand the requirements and come with realistic expectations. Game changer!",
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <section className="py-20 sm:py-32 bg-linear-to-b from-white to-cyan-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Trusted by Financial Professionals
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            See what banking professionals say about MoneyMama BLIS
          </p>
        </div>

        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <Card
                key={testimonial.name}
                className="border-2 hover:shadow-xl transition-shadow"
              >
                <CardContent className="pt-6">
                  {/* Rating stars */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>

                  {/* Testimonial content */}
                  <p className="text-gray-700 mb-6 italic">
                    "{testimonial.content}"
                  </p>

                  {/* Author info */}
                  <div className="flex items-center gap-3">
                    <Avatar className="h-12 w-12">
                      <AvatarFallback className="bg-linear-to-br from-[#02A1B2] to-cyan-600 text-white font-semibold">
                        {testimonial.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold text-gray-900">
                        {testimonial.name}
                      </p>
                      <p className="text-sm text-gray-500">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
