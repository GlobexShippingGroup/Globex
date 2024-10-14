// import { DocumentMagnifyingGlassIcon, GlobeAsiaAustraliaIcon, CursorArrowRippleIcon, BriefcaseIcon }from "@heroicons/react/24/solid"

// const stats: Stat[] = [
//   { id: 1, icon: DocumentMagnifyingGlassIcon, value: 'Ship Provisions' },
//   { id: 2, icon: GlobeAsiaAustraliaIcon, value: 'Duty Free' },
//   { id: 3, icon: CursorArrowRippleIcon, value: 'Cruise' },
//   { id: 4, icon: BriefcaseIcon, value: 'Export' },
// ]

// type Stat = {
//   id: number;
//   icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
//   value: string;
// };

// export default function DiverseServices() {
//   return (
//     <div className="bg-white py-24 sm:py-32">
//       <div className="mx-auto max-w-7xl px-6 lg:px-8">
//         <div className="mx-auto max-w-2xl lg:max-w-none">
//           <div className="text-center">
//             <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
//               Diverse services that we provide 
//             </h2>
//             {/* <p className="mt-4 text-lg leading-8 text-gray-600">
//               Lorem ipsum dolor sit amet consect adipisicing possimus.
//             </p> */}
//           </div>
//           <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
//             {stats.map((stat) => {
//               const Icon = stat.icon;
//               return(
//               <div key={stat.id} className="flex flex-col bg-gray-400/5 p-8">
//                 {/* <dt className="text-sm font-semibold leading-6 text-gray-600">{stat.icon}</dt> */}
//                 <dd className="text-2xl font-semibold tracking-tight text-gray-900">{stat.value}</dd>
//                 {Icon && <Icon className="order-first h-12 w-12 mx-auto mb-4 text-blue-950" />}
//               </div>
// )})}
//           </dl>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default function DiverseServices() {
//   return (
//     <div className="py-24 sm:py-32">
//       <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
//         <h2 className="text-center text-base/7 font-bold text-orange-600">Diverse services</h2>
//         <p className="mx-auto mt-2 max-w-lg text-pretty text-center text-4xl font-medium tracking-tight text-blue-950 sm:text-5xl">
//           Our diverse services are what makes us 
//           <br />
//           Globex
//         </p>
//         <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
//           <div className="relative lg:row-span-2">
//             <div className="absolute inset-px rounded-lg bg-white lg:rounded-l-[2rem]"></div>
//             <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
//               <div className="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
//                 <p className="mt-2 text-lg/7 font-medium tracking-tight text-blue-950 max-lg:text-center">
//                 Marine Supplies
//                 </p>
//                 <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
//                 We ensure prompt delivery to the chandlers, who in turn provide timely service to ships. Our team responds swiftly to all special orders and urgent requests, ensuring efficiency at every step.
//                 </p>
//               </div>
//               <div className="relative min-h-[30rem] w-full grow [container-type:inline-size] max-lg:mx-auto max-lg:max-w-sm">
//                 {/* <div className="absolute inset-x-10 bottom-0 top-10 overflow-hidden rounded-t-[12cqw] border-x-[3cqw] border-t-[3cqw] border-gray-700 bg-gray-900 shadow-2xl"> */}
//                   <img
//                     className="size-1/2 object-cover object-top"
//                     src="https://images.pexels.com/photos/2556009/pexels-photo-2556009.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
//                     alt=""
//                   />
//                 {/* </div> */}
//               </div>
//             </div>
//             <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 lg:rounded-l-[2rem]"></div>
//           </div>
//           <div className="relative max-lg:row-start-1">
//             <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-t-[2rem]"></div>
//             <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
//               <div className="px-8 pt-8 sm:px-10 sm:pt-10">
//                 <p className="mt-2 text-lg/7 font-medium tracking-tight text-blue-950 max-lg:text-center">
//                 Cruise Supply
//                 </p>
//                 <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
//                 Cruise passengers enjoy uninterrupted luxury with our reliable provisioning services. Whether docked or at sea, we ensure ships are fully stocked, enabling passengers to have a comfortable and enjoyable journey at all times
//                 </p>
//               </div>
//               <div className="flex flex-1 items-center justify-center px-8 max-lg:pb-12 max-lg:pt-10 sm:px-10 lg:pb-2">
//                 <img
//                   className="w-full max-lg:max-w-xs"
//                   src="https://tailwindui.com/plus/img/component-images/bento-03-performance.png"
//                   alt=""
//                 />
//               </div>
//             </div>
//             <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-t-[2rem]"></div>
//           </div>
//           <div className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
//             <div className="absolute inset-px rounded-lg bg-white"></div>
//             <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)]">
//               <div className="px-8 pt-8 sm:px-10 sm:pt-10">
//                 <p className="mt-2 text-lg/7 font-medium tracking-tight text-gray-950 max-lg:text-center">Global Export Solutions</p>
//                 <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
//                 Exports in the FMCG sector require a variety of premium brands. Through our dedicated distribution centers, we handle both mixed and full loads, serving independent retail networks on a global scale with precision and efficiency
//                 </p>
//               </div>
//               <div className="flex flex-1 items-center [container-type:inline-size] max-lg:py-6 lg:pb-2">
//                 <img
//                   className="h-[min(152px,40cqw)] object-cover object-center"
//                   src="https://tailwindui.com/plus/img/component-images/bento-03-security.png"
//                   alt=""
//                 />
//               </div>
//             </div>
//             <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5"></div>
//           </div>
//           <div className="relative lg:row-span-2">
//             <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
//             <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">
//               <div className="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
//                 <p className="mt-2 text-lg/7 font-medium tracking-tight text-blue-950 max-lg:text-center">
//                 Travel Retail & Duty-Free
//                 </p>
//                 <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
//                 The Duty-Free and Travel Retail industry demands flexibility and top-tier service. We cater to various industries and our services adapt to the needs of global partners for a seamless experience.
//                 </p>
//               </div>
//               {/* <div className="relative min-h-[30rem] w-full grow">
//                 <div className="absolute bottom-0 left-10 right-0 top-10 overflow-hidden rounded-tl-xl bg-gray-900 shadow-2xl">
//                   <div className="flex bg-gray-800/40 ring-1 ring-white/5">
//                     <div className="-mb-px flex text-sm font-medium leading-6 text-gray-400">
//                       <div className="border-b border-r border-b-white/20 border-r-white/10 bg-white/5 px-4 py-2 text-white">
//                         NotificationSetting.jsx
//                       </div>
//                       <div className="border-r border-gray-600/10 px-4 py-2">App.jsx</div>
//                     </div>
//                   </div>
//                   <div className="px-6 pb-14 pt-6"></div>
//                 </div>
//               </div> */}
//              <div className="relative min-h-[30rem] w-full grow [container-type:inline-size] max-lg:mx-auto max-lg:max-w-sm">
//                 <div className="absolute inset-x-10 bottom-0 top-10 overflow-hidden rounded-t-[12cqw] border-x-[3cqw] border-t-[3cqw] border-gray-700 bg-gray-900 shadow-2xl">
//                   <img
//                     className="size-full object-cover object-top"
//                     src="https://images.pexels.com/photos/1157255/pexels-photo-1157255.jpeg"
//                     alt=""
//                   />
//                 </div>
//               </div>
//             </div>
//             <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

