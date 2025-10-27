import { useState } from 'react';
import { MapPin, MessageCircle, Bell, User, Zap } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/60 bg-white/70 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
        <div className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 text-white shadow-sm">
            <Zap size={18} />
          </div>
          <span className="font-semibold tracking-tight">Poondi</span>
        </div>

        <nav className="hidden items-center gap-6 text-sm text-slate-700 md:flex">
          <a href="#nearby" className="flex items-center gap-2 hover:text-slate-900">
            <MapPin size={16} /> Nearby
          </a>
          <a href="#chat" className="flex items-center gap-2 hover:text-slate-900">
            <MessageCircle size={16} /> Chat
          </a>
          <a href="#notifications" className="flex items-center gap-2 hover:text-slate-900">
            <Bell size={16} /> Notifications
          </a>
        </nav>

        <button
          onClick={() => setOpen(!open)}
          className="inline-flex items-center justify-center rounded-md border border-slate-200 px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 md:hidden"
          aria-label="Toggle Menu"
        >
          <User size={18} />
        </button>
      </div>

      {open && (
        <div className="border-t border-slate-200/60 bg-white/80 px-4 py-3 backdrop-blur-md md:hidden">
          <div className="flex flex-col gap-3 text-sm text-slate-700">
            <a href="#nearby" className="flex items-center gap-2">
              <MapPin size={16} /> Nearby
            </a>
            <a href="#chat" className="flex items-center gap-2">
              <MessageCircle size={16} /> Chat
            </a>
            <a href="#notifications" className="flex items-center gap-2">
              <Bell size={16} /> Notifications
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
