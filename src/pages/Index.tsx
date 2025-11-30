import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Founder } from "@/components/Founder";
import { Educators } from "@/components/Educators";
import { Courses } from "@/components/Courses";
import { Gallery } from "@/components/Gallery";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { NavBar } from "@/components/NavBar";

const Index = () => {
  return (
    <main className="min-h-screen font-inter">
      <NavBar />
      <Hero />
      <About />
      <Founder />
      <Educators />
      <Courses />
      <Gallery />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
