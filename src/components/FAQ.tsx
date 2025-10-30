import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "What is MoneyMama BLIS?",
    answer:
      "MoneyMama BLIS (Bank Loan Interview System) is an intelligent WhatsApp-based platform that educates, assesses, and qualifies loan applicants before they submit their applications to banks. It helps both customers and banks by ensuring better preparation and higher quality leads.",
  },
  {
    question: "How does the WhatsApp assessment work?",
    answer:
      "Users simply start a conversation on WhatsApp with our AI-powered chatbot. Through natural conversation, the system educates them about loan requirements, asks relevant questions to assess their eligibility, and matches them with suitable loan products - all without leaving WhatsApp.",
  },
  {
    question: "Is my information secure?",
    answer:
      "Absolutely. We use bank-grade encryption and comply with all data protection regulations. Your information is securely transmitted and stored, and we never share your data without your explicit consent.",
  },
  {
    question: "What types of loans does BLIS support?",
    answer:
      "BLIS currently supports personal loans, home loans, car loans, and business loans. We're continuously expanding our product coverage based on partner bank requirements.",
  },
  {
    question: "How long does the assessment take?",
    answer:
      "Most users complete the full assessment in 5-10 minutes. You can pause and resume at any time, as the conversation is saved in your WhatsApp chat history.",
  },
  {
    question: "Do I need to download an app?",
    answer:
      "No! That's the beauty of BLIS. Everything happens on WhatsApp, which you already have on your phone. No additional downloads or registrations required.",
  },
  {
    question: "What happens after I complete the assessment?",
    answer:
      "If you're pre-qualified, your information is securely submitted to partner banks. You'll receive guidance on next steps and may be contacted by the bank to complete your application. If you're not yet qualified, we'll provide personalized advice on how to improve your eligibility.",
  },
  {
    question: "Is there a cost to use BLIS?",
    answer:
      "BLIS is completely free for applicants. Banks pay for the service to receive high-quality, pre-qualified leads.",
  },
]

export function FAQ() {
  return (
    <section className="py-20 sm:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Everything you need to know about MoneyMama BLIS
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-semibold">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
