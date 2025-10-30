import { Button } from "@/components/ui/button"
import { MessageCircle, ArrowRight, Shield, Zap, Users } from "lucide-react"

export function CTA() {
  return (
    <section className="relative py-20 sm:py-32 bg-gradient-to-br from-blue-600 via-blue-700 to-green-600 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:32px_32px]"></div>
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 blur-3xl opacity-30">
        <div className="aspect-square w-96 bg-green-400 rounded-full"></div>
      </div>
      <div className="absolute bottom-0 left-0 translate-y-12 -translate-x-12 blur-3xl opacity-30">
        <div className="aspect-square w-96 bg-blue-400 rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-5xl mb-6">
            Ready to Transform Your Loan Application Process?
          </h2>
          <p className="text-lg text-blue-100 mb-12 max-w-2xl mx-auto leading-relaxed">
            Join leading financial institutions in providing accessible,
            intelligent loan assessment to your customers.
          </p>
          
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row mb-16">
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100 shadow-xl hover:shadow-2xl transition-all text-lg px-8 py-6"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Start on WhatsApp
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white/10 text-lg px-8 py-6"
            >
              Schedule a Demo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          {/* Features grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="flex flex-col items-center text-center p-4">
              <div className="rounded-full bg-white/20 p-3 mb-3">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <p className="text-white font-medium">Bank-Grade Security</p>
            </div>
            <div className="flex flex-col items-center text-center p-4">
              <div className="rounded-full bg-white/20 p-3 mb-3">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <p className="text-white font-medium">Lightning Fast Setup</p>
            </div>
            <div className="flex flex-col items-center text-center p-4">
              <div className="rounded-full bg-white/20 p-3 mb-3">
                <Users className="h-6 w-6 text-white" />
              </div>
              <p className="text-white font-medium">24/7 Support</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
