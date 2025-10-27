import { Github, Shield, Settings } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="mt-10 border-t border-slate-200/70 bg-white/60 py-8 backdrop-blur">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 text-sm text-slate-600 sm:flex-row sm:px-6">
        <p>© {new Date().getFullYear()} Poondi — Minimal, real-time nearby connections</p>
        <div className="flex items-center gap-4">
          <a href="#privacy" className="inline-flex items-center gap-1 hover:text-slate-900">
            <Shield size={14} /> Privacy
          </a>
          <a href="#settings" className="inline-flex items-center gap-1 hover:text-slate-900">
            <Settings size={14} /> Settings
          </a>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 hover:text-slate-900"
          >
            <Github size={14} /> GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
