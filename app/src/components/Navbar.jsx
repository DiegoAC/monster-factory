import { useState, useEffect } from 'react';
import { Menu, X, Dumbbell } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-background/95 backdrop-blur-md shadow-lg py-4 border-b border-white/5' : 'bg-transparent py-6'}`}>
            <div className="container mx-auto px-4 flex justify-between items-center">
                <Link to="/" className="flex items-center gap-2">
                    <Dumbbell className="text-primary w-8 h-8" />
                    <span className="font-display text-3xl tracking-wider">MONSTER<span className="text-primary">FACTORY</span></span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    <Link to="/#about" className="hover:text-primary transition-colors font-medium">Concepto</Link>
                    <Link to="/#gallery" className="hover:text-primary transition-colors font-medium">Instalaciones</Link>
                    <Link to="/#services" className="hover:text-primary transition-colors font-medium">Servicios</Link>
                    <Link to="/suplementos" className="hover:text-primary transition-colors font-medium text-accent hover:text-accent/80 drop-shadow-[0_0_8px_rgba(0,217,255,0.3)]">Suplementos</Link>
                    <Link to="/#pricing" className="hover:text-primary transition-colors font-medium">Tarifas</Link>
                    <Link to="/#contact" className="bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-full font-medium transition-all hover:shadow-[0_0_15px_rgba(255,107,53,0.5)]">
                        Únete Ahora
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <button className="md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                    {isMobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="absolute top-full left-0 w-full bg-surface/95 backdrop-blur-md border-t border-white/10 p-4 flex flex-col gap-4 shadow-xl md:hidden">
                    <Link to="/#about" className="block py-2 text-lg" onClick={() => setIsMobileMenuOpen(false)}>Concepto</Link>
                    <Link to="/#gallery" className="block py-2 text-lg" onClick={() => setIsMobileMenuOpen(false)}>Instalaciones</Link>
                    <Link to="/#services" className="block py-2 text-lg" onClick={() => setIsMobileMenuOpen(false)}>Servicios</Link>
                    <Link to="/suplementos" className="block py-2 text-lg text-accent font-bold" onClick={() => setIsMobileMenuOpen(false)}>Tienda Suplementos</Link>
                    <Link to="/#pricing" className="block py-2 text-lg" onClick={() => setIsMobileMenuOpen(false)}>Tarifas</Link>
                    <Link to="/#contact" className="bg-primary text-center text-white p-3 rounded-md font-medium text-lg mt-2" onClick={() => setIsMobileMenuOpen(false)}>Únete Ahora</Link>
                </div>
            )}
        </nav>
    );
}
