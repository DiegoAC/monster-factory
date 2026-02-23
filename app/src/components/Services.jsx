import { motion } from 'framer-motion';
import { Dumbbell, Users, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Services() {
    const services = [
        {
            title: "MUSCULACIÓN LIBRE",
            icon: <Dumbbell className="w-10 h-10 text-primary drop-shadow-[0_0_8px_rgba(255,107,53,0.5)]" />,
            desc: "Acceso ilimitado a todas las zonas de peso libre y máquinas guiadas de última generación.",
            link: "/#gallery"
        },
        {
            title: "ENTRENO PERSONAL",
            icon: <Users className="w-10 h-10 text-primary drop-shadow-[0_0_8px_rgba(255,107,53,0.5)]" />,
            desc: "Planes personalizados con nuestro entrenador certificado. Resultados garantizados paso a paso.",
            link: "/#contact"
        },
        {
            title: "SUPLEMENTACIÓN",
            icon: <ShoppingBag className="w-10 h-10 text-primary drop-shadow-[0_0_8px_rgba(255,107,53,0.5)]" />,
            desc: "Proteínas, pre-entrenos, creatina y más. Descuentos exclusivos para nuestros socios.",
            link: "/suplementos"
        }
    ];

    return (
        <section id="services" className="py-24 bg-background relative z-10">
            <div className="container mx-auto px-4">
                <div className="text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="font-display text-5xl md:text-7xl mb-4 leading-tight"
                    >
                        TODO LO QUE <span className="text-primary drop-shadow-[0_0_15px_rgba(255,107,53,0.3)]">NECESITAS</span>
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {services.map((srv, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1, duration: 0.5 }}
                            className="bg-surface/50 backdrop-blur-sm border border-white/10 p-10 rounded-3xl hover:-translate-y-2 transition-all duration-300 group hover:shadow-[0_15px_40px_rgba(255,107,53,0.15)] hover:border-primary/40 relative overflow-hidden"
                        >
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

                            <div className="bg-background w-20 h-20 rounded-2xl flex items-center justify-center mb-8 border border-white/5 group-hover:scale-110 transition-transform duration-300 shadow-xl relative z-10">
                                {srv.icon}
                            </div>
                            <h3 className="font-display text-4xl mb-4 tracking-wide relative z-10">{srv.title}</h3>
                            <p className="text-text-secondary text-lg leading-relaxed mb-8 relative z-10 font-light">{srv.desc}</p>
                            <Link to={srv.link} className="flex items-center gap-2 text-primary font-bold hover:text-white transition-colors relative z-10">
                                MÁS INFORMACIÓN <span className="group-hover:translate-x-2 transition-transform">&rarr;</span>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
