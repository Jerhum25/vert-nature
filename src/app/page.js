import APropos from "./components/APropos";
import Avis from "./components/Avis";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Prestas from "./components/Prestas";
import Realisations from "./components/Realisations";
import Services from "./components/Services";

export default function Home() {
  return (
    <div className="bg-black">
      {/* <Header /> */}
      <Hero />
      <Prestas/>
      <APropos />
      <Services />
      <Realisations/>
      <Avis/>
      <Contact />
      <Footer />
    </div>
  );
}
