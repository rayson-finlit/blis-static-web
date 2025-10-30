import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { GradientText } from "@/components/ui/gradient-text"
import { MessageCircle, Sparkles, Play } from "lucide-react"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 via-white to-transparent py-20 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <Badge className="mb-6 bg-blue-100 text-blue-700 hover:bg-blue-200 border-blue-200">
            <Sparkles className="mr-1 h-3 w-3" />
            AI-Powered Smart Loan Assessment
          </Badge>

          <h1 className="mb-6 text-5xl font-bold tracking-tight text-gray-900 sm:text-7xl">
            <GradientText
              text="MoneyMama BLIS"
              gradient="linear-gradient(90deg, #2563eb 0%, #10b981 50%, #2563eb 100%)"
              className="text-5xl sm:text-7xl font-bold"
            />
          </h1>

          <p className="mb-4 text-2xl font-semibold text-gray-700 sm:text-3xl">
            Bank Loan Interview System on WhatsApp
          </p>

          <p className="mb-10 text-lg text-gray-600 sm:text-xl max-w-3xl mx-auto leading-relaxed">
            Transform your loan application process with intelligent AI
            conversations. Educate, assess, and qualify applicants efficiently -
            all on the platform they already use.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              size="lg"
              className="bg-green-600 hover:bg-green-700 text-white shadow-lg hover:shadow-xl transition-all"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Start on WhatsApp
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 hover:bg-gray-50"
            >
              <Play className="mr-2 h-5 w-5" />
              Watch Demo
            </Button>
          </div>

          <div className="mt-20">
            <p className="mb-6 text-sm font-medium text-gray-500 uppercase tracking-wider">
              Trusted by leading financial institutions
            </p>
            <div className="flex flex-wrap items-center justify-center gap-12 opacity-40 grayscale">
              {/* Placeholder for bank logos */}
              <div className="h-16 w-40 rounded-lg bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                <span className="text-sm font-bold text-gray-600">BSN</span>
              </div>
              <div className="h-16 w-40 rounded-lg bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                <span className="text-sm font-bold text-gray-600">Maybank</span>
              </div>
              <div className="h-16 w-40 rounded-lg bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                <span className="text-sm font-bold text-gray-600">CIMB</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background decorations */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 blur-3xl opacity-20">
          <div className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-blue-400 to-green-400"></div>
        </div>
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </div>
    </section>
  )
}
