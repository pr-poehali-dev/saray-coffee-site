
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-[#FBF7F4] shadow-md py-3" : "bg-transparent py-5"}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#home" className="flex items-center">
          <h1 className="font-playfair text-3xl font-bold text-[#8B5A2B]">SARAY</h1>
        </a>

        {/* Десктопное меню */}
        <ul className="hidden md:flex space-x-8">
          {["home", "about", "menu", "contact"].map((item) => (
            <li key={item}>
              <a
                href={`#${item}`}
                className="font-medium hover:text-[#8B5A2B] transition-colors capitalize"
              >
                {item === "home" ? "Главная" : 
                 item === "about" ? "О нас" : 
                 item === "menu" ? "Меню" : 
                 "Контакты"}
              </a>
            </li>
          ))}
        </ul>

        {/* Мобильное меню */}
        <div className="md:hidden">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <Icon name={isMobileMenuOpen ? "X" : "Menu"} className="h-6 w-6" />
          </Button>
        </div>
      </div>

      {/* Мобильное меню выпадающий список */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#FBF7F4] shadow-md">
          <div className="container mx-auto px-4 py-4">
            <ul className="space-y-4">
              {["home", "about", "menu", "contact"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item}`}
                    className="block py-2 font-medium hover:text-[#8B5A2B] transition-colors capitalize"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item === "home" ? "Главная" : 
                     item === "about" ? "О нас" : 
                     item === "menu" ? "Меню" : 
                     "Контакты"}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
