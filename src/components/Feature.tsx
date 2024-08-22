import {
    MapPinIcon,
    UserGroupIcon,
    PaperAirplaneIcon,
    TruckIcon,
    ShieldCheckIcon,
    GlobeAltIcon
  } from '@heroicons/react/20/solid'
  
  const features = [
    {
      name: 'Global Network Coverage.',
      description: 'With strategically located hubs, we provide efficient and reliable services to and from any part of the world.',
      icon: GlobeAltIcon,
    },
    {
      name: 'Comprehensive Freight Solutions.',
      description: 'Whether you need air, sea, or land freight, we\'ve got you covered',
      icon: TruckIcon,
    },
    {
      name: 'Advanced Updates System.',
      description: 'Receive timely updates, and have peace of mind knowing exactly where your cargo is at any moment.',
      icon: MapPinIcon,
    },
    {
      name: 'Customized Logistics Plans.',
      description: 'Our team of experts will work with you to create tailored logistics solutions that align with your specific requirements.',
      icon: PaperAirplaneIcon,
    },
    {
      name: 'Dedicated Customer Support.',
      description: 'Available around the clock, we are here to assist you with any inquiries, giving a smooth shipping experience.',
      icon: UserGroupIcon,
    },
    {
      name: 'Sustainable Practices.',
      description: 'We prioritize eco-friendly practices to reduce our environmental impact, helping businesses to achieve their sustainability goals. ',
      icon: ShieldCheckIcon,
    },
  ]
  
  export default function Feature() {
    return (
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl sm:text-center">
            <h2 className="text-base font-semibold leading-7 text-orange-600">Everything you need</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-blue-950 sm:text-4xl">Need to ship something? No problem.</p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
            Whether it's air, sea, or land freight, trust Globex Shipping Group to handle your cargo with precision and care.
            </p>
          </div>
        </div>
        <div className="relative overflow-hidden pt-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <img
              src="https://images.unsplash.com/photo-1598194501777-edbff942e501?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="App screenshot"
              className="mb-[-12%] rounded-xl shadow-2xl ring-1 ring-gray-900/10"
              width={2432}
              height={1442}
            />
            <div className="relative" aria-hidden="true">
              <div className="absolute -inset-x-20 bottom-0 bg-gradient-to-t from-white pt-[7%]" />
            </div>
          </div>
        </div>
        <div className="mx-auto mt-16 max-w-7xl px-6 sm:mt-20 md:mt-24 lg:px-8">
          <dl className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base leading-7 text-gray-600 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-9">
                <dt className="inline font-semibold text-blue-950">
                  <feature.icon className="absolute left-1 top-1 h-5 w-5 text-orange-600" aria-hidden="true" />
                  {feature.name}
                </dt>{' '}
                <dd className="inline">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    )
  }
  