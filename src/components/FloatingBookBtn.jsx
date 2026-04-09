import React, { useState, useCallback } from 'react';
import { PopupModal } from 'react-calendly';
import { Phone } from 'lucide-react';

const FloatingBookBtn = () => {
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);

  // YOUR CALENDLY URL - Replace with your actual Calendly URL
  const CALENDLY_URL = 'https://calendly.com/hammedlawal412/30min'; // ADD YOUR URL HERE

  // Memoized callback to prevent unnecessary re-renders
  const handleBookClick = useCallback(() => {
    setIsCalendlyOpen(true);
  }, []);

  const handleCloseModal = useCallback(() => {
    setIsCalendlyOpen(false);
  }, []);

  return (
    <>
      {/* Floating Book a Call Button */}
      <button
        onClick={handleBookClick}
        className="fixed bottom-8 right-8 z-40 flex items-center gap-2 px-4 py-4 bg-gradient-to-r from-[#0CDDF4] to-[#016179] text-white font-semibold rounded-full shadow-lg hover:shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 ease-in-out hover:scale-110 active:scale-95"
        aria-label="Book a call"
      >
        <Phone size={20} />
        {/* <span>Book Call</span> */}
      </button>

      {/* Calendly Popup Modal */}
      <PopupModal
        url={CALENDLY_URL}
        onModalClose={handleCloseModal}
        open={isCalendlyOpen}
        rootElement={document.getElementById('root')}
      />
    </>
  );
};

export default FloatingBookBtn;
