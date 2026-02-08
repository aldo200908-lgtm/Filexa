
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <div className="relative overflow-hidden pt-16 pb-20 sm:pt-24 sm:pb-32 star-field">
      {/* Background blobs for tech feel */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-blue-900/10 rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight">
            Bienvenido a <span className="text-blue-500">Filexa</span>
          </h1>
          <p className="mt-6 text-xl text-slate-400 leading-relaxed max-w-2xl">
            Descargas de APKs, juegos y programas para Android y PC. La plataforma más rápida, segura y minimalista para tus archivos favoritos.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              to="/catalog/APK"
              className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-lg flex items-center shadow-xl shadow-blue-600/30 transition-all hover:scale-105"
            >
              Explorar
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/catalog/Programas"
              className="px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-lg border border-slate-700 transition-all"
            >
              Ver Programas
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
