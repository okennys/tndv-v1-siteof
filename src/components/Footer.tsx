import { motion } from "motion/react";
import { Instagram, Linkedin, Globe } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-brand-900 pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          <div className="flex flex-col items-center md:items-start text-center md:text-left gap-4">
            <a href="#" className="flex items-center gap-2 group">
              <img src="/logonegativoAsset 1.svg" alt="Tavares & Das Neves Group" className="h-20 md:h-24 w-auto" />
            </a>
            <p className="text-slate-400 text-base max-w-md">
              Transformando gestão tributária em vantagem competitiva.
            </p>
          </div>
          
          <div className="flex items-center gap-4">
            <a href="#" className="w-12 h-12 rounded-full bg-brand-800 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-600 hover:bg-slate-800 transition-all">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="w-12 h-12 rounded-full bg-brand-800 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-600 hover:bg-slate-800 transition-all">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="w-12 h-12 rounded-full bg-brand-800 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-600 hover:bg-slate-800 transition-all">
              <Globe className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 pt-8 border-t border-slate-800 mb-12 text-sm text-slate-400">
          <div className="flex flex-col gap-3">
            <a href="#" className="hover:text-accent-500 transition-colors">São José do Rio Preto</a>
            <a href="#" className="hover:text-accent-500 transition-colors">Itajaí</a>
          </div>
          <div className="flex flex-col gap-3">
            <a href="#" className="hover:text-accent-500 transition-colors">Rio de Janeiro</a>
            <a href="#" className="hover:text-accent-500 transition-colors">São Paulo</a>
          </div>
          <div className="flex flex-col gap-3 col-span-2 md:col-span-1">
            <a href="#" className="hover:text-accent-500 transition-colors">Goiânia</a>
            <a href="#" className="hover:text-accent-500 transition-colors">Brasília</a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500 text-center md:text-left">
          <p>
            © {new Date().getFullYear()} TNDV GROUP. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-slate-300 transition-colors">Áreas de Atuação</a>
            <a href="#" className="hover:text-slate-300 transition-colors">Contato</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
