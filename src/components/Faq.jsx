import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// ── Edit your questions and answers here ──────────────────────
const faqs = [
  {
    question: "What is Agentic Arc?",
    answer:
      "Agentic Arc is a content automation studio that builds end-to-end content systems for creators and personal brands. We handle everything from idea generation to final distribution so you can produce more content with less effort.",
  },
  {
    question: "Who is Agentic Arc for?",
    answer:
      "We work with content creators, educators, coaches, startup founders, and businesses who want to scale their content output consistently without burning out or figuring everything out alone every week.",
  },
  {
    question: "How does Agentic Arc help increase video views?",
    answer:
      "We optimise every video for performance — improving hooks, pacing, captions, and visual movement so your content earns more attention on every platform you post to.",
  },
  {
    question: "Do you offer short-form or long-form editing?",
    answer:
      "We offer both. Our short-form editing packages cover 8 to 30 videos per month optimised for platforms like TikTok, Instagram Reels, and YouTube Shorts. We also support long-form YouTube production through our Script to Video service.",
  },
];
// ─────────────────────────────────────────────────────────────

const FAQItem = ({ faq, isOpen, onToggle }) => {
  return (
    <div className="border-b border-[rgba(255,255,255,0.12)]">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-6 text-left gap-6 group"
      >
        <span className="text-white text-base font-medium group-hover:text-[#00c39a] transition-colors duration-200">
          {faq.question}
        </span>

        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.25 }}
          className="text-white text-2xl shrink-0 leading-none"
        >
          +
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="text-[#7aab97] text-sm leading-relaxed pb-6 max-w-3xl">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#060e09] px-6 md:px-16 py-24">

      <motion.h2
        className="text-white font-bold text-2xl md:text-3xl text-center mb-14"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Frequently Asked Questions
      </motion.h2>

      <motion.div
        className="max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        {faqs.map((faq, index) => (
          <FAQItem
            key={index}
            faq={faq}
            isOpen={openIndex === index}
            onToggle={() => handleToggle(index)}
          />
        ))}
      </motion.div>

    </section>
  );
};

export default FAQ;