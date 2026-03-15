import { useState } from 'react';
import { motion } from 'framer-motion';
import { Wrench, QrCode, Download } from 'lucide-react';
import { QRCodeSVG } from 'qrcode.react';

export function Utilities() {
  const [text, setText] = useState('');

  const handleDownload = () => {
    const svg = document.getElementById('qr-code');
    if (!svg) return;
    
    const svgData = new XMLSerializer().serializeToString(svg);
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const img = new Image();
    
    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx?.drawImage(img, 0, 0);
      const pngFile = canvas.toDataURL('image/png');
      const downloadLink = document.createElement('a');
      downloadLink.download = 'qrcode.png';
      downloadLink.href = `${pngFile}`;
      downloadLink.click();
    };
    
    img.src = 'data:image/svg+xml;base64,' + btoa(unescape(encodeURIComponent(svgData)));
  };

  return (
    <div className="p-4 space-y-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="flex items-center justify-center w-10 h-10 bg-red-500/20 rounded-xl">
          <Wrench className="w-5 h-5 text-red-500" />
        </div>
        <div>
          <h2 className="text-xl font-bold text-white">Utilities <span className="text-red-500">Tools</span></h2>
          <p className="text-xs text-zinc-400">QR Code Generator & Scanner</p>
        </div>
      </div>

      <div className="space-y-4">
        <div className="p-5 border bg-zinc-900/50 border-white/5 rounded-3xl">
          <div className="flex items-center gap-2 mb-4 text-zinc-400">
            <QrCode className="w-5 h-5 text-red-500" />
            <h3 className="text-sm font-bold uppercase tracking-wider">QR Generator</h3>
          </div>
          
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter text or URL to generate QR code..."
            className="w-full h-24 p-4 text-sm text-white transition-all border outline-none resize-none bg-zinc-900/50 border-white/10 rounded-2xl focus:border-red-500/50 focus:bg-zinc-900 mb-4"
          />

          <div className="flex flex-col items-center justify-center p-6 bg-white rounded-2xl">
            {text ? (
              <QRCodeSVG
                id="qr-code"
                value={text}
                size={200}
                level="H"
                includeMargin={true}
              />
            ) : (
              <div className="flex items-center justify-center w-[200px] h-[200px] border-2 border-dashed border-zinc-200 rounded-xl">
                <p className="text-sm text-zinc-400">Enter text to generate</p>
              </div>
            )}
          </div>

          <button
            onClick={handleDownload}
            disabled={!text}
            className="w-full py-3 mt-4 font-semibold text-white transition-colors bg-red-600 rounded-xl hover:bg-red-700 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            <Download className="w-4 h-4" /> Download QR Code
          </button>
        </div>
      </div>
    </div>
  );
}
