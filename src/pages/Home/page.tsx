import { useEffect } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import MenuHighlights from "../../components/Menu/Menu";
import OpeningHours from "../../components/OpeningHours/OpeningHours";
import Team from "../../components/About/About";
import Footer from "../../components/Footer/Footer";

export default function Home() {
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll(".reveal"));
    if (elements.length === 0) return;

    if (!("IntersectionObserver" in window)) {
      elements.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            requestAnimationFrame(() => {
              entry.target.classList.add("is-visible");
            });
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.01, rootMargin: "0px 0px 12% 0px" }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

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
