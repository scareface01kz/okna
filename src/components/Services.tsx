import { useState } from 'react';
import { SERVICES } from '../data/windowsData';
import { Sparkles, ArrowUpRight } from 'lucide-react';

interface ServicesProps {
  onOrderClick: (serviceTitle: string) => void;
}

type CategoryType = 'all' | 'repair' | 'installation' | 'accessories';

export default function Services({ onOrderClick }: ServicesProps) {
  const [activeCategory, setActiveCategory] = useState<CategoryType>('all');

  const categories = [
    { id: 'all', label: 'Все услуги' },
    { id: 'repair', label: 'Ремонт окон & уплотнители' },
    { id: 'installation', label: 'Монтаж & стеклопакеты' },
    { id: 'accessories', label: 'Москитные сетки & защита' },
  ];

  const filteredServices = SERVICES.filter(s => {
    if (activeCategory === 'all') return true;
    return s.category === activeCategory;
  });

  return (
    <section className="py-16 sm:py-24 bg-white border-b border-slate-200" id="services">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Header content */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
          <span className="text-xs font-extrabold uppercase tracking-widest text-orange-500">Услуги под ключ</span>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
            Профессиональные услуги по ремонту и установке окон в Астане
          </h2>
          <p className="text-sm text-slate-500 max-w-2xl mx-auto">
            Официальный партнер ведущих мировых производителей оконного пластика и комплектующих. Работаем без шума, грязи и лишней переплаты.
          </p>
          <div className="w-12 h-1 bg-blue-600 mx-auto rounded-full mt-4"></div>
        </div>

        {/* Filter Categories Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10" id="services-tabs-container">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id as CategoryType)}
              className={`px-5 py-2.5 text-xs font-semibold rounded-full lg:rounded-xl transition-all duration-200 cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-600/15'
                  : 'bg-slate-50 text-slate-600 hover:text-slate-950 border border-slate-200 hover:border-slate-300'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" id="services-cards-grid">
          {filteredServices.map(service => (
            <div
              key={service.id}
              className="group bg-[#fafbfc] rounded-2xl overflow-hidden border border-slate-200 hover:border-blue-300 hover:shadow-lg hover:shadow-blue-500/5 transition-all duration-300 flex flex-col h-full"
              id={`service-card-${service.id}`}
            >
              {/* Product Image section with zoom on hover */}
              <div className="relative h-48 overflow-hidden bg-slate-100 shrink-0">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                
                {/* Popular sticker badge */}
                {service.popular && (
                  <span className="absolute top-3 left-3 bg-orange-500 text-white text-[9px] font-extrabold uppercase tracking-widest px-2.5 py-1 rounded-sm flex items-center gap-1">
                    <Sparkles className="h-2.5 w-2.5" /> Популярно
                  </span>
                )}

                {/* Category tag */}
                <span className="absolute bottom-3 right-3 bg-blue-950/80 backdrop-blur-xs text-white text-[9px] font-bold px-2 py-0.5 rounded-sm">
                  {service.category === 'repair' ? 'Ремонт' : service.category === 'installation' ? 'Монтаж' : 'Фурнитура'}
                </span>
              </div>

              {/* Text Area */}
              <div className="p-5 flex flex-col justify-between flex-grow">
                <div className="space-y-2">
                  <h3 className="font-heading text-base font-bold text-slate-900 group-hover:text-blue-600 transition flex items-start justify-between">
                    <span>{service.title}</span>
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed line-clamp-3">
                    {service.description}
                  </p>
                </div>

                {/* Pricing and Action button details */}
                <div className="pt-4 mt-4 border-t border-slate-200/80 flex items-center justify-between gap-2">
                  <div>
                    <span className="block text-[10px] text-slate-400 font-medium">Стоимость:</span>
                    <span className="text-sm font-extrabold text-orange-600 text-[15px]">
                      от {service.price.toLocaleString('ru-RU')} ₸
                    </span>
                    <span className="text-[10px] text-slate-400 font-medium"> / {service.unit}</span>
                  </div>

                  <button
                    onClick={() => onOrderClick(service.title)}
                    className="h-9 px-3.5 bg-blue-900 hover:bg-blue-800 text-white text-xs font-bold rounded-lg transition-all duration-200 flex items-center gap-1 cursor-pointer hover:shadow-lg hover:shadow-blue-500/10 select-none"
                    id={`order-btn-${service.id}`}
                  >
                    Заказать
                    <ArrowUpRight className="h-3 w-3 shrink-0" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom promo highlight */}
        <div className="mt-12 text-center">
          <p className="text-xs text-slate-500 bg-slate-50 inline-block px-5 py-3 rounded-full border border-slate-200 shadow-xs">
            💸 Не нашли нужную услугу? Позвоните <strong className="text-slate-950 font-semibold">+7 (707) 123-4567</strong> — мы выполняем любые нестандартные работы по окнам!
          </p>
        </div>

      </div>
    </section>
  );
}
