import { motion } from 'framer-motion';
import { Construction } from 'lucide-react';

export function Placeholder({ title }: { title: string }) {
  return (
    <div className="flex flex-col items-center justify-center h-[60vh] p-4 text-center">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="flex flex-col items-center"
      >
        <div className="flex items-center justify-center w-20 h-20 mb-6 bg-red-500/10 rounded-3xl border border-red-500/20">
          <Construction className="w-10 h-10 text-red-500" />
        </div>
        <h2 className="mb-2 text-2xl font-bold text-white">{title}</h2>
        <p className="max-w-xs text-sm text-zinc-400">
          Fitur ini sedang dalam tahap pengembangan. Silakan kembali lagi nanti.
        </p>
      </motion.div>
    </div>
  );
}
