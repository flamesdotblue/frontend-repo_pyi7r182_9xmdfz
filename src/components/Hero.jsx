import Spline from '@splinetool/react-spline';
import { MapPin } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative isolate">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 px-4 py-12 sm:py-16 md:grid-cols-2 md:gap-12 lg:py-20">
        <div className="relative z-10">
          <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-3 py-1 text-xs font-medium text-slate-700 shadow-sm backdrop-blur">
            <MapPin size={14} /> Real-time nearby connections
          </span>
          <h1 className="mt-4 text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl">
            Meet real people, right around you
          </h1>
          <p className="mt-4 max-w-xl text-slate-600">
            Instantly discover and chat with people nearby. Minimal, fast, and private — status updates
            disappear in 24 hours and inactive profiles are cleaned up automatically.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a
              href="#nearby"
              className="inline-flex items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-cyan-500 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:brightness-110"
            >
              Explore nearby
            </a>
            <a
              href="#how"
              className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"
            >
              How it works
            </a>
          </div>
        </div>

        <div className="relative h-[420px] w-full overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <Spline
            scene="https://prod.spline.design/qQUip0dJPqrrPryE/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
          />

          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
        </div>
      </div>
    </section>
  );
}
