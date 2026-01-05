import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function Index() {
  const [activeSection, setActiveSection] = useState('home');

  const services = [
    {
      category: 'Digital Art',
      icon: 'Palette',
      items: [
        { name: 'Портрет', price: '3000₽', time: '3-5 дней' },
        { name: 'Персонаж в полный рост', price: '5000₽', time: '5-7 дней' },
        { name: 'Иллюстрация', price: '7000₽', time: '7-10 дней' },
      ]
    },
    {
      category: 'Традиционный арт',
      icon: 'Paintbrush',
      items: [
        { name: 'Скетч', price: '1500₽', time: '1-2 дня' },
        { name: 'Акварельный портрет', price: '4000₽', time: '5-7 дней' },
        { name: 'Масляная живопись', price: '10000₽', time: '14-21 день' },
      ]
    },
    {
      category: 'Концепт-арт',
      icon: 'Layers',
      items: [
        { name: 'Дизайн персонажа', price: '6000₽', time: '5-7 дней' },
        { name: 'Окружение', price: '8000₽', time: '7-10 дней' },
        { name: 'Полный концепт', price: '12000₽', time: '10-14 дней' },
      ]
    }
  ];

  const portfolio = [
    { id: 1, title: 'Fantasy Portrait', category: 'Digital Art', image: '🎨' },
    { id: 2, title: 'Character Design', category: 'Концепт-арт', image: '✨' },
    { id: 3, title: 'Landscape', category: 'Традиционный арт', image: '🖼️' },
    { id: 4, title: 'Watercolor Study', category: 'Традиционный арт', image: '🎭' },
    { id: 5, title: 'Game Character', category: 'Digital Art', image: '🦋' },
    { id: 6, title: 'Environment Concept', category: 'Концепт-арт', image: '🌸' },
  ];

  const scrollToSection = (section: string) => {
    setActiveSection(section);
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <Icon name="Sparkles" size={20} className="text-primary-foreground" />
              </div>
              <span className="text-xl font-bold">ArtStudio</span>
            </div>
            
            <div className="hidden md:flex items-center gap-6">
              {[
                { id: 'home', label: 'Главная', icon: 'Home' },
                { id: 'services', label: 'Услуги', icon: 'Briefcase' },
                { id: 'portfolio', label: 'Портфолио', icon: 'Image' },
                { id: 'pricing', label: 'Прайс', icon: 'DollarSign' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all ${
                    activeSection === item.id
                      ? 'bg-primary text-primary-foreground'
                      : 'text-muted-foreground hover:text-foreground hover:bg-secondary'
                  }`}
                >
                  <Icon name={item.icon} size={16} />
                  <span>{item.label}</span>
                </button>
              ))}
            </div>

            <Button size="sm" className="hidden md:flex">
              Связаться
            </Button>
          </div>
        </div>
      </nav>

      <main className="pt-20">
        <section id="home" className="min-h-[90vh] flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center animate-fade-in">
              <Badge className="mb-6 bg-primary/20 text-primary border-primary/30">
                <Icon name="Star" size={14} className="mr-1" />
                Профессиональный художник
              </Badge>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
                Создаю искусство<br />на заказ
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Digital art, традиционная живопись и концепт-арт для игр, книг и личных проектов
              </p>
              <div className="flex items-center justify-center gap-4 flex-wrap">
                <Button size="lg" onClick={() => scrollToSection('pricing')}>
                  <Icon name="ShoppingCart" size={18} className="mr-2" />
                  Смотреть цены
                </Button>
                <Button size="lg" variant="outline" onClick={() => scrollToSection('portfolio')}>
                  <Icon name="Eye" size={18} className="mr-2" />
                  Портфолио
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="py-24 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Услуги</h2>
              <p className="text-muted-foreground text-lg">Категории арта, которые я создаю</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {services.map((service, idx) => (
                <Card
                  key={idx}
                  className="p-6 hover:scale-105 transition-transform duration-300 bg-card border-border animate-scale-in"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <div className="w-16 h-16 bg-primary/20 rounded-xl flex items-center justify-center mb-6">
                    <Icon name={service.icon} size={32} className="text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{service.category}</h3>
                  <div className="space-y-3">
                    {service.items.map((item, itemIdx) => (
                      <div key={itemIdx} className="flex items-center gap-2 text-sm">
                        <Icon name="Check" size={16} className="text-primary flex-shrink-0" />
                        <span className="text-muted-foreground">{item.name}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="portfolio" className="py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Портфолио</h2>
              <p className="text-muted-foreground text-lg">Примеры моих работ</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {portfolio.map((work, idx) => (
                <Card
                  key={work.id}
                  className="group overflow-hidden hover:scale-105 transition-all duration-300 cursor-pointer animate-scale-in"
                  style={{ animationDelay: `${idx * 0.05}s` }}
                >
                  <div className="aspect-square bg-gradient-to-br from-primary/20 via-secondary to-accent/20 flex items-center justify-center text-8xl">
                    {work.image}
                  </div>
                  <div className="p-4 bg-card">
                    <h3 className="font-semibold text-lg mb-1">{work.title}</h3>
                    <Badge variant="secondary" className="text-xs">
                      {work.category}
                    </Badge>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="pricing" className="py-24 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Прайс-лист</h2>
              <p className="text-muted-foreground text-lg">Прозрачные цены на все услуги</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {services.map((service, idx) => (
                <Card
                  key={idx}
                  className="overflow-hidden animate-scale-in"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <div className="bg-gradient-to-br from-primary/20 to-accent/20 p-6 border-b border-border">
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                      <Icon name={service.icon} size={24} className="text-primary-foreground" />
                    </div>
                    <h3 className="text-2xl font-bold">{service.category}</h3>
                  </div>
                  <div className="p-6 space-y-4">
                    {service.items.map((item, itemIdx) => (
                      <div key={itemIdx} className="pb-4 border-b border-border last:border-0">
                        <div className="flex items-start justify-between mb-2">
                          <span className="font-medium">{item.name}</span>
                          <span className="text-primary font-bold">{item.price}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Icon name="Clock" size={14} />
                          <span>{item.time}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="p-6 pt-0">
                    <Button className="w-full">
                      <Icon name="MessageCircle" size={16} className="mr-2" />
                      Заказать
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <footer className="py-12 border-t border-border">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <Icon name="Sparkles" size={16} className="text-primary-foreground" />
                </div>
                <span className="font-bold">ArtStudio</span>
              </div>
              <p className="text-muted-foreground text-sm">© 2026 Все права защищены</p>
              <div className="flex items-center gap-4">
                {['Instagram', 'Twitter', 'Mail'].map((social) => (
                  <Button key={social} size="icon" variant="ghost">
                    <Icon name={social} size={18} />
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
