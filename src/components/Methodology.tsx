import { motion } from "motion/react";

const steps = [
  {
    number: "01",
    title: "Diagnóstico tributário",
    description: "Análise profunda da situação fiscal da empresa, identificando inconsistências, riscos e pontos de melhoria."
  },
  {
    number: "02",
    title: "Mapeamento de oportunidades",
    description: "Levantamento criterioso de créditos, benefícios e recuperações tributárias aplicáveis ao perfil do cliente."
  },
  {
    number: "03",
    title: "Estruturação jurídica segura",
    description: "Desenho da solução com respaldo legal sólido, garantindo segurança em cada etapa do processo."
  },
  {
    number: "04",
    title: "Implementação prática",
    description: "Execução ágil e orientada a resultados, com clareza em cada ação tomada."
  },
  {
    number: "05",
    title: "Acompanhamento contínuo",
    description: "Garantindo a adaptação a novas realidades fiscais e a manutenção dos resultados obtidos."
  }
];

export function Methodology() {
  return (
    <section className="py-24 bg-slate-50 relative border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-accent-500 font-semibold tracking-wider uppercase text-sm mb-3"
          >
            NOSSA METODOLOGIA
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-heading font-bold text-slate-900 mb-6"
          >
            Do diagnóstico ao resultado
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-600"
          >
            Nossa atuação segue uma lógica estruturada e comprovada, desenhada para transformar a complexidade tributária em oportunidade real para o seu negócio.
          </motion.p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 -translate-x-1/2"></div>
          
          <div className="space-y-12">
            {steps.map((step, index) => (
              <motion.div 
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex flex-col lg:flex-row items-center gap-8 lg:gap-16 ${index % 2 === 0 ? 'lg:flex-row-reverse' : ''}`}
              >
                {/* Timeline Dot */}
                <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white border-4 border-accent-500 items-center justify-center z-10 shadow-lg">
                  <span className="text-sm font-bold text-slate-900">{step.number}</span>
                </div>

                {/* Content Box */}
                <div className={`w-full lg:w-1/2 ${index % 2 === 0 ? 'lg:pl-8 text-left' : 'lg:pr-8 lg:text-right'}`}>
                  <div className={`bg-white p-8 rounded-2xl shadow-sm border border-slate-100 relative ${index % 2 === 0 ? 'lg:ml-auto' : 'lg:mr-auto'} max-w-xl group hover:shadow-lg hover:border-accent-500/30 transition-all`}>
                    <div className="lg:hidden w-12 h-12 rounded-full bg-brand-900 flex items-center justify-center text-white font-bold mb-6">
                      {step.number}
                    </div>
                    <h3 className="text-2xl font-heading font-bold text-slate-900 mb-4 group-hover:text-accent-500 transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
                
                {/* Spacer for the other side */}
                <div className="hidden lg:block w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
