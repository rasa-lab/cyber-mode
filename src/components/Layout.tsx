import { Outlet, Link, useLocation } from 'react-router-dom';
import { Home, Wrench, MessageSquare, Users, Bell, Menu, LogOut } from 'lucide-react';
import { DisclaimerModal } from './DisclaimerModal';
import { cn } from '../lib/utils';

export function Layout() {
  const location = useLocation();

  const navItems = [
    { icon: Home, path: '/', label: 'Home' },
    { icon: MessageSquare, path: '/chat', label: 'Chat' },
    { icon: Users, path: '/groups', label: 'Groups' },
    { icon: Wrench, path: '/tools', label: 'Tools' },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#0f1015] text-zinc-100 font-sans selection:bg-red-500/30">
      <DisclaimerModal />
      
      {/* Topbar */}
      <header className="sticky top-0 z-40 flex items-center justify-between px-4 py-3 bg-[#0f1015]/80 backdrop-blur-md border-b border-white/5">
        <div className="flex items-center gap-3">
          <button className="p-2 transition-colors rounded-lg hover:bg-white/5">
            <Menu className="w-5 h-5 text-zinc-400" />
          </button>
          <div className="flex items-center gap-2">
            <div className="flex items-center justify-center w-8 h-8 font-bold text-white bg-red-600 rounded-lg">
              O
            </div>
            <h1 className="text-lg font-bold tracking-wider text-white">OTAX <span className="text-red-500">DASHBOARD</span></h1>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button className="p-2 transition-colors rounded-lg hover:bg-white/5 relative">
            <Bell className="w-5 h-5 text-zinc-400" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>
          <button className="p-2 transition-colors rounded-lg hover:bg-white/5">
            <LogOut className="w-5 h-5 text-zinc-400" />
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 pb-20 overflow-x-hidden">
        <Outlet />
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 z-40 px-6 py-3 bg-[#15161b]/90 backdrop-blur-lg border-t border-white/5 pb-safe">
        <div className="flex items-center justify-between max-w-md mx-auto">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path || (item.path !== '/' && location.pathname.startsWith(item.path));
            const Icon = item.icon;
            
            return (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "flex flex-col items-center justify-center w-12 h-12 rounded-xl transition-all duration-300",
                  isActive ? "text-red-500 bg-red-500/10" : "text-zinc-500 hover:text-zinc-300 hover:bg-white/5"
                )}
              >
                <Icon className={cn("w-6 h-6", isActive && "fill-red-500/20")} />
                <span className="text-[10px] mt-1 font-medium transition-all duration-300">
                  {isActive ? item.label : ''}
                </span>
              </Link>
            );
          })}
        </div>
      </nav>
    </div>
  );
}
