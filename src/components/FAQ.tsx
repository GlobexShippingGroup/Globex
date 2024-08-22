import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline'

const faqs = [
  {
    question: "What types of goods can be shipped via sea freight?",
    answer:
      "We can ship a wide range of goods via sea freight, including bulk commodities, machinery, vehicles, consumer goods, and more. Please contact us for specific inquiries about your shipment.",
  },
  {
    question: "How do you ensure the safety of goods during air freight?",
    answer:
      "We use advanced packaging techniques, real-time tracking, and experienced handling to ensure the safety and integrity of your goods during air freight. Our team is trained to manage fragile and high-value items with care.",
  },
  {
    question: "What areas do you cover with your road freight services?",
    answer:
      "Our road freight services cover local, regional, and cross-country routes. We have a network of reliable partners and drivers to ensure your goods are delivered efficiently and on time, regardless of the distance.",
  },

]

export default function FAQ() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:pt-10 lg:pb-40">
        <div className="mx-auto max-w-7xl divide-y divide-gray-900/10">
          <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">Frequently asked questions</h2>
          <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
            {faqs.map((faq) => (
              <Disclosure key={faq.question} as="div" className="pt-6">
                <dt>
                  <DisclosureButton className="group flex w-full items-start justify-between text-left text-gray-900">
                    <span className="text-base font-semibold leading-7">{faq.question}</span>
                    <span className="ml-6 flex h-7 items-center">
                      <PlusSmallIcon aria-hidden="true" className="h-6 w-6 group-data-[open]:hidden" />
                      <MinusSmallIcon aria-hidden="true" className="h-6 w-6 [.group:not([data-open])_&]:hidden" />
                    </span>
                  </DisclosureButton>
                </dt>
                <DisclosurePanel as="dd" className="mt-2 pr-12">
                  <p className="text-base leading-7 text-gray-600">{faq.answer}</p>
                </DisclosurePanel>
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
