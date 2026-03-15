/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Dashboard } from './pages/Dashboard';
import { Tools } from './pages/Tools';
import { OSINT } from './pages/tools/OSINT';
import { Utilities } from './pages/tools/Utilities';
import { AI } from './pages/tools/AI';
import { Quran } from './pages/tools/Quran';
import { Placeholder } from './pages/tools/Placeholder';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="tools" element={<Tools />} />
          <Route path="tools/osint" element={<OSINT />} />
          <Route path="tools/utilities" element={<Utilities />} />
          <Route path="tools/ai" element={<AI />} />
          <Route path="tools/quran" element={<Quran />} />
          <Route path="tools/panel" element={<Placeholder title="Panel Management" />} />
          <Route path="tools/ddos" element={<Placeholder title="DDoS Tools" />} />
          <Route path="tools/network" element={<Placeholder title="Network Tools" />} />
          <Route path="tools/downloader" element={<Placeholder title="Social Downloader" />} />
          <Route path="tools/generator" element={<Placeholder title="Data Generator" />} />
          <Route path="tools/anime" element={<Placeholder title="Anime Streaming" />} />
          <Route path="chat" element={<Placeholder title="Chat Room" />} />
          <Route path="groups" element={<Placeholder title="Bug Groups" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
