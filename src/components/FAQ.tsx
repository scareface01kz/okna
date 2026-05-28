import { useState } from 'react';
import { FAQS } from '../data/windowsData';
import { ChevronDown, HelpCircle } from 'lucide-react';

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>('f1');

  const handleToggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-16 sm:py-24 bg-white border-b border-slate-200" id="faq">
      <div className="max-w-4xl mx-auto px-4">
        
        {/* Title Group */}
        <div className="text-center mb-14 space-y-3">
          <span className="text-xs font-extrabold uppercase tracking-widest text-blue-600">Частые Вопросы</span>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
            Ответы на популярные вопросы заказчиков
          </h2>
          <p className="text-sm text-slate-500 max-w-xl mx-auto">
            Собрали полезную информацию о стоимости услуг, гарантиях, материалах и выезде мастеров компании по Астане.
          </p>
          <div className="w-12 h-1 bg-blue-600 mx-auto rounded-full mt-4"></div>
        </div>

        {/* FAQs Accordion container */}
        <div className="space-y-3" id="faq-accordion-container">
          {FAQS.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={`border rounded-2xl transition duration-250 bg-[#fafbfc] ${
                  isOpen ? 'border-blue-500/40 bg-white ring-1 ring-blue-500/5 shadow-md shadow-blue-600/5' : 'border-slate-200'
                }`}
                id={`faq-item-${faq.id}`}
              >
                {/* Accordion Trigger header */}
                <button
                  onClick={() => handleToggle(faq.id)}
                  className="w-full flex items-center justify-between p-5 text-left cursor-pointer focus:outline-hidden"
                  aria-expanded={isOpen}
                  id={`faq-btn-${faq.id}`}
                >
                  <div className="flex items-start gap-3.5 pr-4">
                    <HelpCircle className={`h-5 w-5 shrink-0 mt-0.5 ${isOpen ? 'text-blue-600' : 'text-slate-400'}`} />
                    <span className="font-heading text-sm sm:text-base font-bold text-slate-950 leading-snug">
                      {faq.question}
                    </span>
                  </div>
                  
                  {/* Rotating Chevron indicator */}
                  <div className={`p-1 bg-white rounded-full border border-slate-200 text-slate-600 shrink-0 shadow-xs transition duration-300 ${
                    isOpen ? 'rotate-180 text-blue-600 border-blue-100' : ''
                  }`}>
                    <ChevronDown className="h-4.5 w-4.5" />
                  </div>
                </button>

                {/* Sliding Accordion Answer content */}
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? 'max-h-72 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                  id={`faq-answer-wrapper-${faq.id}`}
                >
                  <div className="p-5 pt-0 border-t border-slate-200/50 text-xs sm:text-sm text-slate-600 leading-relaxed font-sans font-light">
                    {faq.answer}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Support contact line */}
        <div className="mt-12 text-center p-5 bg-blue-50 rounded-2xl border border-blue-100/60">
          <p className="text-xs text-blue-950">
            💬 <strong>Остались дополнительные вопросы?</strong> Получите профессиональную консультацию от дежурного инженера по телефону <a href="tel:+77071234567" className="font-bold underline text-blue-850 hover:text-blue-950">+7 (707) 123-4567</a> (бесплатно в РК).
          </p>
        </div>

      </div>
    </section>
  );
}
