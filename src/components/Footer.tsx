import {
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react"
import { Separator } from "@/components/ui/separator"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-4">
              <img
                src="/img/logo-white.svg"
                alt="MoneyMama BLIS Logo"
                className="h-8 w-auto"
              />
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Transforming loan applications with intelligent AI assessment on
              WhatsApp. Making financial services accessible to everyone.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Product
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#features"
                  className="hover:text-white transition-colors"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#how-it-works"
                  className="hover:text-white transition-colors"
                >
                  How It Works
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Mail className="h-4 w-4 text-[#02A1B2] shrink-0 mt-1" />
                <a
                  href="mailto:hello@moneymama.co?subject=BLIS:%20Web%20Enquiry"
                  className="hover:text-white transition-colors"
                >
                  hello@moneymama.co
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-[#02A1B2] shrink-0 mt-1" />
                <span className="leading-relaxed">
                  Finlit Technologies Sdn Bhd
                  <br />
                  C-3-1, Encorp Strand Garden Office
                  <br />
                  12, Jalan PJU 5/1, Kota Damansara
                  <br />
                  47810 Petaling Jaya, Selangor
                </span>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8 bg-gray-800" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-gray-400 text-center md:text-left">
            <p className="mb-1">
              &copy; {currentYear} MoneyMama BLIS All rights reserved.
            </p>
            <p>Finlit Technologies Sdn. Bhd. 202501022464 (1623877-K)</p>
          </div>
          <div className="flex gap-6 text-sm">
            <a
              href="#privacy"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#terms"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
