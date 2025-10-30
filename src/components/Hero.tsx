import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

import { MessageCircle, Sparkles, Play } from "lucide-react"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-linear-to-br from-[#02A1B2] via-cyan-700 to-teal-600 py-20 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <Badge className="mb-6 bg-white/20 text-white hover:bg-white/30 border-white/30">
            <Sparkles className="mr-1 h-3 w-3" />
            AI-Powered Smart Loan Assessment
          </Badge>

          <div className="mb-8">
            <img
              src="/img/logo-white.svg"
              alt="MoneyMama BLIS Logo"
              className="mx-auto h-[60px] w-auto"
            />
          </div>

          <p className="mb-4 text-2xl font-semibold text-white sm:text-3xl">
            Bank Loan Interview System on WhatsApp
          </p>

          <p className="mb-10 text-lg text-cyan-100 sm:text-xl max-w-3xl mx-auto leading-relaxed">
            Transform your loan application process with intelligent AI
            conversations. Educate, assess, and qualify applicants efficiently -
            all on the platform they already use.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              size="lg"
              className="bg-white text-[#02A1B2] hover:bg-gray-100 shadow-lg hover:shadow-xl transition-all"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Start on WhatsApp
            </Button>
          </div>
        </div>
      </div>

      {/* Background decorations */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 blur-3xl opacity-30">
          <div className="aspect-[1155/678] w-[72.1875rem] bg-linear-to-tr from-white/20 to-cyan-300/20"></div>
        </div>
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-size-[24px_24px]"></div>
      </div>
    </section>
  )
}
