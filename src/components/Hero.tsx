
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="relative h-screen bg-cover bg-center overflow-hidden" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')" }}>
      {/* Затемняющий оверлей */}
      <div className="absolute inset-0 bg-black/40"></div>
      
      {/* Градиент для лучшей читаемости текста */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
      
      {/* Контент Hero секции */}
      <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center text-white">
        <h1 className="font-playfair text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in">
          SARAY
        </h1>
        
        <h2 className="font-inter text-xl md:text-2xl lg:text-3xl font-light mb-8 max-w-2xl animate-fade-in">
          Кофейня-кондитерская в сердце старого Бахчисарая
        </h2>
        
        <p className="mb-8 max-w-md text-lg text-gray-200 animate-fade-in">
          Аутентичные десерты и ароматный кофе с видом на исторический город
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 animate-fade-in">
          <Button asChild className="bg-[#8B5A2B] hover:bg-[#6D4C33] text-white">
            <a href="#menu">Посмотреть меню</a>
          </Button>
          <Button asChild variant="outline" className="border-white text-white hover:bg-white/10">
            <a href="#contact">Как нас найти</a>
          </Button>
        </div>
      </div>
      
      {/* Декоративный скролл-индикатор */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-white">
        <span className="text-sm mb-2">Прокрутите вниз</span>
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-1 animate-bounce delay-150"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
