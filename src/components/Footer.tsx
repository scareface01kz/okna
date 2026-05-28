import React from 'react';
import { Phone, Mail, MapPin, Clock, ArrowUp, Send, Smartphone } from 'lucide-react';

export default function Footer() {
  const handleScrollUp = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 font-sans text-xs sm:text-sm pt-16 pb-8 border-t border-slate-900" id="footer">
      <div className="max-w-7xl mx-auto px-4 space-y-12">
        
        {/* Footer Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
          
          {/* Column 1: Brand & Logo Grid (Span 4) */}
          <div className="md:col-span-4 space-y-4" id="footer-col-brand">
            <div className="flex items-center gap-2">
              <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-sky-600 text-white font-black text-sm">
                О
              </div>
              <span className="font-heading text-base font-extrabold text-white uppercase tracking-tight">
                Оконный<span className="text-orange-500">Сервис</span>
              </span>
            </div>
            
            <p className="text-xs text-slate-500 leading-relaxed max-w-sm">
              Профессиональный качественный ремонт пластиковых окон, регулирование фурнитурных узлов, замена герметизирующей резины KBE/Rehau и установка москитных сеток любой комплектации в Астане.
            </p>
            
            <div className="flex items-center gap-3" id="footer-social-links">
              <a 
                href="https://wa.me/77071234567" 
                target="_blank" 
                rel="noreferrer" 
                className="w-8 h-8 rounded-lg bg-slate-900 hover:bg-emerald-600 text-slate-350 hover:text-white flex items-center justify-center transition"
                aria-label="WhatsApp"
              >
                <Smartphone className="w-4.5 h-4.5" />
              </a>
              <a 
                href="#" 
                className="w-8 h-8 rounded-lg bg-slate-900 hover:bg-rose-600 text-slate-350 hover:text-white flex items-center justify-center transition"
                aria-label="Instagram"
              >
                <span>Inst</span>
              </a>
              <a 
                href="#" 
                className="w-8 h-8 rounded-lg bg-slate-900 hover:bg-sky-500 text-slate-350 hover:text-white flex items-center justify-center transition"
                aria-label="Telegram"
              >
                <Send className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick navigation links list (Span 3) */}
          <div className="md:col-span-3 space-y-4" id="footer-col-nav">
            <h4 className="text-xs font-black text-slate-200 uppercase tracking-widest">
              Навигация по сайту
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              {[
                { label: 'Наши оконные услуги', href: '#services' },
                { label: 'Устранение дефектов', href: '#problems' },
                { label: 'Калькулятор сметы', href: '#calculator' },
                { label: 'Фотографии До/После', href: '#gallery' },
                { label: 'Отзывы клиентов в Астане', href: '#reviews' },
                { label: 'Частые вопросы & FAQ', href: '#faq' },
              ].map((item, idx) => (
                <li key={idx}>
                  <a href={item.href} className="hover:text-sky-500 transition duration-150">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact information (Span 5) */}
          <div className="md:col-span-5 space-y-4" id="footer-col-contacts">
            <h4 className="text-xs font-black text-slate-200 uppercase tracking-widest">
              Контакты сервисного центра
            </h4>
            <ul className="space-y-3.5 text-xs text-slate-400">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-sky-500 shrink-0 mt-0.5" />
                <span>
                  <strong className="block text-slate-200 mb-0.5">Адрес офиса:</strong>
                  Республика Казахстан, г. Астана, Есильский район, ул. Динмухамеда Кунаева, д. 12/1, БЦ «Нурсая», 4 этаж, офис 402
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-sky-500 shrink-0" />
                <div>
                  <strong className="block text-slate-200 mb-0.5">Телефон для вызова мастера:</strong>
                  <a href="tel:+77071234567" className="text-sm font-extrabold text-white hover:text-sky-400">
                    +7 (707) 123-4567
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-sky-500 shrink-0" />
                <div>
                  <strong className="block text-slate-200 mb-0.5">Электронная почта:</strong>
                  <a href="mailto:info@okno-remont.kz" className="hover:text-sky-400">
                    info@okno-remont.kz
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-sky-500 shrink-0" />
                <span>
                  <strong className="block text-slate-200 mb-0.5">Режим работы:</strong>
                  Круглосуточно Пн-Вс: 24/7 (без праздников и перерывов)
                </span>
              </li>
            </ul>
          </div>

        </div>

        {/* Footer Bottom Border Area */}
        <div className="pt-8 border-t border-slate-900/90 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500" id="footer-copyright-row">
          <div>
            © {new Date().getFullYear()} Оконный Сервис Астана (okno-remont.kz). Все права защищены.
          </div>
          <div className="flex gap-4">
            <a href="#" className="hover:text-slate-350 transition">Политика конфиденциальности</a>
            <a href="#" className="hover:text-slate-350 transition">Публичная оферта</a>
          </div>
          
          {/* Scroll up absolute layout */}
          <button 
            onClick={handleScrollUp}
            className="p-2.5 rounded-lg bg-slate-900 hover:bg-orange-500 text-slate-300 hover:text-white transition cursor-pointer flex items-center gap-1 shrink-0"
            aria-label="На самый верх"
            id="btn-scroll-top"
          >
            <span>Наверх</span>
            <ArrowUp className="h-3.5 w-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
