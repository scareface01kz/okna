import React, { useState, useEffect } from 'react';
import { X, Phone, User, CheckCircle2 } from 'lucide-react';

interface ModalFormProps {
  isOpen: boolean;
  onClose: () => void;
  defaultServiceTitle?: string;
  onSuccess: (message: string) => void;
}

export default function ModalForm({ isOpen, onClose, defaultServiceTitle = '', onSuccess }: ModalFormProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState('');
  const [comment, setComment] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (defaultServiceTitle) {
      setService(defaultServiceTitle);
    } else {
      setService('');
    }
    // Reset fields on open/close
    if (isOpen) {
      setName('');
      setPhone('');
      setComment('');
    }
  }, [isOpen, defaultServiceTitle]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) {
      alert('Пожалуйста, заполните имя и телефон.');
      return;
    }

    setIsSubmitting(true);

    // Simulate server side submission
    setTimeout(() => {
      setIsSubmitting(false);
      onSuccess(`Заявка успешно отправлена! Мы свяжемся с вами по номеру ${phone} в течение 5 минут.`);
      onClose();
    }, 800);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 p-4 backdrop-blur-xs transition-opacity duration-300"
      id="modal-backdrop"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div 
        className="relative w-full max-w-md overflow-hidden rounded-2xl bg-white shadow-2xl transition-all duration-300 transform scale-100"
        id="modal-body"
      >
        {/* Decorative Top Accent Stripe */}
        <div className="h-2 bg-gradient-to-r from-orange-500 to-sky-600"></div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 hover:bg-slate-100 p-1.5 rounded-full transition-all"
          aria-label="Закрыть"
          id="modal-close-btn"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Header */}
        <div className="px-6 pt-6 pb-4">
          <h3 className="font-heading text-2xl font-bold text-slate-900" id="modal-heading">
            {defaultServiceTitle ? 'Заказ услуги / ремонта' : 'Вызов мастера по окнам'}
          </h3>
          <p className="mt-1.5 text-sm text-slate-500">
            Оставьте ваши контакты. Наш дежурный мастер в Астане свяжется сегодня за 5–10 минут.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="px-6 pb-6 space-y-4" id="modal-form">
          <div>
            <label className="block text-xs font-semibold text-slate-600 uppercase tracking-widest mb-1.5">
              Ваше имя <span className="text-orange-500">*</span>
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 text-slate-400">
                <User className="h-4.5 w-4.5" />
              </span>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Например, Арман"
                className="w-full pl-10 pr-4 py-3 text-slate-900 border border-slate-200 rounded-xl focus:border-orange-500 focus:ring-2 focus:ring-orange-500/10 focus:outline-hidden transition"
                id="modal-input-name"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-600 uppercase tracking-widest mb-1.5">
              Номер телефона <span className="text-orange-500">*</span>
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 text-slate-400">
                <Phone className="h-4.5 w-4.5" />
              </span>
              <input
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+7 (707) 123-4567"
                className="w-full pl-10 pr-4 py-3 text-slate-900 border border-slate-200 rounded-xl focus:border-orange-500 focus:ring-2 focus:ring-orange-500/10 focus:outline-hidden transition"
                id="modal-input-phone"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-600 uppercase tracking-widest mb-1.5">
              Какая услуга требуется?
            </label>
            <input
              type="text"
              value={service}
              onChange={(e) => setService(e.target.value)}
              placeholder="Например: замена уплотнителя на 2 окнах"
              className="w-full px-4 py-3 text-slate-900 border border-slate-200 rounded-xl focus:border-orange-500 focus:ring-2 focus:ring-orange-500/10 focus:outline-hidden transition text-sm"
              id="modal-input-service"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-600 uppercase tracking-widest mb-1.5">
              Дополнительные пожелания (необязательно)
            </label>
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Укажите район Астаны или удобное время выезда..."
              rows={2}
              className="w-full px-4 py-3 text-slate-900 border border-slate-200 rounded-xl focus:border-orange-500 focus:ring-2 focus:ring-orange-500/10 focus:outline-hidden transition text-sm resize-none"
              id="modal-input-comment"
            />
          </div>

          <div className="pt-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3.5 bg-orange-500 hover:bg-orange-600 active:bg-orange-700 text-white font-semibold rounded-xl transition shadow-lg shadow-orange-500/20 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              id="modal-submit-btn"
            >
              {isSubmitting ? (
                <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
              ) : (
                <>Оставить заявку</>
              )}
            </button>
            <p className="mt-3 text-[11px] text-center text-slate-400">
              Нажимая кнопку, вы соглашаетесь на обработку персональных данных в соответствии со стандартами РК.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
