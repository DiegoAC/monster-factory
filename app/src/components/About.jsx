import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

export default function About() {
    const features = [
        "Máquinas nuevas y modernas",
        "Entrenador personal certificado",
        "Ambiente limpio y ordenado",
        "Atención cercana y personalizada"
    ];

    return (
        <section id="about" className="py-24 bg-background overflow-hidden relative">
            {/* Decoración de fondo */}
            <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] -translate-y-1/2 -translate-x-1/2"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="w-full lg:w-1/2"
                    >
                        <div className="relative">
                            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 opacity-50 blur-2xl rounded-3xl"></div>
                            <img
                                src="/referencias/personal_trainer.jpg"
                                alt="Entrenador Personal"
                                className="relative rounded-3xl w-full object-cover shadow-2xl border border-white/10 aspect-[4/5] md:aspect-auto"
                            />
                            <div className="absolute -bottom-8 -right-8 bg-surface p-8 rounded-2xl border border-white/10 shadow-2xl hidden md:block">
                                <div className="font-display text-primary text-5xl leading-none">10+</div>
                                <div className="text-base text-text-secondary font-medium mt-2 uppercase tracking-wide">Años de exp.</div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="w-full lg:w-1/2"
                    >
                        <div className="inline-block bg-primary/10 text-primary border border-primary/20 px-5 py-2 rounded-full text-sm font-bold tracking-widest mb-6 shadow-[0_0_15px_rgba(255,107,53,0.15)]">
                            NUEVO EN TARAZONA
                        </div>
                        <h2 className="font-display text-5xl md:text-7xl mb-8 leading-tight">TU GIMNASIO DE <span className="text-primary">CONFIANZA</span></h2>
                        <p className="text-xl text-text-secondary mb-10 leading-relaxed font-light">
                            Somos el nuevo gimnasio de Tarazona diseñado para quienes buscan resultados reales. Ofrecemos instalaciones completamente nuevas, equipamiento de última generación y un equipo de profesionales que te acompañarán en cada repetición.
                        </p>

                        <ul className="space-y-5 mb-12">
                            {features.map((feature, index) => (
                                <li key={index} className="flex items-center gap-4">
                                    <div className="bg-success/10 p-1 rounded-full border border-success/20">
                                        <CheckCircle2 className="text-success w-6 h-6 flex-shrink-0 drop-shadow-[0_0_8px_rgba(0,230,118,0.5)]" />
                                    </div>
                                    <span className="font-medium text-xl text-white/90">{feature}</span>
                                </li>
                            ))}
                        </ul>

                        <a href="#services" className="inline-block border-b-2 border-primary pb-1 text-white hover:text-primary transition-all font-medium text-lg hover:border-white">
                            Descubre todos nuestros servicios &rarr;
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
