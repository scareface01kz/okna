import { PhoneCall, CalendarRange, Wrench, FileCheck, ArrowRight } from 'lucide-react';

export default function Steps() {
  const steps = [
    {
      number: '01',
      icon: <PhoneCall className="h-6 w-6 text-orange-500" />,
      title: 'Быстрая заявка',
      description: 'Вы заполняете простую форму на сайте или звоните дежурному диспетчеру по номеру +7 (707) 123-4567 в любое время суток.'
    },
    {
      number: '02',
      icon: <CalendarRange className="h-6 w-6 text-sky-600" />,
      title: 'Бесплатный выезд',
      description: 'Наш опытный сервисный инженер прибывает к вам в Астане со всем инструментом в согласованное время за 30–45 минут.'
    },
    {
      number: '03',
      icon: <Wrench className="h-6 w-6 text-sky-600" />,
      title: 'Ремонт и наладка',
      description: 'Мастер устраняет сквозняки, монтирует сетки, восстанавливает откосы, замки или петли. Обычно работа длится до 1 часа.'
    },
    {
      number: '04',
      icon: <FileCheck className="h-6 w-6 text-white" />,
      title: 'Гарантийный акт',
      description: 'Вы лично проверяете плавный ход створки и плотность прижима. Мы выписываем официальный договор и талон гарантии до 5 лет.'
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-slate-900 text-slate-100" id="steps-section">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Title Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-extrabold uppercase tracking-widest text-orange-400">Прозрачный Процесс</span>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-white leading-tight">
            Всего 4 простых шага до теплых и тихих окон в доме
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 max-w-xl mx-auto">
            Организуем обслуживание максимально быстро и вежливо. Без грязи, пыли и незапланированных затрат.
          </p>
          <div className="w-12 h-1.5 bg-sky-500 mx-auto rounded-full mt-4"></div>
        </div>

        {/* Steps Cards list */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative" id="steps-timeline">
          
          {/* Timeline Connector Line for desktop screens */}
          <div className="hidden lg:block absolute top-[68px] left-[15%] right-[15%] h-0.5 border-t border-dashed border-slate-700/60 -z-0"></div>

          {steps.map((step, idx) => (
            <div 
              key={idx}
              className={`relative bg-slate-800/50 border rounded-2xl p-6 hover:bg-slate-800 transition duration-300 z-10 ${
                idx === 3 ? 'border-sky-500/30 ring-2 ring-sky-500/10' : 'border-slate-800'
              }`}
              id={`step-card-${idx}`}
            >
              {/* Number and Icon alignment */}
              <div className="flex items-center justify-between mb-5">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center font-bold text-sm shadow-md ${
                  idx === 3 ? 'bg-sky-600 text-white' : 'bg-slate-700 text-sky-400'
                }`}>
                  {step.icon}
                </div>
                <span className="text-3xl font-heading font-black text-slate-700/50 select-none">
                  {step.number}
                </span>
              </div>

              {/* Title and details */}
              <h3 className="font-heading text-lg font-bold text-white mb-2">
                {step.title}
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                {step.description}
              </p>
              
              {/* Floating arrow for mobile/desktop indicators */}
              <div className="hidden lg:block absolute -right-4 top-[58px] text-slate-600 z-20">
                {idx < 3 && <ArrowRight className="h-5 w-5" />}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom banner feedback info */}
        <div className="mt-14 p-5 rounded-2xl bg-slate-800/30 border border-slate-800 max-w-lg mx-auto text-center">
          <p className="text-xs text-slate-300 font-medium">
            ⏱️ <strong>Важно:</strong> Выезжаем на объекты ремонта в будни, праздники и ночное время. Прием звонков автоматизирован круглые сутки.
          </p>
        </div>

      </div>
    </section>
  );
}
