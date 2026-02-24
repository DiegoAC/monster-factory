import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Sparkles, TrendingUp, Flame, Zap, Moon, MapPin,
    Dumbbell, Droplet, MessageCircle, ChevronDown, Dna
} from 'lucide-react';

// --- DATA ---
const productsData = [
    // --- CFM ISO ZERO ---
    {
        id: "hero", // Special ID for the featured product to avoid duplicate keys if we map all
        name: "CFM ISO ZERO 2KG",
        category: "Proteínas",
        goal: "Ganar Músculo",
        price: 79.90,
        servings: 66,
        badge: "MÁS VENDIDO",
        image: "https://images.unsplash.com/photo-1593095948071-474c5cc2989d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        flavors: ["#FDF5E6", "#FFC0CB", "#FFFDD0", "#D2B48C", "#4A3C31"],
        flavorNames: ["Mowgly White Choco", "Pink Cake", "Natillas", "Cookies & Cream", "Mowgly Dark Choco"],
        desc: "Aislado de suero de máxima pureza (90%). Rápida absorción para la mejor recuperación muscular post-entreno.",
        longDesc: "La proteína CFM ISO ZERO es un aislado de suero de leche obtenido por microfiltración de flujo cruzado. Este método asegura una pureza del 90%, prácticamente libre de grasas y lactosa. Es ideal para tomar inmediatamente después del entrenamiento, ya que se absorbe muy rápido, deteniendo el catabolismo y promoviendo la síntesis de masa muscular sin añadir calorías innecesarias.",
        faqs: [
            { q: "¿Es adecuada para intolerantes a la lactosa?", a: "Sí, al ser un aislado CFM, la cantidad de lactosa es prácticamente nula (<0.5g), por lo que suele tolerarse perfectamente." },
            { q: "¿Cuándo debo tomarla?", a: "El momento ideal es de 15 a 30 minutos después de tu entrenamiento de fuerza. También puede servir como un desayuno rico en proteínas." },
            { q: "¿Ayuda a perder peso?", a: "La proteína en sí no 'adelgaza', pero al tener muy pocos hidratos y grasas, encaja perfectamente en dietas de definición y aporta gran saciedad." }
        ]
    },
    {
        id: 1, // To satisfy map in grid, though not strictly needed as it's filtered out
        name: "CFM ISO ZERO 2KG",
        category: "Proteínas",
        goal: "Ganar Músculo",
        price: 79.90,
        servings: 66,
        badge: "MÁS VENDIDO",
        image: "https://images.unsplash.com/photo-1593095948071-474c5cc2989d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        flavors: ["#FDF5E6", "#FFC0CB", "#FFFDD0", "#D2B48C", "#4A3C31"],
        flavorNames: ["Mowgly White Choco", "Pink Cake", "Natillas", "Cookies & Cream", "Mowgly Dark Choco"],
        desc: "Aislado de suero de máxima pureza (90%). Rápida absorción para la mejor recuperación muscular post-entreno.",
        longDesc: "La proteína CFM ISO ZERO es un aislado de suero de leche obtenido por microfiltración de flujo cruzado. Este método asegura una pureza del 90%, prácticamente libre de grasas y lactosa. Es ideal para tomar inmediatamente después del entrenamiento, ya que se absorbe muy rápido, deteniendo el catabolismo y promoviendo la síntesis de masa muscular sin añadir calorías innecesarias.",
        faqs: [
            { q: "¿Es adecuada para intolerantes a la lactosa?", a: "Sí, al ser un aislado CFM, la cantidad de lactosa es prácticamente nula (<0.5g), por lo que suele tolerarse perfectamente." },
            { q: "¿Cuándo debo tomarla?", a: "El momento ideal es de 15 a 30 minutos después de tu entrenamiento de fuerza. También puede servir como un desayuno rico en proteínas." },
            { q: "¿Ayuda a perder peso?", a: "La proteína en sí no 'adelgaza', pero al tener muy pocos hidratos y grasas, encaja perfectamente en dietas de definición y aporta gran saciedad." }
        ]
    },
    {
        id: 2,
        name: "CFM ISO ZERO 1KG",
        category: "Proteínas",
        goal: "Ganar Músculo",
        price: 47.90, // using max price from 1kg list as default
        servings: 33,
        badge: null,
        image: "https://images.unsplash.com/photo-1579722820308-d74e571900a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        flavors: ["#FF69B4", "#3E2723", "#F5F5DC", "#FFFFFF", "#8B4513"], // Lacasitos, Mini Dona Dark/White, Conguitos White, Cacaolat
        flavorNames: ["Lacasitos", "Mini Dona Dark", "Mini Dona White", "Conguitos White", "Cacaolat"],
        desc: "Formato 1KG del aislado más puro. Ideal para probar nuevos y deliciosos sabores.",
        longDesc: "El formato de 1KG de nuestro aislado estrella. Comparte exactamente la misma fórmula que la versión de 2KG: una pureza inigualable y una absorción ultrarrápida. Este tamaño es perfecto si te gusta ir cambiando de sabor frecuentemente o si quieres alternar entre varios diferentes durante el mes.",
        faqs: [
            { q: "¿Cuánto dura un bote de 1KG?", a: "Suele contener unas 33 tomas. Si haces 4-5 entrenamientos por semana y tomas un batido post-entreno, te durará entre mes y medio y dos meses." },
            { q: "¿Puedo mezclarla con leche?", a: "Se recomienda mezclar con agua para mantener la absorción ultrarrápida, pero si buscas más calorías o un sabor a batido más espeso, puedes usar leche o bebida vegetal." }
        ]
    },

    // --- ONLY WHEY ---
    {
        id: 3,
        name: "ONLY WHEY 2KG",
        category: "Proteínas",
        goal: "Ganar Músculo",
        price: 60.90, // using base price
        servings: 66,
        badge: "MEJOR SABOR",
        image: "https://images.unsplash.com/photo-1550989460-0adf9ea622e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        flavors: ["#FFF8DC", "#FFB6C1", "#8B4513", "#3E2723", "#FFFFFF", "#FF69B4"],
        flavorNames: ["Vainilla Cream", "Pink Cake", "Cacaolat", "Conguitos Dark", "Conguitos White", "Lacasitos"],
        desc: "Concentrado de suero de alta calidad. Textura increíble y sabores de locura.",
        longDesc: "Only Whey es nuestra proteína concentrada de suero de leche superior. Retiene un excelente perfil de aminoácidos y su textura es insuperable: densa, cremosa y con los sabores más espectaculares del mercado. Perfecta para quienes buscan aumentar músculo y disfrutar realmente de su batido tras entrenar o a cualquier hora del día.",
        faqs: [
            { q: "¿Cuál es la diferencia con el Aislado (ISO ZERO)?", a: "El concentrado conserva un pelín más de lactosa, hidratos y grasas, haciendo que su sabor y textura sean algo más sabrosos y cremosos, pero su pureza de proteína ronda el 80% frente al 90% del aislado." },
            { q: "¿Es apta para novatos?", a: "Totalmente, es habitualmente la primera proteína que se recomienda debido a su inmejorable relación calidad-precio y su sabor espectacular." }
        ]
    },
    {
        id: 4,
        name: "ONLY WHEY 1KG",
        category: "Proteínas",
        goal: "Ganar Músculo",
        price: 37.90,
        servings: 33,
        badge: null,
        image: "https://images.unsplash.com/photo-1594882645126-14020914d58d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        flavors: ["#8B4513", "#3E2723", "#F5F5DC", "#FFFFFF", "#FF69B4"],
        flavorNames: ["Cacaolat", "Mini Dona Dark", "Mini Dona White", "Conguitos White", "Lacasitos"],
        desc: "El mejor suero concentrado en formato pequeño. Perfecto para combinar sabores.",
        longDesc: "Formato más compacto del Only Whey concentrado. Al igual que la versión grande, te aporta proteína de muy alta calidad para reparar tus fibras con un sabor y cremosidad dignos de un postre de restaurante. Ideal para iniciarse o probar sabores nuevos.",
        faqs: [
            { q: "¿Sirve para cocinar recetas?", a: "¡Sí! El concentrado de suero, gracias a su textura, es increíble para hacer bizcochos fit, tortitas de avena o para mezclarlo con yogures." },
            { q: "¿Cuánto debo tomar?", a: "La ración típica es de un cazo (30g) diluido en agua o leche después de hacer ejercicio intenso." }
        ]
    },

    // --- GAINERS & DREAMS ---
    {
        id: 5,
        name: "KONG GAINER 3KG",
        category: "Ganadores",
        goal: "Ganar Músculo",
        price: 41.50,
        servings: 30,
        badge: "VOLUMEN",
        image: "https://images.unsplash.com/photo-1622486940381-067963ec7a6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        flavors: ["#F5DEB3"],
        flavorNames: ["Vainilla & Macadamia"],
        desc: "Matriz de carbohidratos y proteínas de alta calidad para subir de peso y fuerza.",
        longDesc: "Kong Gainer es un \"ganador de peso\" formulado para aquellos a los que les cuesta subir de masa muscular (ectomorfos) o para fases agresivas de volumen. Contiene una matriz equilibrada de carbohidratos rápidos y lentos junto a proteína de alta calidad para brindarte un superávit de calorías limpio y sin esfuerzo.",
        faqs: [
            { q: "¿Engorda si tomo este ganador?", a: "Un gainer aporta calorías. Si lo tomas sumado a un entrenamiento intenso y progresivo, la mayor parte de esas calorías ayudarán a la construcción muscular. Si no entrenas, ganarás grasa." },
            { q: "¿Me lo tomo de una sola vez?", a: "Las porciones de los gainers suelen ser muy grandes, recomendamos partir el servicio en dos (ej. medio por la mañana y medio post-entreno) para mejor digestión." }
        ]
    },
    {
        id: 6,
        name: "SWEET DREAMS 1KG",
        category: "Especiales",
        goal: "Recuperar",
        price: 46.90,
        servings: 30,
        badge: "NOVEDAD",
        image: "https://images.unsplash.com/photo-1584017911766-d451b3d0e843?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        flavors: ["#C19A6B"],
        flavorNames: ["Speculoos"],
        desc: "Fórmula especial para mejorar el descanso y nutrir el músculo mientras duermes.",
        longDesc: "Sweet Dreams no es solo una proteína. Es un preparado nocturno diseñado para tomarse antes de meterse en la cama. Incluye nutrientes que fomentan el descanso profundo y la relajación (como triptófano o magnesio), combinado con proteína anticatabólica para que el cuerpo se reconstruya mientras descansas profundamente.",
        faqs: [
            { q: "¿Da sueño durante el día?", a: "Está formulado para causar relajación, por lo que recomendamos encarecidamente tomarlo solo por la noche o antes de las siestas largas." },
            { q: "¿Es un somnífero?", a: "No, es un medicamento. Emplea ingredientes precursores de la melatonina de forma natural para ayudar al cuerpo a entrar en ciclo de sueño reparador, no te dejará atontado al despertar." }
        ]
    },

    // --- CASEIN ---
    {
        id: 7,
        name: "MICELLAR CASEIN 1KG",
        category: "Caseína",
        goal: "Recuperar",
        price: 39.90,
        servings: 33,
        badge: "NOCTURNO",
        image: "https://images.unsplash.com/photo-1550989460-0adf9ea622e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        flavors: ["#8B4513", "#F5F5DC", "#3E2723", "#FFFFFF", "#FF69B4"],
        flavorNames: ["Cacaolat", "Mini Dona White", "Mini Dona Dark", "Conguitos White", "Lacasitos"],
        desc: "Proteína de digestión lenta, anticatabólica. Tómala antes de dormir para alimentar tus músculos 8h.",
        longDesc: "La caseína micelar es la 'proteína nocturna' por excelencia. A diferencia del aislado de suero que se digiere enseguida, la caseína forma un 'gel' en el estómago que va liberando aminoácidos progresivamente durante horas. Esto frena por completo el catabolismo (pérdida de músculo) mientras pasas las 8h de ayuno nocturno durmiendo.",
        faqs: [
            { q: "¿Sustituye esta proteína al suero?", a: "No, son complementarias. El suero se toma post-entreno por su rapidez, y la caseína por la noche por su lentitud." },
            { q: "¿Queda espesa al mezclarla?", a: "Bastante más espesa que el suero genérico. A mucha gente le encanta mezclarla con menos agua y hacer algo muy parecido a un pudding o natillas ligeras antes de acostarse." }
        ]
    },

    // --- AMINOS & CLEAR ---
    {
        id: 8,
        name: "REAL AMINO VEGAN+ 1KG",
        category: "Aminoácidos",
        goal: "Recuperar",
        price: 34.90,
        servings: 60,
        badge: "VEGAN",
        image: "https://images.unsplash.com/photo-1594882645126-14020914d58d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        flavors: ["#D2B48C", "#FF69B4"],
        flavorNames: ["Cookies & Cream", "Birthday Cake Rainbow"],
        desc: "EAA + BCAA de origen vegetal, excelente asimilación para frenar la fatiga muscular intra-entreno.",
        longDesc: "Aminoácidos esenciales (EAA) y ramificados (BCAA) formulados para personas que buscan evitar el daño muscular extremo en sesiones muy largas o intensas. Lo mejor de todo es que su origen es botánico de fermentación, ideal para dietas veganas y con una usabilidad gástrica mucho mayor en mitad del esfuerzo.",
        faqs: [
            { q: "¿Cuándo se toman los aminoácidos?", a: "El mejor momento suele ser disueltos en la botella de agua que llevas mientras estás entrenando (intra-entreno), o nada más terminar." },
            { q: "¿Hacen falta si ya tomo proteína?", a: "La proteína entera contiene aminoácidos, pero tardan un tiempo en digerirse. Los aminoácidos libres entran en el torrente sanguíneo en minutos. Son una ayuda 'instantánea' al músculo cansado." }
        ]
    },
    {
        id: 9,
        name: "CLEAR PROTEIN KOJAC",
        category: "Clear",
        goal: "Ganar Músculo",
        price: 36.90,
        servings: 30,
        badge: "REFRESCANTE",
        image: "https://images.unsplash.com/photo-1557022001-ebdc032aabdb?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        flavors: ["#8B0000", "#4B0082", "#DC143C"],
        flavorNames: ["Cola", "Mora", "Cereza"],
        desc: "Aislado ligero como un zumo o refresco. Cero pesadez, ideal para el verano o después del cardio.",
        longDesc: "Una revolución en la proteína. Gracias a la tecnología CLEAR, este aislado no tiene textura a 'batido de leche cremoso'. Se disuelve pareciendo un zumo de frutas o a una bebida energética transparente, siendo infinitamente más refrescante e hidratante tras sesiones de altísima sudoración.",
        faqs: [
            { q: "¿Tiene tanta proteína como el polvo tradicional?", a: "Sí, a nivel de macronutrientes es un purísimo Aislado de Suero. La diferencia está en el tratamiento que lo vuelve hidrosoluble y translúcido." },
            { q: "¿Hace mucha espuma al batirlo?", a: "Al mezclarlo hace burbujas en el shaker que desaparecen tras dejarse reposar 1 o 2 minutos, dejando la bebida clara." }
        ]
    },

    // --- RENDIMIENTO & SALUD ---
    {
        id: 10,
        name: "REAL THERMO",
        category: "Energía y Salud",
        goal: "Quemar Grasa",
        price: 31.50,
        servings: 60,
        badge: "POTENTE",
        image: "https://images.unsplash.com/photo-1584362917165-526a968579e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        flavors: [],
        flavorNames: [],
        desc: "Complejo termogénico avanzado. Acelera el metabolismo y aporta energía explosiva para definir.",
        longDesc: "Quemador de grasas para la época dura de definición, especialmente cuando las dietas bajan las calorías y necesitamos un impulso mental y físico. Real Thermo contiene extractos naturales y estimulantes diseñados específicamente para elevar la temperatura basal del cuerpo e inducir una mayor quema de ácidos grasos.",
        faqs: [
            { q: "¿Se puede tomar de noche?", a: "Rotundamente no, este producto cuenta con una fuerte carga de cafeína y otros estimulantes nerviosos que arruinarán tu ciclo de sueño si lo tomas tarde." },
            { q: "¿Qué se nota al tomarlo?", a: "Notarás un claro incremento de temperatura corporal (sudoración temprana y abundante en tu sesión) y mayor concentración." }
        ]
    },
    {
        id: 11,
        name: "REAL GROW",
        category: "Energía y Salud",
        goal: "Ganar Músculo",
        price: 34.90,
        servings: 60,
        badge: null,
        image: "https://images.unsplash.com/photo-1584362917165-526a968579e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        flavors: [],
        flavorNames: [],
        desc: "Potenciador natural del anabolismo para maximizar la fuerza y la masa muscular limpia.",
        longDesc: "Real Grow se fundamenta en vías de estimulación anabólica 100% naturales. Maximiza la retención de nitrógeno e induce al cuerpo a estar en su mejor estado para sintetizar nueva pared muscular, elevando la fuerza progresivamente y facilitando la creación de hipertrofia sin retención de líquidos.",
        faqs: [
            { q: "¿Es necesario hacer descansos?", a: "Sí, recomendamos ciclar productos anabólicos de esta categoría: tomarlo durante 8 semanas consecutivas y descansar 4 semanas para que los receptores corporales no se saturen." }
        ]
    },
    {
        id: 12,
        name: "OMEGA 3",
        category: "Energía y Salud",
        goal: "Recuperar",
        price: 17.50,
        servings: 90,
        badge: "ESENCIAL",
        image: "https://images.unsplash.com/photo-1584017911766-d451b3d0e843?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        flavors: [],
        flavorNames: [],
        desc: "Ácidos grasos esenciales (EPA/DHA). Protege articulaciones y corazón tras entrenos pesados.",
        longDesc: "Omega 3 puro que nuestro cuerpo es incapaz de fabricar por sí solo y que rara vez conseguimos cubrir al completo con la dieta. Este suplemento mejora increíblemente la sensibilidad celular, reduce el entorno inflamatorio crónico derivado del desgaste aeróbico y con peso, y apoya significativamente la salud del sistema nervioso central.",
        faqs: [
            { q: "¿Saben a pescado las cápsulas?", a: "Nuestras cápsulas se purifican y recubren entericamente para descomponerse ya en el tracto inferior, asegurándote de no tener los famosos y molestos 'regustos o eructos a pescado'." }
        ]
    },
    {
        id: 13,
        name: "CREABIG",
        category: "Aminoácidos",
        goal: "Energía",
        price: 29.50,
        servings: 100,
        badge: "TOP VENTA",
        image: "https://images.unsplash.com/photo-1616682708304-4fa973b18cb4?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        flavors: ["#DC143C", "#FF1493"],
        flavorNames: ["Kojac", "Piruleta"],
        desc: "Creatina monohidrato de máxima pureza. Aumenta la fuerza explosiva y la hidratación muscular.",
        longDesc: "Con diferencia el rey de los suplementos ergogénicos basado en la evidencia. La creatina recargará los depósitos de fosfocreatina muscular, dándote ese impulso de ATP en los esfuerzos máximos para lograr siempre 1, 2 o 3 repeticiones más de las esperadas. Fundamental para salir del estancamiento.",
        faqs: [
            { q: "¿Es malo para los riñones o el pelo?", a: "Está completamente demostrado que la creatina tomada en sus dosis recomendadas (de 3 a 5 gramos) es 100% segura; los grandes mitos del daño a la salud o la pérdida del cabello han sido abrumadoramente refutados." },
            { q: "¿Hace falta fase de carga o descansos?", a: "No. Se debe tomar a diario de manera continuada sin descanso porque funciona por saturación de los depósitos musculares a lo largo de los días." }
        ]
    },
    {
        id: 14,
        name: "ASHWAGANDHA",
        category: "Energía y Salud",
        goal: "Recuperar",
        price: 23.90,
        servings: 60,
        badge: null,
        image: "https://images.unsplash.com/photo-1584017911766-d451b3d0e843?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        flavors: [],
        flavorNames: [],
        desc: "Adaptógeno natural que reduce el cortisol, combate el estrés y mejora el descanso nocturno.",
        longDesc: "La joya de la medicina tradicional india. Este poderoso extracto estabiliza la respuesta hormonal frente al estrés cortando de raíz la espiral del agotamiento por entrenamientos intensos. Ayuda a lidiar con el ansia, reduce el letargo y favorece un descenso calmado hacia el sueño profundo.",
        faqs: [
            { q: "¿Produce dependencia?", a: "No, es la raíz de un arbusto que ayuda a modular el exceso de cortisol (la hormona del estrés celular), no afecta al sistema nervioso central como un psicotrópico." }
        ]
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
    { id: "Energía y Salud", icon: <Zap size={16} /> },
    { id: "Especiales", icon: <Sparkles size={16} /> }
];

// --- COMPONENTS ---

const ProductModal = ({ product, onClose }) => {
    const [openFaq, setOpenFaq] = useState(null);

    const pricePerServing = (product.price / product.servings).toFixed(2);

    // Pre-fill WhatsApp message
    const waText = encodeURIComponent(`¡Hola! Quisiera más información sobre el suplemento ${product.name}.`);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
        >
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-background/80 backdrop-blur-sm"
                onClick={onClose}
            ></div>

            {/* Modal Content */}
            <motion.div
                initial={{ scale: 0.95, y: 20, opacity: 0 }}
                animate={{ scale: 1, y: 0, opacity: 1 }}
                exit={{ scale: 0.95, y: 20, opacity: 0 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="relative w-full max-w-5xl max-h-[90vh] bg-surface border border-white/10 rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.8)] flex flex-col md:flex-row z-10"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-50 w-10 h-10 bg-background/50 backdrop-blur-md border border-white/10 rounded-full flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 transition-colors"
                >
                    ✕
                </button>

                {/* Left Column - Image */}
                <div className="w-full md:w-2/5 md:min-h-full bg-gradient-to-b from-white/5 to-transparent relative p-8 flex items-center justify-center border-b md:border-b-0 md:border-r border-white/5">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px] pointer-events-none"></div>
                    <img
                        src={product.image}
                        alt={product.name}
                        className="relative w-full max-w-[250px] md:max-w-none aspect-square object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.5)]"
                    />
                    {product.badge && (
                        <div className="absolute top-6 left-6 z-20">
                            <span className={`text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider ${product.badge === 'MÁS VENDIDO' ? 'bg-success text-secondary' : 'bg-accent/20 text-accent border border-accent/20'}`}>
                                {product.badge}
                            </span>
                        </div>
                    )}
                </div>

                {/* Right Column - Content */}
                <div className="w-full md:w-3/5 overflow-y-auto custom-scrollbar p-6 md:p-10 hide-scrollbar" style={{ maxHeight: '90vh' }}>

                    {/* Header */}
                    <div className="mb-8">
                        <div className="flex items-center gap-2 mb-3">
                            <span className="text-primary text-sm font-bold tracking-widest uppercase flex items-center gap-1">
                                {categories.find(c => c.id === product.category)?.icon || <Sparkles size={14} />}
                                {product.category}
                            </span>
                            <span className="text-white/20">•</span>
                            <span className="text-text-secondary text-sm flex items-center gap-1">
                                {goals.find(g => g.id === product.goal)?.icon} {product.goal}
                            </span>
                        </div>
                        <h2 className="font-display text-4xl md:text-5xl text-white leading-tight mb-2">{product.name}</h2>

                        <div className="flex items-end gap-3 mt-4">
                            <div className="font-display text-4xl text-accent leading-none">
                                {product.price.toFixed(2).replace('.', ',')}€
                            </div>
                            <div className="text-sm text-text-secondary mb-1">
                                ({product.servings} tomas, ~{pricePerServing}€/toma)
                            </div>
                        </div>
                    </div>

                    {/* What is it / Description */}
                    <div className="mb-8">
                        <h3 className="font-bold text-lg text-white mb-3 flex items-center gap-2">
                            <Sparkles size={18} className="text-primary" /> ¿Qué es y para qué sirve?
                        </h3>
                        <p className="text-text-secondary leading-relaxed bg-white/5 p-5 rounded-2xl border border-white/5 font-light text-[15px]">
                            {product.longDesc || product.desc}
                        </p>
                    </div>

                    {/* Flavors */}
                    {product.flavors && product.flavors.length > 0 && (
                        <div className="mb-8">
                            <h3 className="font-bold text-lg text-white mb-3 flex items-center gap-2">
                                <Droplet size={18} className="text-accent" /> Sabores Disponibles
                            </h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                {product.flavors.map((color, idx) => (
                                    <div key={idx} className="flex items-center gap-3 bg-background/50 p-2.5 rounded-xl border border-white/5">
                                        <div
                                            className="w-6 h-6 rounded-full border border-white/20 shadow-inner"
                                            style={{ backgroundColor: color }}
                                        />
                                        <span className="text-sm font-medium text-text-secondary">
                                            {product.flavorNames?.[idx] || `Sabor ${idx + 1}`}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* FAQs */}
                    {product.faqs && product.faqs.length > 0 && (
                        <div className="mb-10">
                            <h3 className="font-bold text-lg text-white mb-3 flex items-center gap-2">
                                <MessageCircle size={18} className="text-primary" /> Dudas Frecuentes
                            </h3>
                            <div className="space-y-2">
                                {product.faqs.map((faq, idx) => (
                                    <div key={idx} className="bg-background/40 border border-white/5 rounded-xl overflow-hidden hover:bg-white/5 transition-colors">
                                        <button
                                            onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                                            className="w-full text-left px-5 py-4 flex items-center justify-between font-medium text-[15px] text-white"
                                        >
                                            <span className="pr-4">{faq.q}</span>
                                            <ChevronDown className={`transition-transform duration-300 flex-shrink-0 ${openFaq === idx ? 'rotate-180 text-primary' : 'text-text-secondary'}`} size={16} />
                                        </button>
                                        <AnimatePresence>
                                            {openFaq === idx && (
                                                <motion.div
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: 'auto', opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    className="px-5 pb-4 text-sm text-text-secondary font-light"
                                                >
                                                    {faq.a}
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Bottom CTA */}
                    <div className="mt-8 pt-6 border-t border-white/5">
                        <a
                            href={`https://wa.me/34602530088?text=${waText}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full bg-[#25D366] text-white px-6 py-4 rounded-xl font-bold uppercase tracking-wider flex items-center justify-center gap-3 hover:bg-[#20bd5a] hover:shadow-[0_0_20px_rgba(37,211,102,0.4)] transition-all group"
                        >
                            <MessageCircle size={20} className="group-hover:scale-110 transition-transform" />
                            Preguntar por este producto
                        </a>
                    </div>

                </div>
            </motion.div>
        </motion.div>
    );
};

const ProductCard = ({ product, onOpenModal }) => {
    const [activeFlavor, setActiveFlavor] = useState(0);

    const pricePerServing = (product.price / product.servings).toFixed(2);

    return (
        <motion.div
            onClick={() => onOpenModal(product)}
            className="group relative bg-surface/40 backdrop-blur-md rounded-2xl border border-white/5 overflow-hidden flex flex-col hover:border-primary/50 transition-all duration-300 shadow-lg hover:shadow-[0_15px_30px_rgba(255,107,53,0.15)] hover:-translate-y-2 cursor-pointer"
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
                    <a
                        href={`https://wa.me/34602530088?text=${encodeURIComponent(`¡Hola! Me gustaría preguntar por ${product.name}.`)}`} target="_blank" rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 bg-surface/80 border border-white/10 text-white hover:bg-[#25D366] hover:border-[#25D366] hover:shadow-[0_0_15px_rgba(37,211,102,0.6)] group-hover:scale-110"
                        title="Consultar por WhatsApp"
                    >
                        <MessageCircle size={20} />
                    </a>
                </div>
            </div>
        </motion.div>
    );
};

export default function Supplements() {
    const [activeGoal, setActiveGoal] = useState("Todos");
    const [activeCat, setActiveCat] = useState("Todas");
    const [openFaq, setOpenFaq] = useState(null);
    const [selectedProduct, setSelectedProduct] = useState(null);

    // Lock body scroll when modal is open
    useEffect(() => {
        if (selectedProduct) {
            document.body.style.overflow = 'hidden';
            // Also stop lenis scroll if possible, assuming standard overflow mostly handles it
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => { document.body.style.overflow = 'unset'; };
    }, [selectedProduct]);

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
                            <img src="/referencias/big_supplements.jpg" alt="Hero Supplements" className="w-full h-full object-cover opacity-[0.6]" onError={(e) => { e.target.style.display = 'none'; e.target.parentElement.style.background = 'linear-gradient(to right, #1A1A2E, #0F0F1A)' }} />
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

            {/* 1.5. AVISO VENTA FÍSICA */}
            <section className="py-4 px-4 relative z-20 -mt-10 mb-4">
                <div className="container mx-auto max-w-5xl">
                    <div className="bg-primary/20 border border-primary/50 backdrop-blur-md rounded-2xl p-4 sm:p-6 flex flex-col sm:flex-row items-center justify-center gap-4 text-center sm:text-left shadow-[0_10px_30px_rgba(255,107,53,0.15)] relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-[40px] pointer-events-none group-hover:bg-primary/40 transition-colors duration-700"></div>
                        <MapPin className="text-primary w-10 h-10 flex-shrink-0 animate-bounce drop-shadow-[0_0_10px_rgba(255,107,53,0.5)]" />
                        <div className="relative z-10">
                            <h3 className="text-white font-bold tracking-wider text-xl mb-1">VENTA FÍSICA EXCLUSIVA</h3>
                            <p className="text-text-secondary text-sm sm:text-base">Nuestros suplementos están disponibles para compra directa en las instalaciones de Monster Factory. Te asesoramos en persona para elegir lo mejor para tus objetivos.</p>
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
                                    onClick={() => setSelectedProduct(heroProduct)}
                                    className="relative w-full max-w-md aspect-square bg-gradient-to-b from-white/5 to-transparent rounded-full flex items-center justify-center p-8 group-hover:scale-105 transition-transform duration-700 cursor-pointer"
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
                                    <a href="https://wa.me/34602530088" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto bg-[#25D366] text-white px-10 py-5 rounded-full font-bold uppercase tracking-widest text-lg hover:bg-[#20bd5a] hover:shadow-[0_0_30px_rgba(37,211,102,0.6)] hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3 group">
                                        <MessageCircle size={22} className="group-hover:scale-110 transition-transform" /> CONSULTAR WHATSAPP
                                    </a>
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
                                        <ProductCard product={prod} onOpenModal={setSelectedProduct} />
                                    </motion.div>
                                ))}
                            </motion.div>
                        ) : (
                            <motion.div
                                initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                                className="text-center py-20 bg-surface/30 rounded-3xl border border-white/5"
                            >
                                <Dumbbell size={48} className="mx-auto text-white/20 mb-4" />
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

                    {/* WhatsApp wa.me link */}
                    <a href="https://wa.me/34602530088" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-[#25D366] text-white px-10 py-5 rounded-full font-bold uppercase tracking-widest text-lg hover:bg-[#1EBE59] hover:shadow-[0_0_30px_rgba(37,211,102,0.5)] hover:-translate-y-1 transition-all duration-300">
                        <MessageCircle size={24} /> Consultar por WhatsApp
                    </a>
                </div>
            </section>
            {/* 9. PRODUCT MODAL */}
            <AnimatePresence>
                {selectedProduct && (
                    <ProductModal
                        product={selectedProduct}
                        onClose={() => setSelectedProduct(null)}
                    />
                )}
            </AnimatePresence>
        </div>
    );
}
