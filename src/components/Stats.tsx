import { Award, Compass, HeartHandshake, ShieldCheck } from 'lucide-react';

export default function Stats() {
  const advantages = [
    {
      icon: <Compass className="h-7 w-7 text-blue-600" />,
      title: 'Бесплатный выезд',
      description: 'Мастер приедет совершенно бесплатно в любой район Астаны для диагностики и замера в течение 30–45 минут.',
      badge: '0 ₸'
    },
    {
      icon: <ShieldCheck className="h-7 w-7 text-blue-600" />,
      title: 'Гарантия до 5 лет',
      description: 'Выдаем письменный гарантийный талон на все работы, замененную резину и фурнитурные механизмы.',
      badge: 'Гарантия'
    },
    {
      icon: <Award className="h-7 w-7 text-blue-600" />,
      title: 'Ремонт за 1 день',
      description: '90% ремонтов (замена резины, регулирование, замена ручек) выполняются за один визит за 40-60 минут.',
      badge: 'Экспресс'
    },
    {
      icon: <HeartHandshake className="h-7 w-7 text-blue-600" />,
      title: 'Оригинальные запчасти',
      description: 'Используем сертифицированную фурнитуру Roto, SIEGENIA и износостойкие морозоустойчивые уплотнители.',
      badge: 'Original'
    }
  ];

  return (
    <section className="py-16 bg-[#fafbfc] border-y border-slate-200" id="characteristics">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Title / Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <span className="text-xs font-extrabold uppercase tracking-widest text-blue-600">Надежность и Стандарты</span>
          <h2 className="font-heading text-2.5xl sm:text-3xl font-extrabold text-slate-900 leading-tight">
            Почему жители Астаны доверяют нашему сервису окон?
          </h2>
          <div className="w-12 h-1 bg-blue-600 mx-auto rounded-full mt-4"></div>
        </div>

        {/* Benefits Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" id="stats-advantages-grid">
          {advantages.map((item, index) => (
            <div 
              key={index}
              className="group relative bg-white border border-slate-200 hover:border-blue-300 p-6 rounded-2xl transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/5"
              id={`stat-card-${index}`}
            >
              {/* Corner mini Badge */}
              <span className="absolute top-4 right-4 text-[10px] font-extrabold text-blue-800 uppercase tracking-wider bg-blue-50 py-1 px-2.5 rounded-md group-hover:bg-orange-50 group-hover:text-orange-900 transition">
                {item.badge}
              </span>

              {/* Icon layout */}
              <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-200 shadow-xs flex items-center justify-center mb-5 group-hover:scale-105 group-hover:bg-blue-50 group-hover:border-blue-200 transition duration-300">
                {item.icon}
              </div>

              {/* Content */}
              <h3 className="font-heading text-base font-bold text-slate-900 mb-2 group-hover:text-blue-700 transition">
                {item.title}
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Local Astana info tagline */}
        <div className="mt-10 p-4 rounded-xl bg-blue-50/50 border border-blue-100/40 flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
          <div className="flex items-center gap-2.5">
            <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-700 font-bold text-sm">✓</span>
            <p className="text-xs text-slate-700">
              Наши мастера экипированы профессиональным инструментом и укомплектованы запчастями для окон любых марок.
            </p>
          </div>
          <div className="flex gap-2">
            <span className="text-[10px] bg-blue-100/80 text-blue-850 font-extrabold px-2.5 py-1 rounded-sm uppercase">Rehau</span>
            <span className="text-[10px] bg-blue-100/80 text-blue-850 font-extrabold px-2.5 py-1 rounded-sm uppercase">KBE</span>
            <span className="text-[10px] bg-blue-100/80 text-blue-850 font-extrabold px-2.5 py-1 rounded-sm uppercase">Roto</span>
            <span className="text-[10px] bg-blue-100/80 text-blue-850 font-extrabold px-2.5 py-1 rounded-sm uppercase">Maco</span>
          </div>
        </div>

      </div>
    </section>
  );
}
