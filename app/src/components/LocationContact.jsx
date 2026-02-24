import { motion } from 'framer-motion';
import { MapPin, Clock, MessageCircle, Phone } from 'lucide-react';

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
                        <div className="h-[400px] w-full rounded-3xl border border-white/5 mb-10 overflow-hidden relative shadow-2xl group">
                            <iframe
                                src="https://maps.google.com/maps?q=41.9048979,-1.7179584&t=&z=17&ie=UTF8&iwloc=&output=embed"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="absolute inset-0 opacity-80 hover:opacity-100 transition-opacity duration-500 ease-in-out"
                                title="Google Maps"
                            ></iframe>

                            {/* Hover button to open directly in the app (better for mobile) */}
                            <a
                                href="https://maps.app.goo.gl/LXYSyacaL1SSV39N7"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="absolute top-4 right-4 bg-background/80 backdrop-blur-md text-white px-5 py-2.5 rounded-full text-sm font-bold flex items-center gap-2 border border-white/10 hover:bg-primary/90 hover:border-primary transition-all shadow-lg opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0"
                            >
                                <MapPin size={18} />
                                Abrir en Maps
                            </a>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                            <div className="flex items-start gap-5">
                                <div className="bg-accent/10 p-3 rounded-2xl border border-accent/20">
                                    <MapPin className="text-accent w-6 h-6 flex-shrink-0" />
                                </div>
                                <div>
                                    <div className="font-bold text-lg mb-1 text-white">Dirección</div>
                                    <a
                                        href="https://maps.app.goo.gl/LXYSyacaL1SSV39N7"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-text-secondary leading-relaxed hover:text-primary transition-colors block"
                                    >
                                        Avenida de la Ribera, 58<br />
                                        Tarazona, Zaragoza (Aparcamiento Mercadona)<br />
                                        España
                                    </a>
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
                                <div className="bg-[#25D366]/20 p-3 rounded-2xl border border-[#25D366]/30">
                                    <MessageCircle className="text-[#25D366] w-6 h-6 flex-shrink-0" />
                                </div>
                                <div>
                                    <div className="font-bold text-lg mb-1 text-white">WhatsApp</div>
                                    <div className="text-text-secondary leading-relaxed text-xl">602 530 088</div>
                                </div>
                            </div>
                            <div className="flex items-start gap-5">
                                <div className="bg-primary/20 p-3 rounded-2xl border border-primary/30">
                                    <Phone className="text-primary w-6 h-6 flex-shrink-0" />
                                </div>
                                <div>
                                    <div className="font-bold text-lg mb-1 text-white">Atención al cliente</div>
                                    <div className="text-text-secondary leading-relaxed">
                                        Lunes a Jueves: 12h a 20h<br />
                                        Viernes: 9h a 13h
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Direct Contact via Whatsapp Instead of Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-surface/40 backdrop-blur-md border border-white/5 rounded-3xl relative overflow-hidden group"
                    >
                        <div className="absolute top-0 right-0 w-64 h-64 bg-[#25D366]/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none group-hover:bg-[#25D366]/20 transition-colors duration-700"></div>

                        <div className="text-center relative z-10 p-10">
                            <MessageCircle className="w-24 h-24 text-[#25D366] mx-auto mb-8 drop-shadow-[0_0_15px_rgba(37,211,102,0.4)]" />
                            <h3 className="font-display text-5xl mb-6 tracking-wide text-white">¿TIENES <span className="text-[#25D366]">DUDAS?</span></h3>
                            <p className="text-text-secondary text-lg mb-12 max-w-sm mx-auto font-light leading-relaxed">
                                Escríbenos directamente por WhatsApp. Te responderemos al instante para ayudarte a dar el primer paso hacia tu nueva mejor versión.
                            </p>
                            <a href="https://wa.me/34602530088" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-[#25D366] text-white py-5 px-12 rounded-2xl font-bold text-xl hover:bg-[#20bd5a] transition-all hover:shadow-[0_0_30px_rgba(37,211,102,0.6)] hover:-translate-y-2">
                                <MessageCircle size={28} />
                                ABRIR CHAT
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
