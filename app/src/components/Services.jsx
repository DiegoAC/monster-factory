import { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Dumbbell, Users, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const TiltCard = ({ children, delay }) => {
    const ref = useRef(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
    const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

    const handleMouseMove = (e) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;
        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay, duration: 0.5 }}
            style={{ perspective: 1000 }}
            className="w-full h-full"
        >
            <motion.div
                ref={ref}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{
                    rotateX,
                    rotateY,
                    transformStyle: "preserve-3d",
                }}
                className="bg-surface/20 backdrop-blur-xl border border-white/10 p-10 rounded-[2rem] hover:border-primary/40 relative overflow-hidden group shadow-2xl h-full flex flex-col"
            >
                {/* Shine effect that moves with mouse */}
                <motion.div
                    className="absolute inset-0 bg-gradient-to-tr from-white/0 flex justify-center via-white/5 to-white/0 pointer-events-none"
                    style={{
                        x: useTransform(mouseXSpring, [-0.5, 0.5], ["-50%", "50%"]),
                        y: useTransform(mouseYSpring, [-0.5, 0.5], ["-50%", "50%"]),
                    }}
                />

                <div style={{ transform: "translateZ(50px)" }} className="flex-grow flex flex-col items-start relative z-10">
                    {children}
                </div>
            </motion.div>
        </motion.div>
    );
};

export default function Services() {
    const services = [
        {
            title: "MUSCULACIÓN LIBRE",
            icon: <Dumbbell className="w-10 h-10 text-primary drop-shadow-[0_0_8px_rgba(255,107,53,0.5)]" />,
            desc: "Acceso ilimitado a todas las zonas de peso libre y máquinas guiadas de última generación.",
            link: "/#gallery"
        },
        {
            title: "ENTRENO PERSONAL",
            icon: <Users className="w-10 h-10 text-primary drop-shadow-[0_0_8px_rgba(255,107,53,0.5)]" />,
            desc: "Planes personalizados con nuestro entrenador certificado. Resultados garantizados paso a paso.",
            link: "/#contact"
        },
        {
            title: "SUPLEMENTACIÓN",
            icon: <ShoppingBag className="w-10 h-10 text-primary drop-shadow-[0_0_8px_rgba(255,107,53,0.5)]" />,
            desc: "Proteínas, pre-entrenos, creatina y más. Descuentos exclusivos para nuestros socios.",
            link: "/suplementos"
        }
    ];

    return (
        <section id="services" className="py-24 bg-background relative z-10 overflow-hidden">
            {/* Ambient glows for glassmorphism to stand out */}
            <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px] pointer-events-none"></div>

            <div className="container mx-auto px-4">
                <div className="text-center mb-20 relative z-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="font-display text-5xl md:text-7xl mb-4 leading-tight"
                    >
                        TODO LO QUE <span className="text-primary drop-shadow-[0_0_15px_rgba(255,107,53,0.3)]">NECESITAS</span>
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto relative z-20">
                    {services.map((srv, idx) => (
                        <TiltCard key={idx} delay={idx * 0.1}>
                            <div className="bg-background/80 w-20 h-20 rounded-2xl flex items-center justify-center mb-8 border border-white/5 group-hover:scale-110 transition-transform duration-500 shadow-xl">
                                {srv.icon}
                            </div>
                            <h3 className="font-display text-4xl mb-4 tracking-wide group-hover:text-primary transition-colors">{srv.title}</h3>
                            <p className="text-text-secondary text-lg leading-relaxed mb-8 font-light flex-grow">{srv.desc}</p>
                            <Link to={srv.link} className="mt-auto flex items-center gap-2 text-primary font-bold hover:text-white transition-colors">
                                MÁS INFORMACIÓN <span className="group-hover:translate-x-2 transition-transform">&rarr;</span>
                            </Link>
                        </TiltCard>
                    ))}
                </div>
            </div>
        </section>
    );
}
