import APropos from "./components/APropos";
import Avis from "./components/Avis";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Services from "./components/Services";

export default function Home() {
  return (
    <div className="bg-black">
      {/* <Header /> */}
      <Hero />
      <APropos />
      <Services />
      {/* <Realisations/> */}
      <Avis/>
      <Contact />
      <Footer />
    </div>
  );
}
