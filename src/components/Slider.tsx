import { CarouselPlugin } from "./Carousel"



export default function Slider() {
    return (
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-x-8 gap-y-16 lg:grid-cols-2">
            <div className="mx-auto w-full max-w-xl lg:mx-0">
              <h2 className="text-3xl font-bold tracking-tight text-blue-950">Book a shipment with a carrier of your choice</h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
              Choose your preferred carrier and book your shipment in just a few clicks. Simple, fast, and reliable.
              </p>
              <div className="mt-8 flex items-center gap-x-6">
                <a href="/contact" className="text-sm font-semibold text-orange-600">
                  Contact us <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </div>
            <div className="mx-auto grid w-full max-w-xl items-center justify-center gap-y-12 sm:gap-y-14 lg:mx-0 lg:max-w-none lg:pl-8">
              <CarouselPlugin />
            </div>
          </div>
        </div>
      </div>
    )
  }
  
