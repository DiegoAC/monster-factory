import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Gallery() {
    const images = [
        { src: '/referencias/athlete_training.jpg', alt: 'Sala de Musculación', label: 'MUSCULACIÓN', link: '/musculacion' },
        { src: '/referencias/personal_trainer.jpg', alt: 'Entrenamiento Personal', label: 'ENTRENAMIENTO PERSONAL', link: '/entrenamiento' },
        { src: '/referencias/supplements_display.jpg', alt: 'Tienda de Suplementos', label: 'TIENDA SUPLEMENTOS', link: '/suplementos' },
        { src: '/referencias/gym_interior_hero.jpg', alt: 'Zona Cardio', label: 'ZONA CARDIO', link: '/cardio' },
    ];

    return (
        <section id="gallery" className="py-24 bg-surface relative border-y border-white/5">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="font-display text-5xl md:text-7xl mb-4"
                    >
                        NUESTRAS <span className="text-primary drop-shadow-[0_0_15px_rgba(255,107,53,0.3)]">INSTALACIONES</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-text-secondary text-lg md:text-xl font-light"
                    >
                        Espacios premium diseñados para maximizar tu rendimiento
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                    {images.map((img, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1, duration: 0.5 }}
                            className="relative group overflow-hidden rounded-2xl aspect-[4/3] border border-white/10 shadow-2xl block"
                        >
                            <Link to={img.link} className="absolute inset-0 z-20"></Link>
                            <img
                                src={img.src}
                                alt={img.alt}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>

                            {/* Glassmorphism detail */}
                            <div className="absolute inset-0 border-[2px] border-white/0 group-hover:border-primary/30 rounded-2xl transition-colors duration-500 z-10 pointer-events-none"></div>

                            <div className="absolute bottom-0 left-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 z-10 pointer-events-none">
                                <div className="w-16 h-1 bg-primary mb-4 transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 delay-100 shadow-[0_0_10px_rgba(255,107,53,0.8)]"></div>
                                <h3 className="font-display text-4xl tracking-wide text-white group-hover:text-primary transition-colors duration-300">{img.label}</h3>
                                <p className="text-text-secondary mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-150">Ver detalles &rarr;</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
