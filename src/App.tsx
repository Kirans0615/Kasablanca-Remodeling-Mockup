import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { GrassSection } from "./components/GrassSection";
import { Services } from "./components/Services";
import { Projects } from "./components/Projects";
import { WhyUs } from "./components/WhyUs";
import { Testimonials } from "./components/Testimonials";
import { ServiceArea } from "./components/ServiceArea";
import { ContactForm } from "./components/ContactForm";
import { Footer } from "./components/Footer";
import { FloatingActions } from "./components/FloatingActions";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <GrassSection />
        <Services />
        <Projects />
        <WhyUs />
        <Testimonials />
        <ServiceArea />
        <ContactForm />
      </main>
      <Footer />
      <FloatingActions />
    </>
  );
}
