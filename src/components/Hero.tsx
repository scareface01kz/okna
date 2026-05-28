import React, { useState, useEffect, useRef } from 'react';
import { CheckCircle, Flame } from 'lucide-react';
import heroBannerImg from '../assets/images/window_master_hero_1779909480910.png';

interface HeroProps {
  onOrderClick: (serviceTitle?: string) => void;
  onSuccess: (message: string) => void;
}

export default function Hero({ onOrderClick, onSuccess }: HeroProps) {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      // Force settings to trigger muted autoplay reliably
      video.muted = true;
      video.defaultMuted = true;
      
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch((err) => {
          console.warn("Autoplay blocked initially, waiting for user gesture.", err);
        });
      }
    }

    // fallback listener to play on any real device click/touch interaction 
    const attemptPlay = () => {
      if (videoRef.current && videoRef.current.paused) {
        videoRef.current.play().catch(() => {});
      }
    };

    window.addEventListener('click', attemptPlay, { once: true });
    window.addEventListener('touchstart', attemptPlay, { once: true });

    return () => {
      window.removeEventListener('click', attemptPlay);
      window.removeEventListener('touchstart', attemptPlay);
    };
  }, []);

  const handleHeroSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phoneNumber) return;
    setIsSubmitting(true);
    setTimeout(() => {
      onSuccess(`Заявка принята! Дежурный мастер перезвонит вам на номер ${phoneNumber} в течение 5 минут.`);
      setPhoneNumber('');
      setIsSubmitting(false);
    }, 800);
  };

  return (
    <section className="relative overflow-hidden bg-[#fafbfc] border-b border-slate-200/80 pt-8 pb-16 lg:py-20" id="hero-section">
      {/* Absolute Thematic Background Video of large premium windows */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none overflow-hidden bg-cover bg-center bg-no-repeat bg-[#fafbfc]"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1920&q=80')` }}
      >
        <video
          ref={videoRef}
          autoPlay={true}
          loop={true}
          muted={true}
          playsInline={true}
          preload="auto"
          poster="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1920&q=80"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-70 sm:opacity-80 md:opacity-85 transition-opacity duration-1000"
        >
          <source
            src="https://player.vimeo.com/external/498305007.sd.mp4?s=d0106cf346d0a7a372d8a4fec9de84ef0c629f62&profile_id=165&oauth2_token_id=57447761"
            type="video/mp4"
          />
          <source
            src="https://assets.mixkit.co/videos/preview/mixkit-bright-living-room-with-large-windows-41581-large.mp4"
            type="video/mp4"
          />
        </video>
        {/* Soft, premium gradient wrapper for perfect contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#fafbfc] via-[#fafbfc]/80 to-[#fafbfc]/20"></div>
      </div>

      {/* Absolute Decorative Blobs to lift corporate aesthetic */}
      <div className="absolute top-0 right-0 -mr-24 w-[500px] h-[500px] rounded-full bg-blue-100/10 blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 -ml-24 w-[300px] h-[300px] rounded-full bg-orange-100/10 blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 z-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Trust badge */}
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-900 text-xs font-semibold px-3.5 py-1.5 rounded-full border border-blue-100/80 uppercase tracking-wider animate-fadeIn" id="hero-hot-label">
              <span className="flex h-2 w-2 rounded-full bg-orange-500 animate-ping"></span>
              Заявки принимаются круглосуточно 24/7
            </div>

            {/* Core Offer Title */}
            <h1 className="font-heading text-3.5xl sm:text-4.5xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
              Профессиональный <span className="text-blue-600">ремонт и установка</span> пластиковых окон в Астане
            </h1>

            {/* Subtitle / Description */}
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl">
              Устраним продувание, заменим старый резиновый уплотнитель, отрегулируем фурнитуру и изготовим москитные сетки с выездом мастера в день обращения. Гарантия на работы до 5 лет.
            </p>

            {/* Key benefits bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2" id="hero-benefits-list">
              {[
                { text: 'Бесплатный выезд мастера и диагностика', highlight: '0 ₸' },
                { text: 'Устранение сильных сквозняков за', highlight: '30 минут' },
                { text: 'Оригинальные немецкие уплотнители', highlight: 'Q-Lon / KBE' },
                { text: 'Письменная официальная гарантия до', highlight: '5 лет' },
              ].map((benefit, i) => (
                <div key={i} className="flex items-start gap-2.5 bg-white p-3.5 rounded-xl border border-slate-200/80 shadow-xs">
                  <CheckCircle className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                  <span className="text-xs text-slate-700 leading-normal">
                    {benefit.text} <strong className="text-blue-700 font-bold">{benefit.highlight}</strong>
                  </span>
                </div>
              ))}
            </div>

            {/* Actions group */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
              <button
                onClick={() => onOrderClick()}
                className="px-8 py-4 bg-orange-500 hover:bg-orange-600 active:bg-orange-700 text-white font-bold rounded-xl shadow-lg shadow-orange-500/25 transition-all text-center cursor-pointer"
                id="hero-primary-cta"
              >
                Вызвать мастера прямо сейчас
              </button>
              <a
                href="https://wa.me/77071234567"
                target="_blank"
                rel="noreferrer"
                className="px-8 py-4 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 font-bold rounded-xl border border-emerald-200 transition-all text-center flex items-center justify-center gap-2"
                id="hero-secondary-whatsapp"
              >
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                Консультация в WhatsApp
              </a>
            </div>

          </div>

          {/* Right Master Image & Conversion Lead Form Column */}
          <div className="lg:col-span-5 relative" id="hero-right-side">
            <div className="relative rounded-2xl overflow-hidden shadow-xl bg-white border border-slate-200">
              
              {/* Image banner */}
              <div className="relative h-48 sm:h-56 overflow-hidden">
                <img
                  src={heroBannerImg}
                  alt="Оконный монтажник в Астане"
                  className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                  id="hero-banner-image"
                />
                
                {/* Floating badge over image */}
                <div className="absolute bottom-3 left-3 bg-slate-900/85 backdrop-blur-xs text-white text-[11px] font-semibold px-2.5 py-1 rounded-md flex items-center gap-1.5 shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-orange-500"></span>
                  Наш сервисный инженер на выезде
                </div>
              </div>

              {/* Instant Call request widget inside card */}
              <div className="p-6 bg-white space-y-4">
                <div className="flex items-center gap-2 bg-orange-50/70 p-3.5 rounded-xl border border-orange-100">
                  <Flame className="h-5 w-5 text-orange-500 shrink-0 animate-bounce" />
                  <p className="text-xs text-orange-850 font-medium leading-relaxed">
                    Спецпредложение! <span className="font-bold">Закажите ремонт сегодня</span> и получите диагностику всей квартиры в подарок!
                  </p>
                </div>

                <div className="space-y-1">
                  <h3 className="font-heading text-lg font-bold text-slate-900">Экспресс-звонок</h3>
                  <p className="text-xs text-slate-500">
                    Введите ваш телефон. Дежурный мастер перезвонит вам за 5 минут, проконсультирует и назовет примерную стоимость.
                  </p>
                </div>

                <form onSubmit={handleHeroSubmit} className="space-y-3" id="hero-inline-form">
                  <div>
                    <input
                      type="tel"
                      required
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      placeholder="+7 (7__) ___-____"
                      className="w-full px-4 py-3 text-sm text-slate-900 border border-slate-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 focus:outline-hidden transition"
                      id="hero-input-phone"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting || !phoneNumber}
                    className="w-full py-3 bg-blue-900 hover:bg-blue-800 text-white font-bold rounded-xl text-xs uppercase tracking-wider transition disabled:opacity-50 cursor-pointer flex items-center justify-center gap-2"
                    id="hero-submit-btn"
                  >
                    {isSubmitting ? (
                      <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                    ) : (
                      <>Получить расчет стоимости</>
                    )}
                  </button>
                  <p className="text-[10px] text-center text-slate-400">
                    🛡️ Ваши данные зашифрованы и защищены согласно законодательству РК.
                  </p>
                </form>
              </div>

            </div>

            {/* Trust badge with stats over desktop layout */}
            <div className="absolute -bottom-6 -right-4 hidden sm:flex items-center gap-3 bg-white p-3.5 rounded-2xl border border-slate-200 shadow-md animate-fadeIn delay-100" id="hero-mini-stat-badge">
              <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-700 flex items-center justify-center font-bold">★</div>
              <div>
                <div className="text-xs font-bold text-slate-900">Рейтинг сервиса 4.9/5</div>
                <div className="text-[10px] text-slate-400">На основе 1400+ отзывов в Астане</div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
