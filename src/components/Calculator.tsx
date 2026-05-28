import React, { useState, useEffect } from 'react';
import { Calculator as CalcIcon, Info } from 'lucide-react';

interface CalculatorProps {
  onSuccess: (message: string) => void;
}

export default function Calculator({ onSuccess }: CalculatorProps) {
  const [windowType, setWindowType] = useState<'single' | 'double' | 'triple' | 'balcony'>('double');
  const [serviceType, setServiceType] = useState<'adjust' | 'seal' | 'glass' | 'mesh' | 'all'>('seal');
  const [quantity, setQuantity] = useState(1);
  const [addChildLock, setAddChildLock] = useState(false);
  const [addPremiumSeal, setAddPremiumSeal] = useState(false);
  const [computedPrice, setComputedPrice] = useState(0);
  const [phone, setPhone] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Prices logic
  useEffect(() => {
    let basePrice = 0;
    
    // 1. Base window form price
    switch (windowType) {
      case 'single':
        basePrice = 2500;
        break;
      case 'double':
        basePrice = 4500;
        break;
      case 'triple':
        basePrice = 6500;
        break;
      case 'balcony':
        basePrice = 8500;
        break;
    }

    // 2. Base service multiplier
    let serviceCostPerUnit = 0;
    switch (serviceType) {
      case 'adjust':
        serviceCostPerUnit = 3000;
        break;
      case 'seal':
        serviceCostPerUnit = 4500; // Average seal change
        break;
      case 'glass':
        serviceCostPerUnit = 18000;
        break;
      case 'mesh':
        serviceCostPerUnit = 4500;
        break;
      case 'all':
        serviceCostPerUnit = 12000;
        break;
    }

    let subtotal = (basePrice + serviceCostPerUnit) * quantity;

    // 3. Optional addons
    if (addChildLock) {
      subtotal += 3500 * quantity;
    }
    if (addPremiumSeal) {
      subtotal += 2500 * quantity;
    }

    setComputedPrice(subtotal);
  }, [windowType, serviceType, quantity, addChildLock, addPremiumSeal]);

  const handleCalcSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone) return;

    setIsSubmitting(true);
    
    const configText = `${windowType === 'single' ? 'Одностворчатое' : windowType === 'double' ? 'Двустворчатое' : windowType === 'triple' ? 'Трехстворчатое' : 'Балконный блок'}, услуга: ${
      serviceType === 'adjust' ? 'Регулировка' : serviceType === 'seal' ? 'Замена уплотнителя' : serviceType === 'glass' ? 'Замена стеклопакета' : serviceType === 'mesh' ? 'Сетки' : 'Комплекс'
    }, кол-во: ${quantity} шт. ${addChildLock ? '+Детский замок ' : ''}${addPremiumSeal ? '+Немецкий уплотнитель' : ''}. Смета: ${computedPrice.toLocaleString('ru-RU')} ₸.`;

    setTimeout(() => {
      setIsSubmitting(false);
      onSuccess(`Калькулятор рассчитал смету: ${computedPrice.toLocaleString('ru-RU')} ₸. Ваша заявка по конфигурации (${configText}) принята! Мастер перезвонит за 5 минут.`);
      setPhone('');
    }, 850);
  };

  return (
    <section className="py-16 sm:py-24 bg-white border-y border-slate-200" id="calculator">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Title Group */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="text-xs font-extrabold uppercase tracking-widest text-blue-600">Онлайн Смета за 1 минуту</span>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
            Интерактивный калькулятор стоимости ремонта окон в Астане
          </h2>
          <p className="text-sm text-slate-500 max-w-xl mx-auto">
            Спланируйте бюджет заранее! Выберите тип остекления и необходимые сервисные опции, система мгновенно выдаст ориентировочную цену.
          </p>
          <div className="w-12 h-1 bg-blue-600 mx-auto rounded-full mt-4"></div>
        </div>

        {/* Calc layout Body */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch" id="calculator-panel">
          
          {/* Controls - Left side (Span 7) */}
          <div className="lg:col-span-7 bg-[#fafbfc] p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between space-y-6">
            
            {/* 1. Window Type Selector */}
            <div className="space-y-3">
              <label className="block text-xs font-bold text-slate-600 uppercase tracking-widest">
                1. Выберите тип оконной конструкции:
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-white p-2 rounded-xl border border-slate-200/60" id="calc-window-types">
                {[
                  { id: 'single', label: '1 створка', icon: '🪟' },
                  { id: 'double', label: '2 створки', icon: '🪟🪟' },
                  { id: 'triple', label: '3 створки', icon: '🪟🪟🪟' },
                  { id: 'balcony', label: 'Балкон', icon: '🚪' }
                ].map((type) => (
                  <button
                    key={type.id}
                    type="button"
                    onClick={() => setWindowType(type.id as any)}
                    className={`py-3 px-2 rounded-lg text-center font-medium text-xs transition duration-250 cursor-pointer ${
                      windowType === type.id
                        ? 'bg-blue-600 text-white shadow-xs'
                        : 'bg-slate-50 text-slate-700 hover:text-slate-950 hover:bg-slate-100 border border-slate-200/60'
                    }`}
                  >
                    <div className="text-lg mb-1">{type.icon}</div>
                    <div>{type.label}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Service Selection */}
            <div className="space-y-3">
              <label className="block text-xs font-bold text-slate-600 uppercase tracking-widest">
                2. Что требуется сделать?
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3" id="calc-services">
                {[
                  { id: 'adjust', label: 'Регулировка и смазка', info: 'от 3000 ₸ - Смажем и выровняем ход' },
                  { id: 'seal', label: 'Замена уплотнителей', info: 'от 1200 ₸ - Устранит сквозняки напрочь' },
                  { id: 'glass', label: 'Замена стеклопакета', info: 'от 18000 ₸ - Новый взамен разбитого' },
                  { id: 'mesh', label: 'Москитные сетки', info: 'от 4500 ₸ - Защита от насекомых и пыли' },
                  { id: 'all', label: 'Комплексный сервис створки', info: 'от 12000 ₸ - Регуляция + замена резины + смазка' }
                ].map((serv) => (
                  <button
                    key={serv.id}
                    type="button"
                    onClick={() => setServiceType(serv.id as any)}
                    className={`p-3 rounded-xl text-left transition duration-200 border cursor-pointer ${
                      serviceType === serv.id
                        ? 'bg-blue-50 text-blue-905 border-blue-300'
                        : 'bg-white text-slate-700 hover:text-slate-950 hover:bg-slate-50 border-slate-200'
                    }`}
                  >
                    <div className="text-xs font-bold">{serv.label}</div>
                    <div className="text-[10px] text-slate-500 mt-0.5">{serv.info}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* 3. Sliders / Quantity picker */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-xs font-bold text-slate-600 uppercase tracking-widest">
                    Кол-во створок:
                  </span>
                  <span className="text-sm font-bold text-blue-600 bg-blue-50 px-2.5 py-0.5 rounded-sm">
                    {quantity} шт.
                  </span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="15"
                  value={quantity}
                  onChange={(e) => setQuantity(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg cursor-pointer accent-blue-600"
                  id="calc-range-qty"
                />
              </div>

              {/* Checkbox Options */}
              <div className="space-y-2.5 flex flex-col justify-center">
                <label className="flex items-center gap-2.5 cursor-pointer text-xs font-semibold text-slate-700">
                  <input
                    type="checkbox"
                    checked={addChildLock}
                    onChange={(e) => setAddChildLock(e.target.checked)}
                    className="h-4.5 w-4.5 rounded-sm border-slate-300 text-blue-600 focus:ring-blue-500"
                  />
                  <span>Добавить Детский замок (+3 500 ₸)</span>
                </label>
                <label className="flex items-center gap-2.5 cursor-pointer text-xs font-semibold text-slate-700">
                  <input
                    type="checkbox"
                    checked={addPremiumSeal}
                    onChange={(e) => setAddPremiumSeal(e.target.checked)}
                    className="h-4.5 w-4.5 rounded-sm border-slate-300 text-blue-600 focus:ring-blue-500"
                  />
                  <span>Немецкий уплотнитель Q-Lon (+2 500 ₸)</span>
                </label>
              </div>
            </div>

          </div>

          {/* Sizing display & Lead Capture form - Right side (Span 5) */}
          <div className="lg:col-span-5 bg-blue-950 text-white p-6 sm:p-8 rounded-2xl border border-blue-900 flex flex-col justify-between" id="calculator-summary">
            <div className="space-y-6">
              <div className="flex items-center gap-2 text-orange-400">
                <CalcIcon className="h-6 w-6 shrink-0" />
                <h3 className="font-heading text-lg font-bold uppercase tracking-wider">Итоговый расчет сметы</h3>
              </div>
              
              <div className="p-4 bg-blue-900/60 rounded-xl space-y-2 border border-blue-900/80">
                <p className="text-[11px] text-blue-200 font-medium">Предварительная смета со скидкой:</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl sm:text-4.5xl font-black text-white" id="calc-final-price">
                    {computedPrice.toLocaleString('ru-RU')}
                  </span>
                  <span className="text-xl font-bold text-orange-400">₸</span>
                </div>
                <div className="text-[10px] text-emerald-400 font-semibold flex items-center gap-1">
                  <span>●</span> Выезд мастера по Астане и замер входит в смету: 0 ₸
                </div>
              </div>

              {/* Informative advice */}
              <div className="text-xs text-blue-200 flex gap-2">
                <Info className="h-5 w-5 text-blue-400 shrink-0 mt-0.5" />
                <p className="leading-relaxed">
                  Цена является справочной. Окончательную смету мастер предоставит на месте после точной регулировочной диагностики и дефектовки.
                </p>
              </div>
            </div>

            {/* Quick reservation Form */}
            <form onSubmit={handleCalcSubmit} className="mt-6 space-y-3 pt-6 border-t border-blue-900">
              <p className="text-xs text-orange-400 font-bold">
                🔥 Зафиксировать эту цену у диспетчера:
              </p>
              <div>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Ваш номер телефона (+7 ...)"
                  className="w-full px-4 py-3 text-sm text-slate-900 placeholder-slate-400 border border-slate-700 bg-white rounded-xl focus:border-orange-500 focus:ring-2 focus:ring-orange-500/15 focus:outline-hidden transition"
                  id="calc-input-phone"
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting || !phone}
                className="w-full py-4 bg-orange-500 hover:bg-orange-600 active:bg-orange-700 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition cursor-pointer disabled:opacity-50 shadow-lg shadow-orange-500/20"
                id="calc-submit-btn"
              >
                {isSubmitting ? 'Отправляем...' : 'Заказать расчет со скидкой'}
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
