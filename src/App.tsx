import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Services from './components/Services';
import Problems from './components/Problems';
import Steps from './components/Steps';
import Calculator from './components/Calculator';
import Gallery from './components/Gallery';
import Reviews from './components/Reviews';
import FAQ from './components/FAQ';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import ModalForm from './components/ModalForm';
import Notification from './components/Notification';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [defaultService, setDefaultService] = useState('');
  const [notification, setNotification] = useState<string | null>(null);

  const handleOpenModal = (serviceTitle?: string) => {
    if (serviceTitle) {
      setDefaultService(serviceTitle);
    } else {
      setDefaultService('');
    }
    setIsModalOpen(true);
  };

  const handleSuccess = (msg: string) => {
    setNotification(msg);
  };

  return (
    <div className="min-h-screen bg-slate-50/50 flex flex-col font-sans text-slate-900 overflow-x-hidden antialiased select-none selection:bg-orange-500 selection:text-white" id="applet-root">
      
      {/* 1. Header Navigation Contacts */}
      <Header onOrderClick={handleOpenModal} />

      <main className="flex-1" id="applet-main-content">
        
        {/* 2. Hero Section with Call Form */}
        <Hero onOrderClick={handleOpenModal} onSuccess={handleSuccess} />

        {/* 3. Advantages Section */}
        <Stats />

        {/* 4. Services Grid Filter Panel */}
        <Services onOrderClick={handleOpenModal} />

        {/* 5. Real Window Problems Grid */}
        <Problems onOrderClick={handleOpenModal} />

        {/* 6. Dynamic Calculator Price Estimate */}
        <Calculator onSuccess={handleSuccess} />

        {/* 7. Steps Timeline Section */}
        <Steps />

        {/* 8. Before/After Gallery Images */}
        <Gallery />

        {/* 9. Glowing Reviews Section */}
        <Reviews />

        {/* 10. FAQ Expandable Accordion */}
        <FAQ />

        {/* 11. Large orange CTA conversion block */}
        <CTASection onOrderClick={() => handleOpenModal()} onSuccess={handleSuccess} />

      </main>

      {/* 12. Local Astana business info Footer */}
      <Footer />

      {/* Popups & Dialogs handles */}
      <ModalForm 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        defaultServiceTitle={defaultService}
        onSuccess={handleSuccess}
      />

      <Notification 
        message={notification} 
        onClose={() => setNotification(null)} 
      />

    </div>
  );
}

