import { PROBLEMS } from '../data/windowsData';
import { AlertCircle, ChevronRight } from 'lucide-react';

interface ProblemsProps {
  onOrderClick: (serviceTitle: string) => void;
}

export default function Problems({ onOrderClick }: ProblemsProps) {
  return (
    <section className="py-16 sm:py-24 bg-white border-b border-slate-200" id="problems">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Title Group */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="text-xs font-extrabold uppercase tracking-widest text-orange-500">Решение проблем</span>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
            Знакомые проблемы с пластиковыми окнами?
          </h2>
          <p className="text-sm text-slate-500 max-w-2xl mx-auto">
            Оконные конструкции страдают от резких перепадов температур в Астане (от -40°C зимой до +40°C летом). Узнайте, как мы исправляем эти дефекты за 1 визит.
          </p>
          <div className="w-12 h-1 bg-blue-600 mx-auto rounded-full mt-4"></div>
        </div>

        {/* Problems Cards Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" id="problems-grid">
          {PROBLEMS.map((prob) => (
            <div
              key={prob.id}
              className="group bg-[#fafbfc] rounded-2xl p-5 border border-slate-200 hover:border-blue-300 hover:bg-white transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/5 flex flex-col justify-between"
              id={`problem-card-${prob.id}`}
            >
              <div className="space-y-4">
                {/* Photo with absolute alert icon overlay */}
                <div className="relative h-40 rounded-xl overflow-hidden bg-slate-100 shrink-0">
                  <img
                    src={prob.image}
                    alt={prob.title}
                    className="w-full h-full object-cover group-hover:scale-102 transition duration-500"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  <div className="absolute top-2 right-2 bg-red-500 text-white p-1.5 rounded-full inline-flex items-center justify-center">
                    <AlertCircle className="h-4 w-4 animate-pulse" />
                  </div>
                </div>

                {/* Problem Info */}
                <div className="space-y-1.5">
                  <h3 className="font-heading text-base font-bold text-slate-950 group-hover:text-blue-600 transition">
                    ❌ {prob.title}
                  </h3>
                  <p className="text-xs text-slate-500 font-medium italic">
                    <strong className="text-slate-700">Симптомы:</strong> {prob.symptom}
                  </p>
                </div>

                {/* Solution Info */}
                <div className="bg-emerald-50/70 border border-emerald-100 p-3 rounded-lg text-[11px] text-emerald-850 leading-relaxed">
                  <strong className="block text-xs text-emerald-950 font-bold mb-0.5">✓ Как решаем:</strong>
                  {prob.solution}
                </div>
              </div>

              {/* Price and Action row */}
              <div className="pt-4 mt-5 border-t border-slate-200/80 flex items-center justify-between">
                <div>
                  <span className="block text-[9px] text-slate-400 font-bold uppercase tracking-wider">Цена решения:</span>
                  <span className="text-sm font-extrabold text-slate-900">
                    от {prob.price.toLocaleString('ru-RU')} ₸
                  </span>
                </div>

                <button
                  onClick={() => onOrderClick(`Починить проблему: ${prob.title}`)}
                  className="px-3.5 py-2 bg-white hover:bg-blue-600 hover:text-white text-slate-700 hover:border-blue-600 text-xs font-bold rounded-lg border border-slate-200 transition flex items-center gap-1 cursor-pointer select-none"
                  id={`solve-btn-${prob.id}`}
                >
                  Решить проблему
                  <ChevronRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Dynamic Warning Tagline */}
        <div className="mt-12 max-w-2xl mx-auto text-center bg-orange-50 border border-orange-100 p-4 rounded-xl">
          <p className="text-xs text-orange-950 leading-relaxed">
            ⚠️ <strong>Обратите внимание:</strong> Эксплуатация заклинивших окон или сломанной фурнитуры создает избыточное давление на раму, замена которой в будущем обойдется в 10 раз дороже своевременного ремонта!
          </p>
        </div>

      </div>
    </section>
  );
}
