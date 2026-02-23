import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    ShoppingCart, Sparkles, TrendingUp, Flame, Zap, Moon,
    Dumbbell, Droplet, MessageCircle, ChevronDown, CheckCircle2, Dna
} from 'lucide-react';

// --- DATA ---
const productsData = [
    {
        id: 1,
        name: "CFM ISO ZERO 2KG",
        category: "Proteínas",
        goal: "Ganar Músculo",
        price: 79.90,
        servings: 66,
        badge: "MÁS VENDIDO",
        image: "https://images.unsplash.com/photo-1593095948071-474c5cc2989d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80", // Generic protein tub placeholder
        flavors: ["#6B4423", "#F3E5AB", "#2C1E16", "#FFB6C1"], // Choco, Vainilla, Dark choco, Fresa
        desc: "Aislado de suero de máxima pureza (90%). Rápida absorción."
    },
    {
        id: "hero", // Special ID for the featured product to avoid duplicate keys if we map all
        name: "CFM ISO ZERO 2KG",
        // ... handled separately in HeroProduct component
    },
    {
        id: 2,
        name: "ONLY WHEY 2KG",
        category: "Proteínas",
        goal: "Ganar Músculo",
        price: 60.90,
        servings: 66,
        badge: null,
        image: "https://images.unsplash.com/photo-1579722820308-d74e571900a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        flavors: ["#6B4423", "#F3E5AB", "#FFB6C1"],
        desc: "Concentrado de suero de alta calidad. Textura increíble."
    },
    {
        id: 3,
        name: "KONG GAINER 3KG",
        category: "Ganadores",
        goal: "Ganar Músculo",
        price: 41.50,
        servings: 30,
        badge: "VOLUMEN",
        image: "https://images.unsplash.com/photo-1622486940381-067963ec7a6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        flavors: ["#6B4423", "#F3E5AB"],
        desc: "Matriz de carbohidratos y proteínas para subir de peso."
    },
    {
        id: 4,
        name: "MICELLAR CASEIN 1KG",
        category: "Caseína",
        goal: "Recuperar",
        price: 38.90,
        servings: 33,
        badge: "NOCTURNO",
        image: "https://images.unsplash.com/photo-1550989460-0adf9ea622e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        flavors: ["#6B4423", "#F3E5AB"],
        desc: "Proteína de liberación sostenida para tomar antes de dormir."
    },
    {
        id: 5,
        name: "REAL AMINO VEGAN+ 1KG",
        category: "Aminoácidos",
        goal: "Recuperar",
        price: 34.90,
        servings: 60,
        badge: "VEGAN",
        image: "https://images.unsplash.com/photo-1594882645126-14020914d58d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        flavors: ["#FF4500", "#32CD32"], // Naranja, Lima
        desc: "EAA + BCAA de origen vegetal para recuperación intra-entreno."
    },
    {
        id: 6,
        name: "CLEAR PROTEIN KOJAC",
        category: "Clear",
        goal: "Ganar Músculo",
        price: 36.90,
        servings: 30,
        badge: "REFRESCANTE",
        image: "https://images.unsplash.com/photo-1557022001-ebdc032aabdb?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        flavors: ["#DC143C", "#8B0000"], // Cereza, Cola
        desc: "Proteína ligera como un zumo. Cero pesadez."
    },
    {
        id: 7,
        name: "REAL THERMO",
        category: "Quemadores",
        goal: "Quemar Grasa",
        price: 31.50,
        servings: 60,
        badge: "TOP VENTA",
        image: "https://images.unsplash.com/photo-1584362917165-526a968579e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        flavors: [],
        desc: "Potente fórmula termogénica y estimulante pre-entreno."
    },
    {
        id: 8,
        name: "CREABIG",
        category: "Aminoácidos",
        goal: "Energía",
        price: 29.50,
        servings: 100,
        badge: "ESENCIAL",
        image: "https://images.unsplash.com/photo-1616682708304-4fa973b18cb4?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        flavors: ["#DC143C", "#FF1493"], // Kojac, Piruleta
        desc: "Creatina monohidrato grado Creapure®."
    },
    {
        id: 9,
        name: "OMEGA 3",
        category: "Salud",
        goal: "Recuperar",
        price: 17.50,
        servings: 90,
        badge: null,
        image: "https://images.unsplash.com/photo-1584017911766-d451b3d0e843?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        flavors: [],
        desc: "Ácidos grasos esenciales para salud articular y cardiovascular."
    }
];

