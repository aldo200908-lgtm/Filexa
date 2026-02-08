
import React from 'react';
import { Download } from 'lucide-react';
import { Link } from 'react-router-dom';
import { FileItem } from '../types';

interface AppCardProps {
  item: FileItem;
  horizontal?: boolean;
}

const AppCard: React.FC<AppCardProps> = ({ item, horizontal = false }) => {
  if (horizontal) {
    return (
      <Link to={`/item/${item.id}`} className="block group">
        <div className="flex bg-slate-900/60 border border-slate-800 rounded-xl overflow-hidden hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10">
          <div className="w-24 sm:w-32 aspect-square flex-shrink-0 bg-slate-950 p-3">
            <img 
              src={item.imageUrl} 
              alt={item.name} 
              className="w-full h-full object-contain rounded-lg group-hover:scale-110 transition-transform duration-500"
            />
          </div>
          <div className="p-4 flex flex-col justify-between flex-grow">
            <div>
              <h3 className="text-base font-semibold text-white group-hover:text-blue-400 transition-colors truncate">{item.name}</h3>
              <p className="text-slate-400 text-xs line-clamp-2 mt-0.5">{item.description}</p>
            </div>
            <div className="mt-2">
              <span className="inline-flex items-center px-3 py-1 bg-blue-600 hover:bg-blue-500 text-white text-[10px] font-bold rounded transition-colors shadow-lg shadow-blue-600/20 uppercase">
                <Download className="w-3 h-3 mr-1.5" />
                Descargar
              </span>
            </div>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link to={`/item/${item.id}`} className="block group">
      <div className="bg-slate-900/60 border border-slate-800 rounded-xl overflow-hidden hover:border-blue-500/50 transition-all duration-300 flex flex-col h-full hover:shadow-lg hover:shadow-blue-500/10">
        <div className="relative aspect-square overflow-hidden bg-slate-950 p-6">
          <img 
            src={item.imageUrl} 
            alt={item.name} 
            className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500 drop-shadow-2xl"
          />
          <div className="absolute top-2 right-2 bg-slate-900/80 backdrop-blur-sm px-2 py-1 rounded text-[9px] font-bold text-blue-400 uppercase tracking-wider border border-slate-700">
            {item.category}
          </div>
        </div>
        <div className="p-4 flex flex-col flex-grow border-t border-slate-800">
          <h3 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors text-center">{item.name}</h3>
          <p className="text-slate-400 text-xs mt-1 line-clamp-2 flex-grow text-center">{item.description}</p>
          <div className="mt-4">
            <span className="w-full inline-flex items-center justify-center px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold rounded transition-colors shadow-lg shadow-blue-600/20 uppercase tracking-wide">
              <Download className="w-3.5 h-3.5 mr-2" />
              Descargar
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default AppCard;
