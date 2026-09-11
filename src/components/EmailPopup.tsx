import { motion, AnimatePresence } from 'motion/react';
import { Copy, Mail, X, Check } from 'lucide-react';
import { useState } from 'react';

export default function EmailPopup({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  const [copied, setCopied] = useState(false);
  const email = "ankit@agentbydesign.in";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-slate-900/40 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            className="w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden"
          >
            <div className="flex justify-between items-center p-6 border-b border-slate-100">
              <h3 className="font-playfair text-xl font-semibold text-slate-900">Get in touch</h3>
              <button onClick={onClose} className="p-2 rounded-full hover:bg-slate-100 transition-colors">
                <X className="w-5 h-5 text-slate-500" />
              </button>
            </div>
            <div className="p-6 space-y-4">
              <p className="text-slate-600 text-sm">
                Choose how you'd like to reach out to schedule your free 9-minute setup call.
              </p>
              
              <button
                onClick={handleCopy}
                className="w-full flex items-center justify-between p-4 rounded-xl border border-slate-200 hover:border-blue-600 hover:bg-blue-50 transition-all group cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <Copy className={`w-5 h-5 ${copied ? 'text-green-600' : 'text-blue-600'}`} />
                  <span className="font-medium text-slate-900">{copied ? 'Email copied!' : 'Copy email address'}</span>
                </div>
                {copied && <Check className="w-5 h-5 text-green-600" />}
              </button>

              <a
                href={`mailto:${email}`}
                className="w-full flex items-center p-4 rounded-xl border border-slate-200 hover:border-blue-600 hover:bg-blue-50 transition-all cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-blue-600" />
                  <span className="font-medium text-slate-900">Open email app</span>
                </div>
              </a>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
