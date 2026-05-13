import { motion } from "motion/react";
import { CheckCircle2 } from "lucide-react";

const servicesList = [
  "Planejamento tributário",
  "Transação tributária",
  "Recuperação de IRPJ/CSLL",
  "Parcelamento de tributos",
  "Defesa fiscal com ênfase em provas robustas",
  "Obtenção de regimes especiais tributários",
  "Operacionalização de créditos tributários judiciais",
  "Revisão preventiva",
  "Recuperação de tributos federais e estaduais",
  "Constituição de Holding",
  "Ações Coletivas"
];

export function Services() {
  return (
    <section id="solucoes" className="py-24 bg-brand-900 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-accent-500 font-semibold tracking-wider uppercase text-sm mb-3"
          >
            CONHEÇA AS ÁREAS
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-heading font-bold text-white mb-6"
          >
            Nossas Soluções
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesList.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
              className="bg-brand-800 border border-slate-800 rounded-xl p-6 flex items-start gap-4 hover:border-accent-500/50 transition-colors"
            >
              <CheckCircle2 className="w-6 h-6 text-accent-500 flex-shrink-0 mt-0.5" />
              <span className="text-white font-medium">{service}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
