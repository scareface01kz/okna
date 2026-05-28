import React, { useState } from 'react';
import { Phone, MessageSquare } from 'lucide-react';

interface CTASectionProps {
  onOrderClick: () => void;
  onSuccess: (message: string) => void;
}

export default function CTASection({ onOrderClick, onSuccess }: CTASectionProps) {
  const [phone, setPhone] = useState('');
  const [name, setName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone || !name) return;

    setIsSubmitting(true);
    setTimeout(() => {
      onSuccess(`Заявка успешно отправлена! Дежурный мастер перезвонит вам по номеру ${phone} через 5 минут.`);
      setName('');
      setPhone('');
      setIsSubmitting(false);
    }, 850);
  };

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-tr from-blue-950 via-blue-900 to-slate-900 text-white relative overflow-hidden border-b border-blue-950" id="cta-section">
      {/* Wave Decorative Overlays */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path fill="#ffffff" d="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,218.7C672,203,768,149,864,128C960,107,1056,117,1152,133.3C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 z-15 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Column 1: Core Pitch, Phones, WhatsApp channels (Span 6) */}
          <div className="lg:col-span-6 space-y-6 text-left" id="cta-pitch-block">
            <span className="bg-white/20 text-white text-[10px] font-extrabold uppercase tracking-widest px-3.5 py-1.5 rounded-full inline-block">
              Моментальный выезд
            </span>
            <h2 className="font-heading text-3.5xl sm:text-4.5xl font-black tracking-tight leading-tight">
              Вызовите мастера прямо сейчас и забудьте о сквозняках!
            </h2>
            <p className="text-sm sm:text-base text-blue-100/90 leading-relaxed max-w-xl">
              Скидка 10% на все работы по ремонту окон в Астане до конца недели. Оформите заявку онлайн, вызовите дежурного мастера по клику или звоните напрямую!
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4" id="cta-quick-contacts">
              
              {/* Phone trigger box */}
              <a 
                href="tel:+77071234567"
                className="flex items-center gap-3 bg-white/10 hover:bg-white/15 p-4 rounded-xl border border-white/15 transition-all text-left"
              >
                <div className="w-10 h-10 rounded-full bg-blue-700 flex items-center justify-center shrink-0 shadow-md">
                  <Phone className="h-4 w-4 text-white" />
                </div>
                <div>
                  <span className="block text-[10px] text-blue-200">Позвонить прямо сейчас:</span>
                  <span className="text-sm font-extrabold text-white">+7 (707) 123-45-67</span>
                </div>
              </a>

              {/* WhatsApp direct link box */}
              <a 
                href="https://wa.me/77071234567"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 bg-white/10 hover:bg-white/15 p-4 rounded-xl border border-white/15 transition-all text-left"
              >
                <div className="w-10 h-10 rounded-full bg-emerald-600 flex items-center justify-center shrink-0 shadow-md">
                  <MessageSquare className="h-4 w-4 text-white" />
                </div>
                <div>
                  <span className="block text-[10px] text-blue-200">Связаться в мессенджере:</span>
                  <span className="text-sm font-extrabold text-white">Канал WhatsApp</span>
                </div>
              </a>

            </div>

            <div className="pt-2 text-[10px] text-blue-100/80 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-450 animate-pulse"></span>
              9 свободных дежурных мастеров во всех районах Астаны готовы к выезду.
            </div>
          </div>

          {/* Column 2: Lead capture form block (Span 6) */}
          <div className="lg:col-span-6" id="cta-form-block">
            <div className="bg-white text-slate-900 rounded-2xl p-6 sm:p-8 shadow-2xl space-y-5 border border-slate-100">
              <div className="space-y-1">
                <h3 className="font-heading text-lg sm:text-xl font-black text-slate-950">
                  Запишитесь на бесплатный замер
                </h3>
                <p className="text-xs text-slate-500">
                  Оставьте контакты, и мы забронируем за вами скидку 10% на все услуги!
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4" id="cta-lead-form">
                <div>
                  <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1.5">
                    Ваше имя или имя клиента:
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Например, Олжас"
                    className="w-full px-4 py-3 text-sm text-slate-900 border border-slate-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 focus:outline-hidden transition"
                    id="cta-input-name"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1.5">
                    Ваш номер телефона:
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+7 (7__) ___-____"
                    className="w-full px-4 py-3 text-sm text-slate-900 border border-slate-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 focus:outline-hidden transition"
                    id="cta-input-phone"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-orange-500 hover:bg-orange-600 text-white font-extrabold text-xs uppercase tracking-wider rounded-xl shadow-lg shadow-orange-500/15 transition flex items-center justify-center gap-2 cursor-pointer"
                    id="cta-submit-btn"
                  >
                    {isSubmitting ? (
                      <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
                    ) : (
                      <>Вызвать мастера • Скидка 10%</>
                    )}
                  </button>
                </div>

                <div className="text-[10px] text-center text-slate-400">
                  🛡️ Заполнение ни к чему не обязывает. Консультируем бесплатно.
                </div>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
