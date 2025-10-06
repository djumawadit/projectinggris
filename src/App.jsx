import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="bg-[#0A0A0A] text-white font-sans scroll-smooth">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Certificates />
      <Contact />
      <Footer />
    </div>
  );
}
