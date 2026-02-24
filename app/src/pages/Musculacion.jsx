import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Dumbbell, Activity, ShieldCheck, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const categories = [
    { id: "Todas", label: "VER TODAS", icon: <ChevronRight size={16} /> },
    { id: "Guiadas", label: "MÁQUINAS GUIADAS", icon: <ShieldCheck size={16} /> },
    { id: "Peso Libre", label: "PESO LIBRE", icon: <Dumbbell size={16} /> },
    { id: "Cardio", label: "CARDIOVASCULAR", icon: <Activity size={16} /> },
];

const machinesData = [
    // Plantilla de ejemplo. Rellena aquí con tus máquinas reales.
    // {
    //     id: 1,
    //     name: "Prensa de Piernas 45º",
    //     category: "Guiadas",
    //     brand: "Panatta Sport",
    //     muscleGroup: "Pierna / Cuádriceps",
    //     image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    //     desc: "Biomecánica perfecta para un desarrollo brutal del tren inferior protegiendo tu zona lumbar."
    // },
    // {
    //     id: 2,
    //     name: "Multipower (Smith Machine)",
    //     category: "Guiadas",
    //     brand: "Life Fitness",
    //     muscleGroup: "Cuerpo Completo",
    //     image: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    //     desc: "Barra guiada para entrenar pesado con máxima seguridad. Ideal para press, sentadillas y zancadas."
    // },
    // {
    //     id: 3,
    //     name: "Rack de Mancuernas calibradas",
    //     category: "Peso Libre",
    //     brand: "Eleiko",
    //     muscleGroup: "Cuerpo Completo",
    //     image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    //     desc: "Mancuernas hexagonales de uretano desde 2.5kg hasta 60kg para los levantamientos más pesados."
    // },
    // {
    //     id: 4,
    //     name: "Cinta de Correr Curve",
    //     category: "Cardio",
    //     brand: "Assault Fitness",
    //     muscleGroup: "Cardio / Pierna",
    //     image: "https://images.unsplash.com/photo-1618774011242-b06213fc81b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    //     desc: "Cinta autopropulsada que quema hasta un 30% más de calorías que una cinta tradicional."
    // }
];

// Componente para tarjeta de máquina individual
// eslint-disable-next-line react/prop-types
const MachineCard = ({ machine }) => {
    return (
        <motion.div
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="group relative bg-surface/40 backdrop-blur-md rounded-2xl border border-white/5 overflow-hidden flex flex-col hover:border-primary/50 transition-all duration-300 shadow-lg hover:shadow-[0_15px_30px_rgba(255,107,53,0.15)] hover:-translate-y-2"
        >
            {/* Imagen Superior */}
            <div className="relative h-64 w-full bg-surface/50 overflow-hidden flex items-center justify-center p-6 border-b border-white/5 group-hover:bg-surface transition-colors">
                {/* Fallback pattern if no image */}
                <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none"></div>

                {machine.image ? (
                    <img
                        src={machine.image}
                        alt={machine.name}
                        className="w-full h-full object-cover rounded-xl transition-transform duration-500 group-hover:scale-105"
                    />
                ) : (
                    <Dumbbell className="w-20 h-20 text-white/10 group-hover:text-primary/20 transition-colors" />
                )}

                {machine.brand && (
                    <div className="absolute top-4 right-4 bg-background/80 backdrop-blur px-3 py-1 rounded-full text-xs font-bold tracking-wider text-text-secondary border border-white/10 uppercase">
                        {machine.brand}
                    </div>
                )}
            </div>

            {/* Contenido */}
            <div className="p-6 flex flex-col flex-grow relative bg-surface/80">
                <div className="flex items-center gap-2 mb-3">
                    <span className="text-primary text-xs font-bold tracking-widest uppercase">{machine.category}</span>
                    <span className="text-white/20">•</span>
                    <span className="text-text-secondary text-xs">{machine.muscleGroup}</span>
                </div>

                <h3 className="font-display text-2xl text-white mb-3 group-hover:text-primary transition-colors line-clamp-2">
                    {machine.name}
                </h3>

                <p className="text-sm text-text-secondary font-light leading-relaxed mb-6 line-clamp-3">
                    {machine.desc}
                </p>
            </div>
        </motion.div>
    );
};

