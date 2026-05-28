import { useEffect } from 'react';
import { CheckCircle2, X } from 'lucide-react';

interface NotificationProps {
  message: string | null;
  onClose: () => void;
}

export default function Notification({ message, onClose }: NotificationProps) {
  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        onClose();
      }, 7000);
      return () => clearTimeout(timer);
    }
  }, [message, onClose]);

  if (!message) return null;

  return (
    <div 
      className="fixed bottom-6 right-6 z-50 max-w-md bg-slate-900 border border-slate-800 text-white rounded-2xl shadow-2xl p-4.5 flex items-start gap-3.5 animate-slideUp backdrop-blur-md"
      id="global-notification"
    >
      {/* Icon */}
      <div className="w-8 h-8 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5" id="notification-icon">
        <CheckCircle2 className="h-5 w-5" />
      </div>

      {/* Text Area */}
      <div className="flex-1 space-y-1">
        <div className="text-xs font-black uppercase tracking-widest text-emerald-400">
          Успешно отправлено
        </div>
        <p className="text-xs text-slate-300 leading-relaxed font-sans font-light">
          {message}
        </p>
      </div>

      {/* Exit Button */}
      <button 
        onClick={onClose}
        className="text-slate-500 hover:text-white transition p-0.5 rounded-full hover:bg-slate-800 shrink-0"
        aria-label="Закрыть уведомление"
        id="notification-close-btn"
      >
        <X className="h-4 w-4" />
      </button>

    </div>
  );
}
