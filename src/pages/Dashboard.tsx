import { motion } from 'framer-motion';
import { Users, Link as LinkIcon, Calendar, Zap, Book, MapPin, Moon, Sun, Cloud, BookOpen } from 'lucide-react';
import { useState, useEffect } from 'react';
import { format } from 'date-fns';
import { Link } from 'react-router-dom';

export function Dashboard() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="p-4 space-y-6">
      {/* Welcome Card */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative p-6 overflow-hidden border border-red-500/20 bg-gradient-to-br from-zinc-900 to-zinc-950 rounded-3xl"
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-red-500/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none"></div>
        
        <div className="relative z-10 flex items-center gap-4 mb-6">
          <div className="flex items-center justify-center w-16 h-16 bg-red-500/20 rounded-full border border-red-500/30">
            <span className="text-2xl font-bold text-red-500">X</span>
          </div>
          <div>
            <p className="text-sm text-zinc-400">Welcome Back,</p>
            <h2 className="text-xl font-bold text-white">XeraNoMercy</h2>
            <span className="inline-block px-2 py-0.5 mt-1 text-xs font-medium text-red-500 bg-red-500/10 border border-red-500/20 rounded-md">TK</span>
          </div>
          <div className="ml-auto">
            <div className="flex items-center gap-2 px-3 py-1.5 text-xs font-medium text-zinc-300 bg-white/5 rounded-full border border-white/10">
              <Calendar className="w-3.5 h-3.5 text-red-500" />
              2053-07-14
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/5">
          <div className="text-center">
            <div className="flex items-center justify-center w-10 h-10 mx-auto mb-2 bg-white/5 rounded-full">
              <Users className="w-5 h-5 text-emerald-500" />
            </div>
            <p className="text-xl font-bold text-white">7</p>
            <p className="text-[10px] text-zinc-500 uppercase tracking-wider mt-1">Online Users</p>
            <span className="inline-block px-1.5 py-0.5 mt-1 text-[8px] font-bold text-emerald-500 bg-emerald-500/10 rounded">LIVE</span>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center w-10 h-10 mx-auto mb-2 bg-white/5 rounded-full">
              <LinkIcon className="w-5 h-5 text-blue-500" />
            </div>
            <p className="text-xl font-bold text-white">0</p>
            <p className="text-[10px] text-zinc-500 uppercase tracking-wider mt-1">Active Connections</p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center w-10 h-10 mx-auto mb-2 bg-white/5 rounded-full">
              <Calendar className="w-5 h-5 text-amber-500" />
            </div>
            <p className="text-xl font-bold text-white">2026</p>
            <p className="text-[10px] text-zinc-500 uppercase tracking-wider mt-1">Expiration</p>
          </div>
        </div>
      </motion.div>

      {/* Quick Actions */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm font-bold tracking-wider text-zinc-400 uppercase flex items-center gap-2">
            <Zap className="w-4 h-4 text-amber-500" /> Quick Actions
          </h3>
          <span className="px-2 py-1 text-[10px] font-bold text-amber-500 bg-amber-500/10 rounded-full border border-amber-500/20">
            OTAX
          </span>
        </div>
        
        <div className="grid grid-cols-2 gap-3">
          <Link to="/tools/quran">
            <motion.div whileHover={{ scale: 0.98 }} className="p-4 bg-gradient-to-br from-emerald-500/20 to-emerald-900/20 border border-emerald-500/20 rounded-2xl relative overflow-hidden group cursor-pointer h-full">
              <div className="absolute top-3 right-3 px-2 py-0.5 text-[8px] font-bold text-white bg-white/20 rounded-full backdrop-blur-md">Tap →</div>
              <Book className="w-8 h-8 text-emerald-400 mb-3" />
              <h4 className="font-bold text-white">Al-Quran</h4>
              <p className="text-xs text-zinc-400 mt-1">Alquran Lengkap Beserta Terjemahan</p>
            </motion.div>
          </Link>
          
          <Link to="/tools/ai">
            <motion.div whileHover={{ scale: 0.98 }} className="p-4 bg-gradient-to-br from-cyan-500/20 to-cyan-900/20 border border-cyan-500/20 rounded-2xl relative overflow-hidden group cursor-pointer h-full">
              <div className="absolute top-3 right-3 px-2 py-0.5 text-[8px] font-bold text-white bg-white/20 rounded-full backdrop-blur-md">Tap →</div>
              <div className="w-8 h-8 flex items-center justify-center bg-cyan-500/20 rounded-lg mb-3">
                <span className="text-cyan-400 font-mono font-bold text-xs">{"</>"}</span>
              </div>
              <h4 className="font-bold text-white">TES FUNC</h4>
              <p className="text-xs text-zinc-400 mt-1">Test Function & Message</p>
            </motion.div>
          </Link>
        </div>
      </div>

      {/* Jadwal Sholat Widget */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="p-5 bg-[#15161b] border border-white/5 rounded-3xl relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500/5 rounded-full blur-2xl -mr-10 -mt-10 pointer-events-none"></div>
        
        <div className="flex items-center justify-between mb-6 relative z-10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-500/20 rounded-xl flex items-center justify-center">
              <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.31-8.86c-1.77-.45-2.34-.94-2.34-1.67 0-.84.79-1.43 2.1-1.43 1.38 0 1.9.66 1.94 1.64h1.71c-.05-1.34-.87-2.57-2.49-2.97V5H10.9v1.69c-1.51.32-2.72 1.3-2.72 2.81 0 1.79 1.49 2.69 3.66 3.21 1.95.46 2.34 1.15 2.34 1.87 0 .53-.39 1.64-2.25 1.64-1.74 0-2.1-.96-2.15-1.92H8.03c.05 1.68 1.15 2.88 2.87 3.29V19h2.36v-1.67c1.56-.33 2.84-1.39 2.84-3.02 0-2.01-1.65-2.72-3.79-3.17z"/>
              </svg>
            </div>
            <div>
              <h3 className="font-bold text-white tracking-wide">JADWAL SHOLAT</h3>
              <p className="text-xs text-zinc-400 flex items-center gap-1">
                KOTA DENPASAR <MapPin className="w-3 h-3" />
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 text-xs font-medium text-emerald-400 bg-emerald-500/10 rounded-full border border-emerald-500/20">
            <MapPin className="w-3.5 h-3.5" /> GPS
          </div>
        </div>

        <div className="flex items-center justify-between p-3 mb-6 bg-white/5 rounded-xl border border-white/5">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
            <span className="text-sm text-zinc-300">Menuju Dzuhur : <span className="font-bold text-white">{format(time, 'HH:mm')}</span></span>
          </div>
          <span className="px-2 py-0.5 text-[10px] font-bold text-zinc-400 bg-white/10 rounded border border-white/10">OTAX</span>
        </div>

        <div className="grid grid-cols-3 gap-3">
          <div className="p-3 bg-indigo-500/20 border border-indigo-500/30 rounded-2xl text-center">
            <Moon className="w-5 h-5 text-indigo-400 mx-auto mb-2" />
            <p className="text-[10px] font-bold text-indigo-300 uppercase tracking-wider mb-1">SUBUH</p>
            <p className="text-lg font-bold text-white">05:01</p>
          </div>
          <div className="p-3 bg-amber-500/20 border border-amber-500/30 rounded-2xl text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-amber-500/10 animate-pulse"></div>
            <Sun className="w-5 h-5 text-amber-400 mx-auto mb-2 relative z-10" />
            <p className="text-[10px] font-bold text-amber-300 uppercase tracking-wider mb-1 relative z-10">DZUHUR</p>
            <p className="text-lg font-bold text-white relative z-10">12:37</p>
          </div>
          <div className="p-3 bg-orange-500/20 border border-orange-500/30 rounded-2xl text-center">
            <Cloud className="w-5 h-5 text-orange-400 mx-auto mb-2" />
            <p className="text-[10px] font-bold text-orange-300 uppercase tracking-wider mb-1">ASHAR</p>
            <p className="text-lg font-bold text-white">15:51</p>
          </div>
        </div>
      </motion.div>

      {/* Hadith of the Day */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="p-5 border bg-zinc-900/50 border-white/5 rounded-3xl"
      >
        <div className="flex items-center gap-3 mb-4">
          <div className="flex items-center justify-center w-8 h-8 bg-blue-500/20 rounded-lg">
            <BookOpen className="w-4 h-4 text-blue-500" />
          </div>
          <div>
            <h3 className="font-bold text-white tracking-wide">HADITH OF THE DAY</h3>
            <p className="text-[10px] text-zinc-400">Sahih Muslim • Tap to read full</p>
          </div>
        </div>
        <p className="text-sm italic leading-relaxed text-zinc-300">
          "Barangsiapa yang menempuh suatu jalan untuk menuntut ilmu, maka Allah akan mudahkan baginya jalan menuju surga."
        </p>
      </motion.div>
    </div>
  );
}
