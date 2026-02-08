
import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { MOCK_ITEMS } from '../data';
import { 
  Download, 
  ChevronLeft, 
  Info, 
  Calendar, 
  HardDrive, 
  ShieldCheck, 
  ExternalLink,
  AlertTriangle,
  Star
} from 'lucide-react';

const ItemDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const item = MOCK_ITEMS.find(i => i.id === id);

  if (!item) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-white mb-4">404 - Archivo no encontrado</h1>
          <button 
            onClick={() => navigate('/')}
            className="px-6 py-3 bg-blue-600 rounded-lg font-bold"
          >
            Volver al inicio
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-8 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs */}
        <nav className="flex items-center space-x-2 text-sm text-slate-500 mb-8">
          <Link to="/" className="hover:text-blue-500 transition-colors">Inicio</Link>
          <span>/</span>
          <Link to={`/catalog/${item.category}`} className="hover:text-blue-500 transition-colors">{item.category}</Link>
          <span>/</span>
          <span className="text-slate-300 truncate">{item.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="bg-slate-900/40 border border-slate-800 rounded-2xl overflow-hidden p-6 sm:p-8">
              <div className="flex flex-col sm:flex-row gap-8 items-start mb-10">
                <div className="w-full sm:w-48 aspect-square bg-slate-950 rounded-2xl p-6 border border-slate-700 shadow-2xl flex-shrink-0 flex items-center justify-center">
                  <img 
                    src={item.imageUrl} 
                    alt={item.name} 
                    className="max-w-full max-h-full object-contain drop-shadow-2xl"
                  />
                </div>
                <div className="flex-grow">
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="px-2 py-0.5 bg-blue-600/20 text-blue-400 text-[10px] font-bold uppercase rounded border border-blue-600/30">
                      {item.category}
                    </span>
                    <div className="flex items-center text-yellow-500 text-xs">
                       <Star className="w-3 h-3 fill-current mr-1" />
                       <span>{(item.popularity / 20).toFixed(1)} / 5.0</span>
                    </div>
                  </div>
                  <h1 className="text-4xl font-extrabold text-white mb-4 tracking-tight">{item.name}</h1>
                  <p className="text-slate-400 text-lg leading-relaxed">{item.description}</p>
                  
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8">
                    <div className="bg-slate-950/60 p-3 rounded-lg border border-slate-800">
                      <div className="flex items-center text-slate-500 text-[10px] font-bold uppercase mb-1">
                        <Calendar className="w-3 h-3 mr-1" /> Fecha
                      </div>
                      <div className="text-white text-sm font-semibold">{item.date}</div>
                    </div>
                    <div className="bg-slate-950/60 p-3 rounded-lg border border-slate-800">
                      <div className="flex items-center text-slate-500 text-[10px] font-bold uppercase mb-1">
                        <HardDrive className="w-3 h-3 mr-1" /> Tamaño
                      </div>
                      <div className="text-white text-sm font-semibold">{item.size}</div>
                    </div>
                    <div className="bg-slate-950/60 p-3 rounded-lg border border-slate-800">
                      <div className="flex items-center text-slate-500 text-[10px] font-bold uppercase mb-1">
                        <Info className="w-3 h-3 mr-1" /> Versión
                      </div>
                      <div className="text-white text-sm font-semibold">{item.version}</div>
                    </div>
                    <div className="bg-slate-950/60 p-3 rounded-lg border border-slate-800">
                      <div className="flex items-center text-slate-500 text-[10px] font-bold uppercase mb-1">
                        <ShieldCheck className="w-3 h-3 mr-1" /> Requisitos
                      </div>
                      <div className="text-white text-[10px] font-semibold leading-tight">{item.requirements}</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                    <Info className="w-5 h-5 mr-2 text-blue-500" />
                    Descripción Completa
                  </h2>
                  <div className="text-slate-400 leading-relaxed space-y-4">
                    <p>{item.fullDescription}</p>
                    <p>Esta es una versión optimizada preparada para funcionar en los entornos más exigentes. Se han realizado pruebas exhaustivas para garantizar la compatibilidad con el hardware especificado y ofrecer un rendimiento superior.</p>
                  </div>
                </div>

                <div className="bg-blue-600/5 border border-blue-500/20 p-6 rounded-xl flex items-start space-x-4">
                  <ShieldCheck className="w-8 h-8 text-blue-500 flex-shrink-0" />
                  <div>
                    <h4 className="text-blue-400 font-bold mb-1">Verificado y Seguro</h4>
                    <p className="text-slate-400 text-sm">Este archivo ha sido escaneado contra virus y malware por nuestro sistema automatizado de seguridad avanzado para garantizar una descarga sin riesgos.</p>
                  </div>
                </div>

                {/* Legal Warning */}
                <div className="bg-amber-900/10 border border-amber-900/30 p-4 rounded-lg flex items-start space-x-3">
                  <AlertTriangle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                  <p className="text-amber-500/80 text-xs italic">
                    Aviso Legal: El uso de este software está sujeto a los términos y condiciones del desarrollador original. Filexa no se hace responsable del mal uso del contenido descargado.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar / Actions */}
          <div className="space-y-6">
            <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl sticky top-24">
              <button className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-5 px-6 rounded-xl flex items-center justify-center transition-all shadow-xl shadow-blue-600/30 hover:scale-[1.02] active:scale-95 mb-4 group">
                <Download className="w-6 h-6 mr-3 group-hover:animate-bounce" />
                DESCARGAR AHORA
              </button>
              
              <p className="text-slate-500 text-[11px] text-center mb-8 uppercase tracking-widest font-bold">
                Enlace Directo Verificado
              </p>

              <div className="space-y-4">
                <h5 className="text-white font-bold text-sm mb-4">Enlaces Secundarios</h5>
                <button className="w-full bg-slate-800/50 hover:bg-slate-800 text-slate-300 py-3 px-4 rounded-lg text-sm flex items-center justify-between transition-colors border border-slate-700">
                  <span>Mirror Servidor #1</span>
                  <ExternalLink className="w-4 h-4" />
                </button>
                <button className="w-full bg-slate-800/50 hover:bg-slate-800 text-slate-300 py-3 px-4 rounded-lg text-sm flex items-center justify-between transition-colors border border-slate-700">
                  <span>Mirror Servidor #2</span>
                  <ExternalLink className="w-4 h-4" />
                </button>
                <button className="w-full bg-slate-800/50 hover:bg-slate-800 text-slate-300 py-3 px-4 rounded-lg text-sm flex items-center justify-between transition-colors border border-slate-700">
                  <span>Descarga Torrent</span>
                  <Download className="w-4 h-4" />
                </button>
              </div>

              {/* Sidebar Ad space */}
              <div className="mt-8 pt-8 border-t border-slate-800">
                <div className="w-full aspect-square bg-slate-950 border border-dashed border-slate-800 rounded-xl flex items-center justify-center text-slate-700 text-xs italic p-4 text-center">
                  Publicidad
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
