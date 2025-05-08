
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useState, useEffect } from "react";

// Компоненты сайта
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Menu from "@/components/Menu";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className={`min-h-screen bg-[#FBF7F4] text-[#5D4037] ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}>
      <Navbar />
      <main>
        <section id="home">
          <Hero />
        </section>
        
        <section id="about" className="py-16">
          <About />
        </section>
        
        <Separator className="max-w-4xl mx-auto bg-[#8B5A2B]/20" />
        
        <section id="menu" className="py-16">
          <Menu />
        </section>
        
        <Separator className="max-w-4xl mx-auto bg-[#8B5A2B]/20" />
        
        <section id="contact" className="py-16">
          <Contact />
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
