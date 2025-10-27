import { MapPin, Circle, Image, Heart } from 'lucide-react';

const mockProfiles = [
  {
    id: 1,
    name: 'Aarav',
    age: 24,
    distance: '120 m',
    city: 'Mumbai, IN',
    online: true,
    bio: 'Coffee, camera, conversations ☕📷',
    img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 2,
    name: 'Maya',
    age: 26,
    distance: '2.1 km',
    city: 'Pune, IN',
    online: false,
    bio: 'Design, dogs and dopamine',
    img: 'https://images.unsplash.com/photo-1542897645-2208f7f09433?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 3,
    name: 'Leo',
    age: 28,
    distance: '760 m',
    city: 'Goa, IN',
    online: true,
    bio: 'Ocean kid 🌊',
    img: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 4,
    name: 'Sara',
    age: 22,
    distance: '3.4 km',
    city: 'Bengaluru, IN',
    online: false,
    bio: 'Books and brunch',
    img: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1200&auto=format&fit=crop',
  },
];

function ProfileCard({ profile }) {
  return (
    <div className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:shadow-md">
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <img src={profile.img} alt={`${profile.name}`} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
        <div className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full bg-white/90 px-2 py-1 text-xs font-medium text-slate-800 shadow">
          <MapPin size={12} /> {profile.distance}
        </div>
        <div className="absolute right-3 top-3 inline-flex items-center gap-1 rounded-full bg-white/90 px-2 py-1 text-xs font-medium text-slate-800 shadow">
          <span className="inline-flex items-center gap-1">
            <Heart size={12} className="text-rose-500" /> Like
          </span>
        </div>
      </div>
      <div className="flex items-start justify-between p-3">
        <div>
          <div className="flex items-center gap-2">
            <h3 className="text-sm font-semibold text-slate-900">
              {profile.name} <span className="font-normal text-slate-500">· {profile.age}</span>
            </h3>
            <span className={`inline-flex items-center gap-1 text-[10px] ${profile.online ? 'text-emerald-600' : 'text-slate-400'}`}>
              <Circle size={10} fill={profile.online ? '#059669' : '#94a3b8'} className="-ml-0.5" />
              {profile.online ? 'Online' : 'Last seen recently'}
            </span>
          </div>
          <p className="mt-1 line-clamp-2 text-xs text-slate-600">{profile.bio}</p>
          <p className="mt-1 text-[10px] text-slate-500">{profile.city}</p>
        </div>
        <button className="inline-flex items-center gap-1 rounded-md border border-slate-200 px-2 py-1 text-xs font-medium text-slate-700 hover:bg-slate-50">
          <Image size={14} /> View
        </button>
      </div>
    </div>
  );
}

export default function NearbyGrid() {
  return (
    <section id="nearby" className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-lg font-semibold tracking-tight text-slate-900">Nearby</h2>
        <div className="flex items-center gap-2">
          <button className="rounded-md border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-50">Manual Refresh</button>
          <span className="text-xs text-slate-500">Auto-updates every few minutes</span>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:gap-6">
        {mockProfiles.map((p) => (
          <ProfileCard key={p.id} profile={p} />
        ))}
      </div>
    </section>
  );
}
