import { motion } from "motion/react";
import { 
  ShoppingCart, 
  Truck, 
  Fuel, 
  Leaf, 
  Factory, 
  Briefcase, 
  Store
} from "lucide-react";

const segments = [
  {
    title: "Supermercados e Distribuidores Alimentícios",
    icon: ShoppingCart,
  },
  {
    title: "Transportadoras e Postos de Combustíveis",
    icon: Truck,
  },
  {
    title: "Usinas e Distribuidores de Combustível",
    icon: Fuel,
  },
  {
    title: "Agronegócio",
    icon: Leaf,
  },
  {
    title: "Indústrias",
    icon: Factory,
  },
  {
    title: "Prestadores de Serviço",
    icon: Briefcase,
  },
  {
    title: "Comércio",
    icon: Store,
  }
];

export function Segments() {
  return (
    <section id="segmentos" className="py-24 bg-slate-50 relative">
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
            className="text-3xl md:text-5xl font-heading font-bold text-slate-900 mb-6"
          >
            Onde somos especialistas
          </motion.h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {segments.map((segment, index) => (
            <motion.div
              key={segment.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200 hover:shadow-xl hover:bg-accent-500 hover:border-accent-500 transition-all duration-300 group flex flex-col items-start cursor-default"
            >
              <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-white/20 transition-colors duration-300">
                <segment.icon className="w-6 h-6 text-brand-900 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 group-hover:text-white mb-2 flex-grow font-heading transition-colors duration-300">
                {segment.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
