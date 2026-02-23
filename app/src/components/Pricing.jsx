import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

export default function Pricing() {
    const plans = [
        {
            name: "BÁSICO",
            price: "29",
            desc: "Perfecto para empezar",
            features: ["Acceso 24h al gimnasio", "Todas las zonas de entrenamiento", "Vestuarios con taquilla"],
            popular: false
        },
        {
            name: "PREMIUM",
            price: "39",
            desc: "El más popular",
            features: ["Todo lo del plan Básico", "Clases dirigidas incluidas", "1 sesión con entrenador/mes", "10% descuento en suplementos"],
            popular: true
        },
        {
            name: "ELITE",
            price: "59",
            desc: "Máximos resultados",
            features: ["Todo lo del plan Premium", "4 sesiones con entrenador/mes", "Plan nutricional personalizado", "15% descuento en suplementos"],
            popular: false
        }
    ];

    return (
        <section id="pricing" className="py-32 bg-surface border-y border-white/5 relative overflow-hidden">
            <div className="absolute left-1/2 top-1/2 w-[800px] h-[400px] bg-primary/10 rounded-full blur-[150px] -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-24">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="font-display text-5xl md:text-7xl mb-4 leading-tight"
                    >
                        ELIGE TU <span className="text-primary drop-shadow-[0_0_15px_rgba(255,107,53,0.3)]">PLAN</span>
                    </motion.h2>
                </div>

                <div className="flex flex-col xl:flex-row gap-8 justify-center items-center xl:items-stretch max-w-6xl mx-auto">
                    {plans.map((plan, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className={`w-full xl:w-1/3 rounded-3xl p-8 md:p-12 relative flex flex-col ${plan.popular
                                    ? 'bg-gradient-to-b from-surface/80 to-background border-2 border-primary shadow-[0_20px_50px_rgba(255,107,53,0.15)] scale-100 xl:scale-105 z-10'
                                    : 'bg-background border border-white/10 hover:border-white/20 transition-colors'
                                }`}
                        >
                            {plan.popular && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white px-6 py-2 rounded-full text-sm font-bold tracking-widest shadow-[0_0_20px_rgba(255,107,53,0.6)]">
                                    MÁS POPULAR
                                </div>
                            )}

                            <div className="text-center mb-10">
                                <h3 className="font-display text-4xl mb-2 tracking-wide text-white">{plan.name}</h3>
                                <p className="text-text-secondary text-sm font-medium uppercase tracking-wider mb-8">{plan.desc}</p>
                                <div className="font-display text-6xl md:text-7xl mb-2 flex items-start justify-center text-white">
                                    <span className="text-3xl mt-2 text-primary">€</span>
                                    {plan.price}
                                    <span className="text-xl self-end mb-3 text-text-secondary/70">/mes</span>
                                </div>
                            </div>

                            <div className="space-y-5 mb-12 flex-grow">
                                {plan.features.map((feat, i) => (
                                    <div key={i} className="flex items-start gap-4">
                                        <Check className={`w-6 h-6 flex-shrink-0 mt-0.5 ${plan.popular ? 'text-primary' : 'text-success drop-shadow-[0_0_5px_rgba(0,230,118,0.5)]'}`} />
                                        <span className="text-white/80 font-medium text-lg">{feat}</span>
                                    </div>
                                ))}
                            </div>

                            <a href="#contact" className={`block w-full text-center py-5 rounded-xl font-bold text-lg transition-all ${plan.popular
                                    ? 'bg-primary text-white hover:bg-primary/90 hover:shadow-[0_0_25px_rgba(255,107,53,0.5)] hover:-translate-y-1'
                                    : 'bg-surface/50 border border-white/10 text-white hover:bg-white/5 hover:-translate-y-1'
                                }`}>
                                EMPEZAR AHORA
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
