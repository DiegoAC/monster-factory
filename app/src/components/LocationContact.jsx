import { motion } from 'framer-motion';
import { MapPin, Clock, Phone, Mail } from 'lucide-react';

export default function LocationContact() {
    return (
        <section id="contact" className="py-24 bg-background relative z-10 overflow-hidden">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="font-display text-5xl md:text-7xl mb-4 leading-tight"
                    >
                        VEN A <span className="text-primary drop-shadow-[0_0_15px_rgba(255,107,53,0.3)]">CONOCERNOS</span>
                    </motion.h2>
                </div>

                <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
                    {/* Map & Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="w-full lg:w-1/2"
                    >
                        <div className="h-[400px] w-full bg-surface/30 rounded-3xl border border-white/5 mb-10 overflow-hidden relative group backdrop-blur-sm">
                            <div className="absolute inset-0 flex items-center justify-center text-text-secondary flex-col">
                                <MapPin className="text-primary/40 w-16 h-16 mb-4 group-hover:scale-110 transition-transform duration-500 group-hover:text-primary/60" />
                                <span className="font-bold tracking-widest text-lg">MAPA INTERACTIVO</span>
                                <span className="text-xs text-white/30 mt-2 opacity-0 group-hover:opacity-100 transition-opacity">(Requiere API Key real)</span>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                            <div className="flex items-start gap-5">
                                <div className="bg-accent/10 p-3 rounded-2xl border border-accent/20">
                                    <MapPin className="text-accent w-6 h-6 flex-shrink-0" />
                                </div>
                                <div>
                                    <div className="font-bold text-lg mb-1 text-white">Dirección</div>
                                    <div className="text-text-secondary leading-relaxed">Tarazona, Zaragoza<br />España</div>
                                </div>
                            </div>
                            <div className="flex items-start gap-5">
                                <div className="bg-accent/10 p-3 rounded-2xl border border-accent/20">
                                    <Clock className="text-accent w-6 h-6 flex-shrink-0" />
                                </div>
                                <div>
                                    <div className="font-bold text-lg mb-1 text-white">Horario</div>
                                    <div className="text-text-secondary leading-relaxed"><strong className="text-success drop-shadow-[0_0_5px_rgba(0,230,118,0.3)] tracking-wide">ABIERTO 24H</strong><br />7 días a la semana</div>
                                </div>
                            </div>
                            <div className="flex items-start gap-5">
                                <div className="bg-accent/10 p-3 rounded-2xl border border-accent/20">
                                    <Phone className="text-accent w-6 h-6 flex-shrink-0" />
                                </div>
                                <div>
                                    <div className="font-bold text-lg mb-1 text-white">Teléfono</div>
                                    <div className="text-text-secondary leading-relaxed">[Pendiente]</div>
                                </div>
                            </div>
                            <div className="flex items-start gap-5">
                                <div className="bg-accent/10 p-3 rounded-2xl border border-accent/20">
                                    <Mail className="text-accent w-6 h-6 flex-shrink-0" />
                                </div>
                                <div>
                                    <div className="font-bold text-lg mb-1 text-white">Email</div>
                                    <div className="text-text-secondary leading-relaxed">[Pendiente]</div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="w-full lg:w-1/2"
                    >
                        <div className="bg-surface/40 p-10 md:p-14 rounded-3xl border border-white/5 h-full backdrop-blur-md shadow-2xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

                            <h3 className="font-display text-5xl mb-10 tracking-wide relative z-10 text-white">ENVÍANOS UN <span className="text-primary">MENSAJE</span></h3>
                            <form className="space-y-6 relative z-10">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-bold tracking-wider text-text-secondary mb-3 uppercase">Nombre</label>
                                        <input type="text" className="w-full bg-background/50 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-primary/50 focus:bg-background transition-all" placeholder="Tu nombre" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold tracking-wider text-text-secondary mb-3 uppercase">Teléfono</label>
                                        <input type="tel" className="w-full bg-background/50 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-primary/50 focus:bg-background transition-all" placeholder="Tu teléfono" />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-bold tracking-wider text-text-secondary mb-3 uppercase">Email</label>
                                    <input type="email" className="w-full bg-background/50 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-primary/50 focus:bg-background transition-all" placeholder="Tu email" />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold tracking-wider text-text-secondary mb-3 uppercase">Mensaje</label>
                                    <textarea rows="4" className="w-full bg-background/50 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-primary/50 focus:bg-background transition-all resize-none" placeholder="¿En qué te podemos ayudar?"></textarea>
                                </div>
                                <button type="button" className="w-full bg-primary text-white py-5 rounded-xl font-bold text-xl hover:bg-primary/90 transition-all hover:shadow-[0_0_25px_rgba(255,107,53,0.5)] mt-4">
                                    ENVIAR MENSAJE
                                </button>
                            </form>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
