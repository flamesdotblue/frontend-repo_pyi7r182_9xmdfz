import Navbar from './components/Navbar';
import Hero from './components/Hero';
import NearbyGrid from './components/NearbyGrid';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <Hero />
      <NearbyGrid />
      <Footer />
    </div>
  );
}

export default App;
