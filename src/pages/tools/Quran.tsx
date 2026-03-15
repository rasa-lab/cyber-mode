import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Book, Search, Loader2 } from 'lucide-react';
import axios from 'axios';

export function Quran() {
  const [surahs, setSurahs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const fetchSurahs = async () => {
      try {
        const response = await axios.get('https://api.alquran.cloud/v1/surah');
        setSurahs(response.data.data);
      } catch (error) {
        console.error('Failed to fetch surahs', error);
      } finally {
        setLoading(false);
      }
    };
    fetchSurahs();
  }, []);

  const filteredSurahs = surahs.filter(s => s.englishName.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="p-4 space-y-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="flex items-center justify-center w-10 h-10 bg-emerald-500/20 rounded-xl">
          <Book className="w-5 h-5 text-emerald-500" />
        </div>
        <div>
          <h2 className="text-xl font-bold text-white">Al-Quran <span className="text-emerald-500">Digital</span></h2>
          <p className="text-xs text-zinc-400">Bacaan & Terjemahan</p>
        </div>
      </div>

      <div className="relative">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Cari surah..."
          className="w-full py-4 pl-12 pr-4 text-sm text-white transition-all border outline-none bg-zinc-900/50 border-white/10 rounded-2xl focus:border-emerald-500/50 focus:bg-zinc-900"
        />
        <Search className="absolute w-5 h-5 text-zinc-500 left-4 top-4" />
      </div>

      {loading ? (
        <div className="flex items-center justify-center h-40">
          <Loader2 className="w-8 h-8 text-emerald-500 animate-spin" />
        </div>
      ) : (
        <div className="grid gap-3">
          {filteredSurahs.map((surah, index) => (
            <motion.div
              key={surah.number}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.02 }}
              className="flex items-center justify-between p-4 border bg-zinc-900/50 border-white/5 rounded-2xl hover:border-emerald-500/30 transition-colors"
            >
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-10 h-10 text-sm font-bold text-emerald-500 bg-emerald-500/10 rounded-xl">
                  {surah.number}
                </div>
                <div>
                  <h3 className="font-bold text-white">{surah.englishName}</h3>
                  <p className="text-xs text-zinc-400">{surah.revelationType} • {surah.numberOfAyahs} Ayat</p>
                </div>
              </div>
              <div className="text-right">
                <h3 className="text-xl font-bold text-emerald-500">{surah.name}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
}
