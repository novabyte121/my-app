import { About } from "./components/main/About";
import { Contact } from "./components/main/Contact";
import { Header } from "./components/main/Header";
import { Hero } from "./components/main/Hero";
import { Projects } from "./components/main/Projects";
import { Services } from "./components/main/Services";
import { SocialSection } from "./components/main/SocialMedia";
import { Testimonials } from "./components/main/Testimonials";

export default function Home() {
  return (
    <div className="flex-1 bg-orange-50">
      <Header />
      <Hero />
      <About />
      <Projects />
      <Services />
      <Testimonials />
      <Contact />
      <SocialSection />
    </div>
  );
}
