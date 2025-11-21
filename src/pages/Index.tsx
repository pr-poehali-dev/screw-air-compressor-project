import { useState, useMemo } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Slider } from '@/components/ui/slider';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const navigationItems = [
    { id: 'home', label: 'Главная' },
    { id: 'products', label: 'Продукция' },
    { id: 'catalog', label: 'Каталог' },
    { id: 'about', label: 'О компании' },
    { id: 'service', label: 'Сервис' },
    { id: 'support', label: 'Поддержка' },
    { id: 'docs', label: 'Документация' },
    { id: 'contacts', label: 'Контакты' },
  ];

  const features = [
    {
      icon: 'Zap',
      title: 'Низкое энергопотребление',
      description: 'Снижение затрат на электроэнергию до 40% благодаря инверторному управлению',
    },
    {
      icon: 'TrendingDown',
      title: 'Экономичность работы',
      description: 'Минимальные эксплуатационные расходы и быстрая окупаемость оборудования',
    },
    {
      icon: 'Shield',
      title: 'Надёжность',
      description: 'Промышленное качество сборки с гарантией до 5 лет',
    },
    {
      icon: 'Settings',
      title: 'Простое обслуживание',
      description: 'Интервалы между ТО до 8000 часов работы',
    },
  ];

  const specifications = [
    { label: 'Производительность', value: '0.6 - 45 м³/мин' },
    { label: 'Давление', value: 'До 13 бар' },
    { label: 'Мощность двигателя', value: '3 - 315 кВт' },
    { label: 'Класс энергоэффективности', value: 'IE3 / IE4' },
  ];

  const products = [
    {
      id: 1,
      name: 'AT-5',
      category: 'Малые компрессоры',
      power: 5.5,
      pressure: 8,
      performance: 0.8,
      price: 'от 185 000 ₽',
      image: 'https://cdn.poehali.dev/projects/5fb53085-d1b9-413d-aa78-f7396a02c28b/files/2b416619-f48e-4c2f-9d18-4969d993e2e7.jpg',
      features: ['Компактный размер', 'Низкий уровень шума', 'Частотный привод'],
    },
    {
      id: 2,
      name: 'AT-15',
      category: 'Средние компрессоры',
      power: 15,
      pressure: 10,
      performance: 2.3,
      price: 'от 425 000 ₽',
      image: 'https://cdn.poehali.dev/projects/5fb53085-d1b9-413d-aa78-f7396a02c28b/files/4d44757d-d57f-4a95-ac74-cd46edba2f51.jpg',
      features: ['Встроенный осушитель', 'Система мониторинга', 'Экономия до 35%'],
    },
    {
      id: 3,
      name: 'AT-30',
      category: 'Средние компрессоры',
      power: 30,
      pressure: 10,
      performance: 5.2,
      price: 'от 785 000 ₽',
      image: 'https://cdn.poehali.dev/projects/5fb53085-d1b9-413d-aa78-f7396a02c28b/files/2b416619-f48e-4c2f-9d18-4969d993e2e7.jpg',
      features: ['Система рекуперации тепла', 'Удаленный мониторинг', 'Высокая надёжность'],
    },
    {
      id: 4,
      name: 'AT-55',
      category: 'Крупные компрессоры',
      power: 55,
      pressure: 13,
      performance: 10.5,
      price: 'от 1 450 000 ₽',
      image: 'https://cdn.poehali.dev/projects/5fb53085-d1b9-413d-aa78-f7396a02c28b/files/4d44757d-d57f-4a95-ac74-cd46edba2f51.jpg',
      features: ['Максимальная производительность', 'Энергоэффективность IE4', 'Полная автоматизация'],
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState('Все категории');
  const categories = ['Все категории', 'Малые компрессоры', 'Средние компрессоры', 'Крупные компрессоры'];

  const [powerRange, setPowerRange] = useState([0, 60]);
  const [pressureRange, setPressureRange] = useState([0, 15]);
  const [performanceRange, setPerformanceRange] = useState([0, 12]);
  const [sortBy, setSortBy] = useState('default');

  const filteredProducts = useMemo(() => {
    const filtered = products.filter(p => {
      const categoryMatch = selectedCategory === 'Все категории' || p.category === selectedCategory;
      const powerMatch = p.power >= powerRange[0] && p.power <= powerRange[1];
      const pressureMatch = p.pressure >= pressureRange[0] && p.pressure <= pressureRange[1];
      const performanceMatch = p.performance >= performanceRange[0] && p.performance <= performanceRange[1];
      return categoryMatch && powerMatch && pressureMatch && performanceMatch;
    });

    if (sortBy === 'power-asc') filtered.sort((a, b) => a.power - b.power);
    if (sortBy === 'power-desc') filtered.sort((a, b) => b.power - a.power);
    if (sortBy === 'performance-asc') filtered.sort((a, b) => a.performance - b.performance);
    if (sortBy === 'performance-desc') filtered.sort((a, b) => b.performance - a.performance);

    return filtered;
  }, [selectedCategory, powerRange, pressureRange, performanceRange, sortBy]);

  const resetFilters = () => {
    setSelectedCategory('Все категории');
    setPowerRange([0, 60]);
    setPressureRange([0, 15]);
    setPerformanceRange([0, 12]);
    setSortBy('default');
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border sticky top-0 bg-white/95 backdrop-blur-sm z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <Icon name="Wind" size={32} className="text-primary" />
              <span className="text-2xl font-bold text-secondary">AirTech</span>
            </div>

            <nav className="hidden md:flex items-center gap-1">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveSection(item.id)}
                  className={`px-4 py-2 text-sm font-medium transition-colors rounded-md ${
                    activeSection === item.id
                      ? 'bg-primary text-primary-foreground'
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            <Button variant="default" size="lg" className="hidden md:flex">
              Связаться с нами
            </Button>
          </div>
        </div>
      </header>

      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h1 className="text-4xl md:text-6xl font-bold text-secondary leading-tight">
                Винтовые воздушные компрессоры
              </h1>
              <p className="text-xl text-muted-foreground">
                Промышленное оборудование с минимальным энергопотреблением и максимальной эффективностью
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Подобрать компрессор
                </Button>
                <Button size="lg" variant="outline">
                  Скачать каталог
                </Button>
              </div>
            </div>

            <div className="relative animate-fade-in">
              <img
                src="https://cdn.poehali.dev/projects/5fb53085-d1b9-413d-aa78-f7396a02c28b/files/2b8c150c-928f-4c57-beda-037f563ed6c6.jpg"
                alt="Промышленный компрессор"
                className="rounded-lg shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {activeSection === 'products' && (
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold text-secondary mb-4">
                Наша продукция
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Полный модельный ряд винтовых компрессоров для любых производственных задач
              </p>
            </div>

            <div className="grid lg:grid-cols-4 gap-8 mb-8">
              <Card className="lg:col-span-1 p-6 space-y-6 h-fit sticky top-20">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-secondary">Фильтры</h3>
                  <Button variant="ghost" size="sm" onClick={resetFilters}>
                    <Icon name="RotateCcw" size={16} />
                  </Button>
                </div>

                <div className="space-y-6">
                  <div>
                    <label className="text-sm font-medium mb-3 block">Категория</label>
                    <div className="flex flex-col gap-2">
                      {categories.map((cat) => (
                        <Button
                          key={cat}
                          variant={selectedCategory === cat ? 'default' : 'outline'}
                          onClick={() => setSelectedCategory(cat)}
                          size="sm"
                          className="justify-start"
                        >
                          {cat}
                        </Button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-3 block">
                      Мощность: {powerRange[0]} - {powerRange[1]} кВт
                    </label>
                    <Slider
                      value={powerRange}
                      onValueChange={setPowerRange}
                      min={0}
                      max={60}
                      step={5}
                      className="mb-2"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-3 block">
                      Давление: {pressureRange[0]} - {pressureRange[1]} бар
                    </label>
                    <Slider
                      value={pressureRange}
                      onValueChange={setPressureRange}
                      min={0}
                      max={15}
                      step={1}
                      className="mb-2"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-3 block">
                      Производительность: {performanceRange[0]} - {performanceRange[1]} м³/мин
                    </label>
                    <Slider
                      value={performanceRange}
                      onValueChange={setPerformanceRange}
                      min={0}
                      max={12}
                      step={0.5}
                      className="mb-2"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-3 block">Сортировка</label>
                    <Select value={sortBy} onValueChange={setSortBy}>
                      <SelectTrigger>
                        <SelectValue placeholder="По умолчанию" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="default">По умолчанию</SelectItem>
                        <SelectItem value="power-asc">Мощность: возрастание</SelectItem>
                        <SelectItem value="power-desc">Мощность: убывание</SelectItem>
                        <SelectItem value="performance-asc">Производительность: возрастание</SelectItem>
                        <SelectItem value="performance-desc">Производительность: убывание</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </Card>

              <div className="lg:col-span-3 space-y-6">
                <div className="flex items-center justify-between">
                  <div className="text-lg">
                    Найдено <span className="font-bold text-primary">{filteredProducts.length}</span> моделей
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
              {filteredProducts.map((product) => (
                <Card key={product.id} className="overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="grid md:grid-cols-2 gap-6 p-6">
                    <div className="flex items-center justify-center bg-muted/30 rounded-lg p-4">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-48 object-contain"
                      />
                    </div>

                    <div className="space-y-4">
                      <div>
                        <div className="text-sm text-muted-foreground mb-1">{product.category}</div>
                        <h3 className="text-2xl font-bold text-secondary mb-2">{product.name}</h3>
                        <div className="text-2xl font-bold text-primary">{product.price}</div>
                      </div>

                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Мощность:</span>
                          <span className="font-medium">{product.power} кВт</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Давление:</span>
                          <span className="font-medium">{product.pressure} бар</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Производительность:</span>
                          <span className="font-medium">{product.performance} м³/мин</span>
                        </div>
                      </div>

                      <div className="pt-2 border-t space-y-2">
                        {product.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-sm">
                            <Icon name="Check" size={16} className="text-primary flex-shrink-0" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>

                      <Button className="w-full bg-accent hover:bg-accent/90">
                        Запросить предложение
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
                </div>

                {filteredProducts.length === 0 && (
                  <div className="text-center py-16">
                    <Icon name="Search" size={48} className="text-muted-foreground mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-secondary mb-2">Ничего не найдено</h3>
                    <p className="text-muted-foreground mb-4">Попробуйте изменить параметры фильтров</p>
                    <Button onClick={resetFilters} variant="outline">
                      Сбросить фильтры
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      )}

      {activeSection === 'home' && (
        <>
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
              Ключевые преимущества
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Наше оборудование сочетает передовые технологии с проверенной надёжностью
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-lg transition-shadow hover-scale"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Icon name={feature.icon} size={24} className="text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-secondary">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-secondary">
                Технические характеристики
              </h2>
              <p className="text-lg text-muted-foreground">
                Широкий модельный ряд для любых задач промышленного производства
              </p>

              <div className="space-y-4">
                {specifications.map((spec, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 bg-muted/50 rounded-lg"
                  >
                    <span className="font-medium text-secondary">{spec.label}</span>
                    <span className="text-primary font-bold">{spec.value}</span>
                  </div>
                ))}
              </div>

              <Button size="lg" variant="default" className="bg-accent hover:bg-accent/90">
                Получить консультацию
              </Button>
            </div>

            <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg p-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                    <Icon name="Check" size={20} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-secondary mb-2">
                      Экономия до 40%
                    </h4>
                    <p className="text-muted-foreground">
                      Снижение затрат на электроэнергию благодаря частотному преобразователю
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                    <Icon name="Check" size={20} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-secondary mb-2">
                      Срок службы 15+ лет
                    </h4>
                    <p className="text-muted-foreground">
                      Европейские компоненты и промышленная сборка
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                    <Icon name="Check" size={20} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-secondary mb-2">
                      Гарантия 5 лет
                    </h4>
                    <p className="text-muted-foreground">
                      Полная техническая поддержка и сервисное обслуживание
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
        </>
      )}

      <footer className="bg-secondary text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Wind" size={28} className="text-primary" />
                <span className="text-xl font-bold">AirTech</span>
              </div>
              <p className="text-white/70">
                Промышленные компрессоры с 2005 года
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4">Продукция</h4>
              <ul className="space-y-2 text-white/70">
                <li>Винтовые компрессоры</li>
                <li>Осушители воздуха</li>
                <li>Ресиверы</li>
                <li>Запчасти</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Компания</h4>
              <ul className="space-y-2 text-white/70">
                <li>О нас</li>
                <li>Сервис</li>
                <li>Поддержка</li>
                <li>Документация</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Контакты</h4>
              <ul className="space-y-2 text-white/70">
                <li>+7 (495) 123-45-67</li>
                <li>info@airtech.ru</li>
                <li>Москва, ул. Промышленная, 1</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 mt-8 pt-8 text-center text-white/50">
            <p>&copy; 2024 AirTech. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;