import { Button } from "@/components/ui/button"
import { ArrowRight, Shield, Zap, Users } from "lucide-react"

export function CTA() {
  return (
    <section
      id="cta"
      className="relative py-20 sm:py-32 bg-linear-to-br from-[#02A1B2] via-cyan-700 to-teal-600 overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-size-[32px_32px]"></div>
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 blur-3xl opacity-30">
        <div className="aspect-square w-96 bg-cyan-400 rounded-full"></div>
      </div>
      <div className="absolute bottom-0 left-0 translate-y-12 -translate-x-12 blur-3xl opacity-30">
        <div className="aspect-square w-96 bg-[#02A1B2] rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-5xl mb-6">
            Ready to Transform Your Loan Application Process?
          </h2>
          <p className="text-lg text-cyan-100 mb-12 max-w-2xl mx-auto leading-relaxed">
            Join leading financial institutions in providing accessible,
            intelligent loan assessment to your customers.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row mb-16">
            <a href="mailto:hello@moneymama.co?subject=MoneyMama%20BLIS%20-%20Demo%20Request">
              <Button
                size="lg"
                className="bg-white text-[#02A1B2] hover:bg-gray-100 shadow-xl hover:shadow-2xl transition-all text-lg px-8 py-6"
              >
                Schedule a Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
          </div>

          {/* Features grid */}
          <div className="flex flex-row gap-4 sm:gap-8 max-w-5xl mx-auto justify-between px-2">
            <div className="flex flex-col items-center text-center flex-1">
              <div className="rounded-full bg-white/20 p-4 mb-4">
                <Shield className="h-7 w-7 sm:h-8 sm:w-8 text-white" />
              </div>
              <p className="text-white font-semibold text-base sm:text-lg">
                Bank-Grade Security
              </p>
            </div>
            <div className="flex flex-col items-center text-center flex-1">
              <div className="rounded-full bg-white/20 p-4 mb-4">
                <Zap className="h-7 w-7 sm:h-8 sm:w-8 text-white" />
              </div>
              <p className="text-white font-semibold text-base sm:text-lg">
                Lightning Fast Setup
              </p>
            </div>
            <div className="flex flex-col items-center text-center flex-1">
              <div className="rounded-full bg-white/20 p-4 mb-4">
                <Users className="h-7 w-7 sm:h-8 sm:w-8 text-white" />
              </div>
              <p className="text-white font-semibold text-base sm:text-lg">
                24/7 Support
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
