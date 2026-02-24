import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Clock, Dumbbell, Sparkles, Star } from 'lucide-react';
import CountUp from 'react-countup';

export default function Stats() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const stats = [
        {
            icon: <Clock className="w-8 h-8 text-accent drop-shadow-[0_0_8px_rgba(0,217,255,0.5)]" />,
            label: "Abierto todo el día",
            prefix: "", suffix: "H", end: 24
        },
        {
            icon: <Dumbbell className="w-8 h-8 text-accent drop-shadow-[0_0_8px_rgba(0,217,255,0.5)]" />,
            label: "Máquinas nuevas",
            prefix: "", suffix: "+", end: 50
        },
        {
            icon: <Sparkles className="w-8 h-8 text-accent drop-shadow-[0_0_8px_rgba(0,217,255,0.5)]" />,
            label: "Limpieza garantizada",
            prefix: "", suffix: "%", end: 100
        },
        {
            icon: <Star className="w-8 h-8 text-accent drop-shadow-[0_0_8px_rgba(0,217,255,0.5)]" />,
            label: "Valoración clientes",
            prefix: "", suffix: "", end: 5, decimals: 1
        },
    ];

    return (
        <section className="bg-surface py-12 relative z-20 border-y border-white/5 shadow-2xl" ref={ref}>
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ delay: index * 0.15, duration: 0.6 }}
                            className="flex flex-col items-center text-center group"
                        >
                            <motion.div
                                className="mb-4 p-5 rounded-full bg-background/80 border border-white/5 group-hover:bg-accent/10 transition-colors shadow-[0_0_15px_rgba(0,0,0,0.5)] group-hover:shadow-[0_0_20px_rgba(0,217,255,0.2)] text-accent relative overflow-hidden"
                            >
                                {/* We keep the icon static but add a rotating border or glow for extra effect */}
                                <div className="absolute inset-0 rounded-full border border-accent/0 group-hover:border-accent/50 group-hover:scale-110 transition-all duration-500"></div>
                                {stat.icon}
                            </motion.div>
                            <h3 className="font-display text-5xl md:text-6xl mb-2 tracking-wide text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
                                {stat.prefix}
                                {isInView ? (
                                    <CountUp
                                        start={0}
                                        end={stat.end}
                                        duration={3}
                                        decimals={stat.decimals || 0}
                                        separator=","
                                        useEasing={true}
                                    />
                                ) : "0"}
                                <span className="text-primary ml-1">{stat.suffix}</span>
                            </h3>
                            <p className="text-text-secondary text-sm md:text-base font-bold uppercase tracking-widest">{stat.label}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
