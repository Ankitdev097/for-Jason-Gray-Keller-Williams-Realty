import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "Do people actually trust talking to an AI?",
    answer: "Yes. Modern AI is virtually indistinguishable from a human receptionist. It doesn't sound robotic; it uses natural pacing, pauses, and conversational tone. More importantly, callers care most about getting immediate help—which the AI provides instantly, 24/7."
  },
  {
    question: "Will this replace my personal touch?",
    answer: "Not at all. The AI handles the initial qualification, basic questions, and scheduling. This ensures your personal touch is reserved for high-value conversations—like negotiating offers, closing deals, and showing properties—rather than answering basic inquiries while you're busy."
  },
  {
    question: "What's the catch with the 'free' setup?",
    answer: "There is no catch. I want to prove the value of this system to your business first. During our 9-minute call, I'll help you install the workflows I've already built for you at no cost, so you can see exactly how it works with zero risk."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="w-full max-w-3xl mx-auto space-y-4">
      {faqs.map((faq, index) => (
        <div key={index} className="border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-sm">
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full flex items-center justify-between p-6 text-left"
          >
            <span className="font-playfair font-semibold text-slate-900 text-lg">{faq.question}</span>
            <ChevronDown 
              className={`w-5 h-5 text-slate-500 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`} 
            />
          </button>
          <AnimatePresence>
            {openIndex === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-6 text-slate-600 leading-relaxed">
                  {faq.answer}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
