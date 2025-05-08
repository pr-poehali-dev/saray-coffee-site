
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Contact = () => {
  const contactInfo = [
    {
      icon: "MapPin",
      title: "Адрес",
      content: "ул. Ленина, 67, Старый город, Бахчисарай, Крым",
      link: "https://maps.google.com",
      linkText: "Посмотреть на карте"
    },
    {
      icon: "Clock",
      title: "Часы работы",
      content: "Пн-Пт: 8:00 - 20:00\nСб-Вс: 9:00 - 22:00"
    },
    {
      icon: "Phone",
      title: "Телефон",
      content: "+7 (978) 123-45-67",
      link: "tel:+79781234567",
      linkText: "Позвонить нам"
    },
    {
      icon: "Mail",
      title: "Email",
      content: "info@saray-coffee.ru",
      link: "mailto:info@saray-coffee.ru",
      linkText: "Написать нам"
    }
  ];

  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-col items-center mb-12">
        <h2 className="font-playfair text-3xl md:text-4xl font-bold text-[#5D4037] mb-3">Контакты</h2>
        <div className="w-24 h-1 bg-[#8B5A2B] mb-6"></div>
        <p className="text-lg text-center max-w-2xl">
          Мы всегда рады видеть вас в нашей кофейне. Приходите в гости!
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
        <div className="lg:col-span-2 space-y-6">
          {contactInfo.map((item, index) => (
            <div key={index} className="flex items-start">
              <div className="bg-[#8B5A2B]/10 p-3 rounded-full mr-4">
                <Icon name={item.icon} className="h-6 w-6 text-[#8B5A2B]" />
              </div>
              <div>
                <h3 className="font-playfair text-lg font-semibold mb-1">{item.title}</h3>
                <p className="text-[#5D4037]/80 whitespace-pre-line">{item.content}</p>
                {item.link && (
                  <a 
                    href={item.link} 
                    className="text-[#8B5A2B] hover:underline text-sm font-medium mt-1 inline-block"
                    target={item.icon === "MapPin" ? "_blank" : undefined}
                    rel={item.icon === "MapPin" ? "noopener noreferrer" : undefined}
                  >
                    {item.linkText} →
                  </a>
                )}
              </div>
            </div>
          ))}

          <div className="flex space-x-4 mt-6">
            <Button asChild variant="outline" size="icon" className="rounded-full border-[#8B5A2B]">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <Icon name="Instagram" className="h-5 w-5 text-[#8B5A2B]" />
              </a>
            </Button>
            <Button asChild variant="outline" size="icon" className="rounded-full border-[#8B5A2B]">
              <a href="https://vk.com" target="_blank" rel="noopener noreferrer" aria-label="VK">
                <Icon name="MessageCircle" className="h-5 w-5 text-[#8B5A2B]" />
              </a>
            </Button>
            <Button asChild variant="outline" size="icon" className="rounded-full border-[#8B5A2B]">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <Icon name="Facebook" className="h-5 w-5 text-[#8B5A2B]" />
              </a>
            </Button>
          </div>
        </div>

        <div className="lg:col-span-3 rounded-lg overflow-hidden shadow-lg h-[400px]">
          {/* Здесь будет вставлена карта, обычно через iframe */}
          <div className="w-full h-full bg-[#F5F5DC] flex items-center justify-center">
            <div className="text-center p-6">
              <Icon name="Map" className="h-12 w-12 text-[#8B5A2B] mx-auto mb-4" />
              <h3 className="font-playfair text-xl font-semibold mb-2">Карта</h3>
              <p className="mb-4">Карта с местоположением нашей кофейни</p>
              <Button asChild className="bg-[#8B5A2B] hover:bg-[#6D4C33]">
                <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer">
                  Открыть в Google Maps
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
