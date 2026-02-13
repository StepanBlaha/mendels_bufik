import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import MenuHighlights from "../../components/Menu/Menu";
import OpeningHours from "../../components/OpeningHours/OpeningHours";
import Team from "../../components/About/About";
import Footer from "../../components/Footer/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <MenuHighlights />
      <OpeningHours />
      <Team />
      <Footer />
    </main>
  );
}
