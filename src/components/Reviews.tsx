import { REVIEWS } from '../data/windowsData';
import { Star, MessageSquare } from 'lucide-react';

export default function Reviews() {
  return (
    <section className="py-16 sm:py-24 bg-slate-50" id="reviews">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Title Group */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="text-xs font-extrabold uppercase tracking-widest text-orange-500">Отзывы Заказчиков</span>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
            Что говорят о нас жители Астаны
          </h2>
          <p className="text-sm text-slate-500 max-w-xl mx-auto">
            Ознакомьтесь со свежими отзывами наших клиентов. Мы ценим мнение каждого и стремимся оказывать пятизвездочный сервис!
          </p>
          <div className="w-12 h-1.5 bg-orange-500 mx-auto rounded-full mt-4"></div>
        </div>

        {/* Reviews Cards list */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" id="reviews-grid">
          {REVIEWS.map((rev) => (
            <div
              key={rev.id}
              className="group bg-white rounded-2xl p-6 border border-slate-100 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              id={`review-card-${rev.id}`}
            >
              <div className="space-y-4">
                {/* Rating score, stars bar, quote symbol */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-0.5">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="h-4.5 w-4.5 text-amber-500 fill-amber-500" />
                    ))}
                  </div>
                  <MessageSquare className="h-6 w-6 text-slate-100 group-hover:text-orange-100 transition" />
                </div>

                {/* Review Text comment */}
                <p className="text-xs sm:text-sm text-slate-650 leading-relaxed font-sans font-light">
                  «{rev.text}»
                </p>
              </div>

              {/* Author alignment */}
              <div className="pt-5 mt-5 border-t border-slate-100 flex items-center gap-3">
                {/* User photo */}
                <img
                  src={rev.avatar}
                  alt={rev.name}
                  className="w-10 h-10 rounded-full object-cover border border-slate-100 shadow-xs"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div>
                  <h4 className="font-heading text-xs sm:text-sm font-bold text-slate-950">
                    {rev.name}
                  </h4>
                  <div className="flex items-center gap-1.5 text-[10px] text-slate-400 font-medium mt-0.5">
                    <span>{rev.city}</span>
                    <span>•</span>
                    <span className="text-sky-600 font-bold">{rev.service}</span>
                  </div>
                </div>
                
                {/* Date on right */}
                <span className="ml-auto text-[10px] text-slate-400 font-medium">
                  {rev.date}
                </span>
              </div>

            </div>
          ))}
        </div>

        {/* Dynamic conversion badges */}
        <div className="mt-14 flex flex-wrap justify-center items-center gap-8 text-center" id="reviews-bottom-badges">
          <div className="bg-white px-5 py-3 rounded-xl border border-slate-100 shadow-xs">
            <span className="block text-xl font-extrabold text-slate-900">4.9 / 5.0</span>
            <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Рейтинг в 2ГИС Астана</span>
          </div>
          <div className="bg-white px-5 py-3 rounded-xl border border-slate-100 shadow-xs">
            <span className="block text-xl font-extrabold text-slate-900">14 800 +</span>
            <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Отремонтированных окон</span>
          </div>
          <div className="bg-white px-5 py-3 rounded-xl border border-slate-100 shadow-xs">
            <span className="block text-xl font-extrabold text-slate-900">98% предложений</span>
            <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Клиенты советуют нас близким</span>
          </div>
        </div>

      </div>
    </section>
  );
}
