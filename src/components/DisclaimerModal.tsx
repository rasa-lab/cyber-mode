import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AlertTriangle } from 'lucide-react';

export function DisclaimerModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const hasAccepted = localStorage.getItem('otax_disclaimer_accepted');
    if (!hasAccepted) {
      setIsOpen(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('otax_disclaimer_accepted', 'true');
    setIsOpen(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="w-full max-w-md p-6 bg-zinc-900 border border-red-500/30 rounded-2xl shadow-2xl shadow-red-500/10"
          >
            <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 bg-red-500/20 rounded-full">
              <AlertTriangle className="w-6 h-6 text-red-500" />
            </div>
            <h2 className="mb-2 text-xl font-bold text-center text-white">PERINGATAN PENTING</h2>
            <p className="mb-6 text-sm text-center text-zinc-400">
              Owner tidak bertanggung jawab atas kesalahan user dalam penggunaan tools ini. 
              Gunakan dengan bijak dan resiko ditanggung sepenuhnya oleh pengguna.
            </p>
            <button
              onClick={handleAccept}
              className="w-full py-3 font-semibold text-white transition-colors bg-red-600 rounded-xl hover:bg-red-700 active:scale-95"
            >
              Saya Mengerti & Setuju
            </button>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
