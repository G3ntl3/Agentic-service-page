import React, { useState, useCallback } from 'react';
import { PopupModal } from 'react-calendly';

const Connect = () => {
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);

  // YOUR CALENDLY URL - Replace with your actual Calendly URL
  const CALENDLY_URL = 'https://calendly.com/0xivaan'; // ADD YOUR URL HERE

  // Memoized callback to prevent unnecessary re-renders
  const handleBookClick = useCallback(() => {
    setIsCalendlyOpen(true);
  }, []);

  const handleCloseModal = useCallback(() => {
    setIsCalendlyOpen(false);
  }, []);

  return (
    <>
      <button 
        onClick={handleBookClick} 
        className="flex items-center justify-center px-5 py-2 rounded-2xl bg-gradient-to-r from-[#0CDDF4] to-[#016179] text-white font-medium gap-2 transition-all duration-300 ease-in-out hover:shadow-lg hover:shadow-cyan-500/50"
      >
        Book a call
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
}

export default Connect;
