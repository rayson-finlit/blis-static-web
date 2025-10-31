import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MessageCircle, Sparkles, ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-linear-to-br from-[#02A1B2] via-cyan-700 to-teal-600 py-32 sm:py-40 lg:py-48">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl text-center">
          {/* Badge */}
          <Badge className="mb-8 bg-white/20 text-white hover:bg-white/30 border-white/30 text-sm px-4 py-1.5">
            <Sparkles className="mr-2 h-4 w-4" />
            AI-Powered Smart Loan Assessment
          </Badge>

          {/* Main Headline */}
          <h1 className="mb-6 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight tracking-tight">
            Transform Loan Applications with
            <span className="block text-cyan-100">WhatsApp Intelligence</span>
          </h1>

          {/* Subheadline */}
          <p className="mb-12 text-lg sm:text-xl lg:text-2xl text-cyan-100 max-w-3xl mx-auto leading-relaxed font-light">
            Educate, assess, and qualify loan applicants through intelligent AI
            conversations. All on the platform they already use.
          </p>

          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              className="bg-white text-[#02A1B2] hover:bg-gray-100 shadow-xl hover:shadow-2xl transition-all text-lg px-8 py-6 w-full sm:w-auto group"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Start on WhatsApp
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Feature highlights */}
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="flex flex-col items-center text-center">
              <div className="mb-3 text-white/80">
                <svg
                  className="w-8 h-8 mx-auto"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
              <h3 className="text-white font-semibold mb-1">Educate</h3>
              <p className="text-cyan-100 text-sm">
                Help users understand requirements
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="mb-3 text-white/80">
                <svg
                  className="w-8 h-8 mx-auto"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-white font-semibold mb-1">Assess</h3>
              <p className="text-cyan-100 text-sm">
                Evaluate eligibility in real-time
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="mb-3 text-white/80">
                <svg
                  className="w-8 h-8 mx-auto"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
                  />
                </svg>
              </div>
              <h3 className="text-white font-semibold mb-1">Qualify</h3>
              <p className="text-cyan-100 text-sm">
                Filter high-quality leads only
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Background decorations */}
      <div className="absolute inset-0 -z-10">
        {/* Gradient orbs */}
        <div className="absolute left-1/2 top-0 -translate-x-1/2 blur-3xl opacity-30">
          <div className="aspect-square w-[600px] bg-white/20 rounded-full"></div>
        </div>
        <div className="absolute left-0 bottom-0 translate-x-[-50%] translate-y-[50%] blur-3xl opacity-20">
          <div className="aspect-square w-[400px] bg-cyan-300/30 rounded-full"></div>
        </div>
        <div className="absolute right-0 top-1/2 translate-x-[50%] -translate-y-1/2 blur-3xl opacity-20">
          <div className="aspect-square w-[400px] bg-teal-300/30 rounded-full"></div>
        </div>

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-size-[32px_32px]"></div>

        {/* Animated gradient line */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-white/40 to-transparent"></div>
      </div>
    </section>
  )
}
