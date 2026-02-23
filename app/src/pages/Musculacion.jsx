import { motion } from 'framer-motion';
import { Dumbbell } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Musculacion() {
    return (
        <div className="min-h-screen bg-background pt-24 pb-20 relative">
            <div className="container mx-auto px-4 max-w-5xl text-center">
                <Link to="/#gallery" className="inline-flex items-center gap-2 text-text-secondary hover:text-primary transition-colors mb-8 group">
                    <span className="group-hover:-translate-x-1 transition-transform">&larr;</span> VOLVER A INSTALACIONES
                </Link>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="relative rounded-[2.5rem] overflow-hidden border border-white/10 bg-surface/50 backdrop-blur-md p-10 md:p-20 shadow-2xl"
                >
                    <div className="absolute inset-0 z-0">
                        <img src="/referencias/athlete_training.jpg" alt="Musculación" className="w-full h-full object-cover opacity-20" />
                        <div className="absolute inset-0 bg-gradient-to-b from-background/80 to-background/95"></div>
                    </div>

                    <div className="relative z-10">
                        <div className="w-20 h-20 bg-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-8 border border-primary/50 shadow-[0_0_20px_rgba(255,107,53,0.3)]">
                            <Dumbbell className="w-10 h-10 text-primary" />
                        </div>
                        <h1 className="font-display text-5xl md:text-8xl mb-6 text-white tracking-wide">
                            ZONA DE <span className="text-primary drop-shadow-[0_0_15px_rgba(255,107,53,0.4)]">MUSCULACIÓN</span>
                        </h1>
                        <p className="text-xl text-text-secondary font-light max-w-2xl mx-auto leading-relaxed mb-12">
                            Equipada con máquinas guiadas de última generación biomecánica y una extensa zona de peso libre. Discos y mancuernas calibradas para los entrenamientos más exigentes. El entorno perfecto para hipertrofia y fuerza.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
                            <div className="bg-background/50 border border-white/5 p-6 rounded-2xl hover:border-primary/30 transition-colors">
                                <h3 className="font-display text-2xl mb-2">PESO LIBRE</h3>
                                <p className="text-text-secondary text-sm">Más de 5000kg en discos y mancuernas hasta 60kg.</p>
                            </div>
                            <div className="bg-background/50 border border-white/5 p-6 rounded-2xl hover:border-primary/30 transition-colors">
                                <h3 className="font-display text-2xl mb-2">MÁQUINAS GUIADAS</h3>
                                <p className="text-text-secondary text-sm">Equipamiento ergonómico selectorizado de marcas premium.</p>
                            </div>
                            <div className="bg-background/50 border border-white/5 p-6 rounded-2xl hover:border-primary/30 transition-colors">
                                <h3 className="font-display text-2xl mb-2">ZONA POWERLIFTING</h3>
                                <p className="text-text-secondary text-sm">Racks profesionales, plataformas de madera y barras olímpicas.</p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
