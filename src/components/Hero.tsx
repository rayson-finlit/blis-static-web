import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MessageCircle, Sparkles } from "lucide-react"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white py-20 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <Badge className="mb-4 bg-blue-100 text-blue-700 hover:bg-blue-200">
            <Sparkles className="mr-1 h-3 w-3" />
            Smart Loan Assessment
          </Badge>

          <h1 className="mb-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            MoneyMama BLIS
          </h1>

          <p className="mb-4 text-xl text-gray-600 sm:text-2xl">
            Bank Loan Interview System on WhatsApp
          </p>

          <p className="mb-10 text-lg text-gray-600 sm:text-xl">
            Educate, assess, and qualify loan applicants efficiently through intelligent conversations on WhatsApp
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white">
              <MessageCircle className="mr-2 h-5 w-5" />
              Get Started on WhatsApp
            </Button>
            <Button size="lg" variant="outline">
              Learn More
            </Button>
          </div>

          <div className="mt-16">
            <p className="mb-4 text-sm font-medium text-gray-500">
              Trusted by leading financial institutions
            </p>
            <div className="flex flex-wrap items-center justify-center gap-8 opacity-60">
              {/* Placeholder for bank logos */}
              <div className="h-12 w-32 rounded bg-gray-200"></div>
              <div className="h-12 w-32 rounded bg-gray-200"></div>
              <div className="h-12 w-32 rounded bg-gray-200"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 blur-3xl opacity-20">
          <div className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-blue-400 to-green-400"></div>
        </div>
      </div>
    </section>
  )
}
