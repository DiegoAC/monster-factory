import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
    const reviews = [
        { name: "Roy Altuve", text: "Abre las 24 horas, eso es genial, esta ordenado y limpio. Buen gym" },
        { name: "Hernán Mora", text: "Muy buenas instalaciones, maquinas nuevas perfectas para entrenar cualquier músculo y atención muy cercana." },
        { name: "Ricardo Bernad", text: "Magníficas instalaciones, aparatos de trabajo súper modernos, entrenador personal magnífico y importante: limpio, limpio" },
        { name: "Maria Gomez", text: "Buen gimnasio todo nuevo y super bien cuidado" }
    ];

    return (
        <section className="py-24 bg-background relative z-10">
            <div className="container mx-auto px-4">
                <div className="text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="font-display text-5xl md:text-7xl mb-4 leading-tight"
                    >
                        LO QUE DICEN NUESTROS <span className="text-primary drop-shadow-[0_0_15px_rgba(255,107,53,0.3)]">CLIENTES</span>
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {reviews.map((rev, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="bg-surface/50 border border-white/5 p-8 rounded-3xl relative overflow-hidden group hover:bg-surface hover:border-accent/20 transition-all duration-300"
                        >
                            <Quote className="absolute top-6 right-6 w-16 h-16 text-white/5 group-hover:text-accent/10 transition-colors duration-500" />
                            <div className="flex gap-1 mb-8">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 fill-accent text-accent filter drop-shadow-[0_0_8px_rgba(0,217,255,0.4)]" />
                                ))}
                            </div>
                            <p className="text-text-secondary leading-relaxed mb-8 relative z-10 italic font-medium">"{rev.text}"</p>
                            <div className="font-bold text-lg mt-auto">{rev.name}</div>
                            <div className="text-sm text-text-secondary/60">Cliente Verificado</div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
