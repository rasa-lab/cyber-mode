import { motion } from 'framer-motion';
import { Cloud, Gamepad2, Zap, Wifi, Search, Download, Wrench, Sparkles, PlaySquare } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Tools() {
  const tools = [
    { icon: Cloud, label: 'Panel', desc: 'Manajemen server', color: 'text-red-500', bg: 'bg-red-500/10', path: '/tools/panel' },
    { icon: Gamepad2, label: 'Game & AI', desc: 'Catur, pacman, asisten', color: 'text-red-500', bg: 'bg-red-500/10', path: '/tools/ai' },
    { icon: Zap, label: 'DDoS', desc: 'Stress test', color: 'text-red-500', bg: 'bg-red-500/10', path: '/tools/ddos' },
    { icon: Wifi, label: 'Network', desc: 'WiFi, spam', color: 'text-red-500', bg: 'bg-red-500/10', path: '/tools/network' },
    { icon: Search, label: 'OSINT', desc: 'NIK, domain, telepon', color: 'text-red-500', bg: 'bg-red-500/10', path: '/tools/osint' },
    { icon: Download, label: 'Downloader', desc: 'TikTok, instagram', color: 'text-red-500', bg: 'bg-red-500/10', path: '/tools/downloader' },
    { icon: Wrench, label: 'Utilities', desc: 'QR, scanner', color: 'text-red-500', bg: 'bg-red-500/10', path: '/tools/utilities' },
    { icon: Sparkles, label: 'Generator', desc: 'Quote, fake story', color: 'text-red-500', bg: 'bg-red-500/10', path: '/tools/generator' },
    { icon: PlaySquare, label: 'Anime', desc: 'Streaming, 18+', color: 'text-red-500', bg: 'bg-red-500/10', path: '/tools/anime' },
  ];

  return (
    <div className="p-4 space-y-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-white">Tools <span className="text-red-500">OTAX</span></h2>
        <span className="text-sm text-zinc-500">{tools.length} item</span>
      </div>

      <div className="grid grid-cols-3 gap-3">
        {tools.map((tool, index) => {
          const Icon = tool.icon;
          return (
            <Link key={index} to={tool.path}>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 0.95 }}
                className="flex flex-col items-center justify-center p-4 h-32 bg-[#15161b] border border-white/5 rounded-3xl hover:border-red-500/30 transition-colors"
              >
                <div className={`w-10 h-10 flex items-center justify-center rounded-xl mb-3 ${tool.bg}`}>
                  <Icon className={`w-5 h-5 ${tool.color}`} />
                </div>
                <h3 className="text-xs font-bold text-white text-center mb-1">{tool.label}</h3>
                <p className="text-[9px] text-zinc-500 text-center leading-tight">{tool.desc}</p>
              </motion.div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
