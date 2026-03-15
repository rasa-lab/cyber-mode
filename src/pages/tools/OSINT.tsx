import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, MapPin, Globe, Server, Shield, Activity } from 'lucide-react';
import axios from 'axios';

export function OSINT() {
  const [ip, setIp] = useState('');
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!ip) return;

    setLoading(true);
    setError('');
    setData(null);

    try {
      const response = await axios.get(`https://ipapi.co/${ip}/json/`);
      if (response.data.error) {
        setError(response.data.reason || 'Invalid IP Address');
      } else {
        setData(response.data);
      }
    } catch (err) {
      setError('Failed to fetch data. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 space-y-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="flex items-center justify-center w-10 h-10 bg-red-500/20 rounded-xl">
          <Search className="w-5 h-5 text-red-500" />
        </div>
        <div>
          <h2 className="text-xl font-bold text-white">OSINT <span className="text-red-500">Tools</span></h2>
          <p className="text-xs text-zinc-400">IP & Domain Information Gathering</p>
        </div>
      </div>

      <form onSubmit={handleSearch} className="relative">
        <input
          type="text"
          value={ip}
          onChange={(e) => setIp(e.target.value)}
          placeholder="Enter IP Address (e.g., 8.8.8.8)"
          className="w-full py-4 pl-4 pr-12 text-sm text-white transition-all border outline-none bg-zinc-900/50 border-white/10 rounded-2xl focus:border-red-500/50 focus:bg-zinc-900"
        />
        <button
          type="submit"
          disabled={loading}
          className="absolute right-2 top-2 bottom-2 px-4 bg-red-600 hover:bg-red-700 text-white rounded-xl transition-colors disabled:opacity-50 flex items-center justify-center"
        >
          {loading ? <Activity className="w-4 h-4 animate-spin" /> : <Search className="w-4 h-4" />}
        </button>
      </form>

      {error && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-4 text-sm text-red-400 border bg-red-500/10 border-red-500/20 rounded-2xl">
          {error}
        </motion.div>
      )}

      {data && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-5 border bg-zinc-900/50 border-white/5 rounded-3xl"
        >
          <h3 className="mb-4 text-sm font-bold text-zinc-400 uppercase tracking-wider">Results for {data.ip}</h3>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="p-3 bg-white/5 rounded-2xl">
              <div className="flex items-center gap-2 mb-1 text-zinc-400">
                <Globe className="w-4 h-4" /> <span className="text-xs">Location</span>
              </div>
              <p className="text-sm font-semibold text-white">{data.city}, {data.country_name}</p>
            </div>
            
            <div className="p-3 bg-white/5 rounded-2xl">
              <div className="flex items-center gap-2 mb-1 text-zinc-400">
                <Server className="w-4 h-4" /> <span className="text-xs">ISP</span>
              </div>
              <p className="text-sm font-semibold text-white truncate">{data.org}</p>
            </div>

            <div className="p-3 bg-white/5 rounded-2xl">
              <div className="flex items-center gap-2 mb-1 text-zinc-400">
                <MapPin className="w-4 h-4" /> <span className="text-xs">Coordinates</span>
              </div>
              <p className="text-sm font-semibold text-white">{data.latitude}, {data.longitude}</p>
            </div>

            <div className="p-3 bg-white/5 rounded-2xl">
              <div className="flex items-center gap-2 mb-1 text-zinc-400">
                <Shield className="w-4 h-4" /> <span className="text-xs">ASN</span>
              </div>
              <p className="text-sm font-semibold text-white">{data.asn}</p>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}
