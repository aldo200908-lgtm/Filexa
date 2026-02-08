
import React from 'react';
import { Facebook, Twitter, Instagram, Github, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-6">
              <div className="p-1 bg-blue-600 rounded">
                <div className="w-5 h-5 flex items-center justify-center text-white font-bold text-xs">FX</div>
              </div>
              <span className="text-2xl font-bold text-white">Filexa</span>
            </Link>
            <p className="text-slate-400 max-w-sm mb-6">
              Tu portal de confianza para descargar las últimas aplicaciones, juegos y programas de forma segura y directa.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-slate-900 rounded-full text-slate-400 hover:text-blue-500 hover:bg-slate-800 transition-all">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-slate-900 rounded-full text-slate-400 hover:text-blue-400 hover:bg-slate-800 transition-all">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-slate-900 rounded-full text-slate-400 hover:text-pink-500 hover:bg-slate-800 transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-slate-900 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition-all">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Recursos</h4>
            <ul className="space-y-4">
              <li><Link to="/catalog/APK" className="text-slate-400 hover:text-blue-400 transition-colors">Descargas APK</Link></li>
              <li><Link to="/catalog/Juegos" className="text-slate-400 hover:text-blue-400 transition-colors">Últimos Juegos</Link></li>
              <li><Link to="/catalog/Programas" className="text-slate-400 hover:text-blue-400 transition-colors">Software PC</Link></li>
              <li><Link to="/search" className="text-slate-400 hover:text-blue-400 transition-colors">Buscador</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Legales</h4>
            <ul className="space-y-4">
              <li><Link to="/legal" className="text-slate-400 hover:text-blue-400 transition-colors">Aviso Legal</Link></li>
              <li><Link to="/dmca" className="text-slate-400 hover:text-blue-400 transition-colors">DMCA</Link></li>
              <li><Link to="/privacy" className="text-slate-400 hover:text-blue-400 transition-colors">Política de Privacidad</Link></li>
              <li><Link to="/cookies" className="text-slate-400 hover:text-blue-400 transition-colors">Cookies</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-slate-500 text-sm">
          <p>© 2026 - Filexa. Todos los derechos reservados.</p>
          <div className="flex items-center space-x-2">
            <Mail className="w-4 h-4" />
            <span>contacto@filexa.com</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
