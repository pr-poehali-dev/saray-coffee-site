
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const About = () => {
  // Особенности кофейни
  const features = [
    {
      title: "Восточные сладости",
      description: "Традиционные крымскотатарские десерты по старинным рецептам",
      icon: "Cake"
    },
    {
      title: "Кофе по-восточному",
      description: "Ароматный кофе, сваренный в турке на раскаленном песке",
      icon: "Coffee"
    },
    {
      title: "Аутентичная атмосфера",
      description: "Интерьер с традиционными элементами старого Бахчисарая",
      icon: "Landmark"
    }
  ];

  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-col items-center mb-12">
        <h2 className="font-playfair text-3xl md:text-4xl font-bold text-[#5D4037] mb-3">О нас</h2>
        <div className="w-24 h-1 bg-[#8B5A2B] mb-6"></div>
        <p className="text-lg text-center max-w-2xl">
          Кофейня-кондитерская SARAY находится в самом сердце исторического Бахчисарая, 
          предлагая посетителям уникальное сочетание восточных традиций и современных тенденций.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <Card 
            key={index} 
            className="overflow-hidden hover-scale border-[#E5D3C3] hover:shadow-md transition-all"
          >
            <CardContent className="p-6 text-center">
              <div className="bg-[#8B5A2B]/10 p-3 rounded-full inline-block mb-4">
                <Icon name={feature.icon} className="h-6 w-6 text-[#8B5A2B]" />
              </div>
              <h3 className="font-playfair text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-[#5D4037]/80">{feature.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div>
          <h3 className="font-playfair text-2xl md:text-3xl font-bold mb-4">Наша история</h3>
          <p className="mb-4">
            Кофейня SARAY была основана в 2018 году с целью возрождения традиций крымскотатарской кухни и создания 
            уютного пространства для гостей и жителей Бахчисарая.
          </p>
          <p>
            Название "SARAY" (дворец) отсылает к знаменитому Ханскому дворцу — 
            жемчужине крымскотатарской архитектуры и символу города. Мы стремимся, чтобы каждый гость 
            почувствовал себя особенным, наслаждаясь нашими десертами и напитками в атмосфере, 
            напоминающей о богатой истории этих мест.
          </p>
        </div>
        <div className="rounded-lg overflow-hidden shadow-md">
          <img 
            src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1047&q=80" 
            alt="Интерьер кофейни SARAY" 
            className="w-full h-80 object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
