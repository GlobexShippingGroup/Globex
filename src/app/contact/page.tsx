import Footer from "@/components/Footer";
import Nav from "@/components/Nav";

export default function Contact() {
    return (
      <>
      <Nav />
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl space-y-16 divide-y divide-gray-100 lg:mx-0 lg:max-w-none">
            <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-3">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-blue-950">Get in touch</h2>
                <p className="mt-4 leading-7 text-gray-600">
                Have questions or need assistance? Reach out to us anytime. We're here to help!
                </p>
              </div>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-2 lg:gap-8">
                <div className="rounded-2xl bg-gray-50 p-10">
                  <h3 className="text-base font-semibold leading-7 text-blue-950">Quotes</h3>
                  <dl className="mt-3 space-y-1 text-sm leading-6 text-gray-600">
                    <div>
                      <dt className="sr-only">Email</dt>
                      <dd>
                        <a href="mailto:quotes@globexgroup.co.uk" className="font-semibold text-orange-600">
                          quotes@globexgroup.co.uk
                        </a>
                      </dd>
                    </div>
                  </dl>
                </div>
                <div className="rounded-2xl bg-gray-50 p-10">
                  <h3 className="text-base font-semibold leading-7 text-gray-900">Careers</h3>
                  <dl className="mt-3 space-y-1 text-sm leading-6 text-gray-600">
                    <div>
                      <dt className="sr-only">Email</dt>
                      <dd>
                        <a href="mailto:info@globexgroup.co.uk" className="font-semibold text-orange-600">
                        careers@globexgroup.co.uk
                        </a>
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-x-8 gap-y-10 pt-16 lg:grid-cols-3">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-blue-950">Location</h2>
                <p className="mt-4 leading-7 text-gray-600">
                We're conveniently located and ready to serve you.
                </p>
              </div>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-2 lg:gap-8">
                <div className="rounded-2xl bg-gray-50 p-10">
                  <h3 className="text-base font-semibold leading-7 text-gray-900">Globex Shipping Group Limited</h3>
                  <address className="mt-3 space-y-1 text-sm not-italic leading-6 text-gray-600">
                    <p>	2 Surrey House Stratton Close</p>
                    <p>Edgware</p>
                    <p>HA8 6PX</p>
                  </address>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      </>
    )
  }
  
