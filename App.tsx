
import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import ItemDetail from './pages/ItemDetail';
import { Search, X } from 'lucide-react';

const ScrollToTop = () => {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [navigate]);
  return null;
};

const App: React.FC = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [globalSearch, setGlobalSearch] = useState('');

  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Header onSearchOpen={() => setIsSearchOpen(true)} />
        
        {/* Search Overlay */}
        {isSearchOpen && (
          <div className="fixed inset-0 z-[100] bg-slate-950/95 backdrop-blur-xl flex items-center justify-center p-4">
            <button 
              onClick={() => setIsSearchOpen(false)}
              className="absolute top-8 right-8 p-3 bg-slate-800 rounded-full text-white hover:bg-red-600 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="w-full max-w-2xl text-center">
              <h2 className="text-3xl font-bold text-white mb-8">¿Qué estás buscando hoy?</h2>
              <div className="relative">
                <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-500 w-8 h-8" />
                <input
                  type="text"
                  autoFocus
                  placeholder="Escribe el nombre de la app, juego o programa..."
                  className="w-full bg-slate-900 border-2 border-slate-800 rounded-2xl py-6 pl-16 pr-8 text-xl text-white focus:outline-none focus:border-blue-600 transition-all shadow-2xl"
                  value={globalSearch}
                  onChange={(e) => setGlobalSearch(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      window.location.hash = `/catalog?search=${globalSearch}`;
                      setIsSearchOpen(false);
                    }
                  }}
                />
              </div>
              <p className="mt-4 text-slate-500 italic">Presiona Enter para buscar en el catálogo completo</p>
            </div>
          </div>
        )}

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/catalog/:category" element={<Catalog />} />
            <Route path="/item/:id" element={<ItemDetail />} />
            <Route path="/contacto" element={
              <div className="py-20 text-center max-w-3xl mx-auto px-4">
                <h1 className="text-4xl font-bold text-white mb-6">Contáctanos</h1>
                <p className="text-slate-400 mb-10 text-lg">Si tienes dudas, reportes de enlaces caídos o sugerencias, escríbenos a través de nuestro correo oficial.</p>
                <div className="bg-slate-900 border border-slate-800 p-10 rounded-2xl shadow-2xl">
                   <div className="text-blue-500 text-6xl font-black mb-4 uppercase tracking-tighter">Filexa</div>
                   <p className="text-2xl text-white font-medium">contacto@filexa.com</p>
                </div>
              </div>
            } />
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        
        <Footer />
      </div>
    </Router>
  );
};

export default App;
