import React, { useState, useCallback } from 'react';
import { PopupModal } from 'react-calendly';
import { Mail, Phone, Send } from 'lucide-react';

const GetInTouch = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    organization: '',
    message: '',
  });

  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);

  // YOUR CALENDLY URL - Replace with your actual Calendly URL
  const CALENDLY_URL = 'https://calendly.com/0xivaan'; // ADD YOUR URL HERE

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Validate required fields
    if (!formData.firstName || !formData.email || !formData.message) {
      alert('Please fill in all required fields');
      return;
    }

    // Save form data (you can send to backend here if needed)
    console.log('Form Data Submitted:', formData);

    // Open Calendly with prefilled data
    setIsCalendlyOpen(true);
  };

  const handleCloseModal = useCallback(() => {
    setIsCalendlyOpen(false);
  }, []);

  // Prepare prefill data for Calendly
  const prefillData = {
    name: `${formData.firstName} ${formData.lastName}`,
    email: formData.email,
    customAnswers: {
      a1: formData.message, // Project Description
      a2: formData.organization || 'Not provided',
    },
  };

  return (
    <>
      <section className="bg-[#081510] border-t border-[rgba(0,195,154,0.12)] px-4 md:px-16 py-16 md:py-20">
        <div className="max-w-7xl mx-auto">
          {/* Section Title */}
          <h2 className="text-center font-extrabold text-[clamp(2rem,5vw,3.5rem)] leading-tight text-white mb-16">
            Get In Touch
          </h2>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Left: Contact Form */}
            <div className="bg-[#0a3a35]/40 border border-[rgba(0,195,154,0.15)] rounded-xl p-8 md:p-10">
              <form onSubmit={handleFormSubmit} className="flex flex-col gap-6">
                {/* Name Fields */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-[#7aab97] mb-2">First Name</label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      placeholder="enter first name"
                      className="w-full bg-white text-black px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 transition"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-[#7aab97] mb-2">Last Name</label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      placeholder="enter last name"
                      className="w-full bg-white text-black px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 transition"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm text-[#7aab97] mb-2">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="enter email address"
                    className="w-full bg-white text-black px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 transition"
                    required
                  />
                </div>

                {/* Organization */}
                <div>
                  <label className="block text-sm text-[#7aab97] mb-2">Organization (Optional)</label>
                  <input
                    type="text"
                    name="organization"
                    value={formData.organization}
                    onChange={handleInputChange}
                    placeholder="Let us know who you represent"
                    className="w-full bg-white text-black px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 transition"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm text-[#7aab97] mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us how we can help"
                    rows={6}
                    className="w-full bg-white text-black px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 transition resize-none"
                    required
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="bg-gradient-to-r from-[#0CDDF4] to-[#016179] text-white font-semibold px-6 py-3 rounded-full hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 ease-in-out w-fit flex items-center gap-2"
                >
                  <Send size={20} />
                </button>
              </form>
            </div>

            {/* Right: FAQ Section */}
            <div className="flex flex-col justify-center">
              <h3 className="font-extrabold text-[clamp(1.8rem,5vw,3rem)] leading-tight text-white mb-6">
                Answers for Curious Creators
              </h3>
              <p className="text-[#7aab97] text-lg leading-relaxed mb-12">
                Everything you need to know about our AI workflow architecture, security, and how we help you scale.
              </p>

              {/* Contact Info */}
              <div className="flex flex-col gap-6">
                {/* Phone */}
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0">
                    <Phone size={24} className="text-[#00c39a]" />
                  </div>
                  <div>
                    <p className="text-white font-semibold text-lg">08012345678</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0">
                    <Mail size={24} className="text-[#00c39a]" />
                  </div>
                  <div>
                    <p className="text-white font-semibold text-lg">info@agenticarc.org</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Calendly Popup Modal with Prefilled Data */}
      <PopupModal
        url={CALENDLY_URL}
        onModalClose={handleCloseModal}
        open={isCalendlyOpen}
        rootElement={document.getElementById('root')}
        prefillData={prefillData}
      />
    </>
  );
};

export default GetInTouch;
