import Card from "@/components/Card"
import FAQ from "@/components/FAQ"
import Footer from "@/components/Footer"
import Nav from "@/components/Nav"

const services = [
  {
    type: 'Sea Freight',
    desc: 'Our sea freight services ensure your goods are transported efficiently and safely across international waters. We provide comprehensive shipping solutions tailored to your needs, guaranteeing timely delivery and exceptional care for your cargo. Trust us to handle your sea freight with expertise and reliability',
    title: 'Reliable Sea Freight Solutions',
    src: 'https://images.unsplash.com/photo-1598193957036-67845e5ead00?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dges.unsplash.com/photo-1598193957036-67845e5ead00?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    type: 'Road Freight',
    desc: 'Our road freight services offer efficient and dependable transportation for your goods across regions. With a focus on safety and punctuality, we ensure your cargo reaches its destination on time.w',
    title: 'Comprehensive Road Freight Solutions',
    src: 'https://images.unsplash.com/photo-1492168732976-2676c584c675?q=80&w=1949&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    type: 'Air Freight',
    desc: 'Our air freight services provide fast and reliable transportation for your goods worldwide. We ensure timely delivery and careful handling of your cargo, making air freight a seamless experience for you.',
    title: 'Efficient Air Freight Services',
    src: 'https://images.unsplash.com/flagged/photo-1555431372-bbd6a310460d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGFpciUyMGZyZWlnaHR8ZW58MHx8MHx8fDA%3D',
  },
]


export default function Services() {
  return (
    <>
    <Nav />
    <div className="bg-white py-24 sm:py-32">
    {services.map((service, index) => (
      <div key={service.title} className="mx-auto max-w-7xl px-6 lg:px-8 mb-6">
           <Card src={service.src} type={service.type} title={service.title} desc={service.desc} order={index%2===0 ? '': 'reverse'}/>
           </div>
            ))}
    </div>
    <FAQ />
    <Footer />
    </>
  )
}
