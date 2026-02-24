import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

export default function Pricing() {
    const plans = [
        {
            name: "MENSUAL",
            price: "45",
            desc: "Flexibilidad total",
            features: ["Acceso ilimitado 24h", "Todas las zonas de entreno", "Vestuarios equipados"],
            popular: false
        },
        {
            name: "CUATRIMESTRAL",
            price: "170",
            desc: "Compromiso a medio plazo",
            features: ["Acceso ilimitado 24h", "Todas las zonas de entreno", "Vestuarios equipados", "Ahorro sobre el plan mensual"],
            popular: false
        },
        {
            name: "SEMESTRAL",
            price: "250",
            desc: "El plan más inteligente",
            features: ["Todo lo del plan Cuatrimestral", "Seguimiento inicial", "Mayor porcentaje de ahorro", "Acceso prioritario a novedades"],
            popular: true
        },
        {
            name: "ANUAL",
            price: "500",
            desc: "Máximo rendimiento",
            features: ["Todo lo del plan Semestral", "Mejor precio garantizado", "Descuento en suplementos", "Matrícula 100% gratuita"],
            popular: false
        }
    ];

    return (
        <section id="pricing" className="py-32 bg-background border-y border-white/5 relative overflow-hidden">
            {/* Ambient Lighting */}
            <div className="absolute left-1/2 top-1/2 w-[800px] h-[400px] bg-primary/10 rounded-full blur-[150px] -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-24">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="inline-block bg-primary/10 text-primary border border-primary/20 px-5 py-2 rounded-full text-sm font-bold tracking-widest mb-6 shadow-[0_0_15px_rgba(255,107,53,0.15)]"
                    >
                        UNETE A LA ÉLITE
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="font-display text-5xl md:text-7xl mb-4 leading-tight"
                    >
                        NUESTRAS <span className="text-primary drop-shadow-[0_0_15px_rgba(255,107,53,0.3)]">TARIFAS</span>
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
                    {plans.map((plan, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.15, duration: 0.6 }}
                            className={`w-full p-[2px] rounded-3xl relative flex flex-col ${plan.popular ? 'scale-100 xl:scale-110 z-20 shadow-[0_0_50px_rgba(255,107,53,0.2)]' : 'z-10'}`}
                        >
                            {/* Holographic animated border for popular plan */}
                            {plan.popular && (
                                <motion.div
                                    className="absolute inset-0 rounded-3xl opacity-50 bg-[conic-gradient(from_0deg,transparent_0_340deg,white_360deg)] before:absolute before:inset-0 before:bg-[conic-gradient(from_0deg,transparent_0_340deg,#FF6B35_360deg)]"
                                    animate={{ rotate: 360 }}
                                    transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
                                    style={{ background: 'conic-gradient(from 0deg, #FF6B35, #00D9FF, #FF6B35)' }}
                                />
                            )}

                            {/* Inner Glass Card */}
                            <div className={`h-full w-full rounded-3xl p-8 relative flex flex-col ${plan.popular
                                ? 'bg-surface/90 backdrop-blur-2xl'
                                : 'bg-surface/40 backdrop-blur-md border border-white/10 hover:border-white/30 transition-colors'
                                }`}>

                                {plan.popular && (
                                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 rounded-3xl pointer-events-none"></div>
                                )}

                                {plan.popular && (
                                    <motion.div
                                        animate={{ y: [0, -10, 0] }}
                                        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                                        className="absolute -top-5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-[#ff8c42] text-white px-6 py-2 rounded-full text-sm font-bold tracking-widest shadow-[0_0_20px_rgba(255,107,53,0.8)] border border-white/20 whitespace-nowrap"
                                    >
                                        MÁS POPULAR
                                    </motion.div>
                                )}

                                <div className="text-center mb-8 relative z-10 pt-4">
                                    <h3 className={`font-display text-4xl mb-2 tracking-wide ${plan.popular ? 'text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70' : 'text-white'}`}>{plan.name}</h3>
                                    <p className="text-text-secondary text-sm font-medium uppercase tracking-wider mb-6">{plan.desc}</p>
                                    <div className="font-display text-6xl mb-2 flex flex-col items-center justify-center text-white">
                                        <div className="flex items-start">
                                            {plan.price}
                                            <span className={`text-3xl mt-2 ml-1 ${plan.popular ? 'text-accent' : 'text-primary'}`}>€</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-4 mb-10 flex-grow relative z-10">
                                    {plan.features.map((feat, i) => (
                                        <div key={i} className="flex items-start gap-3">
                                            <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${plan.popular ? 'text-accent drop-shadow-[0_0_8px_rgba(0,217,255,0.6)]' : 'text-success drop-shadow-[0_0_5px_rgba(0,230,118,0.5)]'}`} />
                                            <span className="text-white/80 font-medium text-[15px] leading-snug">{feat}</span>
                                        </div>
                                    ))}
                                </div>

                                <a href="https://wa.me/34602530088" target="_blank" rel="noopener noreferrer" className={`block w-full text-center py-4 rounded-xl font-bold text-lg transition-all relative z-10 overflow-hidden group ${plan.popular
                                    ? 'bg-primary text-white hover:shadow-[0_0_30px_rgba(255,107,53,0.6)]'
                                    : 'bg-white/5 border border-white/10 text-white hover:bg-white/10'
                                    }`}>
                                    {/* Shining effect on button hover */}
                                    <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-20 group-hover:animate-shine" />
                                    <span className="relative z-10">INSCRIBIRSE</span>
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
