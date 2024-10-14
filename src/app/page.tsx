import Slider from "@/components/Slider";
import Feature from "@/components/Feature";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import { Separator } from "@/components/ui/separator";
import DiverseServices from "@/components/Diverse-services";


export default function Home() {
  return (
  <>
  <Nav />
    <Hero />
    <Separator className="my-2"/>
    <Feature />
    <Separator className="my-2" />
    <DiverseServices />
    <Separator className="my-2" />
    <Slider />
    <Footer />
    </>
  );
}
