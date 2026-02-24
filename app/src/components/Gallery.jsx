import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Gallery() {
    const images = [
        { src: '/referencias/athlete_training.jpg', alt: 'Sala de Musculación', label: 'MUSCULACIÓN', link: '/musculacion', height: 'h-96' },
        { src: '/referencias/gym_interior_hero.jpg', alt: 'Zona Cardio', label: 'ZONA CARDIO', link: '/cardio', height: 'h-64' },
        { src: '/referencias/personal_trainer.jpg', alt: 'Entrenamiento Personal', label: 'ENTRENO PERSONAL', link: '/entrenamiento', height: 'h-80' },
        { src: '/referencias/supplements_display.jpg', alt: 'Tienda de Suplementos', label: 'TIENDA SUPLEMENTOS', link: '/suplementos', height: 'h-96' },
    ];

    return (
        <section id="gallery" className="py-32 bg-background relative border-y border-white/5 overflow-hidden">
            {/* Ambient Background for Odyssey Feel */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-20 flex flex-col items-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="inline-block bg-primary/10 text-primary border border-primary/20 px-5 py-2 rounded-full text-sm font-bold tracking-widest mb-6 shadow-[0_0_15px_rgba(255,107,53,0.15)]"
                    >
                        ZONAS PREMIUM
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="font-display text-5xl md:text-7xl mb-6"
                    >
                        NUESTRAS <span className="text-primary drop-shadow-[0_0_20px_rgba(255,107,53,0.4)]">INSTALACIONES</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-text-secondary text-lg md:text-xl font-light max-w-2xl"
                    >
                        Un recorrido inmersivo por espacios diseñados milimétricamente para maximizar tu potencial físico y mental.
                    </motion.p>
                </div>

                {/* Simulated Masonry Layout via grid with specific spans or simply using flex columns for true masonry */}
                <div className="columns-1 md:columns-2 gap-6 space-y-6 max-w-6xl mx-auto">
                    {images.map((img, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 50, filter: 'blur(10px)' }}
                            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ delay: idx * 0.15, duration: 0.8, ease: "easeOut" }}
                            className={`relative group overflow-hidden rounded-[2rem] border border-white/10 shadow-[0_20px_40px_rgba(0,0,0,0.5)] block break-inside-avoid w-full ${img.height}`}
                        >
                            <Link to={img.link} className="absolute inset-0 z-30"></Link>

                            <img
                                src={img.src}
                                alt={img.alt}
                                className="w-full h-full object-cover transition-transform duration-[1.5s] ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-[1.08]"
                            />

                            {/* Darkening Overlay on Hover */}
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/60 transition-colors duration-500 z-10"></div>
                            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-90 z-20"></div>

                            {/* Inner Glass border effect */}
                            <div className="absolute inset-0 border-[2px] border-white/5 group-hover:border-primary/40 rounded-[2rem] transition-colors duration-500 z-20 pointer-events-none"></div>

                            {/* Slide-out from bottom content */}
                            <div className="absolute bottom-0 left-0 w-full p-8 translate-y-6 group-hover:translate-y-0 opacity-80 group-hover:opacity-100 transition-all duration-500 z-20 pointer-events-none flex flex-col justify-end">
                                <div className="w-12 h-[3px] bg-primary mb-4 origin-left transform scale-x-50 group-hover:scale-x-100 transition-transform duration-500 shadow-[0_0_15px_rgba(255,107,53,0.8)]"></div>
                                <h3 className="font-display text-4xl tracking-wide text-white group-hover:text-primary transition-colors duration-300 drop-shadow-md">{img.label}</h3>
                                <p className="text-white/70 mt-3 font-light flex items-center gap-2">
                                    Explorar <span className="group-hover:translate-x-2 transition-transform duration-300 inline-block">&rarr;</span>
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
