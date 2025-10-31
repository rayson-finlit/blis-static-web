import { MessageCircle, ClipboardCheck, CheckCircle2 } from "lucide-react"

const steps = [
  {
    number: "01",
    icon: MessageCircle,
    title: "User Starts Chat",
    description:
      "Customer initiates conversation on WhatsApp - no app download or registration required. Simply start chatting to begin the loan assessment journey.",
  },
  {
    number: "02",
    icon: ClipboardCheck,
    title: "Smart Assessment",
    description:
      "AI-powered conversation educates users about loan requirements, evaluates eligibility in real-time, and matches them with suitable loan products.",
  },
  {
    number: "03",
    icon: CheckCircle2,
    title: "Qualified Submission",
    description:
      "Pre-qualified leads with complete assessment data are submitted to the bank, saving officers time and reducing application defaults.",
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 sm:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            How It Works
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Three simple steps to transform your loan application process
          </p>
        </div>

        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            {steps.map((step, index) => (
              <div key={step.number} className="relative">
                {/* Connector line - hidden on last item and on mobile */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-[calc(50%+40px)] w-[calc(100%-80px)] h-0.5 bg-linear-to-r from-cyan-200 to-[#02A1B2]/30" />
                )}

                <div className="relative flex flex-col items-center text-center">
                  {/* Number badge */}
                  <div className="mb-6 relative">
                    <div className="rounded-full bg-linear-to-br from-[#02A1B2] to-cyan-600 p-6 shadow-lg">
                      <step.icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 h-8 w-8 rounded-full bg-white border-2 border-[#02A1B2] flex items-center justify-center">
                      <span className="text-sm font-bold text-[#02A1B2]">
                        {step.number}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
