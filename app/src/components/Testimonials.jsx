import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
    const reviews = [
        { name: "Roy Altuve", text: "Abre las 24 horas, eso es genial, esta ordenado y limpio. Buen gym" },
        { name: "Hernán Mora", text: "Muy buenas instalaciones, maquinas nuevas perfectas para entrenar cualquier músculo y atención muy cercana." },
        { name: "Ricardo Bernad", text: "Magníficas instalaciones, aparatos de trabajo súper modernos, entrenador personal magnífico y importante: limpio, limpio" },
        { name: "Maria Gomez", text: "Buen gimnasio todo nuevo y super bien cuidado" },
        // Repeat to ensure marquee fills the screen on large displays
        { name: "Carlos Sanchez", text: "El ambiente es espectacular y las máquinas de última generación. El mejor de la zona." },
        { name: "Laura Gil", text: "Mis entrenamientos personales aquí han cambiado mi físico por completo. Gran equipo." }
    ];

    // Double the array for seamless infinite scrolling
    const duplicatedReviews = [...reviews, ...reviews];

    return (
        <section className="py-32 bg-background relative z-10 overflow-hidden border-y border-white/5">
            {/* Ambient Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-background via-surface/30 to-background pointer-events-none"></div>

            <div className="container mx-auto px-4 relative z-20">
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="inline-block bg-accent/10 text-accent border border-accent/20 px-5 py-2 rounded-full text-sm font-bold tracking-widest mb-6 shadow-[0_0_15px_rgba(0,217,255,0.15)]"
                    >
                        COMUNIDAD DE ÉLITE
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="font-display text-5xl md:text-7xl mb-4 leading-tight"
                    >
                        LO QUE DICEN NUESTROS <span className="text-primary drop-shadow-[0_0_15px_rgba(255,107,53,0.3)]">CLIENTES</span>
                    </motion.h2>
                </div>
            </div>

            {/* Marquee Wrapper */}
            <div className="relative w-full flex overflow-x-hidden group">
                {/* Edge gradients to mask the entry and exit of cards */}
                <div className="absolute top-0 bottom-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-30 pointer-events-none"></div>
                <div className="absolute top-0 bottom-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-30 pointer-events-none"></div>

                <motion.div
                    className="flex gap-6 whitespace-nowrap pl-6"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        repeat: Infinity,
                        ease: "linear",
                        duration: 40 // Adjust speed here
                    }}
                >
                    {duplicatedReviews.map((rev, idx) => (
                        <div
                            key={idx}
                            className="w-[350px] md:w-[450px] flex-shrink-0 bg-surface/50 backdrop-blur-md border border-white/10 p-10 rounded-[2.5rem] relative overflow-hidden group-hover:[animation-play-state:paused] hover:!bg-surface hover:border-accent/40 hover:shadow-[0_20px_40px_rgba(0,217,255,0.15)] transition-all duration-300"
                        >
                            {/* Glass glow */}
                            <div className="absolute -top-10 -right-10 w-32 h-32 bg-accent/10 rounded-full blur-2xl pointer-events-none"></div>

                            <Quote className="absolute top-8 right-8 w-12 h-12 text-white/5 group-hover:text-accent/10 transition-colors duration-500" />

                            <div className="flex gap-1 mb-8">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 fill-accent text-accent filter drop-shadow-[0_0_8px_rgba(0,217,255,0.4)]" />
                                ))}
                            </div>

                            <p className="text-text-secondary leading-relaxed mb-8 relative z-10 italic font-light whitespace-normal text-lg min-h-[100px]">
                                &quot;{rev.text}&quot;
                            </p>

                            <div className="flex items-center gap-4 mt-auto border-t border-white/5 pt-6">
                                {/* Profile avatar dummy with glow border */}
                                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent p-[2px] shadow-[0_0_15px_rgba(0,217,255,0.3)]">
                                    <div className="w-full h-full bg-background rounded-full flex items-center justify-center font-bold text-white">
                                        {rev.name.charAt(0)}
                                    </div>
                                </div>
                                <div>
                                    <div className="font-bold text-lg text-white tracking-wide">{rev.name}</div>
                                    <div className="text-sm text-accent tracking-wider uppercase font-medium">Cliente Verificado</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
