import { useState, useEffect } from 'react';
import { Phone, CheckCircle2, Menu, X } from 'lucide-react';

interface HeaderProps {
  onOrderClick: (serviceTitle?: string) => void;
}

export default function Header({ onOrderClick }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'Услуги', href: '#services' },
    { label: 'Проблемы', href: '#problems' },
    { label: 'Калькулятор', href: '#calculator' },
    { label: 'Галерея работ', href: '#gallery' },
    { label: 'Отзывы', href: '#reviews' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <>
      {/* Top bar with city and working hours */}
      <div className="bg-slate-900 text-slate-300 py-2 px-4 text-xs font-sans-serif" id="header-top-bar">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-1 sm:gap-4">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
              Работаем в г. Астана и пригороде
            </span>
            <span className="hidden md:inline text-slate-500">|</span>
            <span className="hidden md:inline">Без выходных Пн-Вс: 24/7</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-orange-400 font-semibold">Быстрый выезд мастера за 30 минут</span>
            <a 
              href="https://wa.me/77071234567" 
              target="_blank" 
              rel="referrer" 
              className="text-emerald-400 hover:text-emerald-300 font-medium transition"
            >
              Написать в WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation header */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-slate-100 py-3'
            : 'bg-white py-4'
        }`}
        id="main-header"
      >
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group" id="logo-link">
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-blue-600 text-white font-bold transition group-hover:bg-blue-700">
              <kbd className="text-lg">О</kbd>
              {/* Little Window Grid Overlays */}
              <div className="absolute inset-0 border-2 border-white/20 rounded-xl pointer-events-none"></div>
              <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-white/20 -translate-x-1/2"></div>
              <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-white/20 -translate-y-1/2"></div>
            </div>
            <div>
              <div className="font-heading text-lg font-extrabold tracking-tight text-blue-900 uppercase">
                ASTANA<span className="text-orange-500"> WINDOW</span>
              </div>
              <div className="text-[10px] tracking-wider text-slate-400 font-medium uppercase -mt-1">
                Ремонт окон в Астане
              </div>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6" id="desktop-nav">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-slate-600 hover:text-blue-600 transition duration-200"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Action buttons (WhatsApp, Call Phone, Order Modal) */}
          <div className="hidden sm:flex items-center gap-3">
            <div className="text-right">
              <a 
                href="tel:+77071234567" 
                className="block text-base font-bold text-blue-900 hover:text-blue-600 transition"
                id="header-phone-link"
              >
                +7 (707) 123-45-67
              </a>
              <span className="block text-[10px] text-green-600 font-medium uppercase tracking-wider leading-none">
                Работаем 24/7 • Астана
              </span>
            </div>
            
            <button
              onClick={() => onOrderClick()}
              className="px-5 py-2.5 bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold rounded-xl transition shadow-lg shadow-orange-200 active:scale-95 cursor-pointer"
              id="header-cta-btn"
            >
              Вызвать мастера
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex lg:hidden p-2 text-slate-600 hover:text-slate-900 rounded-lg focus:outline-hidden"
            aria-label="Переключить меню"
            id="mobile-menu-toggle"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile slide drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-t border-slate-100 shadow-xl px-4 py-6 space-y-4 animate-fadeIn" id="mobile-menu-drawer">
            <div className="space-y-2">
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-2.5 px-3 text-base font-medium text-slate-700 hover:bg-slate-50 rounded-xl transition"
                >
                  {item.label}
                </a>
              ))}
            </div>

            <div className="pt-4 border-t border-slate-100 space-y-3">
              <div className="flex justify-between items-center px-3">
                <span className="text-xs text-slate-500">Дежурный телефон:</span>
                <a href="tel:+77071234567" className="text-base font-bold text-slate-900">
                  +7 (707) 123-4567
                </a>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <a
                  href="https://wa.me/77071234567"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-1.5 py-2.5 bg-emerald-500 hover:bg-emerald-600 text-white text-xs font-semibold rounded-xl transition text-center"
                >
                  WhatsApp
                </a>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOrderClick();
                  }}
                  className="py-2.5 bg-orange-500 hover:bg-orange-600 text-white text-xs font-semibold rounded-xl transition cursor-pointer"
                >
                  Вызвать мастера
                </button>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
