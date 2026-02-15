import { MessageCircle, X } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export function WhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleWhatsApp = () => {
    window.open('https://wa.me/919876543210?text=Hello%20Kanak%20Gold%20Shop', '_blank');
  };

  return (
    <>
      {/* Floating WhatsApp Button */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 2, duration: 0.5, type: "spring" }}
        className="fixed bottom-6 right-6 z-50"
      >
        <AnimatePresence>
          {showTooltip && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="absolute bottom-full right-0 mb-2 bg-white rounded-lg shadow-2xl p-4 w-64"
            >
              <button
                onClick={() => setShowTooltip(false)}
                className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
              >
                <X className="w-4 h-4" />
              </button>
              <p className="text-sm text-gray-800 font-medium mb-1">Need Help?</p>
              <p className="text-xs text-gray-600">
                Chat with us on WhatsApp for instant assistance!
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          onClick={handleWhatsApp}
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="relative flex items-center justify-center w-16 h-16 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-2xl transition-colors group"
        >
          {/* Pulse Animation */}
          <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping"></span>
          
          {/* Icon */}
          <MessageCircle className="w-8 h-8 relative z-10" />
        </motion.button>
      </motion.div>
    </>
  );
}
