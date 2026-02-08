
import React from 'react';
import Hero from '../components/Hero';
import AppCard from '../components/AppCard';
import { MOCK_ITEMS } from '../data';
import { Smartphone, Gamepad2, Laptop, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  const featured = MOCK_ITEMS.filter(item => item.isFeatured).slice(0, 3);
  const latest = MOCK_ITEMS.slice(0, 8);

  const categories = [
    { name: 'APK', icon: <Smartphone className="w-8 h-8 text-blue-500" />, count: '2,400+ apps', path: '/catalog/APK' },
    { name: 'Juegos', icon: <Gamepad2 className="w-8 h-8 text-blue-500" />, count: '1,200+ juegos', path: '/catalog/Juegos' },
    { name: 'Programas', icon: <Laptop className="w-8 h-8 text-blue-500" />, count: '800+ programas', path: '/catalog/Programas' },
  ];

  return (
    <div>
      <Hero />

      {/* Featured Section */}
      <section className="py-12 bg-slate-950/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-white">Apps destacados</h2>
            <Link to="/catalog" className="text-blue-500 hover:text-blue-400 text-sm font-medium flex items-center">
              Ver todos <ChevronRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featured.map(item => (
              <AppCard key={item.id} item={item} horizontal />
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white mb-8 text-center sm:text-left">Categorías Populares</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {categories.map(cat => (
              <Link 
                key={cat.name} 
                to={cat.path}
                className="group relative overflow-hidden bg-slate-900 border border-slate-800 p-8 rounded-2xl hover:border-blue-500/50 transition-all text-center sm:text-left"
              >
                <div className="mb-4 inline-block p-4 bg-slate-800 rounded-xl group-hover:bg-blue-600/10 transition-colors">
                  {cat.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-1">{cat.name}</h3>
                <p className="text-slate-400 text-sm">{cat.count}</p>
                <div className="absolute bottom-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                   <ChevronRight className="w-6 h-6 text-blue-500" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Uploads Section */}
      <section className="py-16 bg-slate-950/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-2xl font-bold text-white">Últimas Publicaciones</h2>
            <Link to="/catalog" className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold rounded transition-colors uppercase tracking-widest">
              Explorar Catálogo
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {latest.map(item => (
              <AppCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* Ad Space Placeholder */}
      <section className="py-12 border-y border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="w-full h-24 sm:h-32 bg-slate-900/40 border border-dashed border-slate-800 rounded-xl flex items-center justify-center text-slate-600 font-medium italic">
            Espacio publicitario disponible
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