const goals = [
    { id: "Todos", icon: null },
    { id: "Ganar Músculo", icon: <TrendingUp size={18} /> },
    { id: "Quemar Grasa", icon: <Flame size={18} /> },
    { id: "Energía", icon: <Zap size={18} /> },
    { id: "Recuperar", icon: <Moon size={18} /> }
];

const categories = [
    { id: "Todas", icon: <Sparkles size={16} /> },
    { id: "Proteínas", icon: <Dumbbell size={16} /> },
    { id: "Ganadores", icon: <TrendingUp size={16} /> },
    { id: "Caseína", icon: <Moon size={16} /> },
    { id: "Aminoácidos", icon: <Dna size={16} /> },
    { id: "Clear", icon: <Droplet size={16} /> },
    { id: "Quemadores", icon: <Flame size={16} /> }
];

// --- COMPONENTS ---

const ProductCard = ({ product }) => {
    const [activeFlavor, setActiveFlavor] = useState(0);
    const [added, setAdded] = useState(false);

    const handleAdd = () => {
        setAdded(true);
        setTimeout(() => setAdded(false), 2000);
    };

    const pricePerServing = (product.price / product.servings).toFixed(2);

    return (
        <motion.div
            className="group relative bg-surface/40 backdrop-blur-md rounded-2xl border border-white/5 overflow-hidden flex flex-col hover:border-primary/50 transition-all duration-300 shadow-lg hover:shadow-[0_15px_30px_rgba(255,107,53,0.15)] hover:-translate-y-2"
        >
            {/* Badge */}
            {product.badge && (
                <div className="absolute top-4 left-4 z-20">
                    <span className={`text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider
                        ${product.badge === 'MÁS VENDIDO' ? 'bg-success text-secondary animate-pulse-glow' : 'bg-accent/20 text-accent border border-accent/20'}`}
                    >
                        {product.badge}
                    </span>
                </div>
            )}

            {/* Image Container with Floating Shadow */}
            <div className="relative aspect-square p-6 overflow-hidden flex items-center justify-center bg-gradient-to-b from-white/5 to-transparent">
                <div className="absolute bottom-4 w-3/4 h-8 bg-black/40 blur-xl rounded-full group-hover:bg-primary/20 transition-colors duration-500"></div>
                <img
                    src={product.image}
                    alt={product.name}
                    className="relative w-full h-full object-contain filter drop-shadow-2xl transition-transform duration-500 group-hover:scale-105"
                />
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col flex-grow">
                <h3 className="font-display tracking-wide text-2xl text-white mb-2 leading-tight">{product.name}</h3>
                <p className="text-sm text-text-secondary mb-4 line-clamp-2">{product.desc}</p>

                {/* Tech Specs */}
                <div className="flex gap-4 text-xs font-medium text-text-secondary mb-4 bg-background/50 rounded-lg p-2 w-fit">
                    <span className="flex items-center gap-1"><Dumbbell size={14} className="text-primary" /> {product.servings * 30}g</span> {/* Mock weight */}
                    <span className="flex items-center gap-1"><Droplet size={14} className="text-accent" /> {product.servings} tomas</span>
                </div>

                {/* Flavors */}
                {product.flavors && product.flavors.length > 0 && (
                    <div className="mb-6 flex gap-2">
                        {product.flavors.slice(0, 4).map((color, idx) => (
                            <button
                                key={idx}
                                onClick={() => setActiveFlavor(idx)}
                                className={`w-5 h-5 rounded-full border-2 transition-all ${activeFlavor === idx ? 'border-primary scale-110 shadow-[0_0_8px_rgba(255,107,53,0.5)]' : 'border-background hover:scale-110'}`}
                                style={{ backgroundColor: color }}
                                aria-label={`Sabor ${idx + 1}`}
                            />
                        ))}
                        {product.flavors.length > 4 && (
                            <span className="text-xs text-text-secondary flex items-center ml-1">+{product.flavors.length - 4}</span>
                        )}
                    </div>
                )}
                {!product.flavors?.length && <div className="mb-6 h-5"></div> /* spacer */}

                {/* Pricing & CTA */}
                <div className="mt-auto flex items-end justify-between">
                    <div>
                        <div className="font-display text-4xl text-accent drop-shadow-[0_0_5px_rgba(0,217,255,0.3)] leading-none">
                            {product.price.toFixed(2).replace('.', ',')}€
                        </div>
                        <div className="text-xs text-text-secondary mt-1 tracking-wider">
                            ~{pricePerServing}€/servicio
                        </div>
                    </div>
                    <button
                        onClick={handleAdd}
                        disabled={added}
                        className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 
                            ${added
                                ? 'bg-success text-secondary'
                                : 'bg-gradient-to-br from-primary to-orange-600 text-white hover:shadow-[0_0_15px_rgba(255,107,53,0.6)] group-hover:scale-110'}`}
                    >
                        {added ? <CheckCircle2 size={20} /> : <ShoppingCart size={20} />}
                    </button>
                </div>
            </div>
        </motion.div>
    );
};

export default function Supplements() {
    const [activeGoal, setActiveGoal] = useState("Todos");
    const [activeCat, setActiveCat] = useState("Todas");
    const [openFaq, setOpenFaq] = useState(null);

    // Filter logic
    const filteredProducts = productsData.filter(p => {
        if (p.id === 'hero') return false; // exclude specially handled hero product from grid
        const matchGoal = activeGoal === "Todos" || p.goal === activeGoal;
        const matchCat = activeCat === "Todas" || p.category === activeCat;
        return matchGoal && matchCat;
    });

    const heroProduct = productsData[0]; // CFM ISO ZERO 2KG

    return (
        <div className="min-h-screen bg-background relative overflow-hidden font-sans">
            {/* Ambient Backgrounds */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px] pointer-events-none"></div>
            <div className="absolute bottom-1/2 left-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px] pointer-events-none"></div>

            {/* 1. HERO BANNER */}
            <section className="relative pt-32 pb-20 px-4">
                <div className="container mx-auto max-w-7xl">
                    <div className="relative rounded-[2.5rem] overflow-hidden bg-surface/30 border border-white/5 mx-auto">
                        <div className="absolute inset-0 z-0">
                            {/* Instead of generic grey, we use a nice placeholder or CSS background if image fails */}
                            <div className="w-full h-full bg-gradient-to-r from-secondary to-background/50 absolute inset-0 z-10"></div>
                            <img src="/referencias/supplements_hero.jpg" alt="Hero Supplements" className="w-full h-full object-cover opacity-40 mix-blend-luminosity" onError={(e) => { e.target.style.display = 'none'; e.target.parentElement.style.background = 'linear-gradient(to right, #1A1A2E, #0F0F1A)' }} />
                            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent z-10"></div>
                        </div>

                        <div className="relative z-20 p-10 md:p-20 max-w-3xl">
                            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
                                <div className="inline-flex items-center gap-2 bg-primary/20 border border-primary/30 px-4 py-1.5 rounded-full text-primary font-bold text-sm tracking-widest mb-6">
                                    <Sparkles size={16} className="animate-pulse" /> CATÁLOGO OFICIAL
                                </div>
                                <h1 className="font-display text-6xl md:text-8xl lg:text-[7rem] leading-[0.9] text-white tracking-tight mb-8">
                                    SUPLEMENTACIÓN<br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-400 drop-shadow-[0_0_15px_rgba(255,107,53,0.5)]">
                                        DE ÉLITE
                                    </span>
                                </h1>
                                <button onClick={() => document.getElementById('catalogo').scrollIntoView({ behavior: 'smooth' })} className="bg-primary hover:bg-white text-white hover:text-secondary px-8 py-4 rounded-full font-bold uppercase tracking-widest transition-all duration-300 shadow-[0_0_20px_rgba(255,107,53,0.4)] hover:shadow-[0_0_30px_rgba(255,255,255,0.6)] hover:-translate-y-1">
                                    Explorar Catálogo
                                </button>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. BANNERS DESCUENTOS GLASSMORPHISM */}
            <section className="py-4 px-4">
                <div className="container mx-auto max-w-7xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-accent/10 backdrop-blur-md border border-accent/20 rounded-3xl p-8 flex items-center justify-between group hover:bg-accent/20 transition-colors">
                            <div>
                                <h3 className="font-display text-4xl text-white mb-1"><span className="text-accent">10%</span> DESCUENTO SOCIOS</h3>
                                <p className="text-text-secondary font-medium">Aplicado automáticamente en recepción</p>
                            </div>
                            <div className="bg-accent/20 text-accent px-4 py-2 rounded-xl text-sm font-bold border border-accent/30 group-hover:animate-pulse-glow">
                                AUTOMÁTICO
                            </div>
                        </motion.div>

                        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="bg-primary/10 backdrop-blur-md border border-primary/20 rounded-3xl p-8 flex items-center justify-between group hover:bg-primary/20 transition-colors">
                            <div>
                                <h3 className="font-display text-4xl text-white mb-1"><span className="text-primary">15%</span> DESCUENTO VIP</h3>
                                <p className="text-text-secondary font-medium">En tickets superiores a 150€</p>
                            </div>
                            <div className="bg-primary/20 text-primary px-4 py-2 rounded-xl text-sm font-bold border border-primary/30">
                                ACUMULABLE
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 3. FILTROS POR OBJETIVO */}
            <section className="py-12 px-4 shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative z-20">
                <div className="container mx-auto max-w-7xl">
                    <h3 className="text-sm uppercase tracking-[0.3em] font-bold text-text-secondary mb-6 ml-2">¿Cuál es tu objetivo?</h3>
                    <div className="flex overflow-x-auto pb-4 gap-4 hide-scrollbar snap-x">
                        {goals.map((g) => (
                            <button
                                key={g.id}
                                onClick={() => { setActiveGoal(g.id); setActiveCat("Todas"); }}
                                className={`snap-start min-w-max flex items-center gap-3 px-8 py-4 rounded-2xl font-bold uppercase tracking-wider transition-all duration-300
                                    ${activeGoal === g.id
                                        ? 'bg-gradient-to-r from-primary to-orange-500 text-white shadow-[0_0_20px_rgba(255,107,53,0.5)] scale-105'
                                        : 'bg-surface/50 backdrop-blur-md border border-white/5 text-text-secondary hover:bg-white/10 hover:text-white'}`}
                            >
                                {g.icon} {g.id}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. PRODUCTO DESTACADO HERO */}
            {activeGoal === "Todos" && activeCat === "Todas" && (
                <section className="py-16 px-4 relative z-10">
                    <div className="container mx-auto max-w-6xl">
                        <div className="bg-gradient-to-br from-surface to-background border border-white/10 rounded-[3rem] p-8 md:p-16 flex flex-col md:flex-row items-center gap-12 shadow-2xl relative overflow-hidden group">

                            {/* Decorative background glow */}
                            <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-accent/10 rounded-full blur-[100px] pointer-events-none"></div>

                            {/* Left: Image */}
                            <div className="w-full md:w-1/2 relative flex justify-center items-center">
                                {/* The 'MÁS VENDIDO' Badge */}
                                <div className="absolute top-0 left-0 md:-left-4 z-20 bg-success text-secondary font-bold px-6 py-2 rounded-full uppercase tracking-widest flex items-center gap-2 animate-pulse-glow shadow-[0_0_20px_rgba(0,230,118,0.4)]">
                                    <Flame size={18} className="text-secondary" /> MÁS VENDIDO
                                </div>

                                <motion.div
                                    initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }} transition={{ duration: 0.8 }}
                                    className="relative w-full max-w-md aspect-square bg-gradient-to-b from-white/5 to-transparent rounded-full flex items-center justify-center p-8 group-hover:scale-105 transition-transform duration-700"
                                >
                                    <img src={heroProduct.image} alt="CFM ISO ZERO" className="w-full h-full object-contain filter drop-shadow-[0_30px_30px_rgba(0,0,0,0.6)]" />
                                </motion.div>
                            </div>

                            {/* Right: Info */}
                            <div className="w-full md:w-1/2 relative z-10">
                                <h2 className="font-display text-5xl md:text-7xl text-white mb-2 leading-none">{heroProduct.name}</h2>
                                <p className="text-xl text-primary font-medium mb-6">Proteína isolada de máxima pureza</p>

                                <div className="flex gap-6 mb-8 border-b border-white/10 pb-8">
                                    <div className="flex items-center gap-2 text-text-secondary font-medium">
                                        <div className="w-10 h-10 rounded-full bg-surface flex items-center justify-center border border-white/5"><Dumbbell size={18} className="text-white" /></div>
                                        <span>2 KG</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-text-secondary font-medium">
                                        <div className="w-10 h-10 rounded-full bg-surface flex items-center justify-center border border-white/5"><Droplet size={18} className="text-white" /></div>
                                        <span>66 Servicios</span>
                                    </div>
                                </div>

                                <div className="mb-8">
                                    <div className="text-sm uppercase tracking-widest text-text-secondary mb-3 font-bold">Selecciona Sabor:</div>
                                    <div className="flex gap-3">
                                        {heroProduct.flavors.map((color, idx) => (
                                            <button key={idx} className="w-8 h-8 rounded-full border-2 border-background hover:scale-110 transition-transform shadow-lg cursor-pointer ring-2 ring-transparent focus:ring-primary outline-none" style={{ backgroundColor: color }} aria-label="Sabor" title="Sabor" />
                                        ))}
                                        <span className="flex items-center text-sm font-bold text-text-secondary bg-surface px-3 py-1 rounded-full border border-white/5">+8</span>
                                    </div>
                                </div>

                                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8">
                                    <div>
                                        <div className="font-display text-6xl text-accent drop-shadow-[0_0_10px_rgba(0,217,255,0.3)] leading-none">{heroProduct.price.toFixed(2).replace('.', ',')}€</div>
                                        <div className="text-text-secondary tracking-widest font-medium mt-1">~{(heroProduct.price / heroProduct.servings).toFixed(2)}€/servicio</div>
                                    </div>
                                    <button className="w-full sm:w-auto bg-gradient-to-r from-primary to-orange-500 text-white px-10 py-5 rounded-full font-bold uppercase tracking-widest text-lg hover:shadow-[0_0_30px_rgba(255,107,53,0.6)] hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3 group">
                                        <ShoppingCart size={22} className="group-hover:scale-110 transition-transform" /> AÑADIR AL CARRITO
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            )}

            {/* 4. TABS CATEGORÍAS */}
            <section id="catalogo" className="pt-8 pb-4 px-4 sticky top-20 z-30 bg-background/80 backdrop-blur-xl border-b border-white/5">
                <div className="container mx-auto max-w-7xl">
                    <div className="flex overflow-x-auto pb-4 gap-2 hide-scrollbar md:flex-wrap md:justify-center">
                        {categories.map((cat) => (
                            <button
                                key={cat.id}
                                onClick={() => setActiveCat(cat.id)}
                                className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-bold text-sm transition-all whitespace-nowrap
                                    ${activeCat === cat.id
                                        ? 'bg-white text-secondary shadow-[0_0_15px_rgba(255,255,255,0.3)]'
                                        : 'bg-surface/50 border border-white/10 text-text-secondary hover:text-white hover:bg-white/10'}`}
                            >
                                {cat.icon} {cat.id}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* 6. GRID PRODUCTOS */}
            <section className="py-16 px-4 min-h-[50vh]">
                <div className="container mx-auto max-w-7xl">

                    {/* Results count & active filters display */}
                    <div className="flex justify-between items-center mb-8 border-b border-white/5 pb-4">
                        <div className="text-text-secondary font-medium">
                            Mostrando <span className="text-white font-bold">{filteredProducts.length}</span> productos
                        </div>
                        {(activeGoal !== "Todos" || activeCat !== "Todas") && (
                            <button onClick={() => { setActiveGoal("Todos"); setActiveCat("Todas"); }} className="text-sm text-primary hover:text-white transition-colors underline-offset-4 hover:underline">
                                Borrar filtros
                            </button>
                        )}
                    </div>

                    <AnimatePresence mode="popLayout">
                        {filteredProducts.length > 0 ? (
                            <motion.div
                                layout
                                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
                            >
                                {filteredProducts.map((prod, idx) => (
                                    <motion.div
                                        layout
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.9 }}
                                        transition={{ duration: 0.3, delay: idx * 0.05 }}
                                        key={prod.id}
                                    >
                                        <ProductCard product={prod} />
                                    </motion.div>
                                ))}
                            </motion.div>
                        ) : (
                            <motion.div
                                initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                                className="text-center py-20 bg-surface/30 rounded-3xl border border-white/5"
                            >
                                <ShoppingCart size={48} className="mx-auto text-white/20 mb-4" />
                                <h3 className="text-2xl font-display text-white mb-2">NO HAY RESULTADOS</h3>
                                <p className="text-text-secondary mb-6">Prueba a cambiar los filtros de búsqueda.</p>
                                <button onClick={() => { setActiveGoal("Todos"); setActiveCat("Todas"); }} className="bg-white/10 hover:bg-white/20 text-white px-6 py-2 rounded-full font-bold transition-colors">
                                    Ver todos los productos
                                </button>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </section>

            {/* 7. INFO EDUCATIVA (ACORDEÓN) */}
            <section className="py-20 px-4 bg-surface border-t border-white/5 relative z-10">
                <div className="container mx-auto max-w-4xl">
                    <div className="text-center mb-12">
                        <h2 className="font-display text-4xl md:text-5xl mb-4 text-white">💡 ¿QUÉ SUPLEMENTO <span className="text-primary">NECESITO?</span></h2>
                        <p className="text-text-secondary">Guía rápida para combinar tu entrenamiento con la mejor nutrición.</p>
                    </div>

                    <div className="space-y-4">
                        {[
                            {
                                id: 'musculo', title: "💪 Para Ganar Masa Muscular (Hipertrofia)",
                                content: "Si quieres construir músculo, necesitas proteínas. La Whey Protein (concentrado o aislado) es fundamental post-entreno para reparar las fibras. Si eres muy delgado y te cuesta comer, un Gainer (Ganador de peso) te dará las calorías extra que tu cuerpo exige para crecer."
                            },
                            {
                                id: 'grasa', title: "🔥 Para Definir y Quemar Grasa",
                                content: "Para definir debes estar en déficit calórico. Los Termogénicos (Quemadores) aceleran el metabolismo y te dan energía cuando comes menos. Combinados con Proteína Isolada (cero grasa, cero azúcar) protegerás tu músculo mientras pierdes la grasa."
                            },
                            {
                                id: 'energia', title: "⚡ Para Rendir Más y Tener Fuerza",
                                content: "La Creatina es el suplemento con más evidencia científica. Te dará ATP extra (energía explosiva) para levantar más peso o hacer más repeticiones. Es obligatoria si quieres mejorar marcas. Se toma a diario."
                            },
                            {
                                id: 'recuperacion', title: "🌙 Para Mejorar la Recuperación",
                                content: "Si entrenas muy duro, los Aminoácidos (EAA/BCAA) intra-entreno reducen el daño muscular. Por la noche, la Caseína alimenta tus músculos mientras duermes durante 8 horas, y el Omega 3 bajará la inflamación articular."
                            }
                        ].map((faq) => (
                            <div key={faq.id} className="bg-background/80 border border-white/10 rounded-2xl overflow-hidden hover:border-white/30 transition-colors">
                                <button
                                    onClick={() => setOpenFaq(openFaq === faq.id ? null : faq.id)}
                                    className="w-full text-left px-8 py-6 flex items-center justify-between font-bold text-lg text-white"
                                >
                                    {faq.title}
                                    <ChevronDown className={`transition-transform duration-300 ${openFaq === faq.id ? 'rotate-180 text-primary' : 'text-text-secondary'}`} />
                                </button>
                                <AnimatePresence>
                                    {openFaq === faq.id && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            className="px-8 pb-6 text-text-secondary font-light leading-relaxed"
                                        >
                                            {faq.content}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 8. CTA WHATSAPP FIJADO / FOOTER AREA */}
            <section className="py-20 px-4 bg-gradient-to-b from-surface to-background text-center relative z-10">
                <div className="container mx-auto max-w-4xl">
                    <h2 className="font-display text-4xl md:text-6xl mb-6 text-white">¿AÚN TIENES <span className="text-accent drop-shadow-[0_0_15px_rgba(0,217,255,0.3)]">DUDAS?</span></h2>
                    <p className="text-xl text-text-secondary mb-10 max-w-2xl mx-auto">
                        Nuestros asesores deportivos están disponibles en la recepción del gimnasio o vía WhatsApp para crearte un plan de suplementación a medida.
                    </p>

                    {/* Note: In a real app, href would be a wa.me link */}
                    <a href="#contact" className="inline-flex items-center gap-3 bg-[#25D366] text-white px-10 py-5 rounded-full font-bold uppercase tracking-widest text-lg hover:bg-[#1EBE59] hover:shadow-[0_0_30px_rgba(37,211,102,0.5)] hover:-translate-y-1 transition-all duration-300">
                        <MessageCircle size={24} /> Consultar por WhatsApp
                    </a>
                </div>
            </section>
        </div>
    );
}
