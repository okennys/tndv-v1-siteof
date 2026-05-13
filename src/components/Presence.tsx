import { motion } from "motion/react";
import { MapPin } from "lucide-react";

const cities = [
  "São José do Rio Preto",
  "Itajaí",
  "Rio de Janeiro",
  "São Paulo",
  "Goiânia",
  "Brasília"
];

export function Presence() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-accent-500 font-semibold tracking-wider uppercase text-sm mb-3">
              PRESENÇA NACIONAL
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-slate-900 mb-6 leading-tight">
              Estar próximo do cliente não é um detalhe. É parte essencial da nossa estratégia.
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Contamos com filiais próprias em cidades estratégicas de todas as regiões do Brasil, garantindo atendimento qualificado, ágil e com acompanhamento contínuo. Cada unidade da TNDV GROUP opera com o mesmo padrão de excelência, agregando soluções tributárias personalizadas independentemente de onde sua empresa esteja.
            </p>
            
            <div className="bg-slate-50 border-l-4 border-accent-500 p-6 rounded-r-xl">
              <p className="text-xl font-medium text-slate-800 italic">
                "Capilaridade com padrão único de qualidade."
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-brand-900 rounded-3xl p-8 lg:p-12 relative overflow-hidden"
          >
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
            
            {/* Subtle Brazil Map Pattern */}
            <div 
              className="absolute inset-0 opacity-[0.03] pointer-events-none"
              style={{
                backgroundImage: 'url("https://upload.wikimedia.org/wikipedia/commons/b/b4/Brazil_blank_map.svg")',
                backgroundSize: '120%',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: '150% center',
              }}
            ></div>
            
            <h3 className="text-white font-heading font-bold text-2xl mb-8 relative z-10">Nossas Unidades</h3>
            
            <div className="grid sm:grid-cols-2 gap-4 relative z-10">
              {cities.map((city, index) => (
                <motion.div
                  key={city}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="flex items-center gap-3 bg-brand-800 border border-slate-700 rounded-xl p-4 hover:border-accent-500/50 transition-colors"
                >
                  <MapPin className="w-5 h-5 text-accent-500" />
                  <span className="text-white font-medium">{city}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
