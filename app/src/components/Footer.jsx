import { Dumbbell, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className="bg-background pt-24 pb-8 border-t border-white/5 relative overflow-hidden">
            {/* CTA Final */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-background via-primary/40 to-background"></div>

            <div className="container mx-auto px-4 max-w-7xl">
                <div className="bg-gradient-to-r from-surface to-background border border-primary/20 rounded-[2.5rem] p-10 md:p-20 text-center mb-24 relative overflow-hidden shadow-[0_20px_50px_rgba(255,107,53,0.08)]">
                    <div className="absolute top-1/2 left-1/2 w-full h-[200%] max-w-3xl bg-primary/10 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

                    <div className="relative z-10">
                        <h2 className="font-display text-5xl md:text-8xl mb-8 leading-tight">¿LISTO PARA <span className="text-primary drop-shadow-[0_0_20px_rgba(255,107,53,0.4)]">EMPEZAR?</span></h2>
                        <p className="text-xl md:text-3xl text-text-secondary mb-12 font-light">Escríbenos por WhatsApp hoy mismo.</p>
                        <a href="https://wa.me/34602530088" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-primary text-white px-12 py-6 rounded-full font-bold text-xl hover:bg-primary/90 transition-all hover:shadow-[0_0_35px_rgba(255,107,53,0.6)] hover:-translate-y-1 tracking-wide">
                            <MessageCircle size={24} />
                            RESERVA TU PLAZA
                        </a>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16 border-b border-white/5 pb-16">
                    <div className="md:col-span-2">
                        <div className="flex items-center gap-3 mb-8">
                            <Dumbbell className="text-primary w-10 h-10" />
                            <span className="font-display text-3xl tracking-wider text-white">MONSTER<span className="text-primary">FACTORY</span></span>
                        </div>
                        <p className="text-text-secondary text-lg leading-relaxed max-w-md font-light">
                            El gimnasio más moderno de Tarazona. Instalaciones de primera, equipamiento de última generación y abierto 24 horas para que entrenes sin límites.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-display text-2xl tracking-wide mb-8 text-white">ENLACES RÁPIDOS</h4>
                        <ul className="space-y-4">
                            <li><Link to="/#about" className="text-text-secondary text-lg hover:text-primary transition-colors">Concepto</Link></li>
                            <li><Link to="/#gallery" className="text-text-secondary text-lg hover:text-primary transition-colors">Instalaciones</Link></li>
                            <li><Link to="/#services" className="text-text-secondary text-lg hover:text-primary transition-colors">Servicios</Link></li>
                            <li><Link to="/#pricing" className="text-text-secondary text-lg hover:text-primary transition-colors">Tarifas</Link></li>
                            <li><Link to="/suplementos" className="text-text-secondary text-lg hover:text-primary transition-colors text-accent font-bold">Tienda Suplementos</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-display text-2xl tracking-wide mb-8 text-white">CONTACTO RÁPIDO</h4>
                        <div className="flex gap-4">
                            <a href="https://wa.me/34602530088" target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-full bg-[#25D366]/20 border border-[#25D366]/50 flex items-center justify-center text-[#25D366] hover:bg-[#25D366] hover:text-white transition-all shadow-lg hover:shadow-[0_0_15px_rgba(37,211,102,0.6)]">
                                <MessageCircle size={24} />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="text-center text-text-secondary/40 text-sm pb-8 font-medium tracking-wide">
                    <p>&copy; {new Date().getFullYear()} Monster Factory. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    );
}