export default function DiverseServices() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-base/7 font-semibold text-orange-600">Diverse services</h2>
        <p className="mt-2 max-w-lg text-pretty text-4xl font-medium tracking-tight text-blue-950 sm:text-5xl">
        Our diverse services are what makes us
        <br />
        Globex
        </p>
        <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
          <div className="relative lg:col-span-3">
            <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-t-[2rem] lg:rounded-tl-[2rem]" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)] lg:rounded-tl-[calc(2rem+1px)]">
              <img
                alt=""
                src="https://images.pexels.com/photos/1095814/pexels-photo-1095814.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                className="h-80 object-cover object-left"
              />
              <div className="p-10 pt-4">
                <h3 className="text-sm/4 font-semibold text-orange-600">Ship</h3>
                <p className="mt-2 text-lg/7 font-medium tracking-tight text-blue-950"> Marine Supplies</p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600">
                We ensure prompt delivery to the chandlers, who in turn provide timely service to ships. Our team responds swiftly to all special orders and urgent requests, ensuring efficiency at every step.
                </p>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-t-[2rem] lg:rounded-tl-[2rem]" />
          </div>
          <div className="relative lg:col-span-3">
            <div className="absolute inset-px rounded-lg bg-white lg:rounded-tr-[2rem]" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] lg:rounded-tr-[calc(2rem+1px)]">
              <img
                alt=""
                src="https://images.pexels.com/photos/8242845/pexels-photo-8242845.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                className="h-80 object-cover object-left lg:object-right"
              />
              <div className="p-10 pt-4">
                <h3 className="text-sm/4 font-semibold text-orange-600">Duty Free</h3>
                <p className="mt-2 text-lg/7 font-medium tracking-tight text-blue-950">Travel Retail & Duty-Free</p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600">
                The Duty-Free and Travel Retail industry demands flexibility and top-tier service. We cater to various industries and our services adapt to the needs of global partners for a seamless experience.
                </p>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 lg:rounded-tr-[2rem]" />
          </div>
          <div className="relative lg:col-span-2">
            <div className="absolute inset-px rounded-lg bg-white lg:rounded-bl-[2rem]" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] lg:rounded-bl-[calc(2rem+1px)]">
              <img
                alt=""
                src="https://images.pexels.com/photos/3660828/pexels-photo-3660828.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                className="h-80 object-cover object-left"
              />
              <div className="p-10 pt-4">
                <h3 className="text-sm/4 font-semibold text-orange-600">Cruise</h3>
                <p className="mt-2 text-lg/7 font-medium tracking-tight text-blue-950">Cruise Supply</p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600">
                Cruise passengers enjoy uninterrupted luxury with our reliable provisioning services. Whether docked or at sea, we ensure ships are fully stocked, enabling passengers to have a comfortable and enjoyable journey at all times
                </p>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 lg:rounded-bl-[2rem]" />
          </div>
          <div className="relative lg:col-span-2">
            <div className="absolute inset-px rounded-lg bg-white" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)]">
              <img
                alt=""
                src="https://images.pexels.com/photos/11499104/pexels-photo-11499104.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                className="h-80 object-cover object-center"
              />
              <div className="p-10 pt-4">
                <h3 className="text-sm/4 font-semibold text-orange-600">Export</h3>
                <p className="mt-2 text-lg/7 font-medium tracking-tight text-blue-950">Global Export Solutions</p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600">
                Exports in the FMCG sector require a variety of premium brands. Through our dedicated distribution centers, we handle both mixed and full loads, serving independent retail networks on a global scale with precision and efficiency.
                </p>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5" />
          </div>
          <div className="relative lg:col-span-2">
            <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-b-[2rem] lg:rounded-br-[2rem]" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-br-[calc(2rem+1px)]">
              <img
                alt=""
                src="https://images.pexels.com/photos/4481259/pexels-photo-4481259.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                className="h-80 object-cover object-center"
              />
              <div className="p-10 pt-4">
                <h3 className="text-sm/4 font-semibold text-orange-600">Warehousing</h3>
                <p className="mt-2 text-lg/7 font-medium tracking-tight text-blue-950">Warehousing & Storage Solutions</p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600">
                We offer secure and efficient warehousing services tailored to meet your needs. Whether it's short-term storage or long-term solutions, our facilities ensure your goods are stored safely with easy access for distribution.
                </p>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-b-[2rem] lg:rounded-br-[2rem]" />
          </div>
        </div>
      </div>
    </div>
  )
}
