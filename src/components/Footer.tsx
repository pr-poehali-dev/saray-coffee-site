
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#5D4037] text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-playfair text-2xl font-bold mb-4">SARAY</h3>
            <p className="text-gray-300 mb-4">
              Кофейня-кондитерская с аутентичной атмосферой в самом сердце исторического Бахчисарая.
            </p>
            <div className="flex space-x-3">
              <Button asChild variant="ghost" size="icon" className="hover:bg-white/10 rounded-full">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <Icon name="Instagram" className="h-5 w-5" />
                </a>
              </Button>
              <Button asChild variant="ghost" size="icon" className="hover:bg-white/10 rounded-full">
                <a href="https://vk.com" target="_blank" rel="noopener noreferrer" aria-label="VK">
                  <Icon name="MessageCircle" className="h-5 w-5" />
                </a>
              </Button>
              <Button asChild variant="ghost" size="icon" className="hover:bg-white/10 rounded-full">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <Icon name="Facebook" className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
          
          <div>
            <h4 className="font-playfair text-lg font-semibold mb-4">Навигация</h4>
            <ul className="space-y-2">
              {[
                { name: "Главная", href: "#home" },
                { name: "О нас", href: "#about" },
                { name: "Меню", href: "#menu" },
                { name: "Контакты", href: "#contact" }
              ].map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-playfair text-lg font-semibold mb-4">Контактная информация</h4>
            <address className="not-italic text-gray-300">
              <p className="flex items-center mb-2">
                <Icon name="MapPin" className="h-4 w-4 mr-2" />
                ул. Ленина, 67, Старый город, Бахчисарай
              </p>
              <p className="flex items-center mb-2">
                <Icon name="Phone" className="h-4 w-4 mr-2" />
                <a href="tel:+79781234567" className="hover:text-white transition-colors">+7 (978) 123-45-67</a>
              </p>
              <p className="flex items-center">
                <Icon name="Mail" className="h-4 w-4 mr-2" />
                <a href="mailto:info@saray-coffee.ru" className="hover:text-white transition-colors">info@saray-coffee.ru</a>
              </p>
            </address>
          </div>
        </div>
        
        <Separator className="bg-white/20 my-6" />
        
        <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
          <p>© {currentYear} SARAY Кофейня-кондитерская. Все права защищены.</p>
          <div className="flex mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors mr-4">Политика конфиденциальности</a>
            <a href="#" className="hover:text-white transition-colors">Правила использования</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
