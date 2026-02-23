import { useCallback, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

export default function Hero() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    // Parallax effect for the background image
    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

    const particlesInit = useCallback(async engine => {
        await loadSlim(engine);
    }, []);

    const particlesOptions = {
        fullScreen: { enable: false, zIndex: 1 },
        particles: {
            number: { value: 40, density: { enable: true, value_area: 800 } },
            color: { value: ["#FF6B35", "#00D9FF"] },
            links: { enable: true, color: "#ffffff", distance: 150, opacity: 0.2, width: 1 },
            move: { enable: true, speed: 1.5, direction: "none", random: true, straight: false, outModes: "bounce" },
            size: { value: { min: 1, max: 3 } },
            opacity: { value: { min: 0.3, max: 0.7 } }
        },
        interactivity: {
            events: { onHover: { enable: true, mode: "grab" }, resize: true },
            modes: { grab: { distance: 200, links: { opacity: 0.5 } } }
        }
    };

    return (
        <section ref={containerRef} className="relative h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Background with Parallax */}
            <motion.div
                className="absolute inset-0 z-0 origin-bottom"
                style={{ y, scale }}
            >
                <img
                    src="/referencias/gym_interior_hero.jpg"
                    alt="Gym Interior"
                    className="w-full h-full object-cover opacity-20"
                />
            </motion.div>

            {/* Cinematic Gradient Overlays */}
            <div className="absolute inset-0 z-0 bg-gradient-to-b from-background/40 via-transparent to-background"></div>
            <div className="absolute inset-0 z-0 bg-gradient-to-r from-background/80 via-transparent to-background/80"></div>

            {/* Particles Network */}
            <div className="absolute inset-0 z-10 pointer-events-auto">
                <Particles id="tsparticles" init={particlesInit} options={particlesOptions} className="w-full h-full" />
            </div>

            {/* 24h Badge (Top Right) */}
            <div className="absolute top-32 right-6 md:top-40 md:right-16 z-30">
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.5, type: 'spring' }}
                    className="relative group cursor-default"
                >
                    {/* 3 Expanding Rings */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="absolute w-8 h-8 rounded-full border-2 border-success animate-pulse-ring"></div>
                        <div className="absolute w-8 h-8 rounded-full border-2 border-success animate-pulse-ring" style={{ animationDelay: '1s' }}></div>
                        <div className="absolute w-8 h-8 rounded-full border-2 border-success animate-pulse-ring" style={{ animationDelay: '2s' }}></div>
                    </div>

                    <div className="absolute inset-0 bg-success/40 rounded-full blur-xl group-hover:bg-success/60 transition-colors"></div>

                    <div className="bg-surface backdrop-blur-md border border-success/40 px-6 py-3 rounded-full flex items-center gap-3 relative z-10 shadow-[0_0_25px_rgba(0,230,118,0.3)]">
                        <span className="relative flex h-4 w-4">
                            <span className="animate-ping-slow absolute inline-flex h-full w-full rounded-full bg-success opacity-80"></span>
                            <span className="relative inline-flex rounded-full h-4 w-4 bg-success shadow-[0_0_15px_rgba(0,230,118,1)]"></span>
                        </span>
                        <span className="font-bold text-success text-sm md:text-lg tracking-widest drop-shadow-[0_0_5px_rgba(0,230,118,0.8)]">24H</span>
                    </div>
                </motion.div>
            </div>

            {/* Content Core */}
            <div className="container mx-auto px-4 z-20 text-center relative mt-10">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                    className="max-w-5xl mx-auto"
                >
                    {/* Shimmer Animated Title */}
                    <h1 className="font-display font-bold text-7xl md:text-9xl lg:text-[11rem] mb-6 leading-[0.85] tracking-tight relative drop-shadow-[0_20px_30px_rgba(255,107,53,0.3)]">
                        ENTRENA SIN <br />
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-white to-primary bg-[length:200%_auto] animate-shimmer drop-shadow-[0_0_35px_rgba(255,107,53,0.8)]">
                            LÍMITES
                        </span>
                    </h1>

                    <p className="text-xl md:text-2xl text-text-secondary mb-12 max-w-2xl mx-auto font-light leading-relaxed drop-shadow-lg">
                        El primer centro de entrenamiento de alto rendimiento en Tarazona. Diseñado para que tu única excusa sea tú mismo.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                        <a href="#pricing" className="group relative w-full sm:w-auto overflow-hidden rounded-full p-[2px]">
                            {/* Animated Gradient Border Option / Outer Glow */}
                            <span className="absolute inset-0 bg-gradient-to-r from-primary via-red-500 to-primary rounded-full animate-shimmer blur-md opacity-70 group-hover:opacity-100 transition-opacity duration-500"></span>

                            <div className="relative w-full bg-gradient-to-r from-primary to-orange-600 text-white px-10 py-5 rounded-full font-bold text-lg transition-transform duration-300 group-hover:scale-[1.03] flex items-center justify-center overflow-hidden">
                                {/* Diagonal Shine Effect */}
                                <div className="absolute top-0 -left-[100%] w-1/2 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 group-hover:animate-shine"></div>
                                <span className="tracking-wide relative z-10 group-active:scale-95 transition-transform">PRUEBA GRATIS &rarr;</span>
                            </div>
                        </a>

                        <a href="#gallery" className="group relative w-full sm:w-auto overflow-hidden rounded-full p-[1px] bg-gradient-to-b from-white/20 to-white/5 hover:from-white/40 hover:to-white/10 transition-colors">
                            <div className="relative w-full bg-surface/80 backdrop-blur-xl text-white px-10 py-5 rounded-full font-bold text-lg transition-transform duration-300 group-hover:scale-[1.03] flex items-center justify-center">
                                <span className="tracking-wide text-text-secondary group-hover:text-white transition-colors">CONOCE EL GIMNASIO</span>
                            </div>
                        </a>
                    </div>
                </motion.div>

                {/* Float indicator indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2, duration: 1 }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 animate-float opacity-50"
                >
                    <span className="text-xs uppercase tracking-[0.3em] font-medium text-text-secondary">Scroll</span>
                    <div className="w-[1px] h-12 bg-gradient-to-b from-primary to-transparent"></div>
                </motion.div>
            </div>
        </section>
    );
}
