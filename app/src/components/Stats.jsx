import { motion } from 'framer-motion';
import { Clock, Dumbbell, Sparkles, Star } from 'lucide-react';

export default function Stats() {
    const stats = [
        { icon: <Clock className="w-8 h-8 text-accent drop-shadow-[0_0_8px_rgba(0,217,255,0.5)]" />, label: "Abierto todo el día", value: "24H" },
        { icon: <Dumbbell className="w-8 h-8 text-accent drop-shadow-[0_0_8px_rgba(0,217,255,0.5)]" />, label: "Máquinas nuevas", value: "50+" },
        { icon: <Sparkles className="w-8 h-8 text-accent drop-shadow-[0_0_8px_rgba(0,217,255,0.5)]" />, label: "Limpieza garantizada", value: "100%" },
        { icon: <Star className="w-8 h-8 text-accent drop-shadow-[0_0_8px_rgba(0,217,255,0.5)]" />, label: "Valoración clientes", value: "5.0" },
    ];

    return (
        <section className="bg-surface py-12 relative z-20 border-y border-white/5 shadow-2xl">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="flex flex-col items-center text-center group"
                        >
                            <div className="mb-4 p-5 rounded-full bg-background/80 border border-white/5 group-hover:bg-accent/10 transition-colors shadow-[0_0_15px_rgba(0,0,0,0.5)] group-hover:shadow-[0_0_20px_rgba(0,217,255,0.2)]">
                                {stat.icon}
                            </div>
                            <h3 className="font-display text-5xl mb-2 tracking-wide">{stat.value}</h3>
                            <p className="text-text-secondary text-sm md:text-base font-medium uppercase tracking-wider">{stat.label}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
