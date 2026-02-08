
import React, { useState, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import AppCard from '../components/AppCard';
import { MOCK_ITEMS } from '../data';
import { Filter, SlidersHorizontal, Search as SearchIcon } from 'lucide-react';
import { Category, SortOption } from '../types';

const Catalog: React.FC = () => {
  const { category: urlCategory } = useParams<{ category: string }>();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>(urlCategory || 'Todas');
  const [sortBy, setSortBy] = useState<SortOption>('latest');

  const categories = ['Todas', 'APK', 'Juegos', 'Programas'];

  const filteredItems = useMemo(() => {
    return MOCK_ITEMS.filter(item => {
      const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                            item.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'Todas' || item.category === selectedCategory;
      return matchesSearch && matchesCategory;
    }).sort((a, b) => {
      if (sortBy === 'latest') return new Date(b.date).getTime() - new Date(a.date).getTime();
      if (sortBy === 'popular') return b.popularity - a.popularity;
      if (sortBy === 'name') return a.name.localeCompare(b.name);
      if (sortBy === 'size') return parseInt(b.size) - parseInt(a.size);
      return 0;
    });
  }, [searchTerm, selectedCategory, sortBy]);

  return (
    <div className="min-h-screen pt-8 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h1 className="text-3xl font-bold text-white mb-2">Catálogo de Archivos</h1>
          <p className="text-slate-400">Explora nuestra colección completa de herramientas y entretenimiento.</p>
        </div>

        {/* Filters & Tools */}
        <div className="flex flex-col lg:flex-row gap-6 mb-12">
          {/* Search Bar */}
          <div className="flex-grow relative">
            <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 w-5 h-5" />
            <input
              type="text"
              placeholder="Buscar aplicaciones, juegos..."
              className="w-full bg-slate-900 border border-slate-800 rounded-xl py-4 pl-12 pr-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="flex flex-wrap gap-4">
            {/* Category Filter */}
            <div className="flex items-center space-x-2 bg-slate-900 border border-slate-800 rounded-xl px-4 py-2">
              <Filter className="w-4 h-4 text-slate-500" />
              <select 
                className="bg-transparent text-white text-sm focus:outline-none cursor-pointer"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                {categories.map(c => <option key={c} value={c} className="bg-slate-900">{c}</option>)}
              </select>
            </div>

            {/* Sort Filter */}
            <div className="flex items-center space-x-2 bg-slate-900 border border-slate-800 rounded-xl px-4 py-2">
              <SlidersHorizontal className="w-4 h-4 text-slate-500" />
              <select 
                className="bg-transparent text-white text-sm focus:outline-none cursor-pointer"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as SortOption)}
              >
                <option value="latest" className="bg-slate-900">Más recientes</option>
                <option value="popular" className="bg-slate-900">Más populares</option>
                <option value="name" className="bg-slate-900">Alfabético</option>
                <option value="size" className="bg-slate-900">Por tamaño</option>
              </select>
            </div>
          </div>
        </div>

        {/* Results */}
        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredItems.map(item => (
              <AppCard key={item.id} item={item} />
            ))}
          </div>
        ) : (
          <div className="py-20 text-center">
            <div className="inline-block p-6 bg-slate-900 rounded-full mb-6">
              <SearchIcon className="w-12 h-12 text-slate-700" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">No se encontraron resultados</h3>
            <p className="text-slate-400">Prueba con otros términos de búsqueda o filtros.</p>
            <button 
              onClick={() => { setSearchTerm(''); setSelectedCategory('Todas'); }}
              className="mt-6 text-blue-500 font-bold hover:underline"
            >
              Restablecer búsqueda
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Catalog;