export default function Musculacion() {
    const [activeCat, setActiveCat] = useState("Todas");

    const filteredMachines = activeCat === "Todas"
        ? machinesData
        : machinesData.filter(m => m.category === activeCat);

    return (
        <div className="min-h-screen bg-background pt-24 pb-20 relative">
            {/* Ambient Backgrounds */}
            <div className="fixed top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px] pointer-events-none -z-10"></div>
            <div className="fixed bottom-0 left-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[150px] pointer-events-none -z-10"></div>

            <div className="container mx-auto px-4 max-w-7xl">

                {/* Header Section */}
                <div className="text-center mb-16 relative z-10">
                    <Link to="/#gallery" className="inline-flex items-center gap-2 text-text-secondary hover:text-primary transition-colors mb-8 group bg-surface/50 px-4 py-2 rounded-full border border-white/10">
                        <span className="group-hover:-translate-x-1 transition-transform">&larr;</span> VOLVER A INSTALACIONES
                    </Link>

                    <h1 className="font-display text-5xl md:text-8xl mb-6 text-white tracking-wide">
                        CATÁLOGO DE <span className="text-primary drop-shadow-[0_0_15px_rgba(255,107,53,0.4)]">MAQUINARIA</span>
                    </h1>
                    <p className="text-xl text-text-secondary font-light max-w-3xl mx-auto leading-relaxed">
                        Contamos con equipamiento biomecánico de última generación. Explora nuestro parque de máquinas diseñado para perfeccionar cada grupo muscular con la máxima precisión y seguridad.
                    </p>
                </div>

                {/* Filter Tabs */}
                <div className="mb-12 relative z-10 w-full overflow-hidden">
                    <div className="overflow-x-auto custom-scrollbar pb-6 px-4 -mx-4">
                        <div className="flex flex-nowrap md:flex-wrap justify-start md:justify-center gap-3 md:gap-4 min-w-max md:min-w-0">
                            {categories.map((cat) => (
                                <button
                                    key={cat.id}
                                    onClick={() => setActiveCat(cat.id)}
                                    className={`
                                        flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm tracking-wider uppercase transition-all whitespace-nowrap
                                        ${activeCat === cat.id
                                            ? 'bg-primary text-white shadow-[0_0_20px_rgba(255,107,53,0.4)] scale-105'
                                            : 'bg-surface/50 text-text-secondary border border-white/5 hover:bg-white/5 hover:text-white'}
                                    `}
                                >
                                    {cat.icon}
                                    {cat.label}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Machines Grid */}
                <div className="relative z-10 min-h-[400px]">
                    {machinesData.length === 0 ? (
                        <motion.div
                            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                            className="bg-surface/30 backdrop-blur-md border border-white/10 rounded-3xl p-12 text-center flex flex-col items-center justify-center min-h-[400px]"
                        >
                            <Dumbbell className="w-20 h-20 text-white/5 mb-6" />
                            <h3 className="text-2xl font-display text-white mb-2">CATÁLOGO EN PREPARACIÓN</h3>
                            <p className="text-text-secondary font-light max-w-md">Estamos catalogando nuestro equipamiento de última generación. Muy pronto podrás explorar todas nuestras máquinas aquí.</p>
                        </motion.div>
                    ) : filteredMachines.length === 0 ? (
                        <motion.div
                            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                            className="text-center py-20 text-text-secondary font-light"
                        >
                            No hay máquinas en la categoría seleccionada en este momento.
                        </motion.div>
                    ) : (
                        <motion.div
                            layout
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8"
                        >
                            <AnimatePresence mode="popLayout">
                                {filteredMachines.map(machine => (
                                    <MachineCard key={machine.id} machine={machine} />
                                ))}
                            </AnimatePresence>
                        </motion.div>
                    )}
                </div>
            </div>
        </div>
    );
}
