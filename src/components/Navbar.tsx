import { Button } from "@/components/ui/button"

export function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white backdrop-blur-md border-b border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <img
              src="/img/logo-color.svg"
              alt="MoneyMama BLIS Logo"
              className="h-5 w-auto sm:h-6"
            />
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#features"
              className="text-gray-700 hover:text-[#02A1B2] transition-colors"
            >
              Features
            </a>
            <a
              href="#how-it-works"
              className="text-gray-700 hover:text-[#02A1B2] transition-colors"
            >
              How It Works
            </a>
            <a
              href="mailto:hello@moneymama.co"
              className="text-gray-700 hover:text-[#02A1B2] transition-colors"
            >
              Contact
            </a>
            <Button
              onClick={() =>
                document
                  .getElementById("cta")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="bg-[#02A1B2] hover:bg-[#028799] text-white"
            >
              Get Started
            </Button>
          </div>

          {/* Mobile - Just Get Started button */}
          <div className="md:hidden">
            <Button
              onClick={() =>
                document
                  .getElementById("cta")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              size="sm"
              className="bg-[#02A1B2] hover:bg-[#028799] text-white"
            >
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}
