
import { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// Типы данных для меню
type MenuItem = {
  name: string;
  description: string;
  price: string;
  isPopular?: boolean;
  image?: string;
};

type MenuCategory = {
  id: string;
  name: string;
  items: MenuItem[];
};

const Menu = () => {
  // Данные меню
  const menuCategories: MenuCategory[] = [
    {
      id: "coffee",
      name: "Кофе",
      items: [
        {
          name: "Кофе по-восточному",
          description: "Традиционный кофе, сваренный на раскаленном песке в турке. Подается с кардамоном",
          price: "220 ₽",
          isPopular: true,
          image: "https://images.unsplash.com/photo-1578398494177-626f1d585281?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
        },
        {
          name: "Капучино",
          description: "Эспрессо с нежной молочной пенкой",
          price: "250 ₽",
          image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
        },
        {
          name: "Латте",
          description: "Эспрессо с молоком и небольшим количеством молочной пены",
          price: "270 ₽",
          image: "https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
        },
        {
          name: "Раф кофе",
          description: "Эспрессо, взбитые сливки и ванильный сахар",
          price: "290 ₽",
          isPopular: true,
        },
      ],
    },
    {
      id: "desserts",
      name: "Десерты",
      items: [
        {
          name: "Пахлава",
          description: "Традиционный восточный десерт из слоёного теста с орехами и медовым сиропом",
          price: "180 ₽",
          isPopular: true,
          image: "https://images.unsplash.com/photo-1519676867240-f03562e64548?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
        },
        {
          name: "Чек-чек",
          description: "Восточная сладость из обжаренного во фритюре теста, залитого медом",
          price: "150 ₽",
        },
        {
          name: "Шекер-лукум",
          description: "Нежный рахат-лукум с добавлением фисташек",
          price: "160 ₽",
          image: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
        },
        {
          name: "Курабье",
          description: "Рассыпчатое песочное печенье с нотками ванили",
          price: "90 ₽",
        },
      ],
    },
    {
      id: "tea",
      name: "Чай",
      items: [
        {
          name: "Крымский травяной чай",
          description: "Уникальный сбор крымских горных трав",
          price: "200 ₽",
          isPopular: true,
        },
        {
          name: "Чай по-татарски",
          description: "Крепкий черный чай с горными травами и специями",
          price: "220 ₽",
          image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
        },
        {
          name: "Зеленый с мятой",
          description: "Освежающий зеленый чай с листьями свежей мяты",
          price: "180 ₽",
        },
      ],
    },
  ];

  const [activeCategory, setActiveCategory] = useState(menuCategories[0].id);

  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-col items-center mb-12">
        <h2 className="font-playfair text-3xl md:text-4xl font-bold text-[#5D4037] mb-3">Меню</h2>
        <div className="w-24 h-1 bg-[#8B5A2B] mb-6"></div>
        <p className="text-lg text-center max-w-2xl">
          Попробуйте наши фирменные десерты и напитки, приготовленные по традиционным рецептам
        </p>
      </div>

      <Tabs defaultValue={menuCategories[0].id} className="w-full max-w-3xl mx-auto" 
        value={activeCategory} 
        onValueChange={setActiveCategory}
      >
        <TabsList className="mb-8 w-full justify-center bg-[#F5F5DC]/50">
          {menuCategories.map((category) => (
            <TabsTrigger 
              key={category.id} 
              value={category.id}
              className="data-[state=active]:bg-[#8B5A2B] data-[state=active]:text-white"
            >
              {category.name}
            </TabsTrigger>
          ))}
        </TabsList>

        {menuCategories.map((category) => (
          <TabsContent key={category.id} value={category.id} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {category.items.map((item, index) => (
                <Card key={index} className="overflow-hidden border-[#E5D3C3] hover:shadow-md transition-all">
                  <CardContent className="p-0">
                    <div className="flex flex-col sm:flex-row">
                      {item.image && (
                        <div className="w-full sm:w-1/3">
                          <img 
                            src={item.image} 
                            alt={item.name} 
                            className="h-full w-full object-cover"
                          />
                        </div>
                      )}
                      <div className={`p-4 flex flex-col justify-between ${item.image ? 'sm:w-2/3' : 'w-full'}`}>
                        <div>
                          <div className="flex justify-between items-start">
                            <h3 className="font-playfair text-lg font-semibold">{item.name}</h3>
                            {item.isPopular && (
                              <Badge variant="outline" className="ml-2 bg-[#8B5A2B]/10 text-[#8B5A2B] border-[#8B5A2B]/30">
                                Популярное
                              </Badge>
                            )}
                          </div>
                          <p className="text-sm text-[#5D4037]/70 mt-1">{item.description}</p>
                        </div>
                        <div className="mt-3">
                          <span className="font-semibold text-[#8B5A2B]">{item.price}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default Menu;
