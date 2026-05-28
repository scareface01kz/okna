import { useState } from 'react';
import { GALLERY } from '../data/windowsData';
import { Eye, Clock, MapPin, Sparkles } from 'lucide-react';

export default function Gallery() {
  // To keep track of active toggle states (Before or After) for each card
  const [activeViews, setActiveViews] = useState<{ [key: string]: 'before' | 'after' }>({
    g1: 'after',
    g2: 'after',
    g3: 'after',
  });

  const toggleView = (id: string, view: 'before' | 'after') => {
    setActiveViews(prev => ({
      ...prev,
      [id]: view
    }));
  };

  return (
    <section className="py-16 sm:py-24 bg-white" id="gallery">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Title Group */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="text-xs font-extrabold uppercase tracking-widest text-sky-600">Наше Портфолио</span>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
            Оцените качество нашей работы: До / После
          </h2>
          <p className="text-sm text-slate-500 max-w-2xl mx-auto">
            Реальные фотографии наших мастеров на выезде в жилых комплексах Астаны. Нажмите кнопки «До» и «После» для наглядного сравнения результатов!
          </p>
          <div className="w-12 h-1.5 bg-sky-600 mx-auto rounded-full mt-4"></div>
        </div>

        {/* Gallery Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8" id="gallery-grid">
          {GALLERY.map((item) => {
            const view = activeViews[item.id] || 'after';
            const currentImg = view === 'before' ? item.beforeImage : item.afterImage;

            return (
              <div
                key={item.id}
                className="group bg-slate-50 border border-slate-100/80 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                id={`gallery-card-${item.id}`}
              >
                {/* Image Section */}
                <div className="relative h-64 overflow-hidden bg-slate-200">
                  {/* Real Image */}
                  <img
                    src={currentImg}
                    alt={item.title}
                    className="w-full h-full object-cover transition-opacity duration-500 transform group-hover:scale-[1.01]"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />

                  {/* Absolute badging for before & after */}
                  <div className="absolute top-4 left-4 flex gap-1.5 z-15">
                    <button
                      onClick={() => toggleView(item.id, 'before')}
                      className={`px-3 py-1 text-xs font-extrabold rounded-md shadow-xs cursor-pointer transition uppercase tracking-wider ${
                        view === 'before'
                          ? 'bg-rose-600 text-white'
                          : 'bg-white/90 text-slate-800 hover:bg-white'
                      }`}
                      id={`btn-before-${item.id}`}
                    >
                      До ремонта
                    </button>
                    <button
                      onClick={() => toggleView(item.id, 'after')}
                      className={`px-3 py-1 text-xs font-extrabold rounded-md shadow-xs cursor-pointer transition uppercase tracking-wider ${
                        view === 'after'
                          ? 'bg-emerald-600 text-white'
                          : 'bg-white/90 text-slate-800 hover:bg-white'
                      }`}
                      id={`btn-after-${item.id}`}
                    >
                      После
                    </button>
                  </div>

                  {/* Work Duration badge */}
                  <span className="absolute bottom-4 right-4 bg-slate-950/80 backdrop-blur-xs text-white text-[10px] font-semibold px-2.5 py-1 rounded-sm flex items-center gap-1">
                    <Clock className="w-3 h-3 text-orange-400" />
                    {item.duration} работы
                  </span>
                </div>

                {/* Content Details Area */}
                <div className="p-6 space-y-4">
                  <div className="space-y-2">
                    {/* Location Badge */}
                    <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
                      <MapPin className="h-3.5 w-3.5 text-sky-600" />
                      <span>{item.location}</span>
                    </div>

                    <h3 className="font-heading text-base font-bold text-slate-900 group-hover:text-sky-600 transition leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-500 leading-normal">
                      {item.description}
                    </p>
                  </div>

                  {/* Highlights section */}
                  <div className="pt-4 border-t border-slate-200/50 flex items-center justify-between text-[11px] text-slate-400 font-medium">
                    <span className="flex items-center gap-1">
                      <Sparkles className="h-3 w-3 text-orange-500" /> Сделано под ключ
                    </span>
                    <span className="text-emerald-600 font-bold uppercase tracking-wider">
                      ★ Клиент доволен
                    </span>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Prompt line */}
        <div className="mt-12 text-center">
          <p className="text-xs text-slate-500">
            📸 Все фотографии являются интеллектуальной собственностью компании. На объектах велась видеосъемка контроля ОТК.
          </p>
        </div>

      </div>
    </section>
  );
}
