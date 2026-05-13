import { motion } from "motion/react";
import { CheckCircle2 } from "lucide-react";

export function About() {
  return (
    <section id="sobre" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Split Images Layout */}
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=600&auto=format&fit=crop&q=80" 
                alt="Equipe reunida" 
                className="w-full h-64 object-cover rounded-2xl"
              />
              <img 
                src="https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&auto=format&fit=crop&q=80" 
                alt="Análise de dados" 
                className="w-full h-64 object-cover rounded-2xl mt-8"
              />
            </div>
            {/* Badge overlay */}
            <div className="absolute top-1/2 left-1/2 min-w-max -translate-x-1/2 -translate-y-1/2 bg-brand-900 border border-slate-700 text-white p-6 rounded-2xl shadow-xl flex items-center justify-center gap-4">
              <span className="text-5xl font-heading font-bold text-accent-500">20+</span>
              <div>
                <p className="text-sm font-semibold tracking-wide uppercase">Anos de</p>
                <p className="text-lg font-heading">Experiência</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 mb-6 leading-tight">
              A TNDV GROUP
            </h2>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              Nosso foco está em identificar oportunidades de recuperação de tributos que frequentemente passam despercebidas nas rotinas das empresas, transformando essas descobertas em resultados concretos e mensuráveis.
            </p>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Ao escolher a TNDV GROUP, sua empresa conta com uma consultoria que fortalece decisões estratégicas, otimiza a estrutura tributária e impulsiona o crescimento com segurança e inteligência fiscal.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
