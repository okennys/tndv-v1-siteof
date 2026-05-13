import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] md:h-screen flex items-center bg-brand-900 pt-20 overflow-hidden">
      {/* Background patterns/images */}
      <div className="absolute inset-0 z-0 bg-brand-900 overflow-hidden">
        <video
          src="/BANNER HERO TDNV.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover pointer-events-none opacity-80 z-10"
        />
        {/* Overlays for legibility */}
        <div className="absolute inset-0 bg-brand-900/60 md:hidden z-20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-brand-900 via-brand-900/90 md:via-brand-900/80 to-transparent w-full md:w-3/4 z-20"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-brand-900 via-brand-900/20 to-transparent z-20"></div>
      </div>

      <div className="relative z-30 max-w-7xl mx-auto px-6 lg:px-8 w-full pt-12 md:pt-0">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-500/10 border border-accent-500/20 text-accent-500 text-xs sm:text-sm font-medium mb-6 mt-10 md:mt-0">
            <span className="w-2 h-2 rounded-full bg-accent-500 animate-pulse"></span>
            TNDV GROUP
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-white leading-tight mb-6">
            Transformando gestão tributária em <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-accent-500">
              vantagem competitiva.
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-xl leading-relaxed">
            Escritório especializado em planejamento tributário estratégico, com mais de 20 anos de atuação no cenário tributário brasileiro. Combinamos expertise técnica, visão analítica e uma abordagem verdadeiramente personalizada para entregar soluções que vão além da conformidade fiscal — geramos valor real para o negócio.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#solucoes"
              className="inline-flex justify-center items-center gap-2 bg-accent-500 hover:bg-accent-400 text-white px-8 py-4 rounded-full text-base font-medium transition-all transform hover:-translate-y-1 shadow-lg hover:shadow-accent-500/30"
            >
              Conheça nossas soluções
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
