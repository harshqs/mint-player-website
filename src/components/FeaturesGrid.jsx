import React, { useRef, useState } from 'react';
import { FolderOpen, Film, Zap, Settings } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
    {
        icon: <Film className="w-8 h-8 text-mint-400" />,
        title: "Cinematic Onboarding",
        description: "Immersive splash screens and personalized greetings that adapt to your time of day.",
        color: "mint",
        gradient: "from-mint-500/20 to-mint-600/10"
    },
    {
        icon: <FolderOpen className="w-8 h-8 text-ai-purple" />,
        title: "Intelligent Folders",
        description: "Strict typing ensures your media stays organized. Video files in video folders, audio in audio.",
        color: "purple",
        gradient: "from-ai-purple/20 to-purple-600/10"
    },
    {
        icon: <Zap className="w-8 h-8 text-tech-blue" />,
        title: "Smart Player",
        description: "Automatically switches modes. Full cinematic video player or pulsing audio visualizer.",
        color: "blue",
        gradient: "from-tech-blue/20 to-blue-600/10"
    },
    {
        icon: <Settings className="w-8 h-8 text-pink-500" />,
        title: "Deep Customization",
        description: "Toggle between Soft Light and Cyber Dark themes. Manage profiles and preferences.",
        color: "pink",
        gradient: "from-pink-500/20 to-pink-600/10"
    }
];

const getColorValues = (color) => {
    const colors = {
        mint: {
            spotlight: 'rgba(16, 185, 129, 0.2)',
            border: 'rgba(16, 185, 129, 0.3)',
            glow: 'rgba(16, 185, 129, 0.5)',
        },
        purple: {
            spotlight: 'rgba(139, 92, 246, 0.2)',
            border: 'rgba(139, 92, 246, 0.3)',
            glow: 'rgba(139, 92, 246, 0.5)',
        },
        blue: {
            spotlight: 'rgba(59, 130, 246, 0.2)',
            border: 'rgba(59, 130, 246, 0.3)',
            glow: 'rgba(59, 130, 246, 0.5)',
        },
        pink: {
            spotlight: 'rgba(236, 72, 153, 0.2)',
            border: 'rgba(236, 72, 153, 0.3)',
            glow: 'rgba(236, 72, 153, 0.5)',
        },
    };
    return colors[color];
};

const FeatureCard = ({ feature, index }) => {
    const divRef = useRef(null);
    const [isFocused, setIsFocused] = useState(false);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [opacity, setOpacity] = useState(0);
    const colorValues = getColorValues(feature.color);

    const handleMouseMove = (e) => {
        if (!divRef.current) return;

        const div = divRef.current;
        const rect = div.getBoundingClientRect();

        setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };

    const handleFocus = () => {
        setIsFocused(true);
        setOpacity(1);
    };

    const handleBlur = () => {
        setIsFocused(false);
        setOpacity(0);
    };

    const handleMouseEnter = () => {
        setOpacity(1);
    };

    const handleMouseLeave = () => {
        setOpacity(0);
    };

    return (
        <motion.div
            ref={divRef}
            onMouseMove={handleMouseMove}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{
                duration: 0.6,
                delay: index * 0.15,
                type: "spring",
                stiffness: 100,
                damping: 15
            }}
            whileHover={{
                y: -10,
                transition: { duration: 0.3 }
            }}
            className={`relative overflow-hidden rounded-2xl border-2 bg-gradient-to-br ${feature.gradient} bg-gray-900/60 px-8 py-10 shadow-2xl backdrop-blur-sm group`}
            style={{
                borderColor: opacity > 0 ? colorValues.border : 'rgba(255, 255, 255, 0.1)',
                transition: 'border-color 0.3s',
            }}
        >
            {/* Spotlight Effect */}
            <div
                className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300"
                style={{
                    opacity,
                    background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, ${colorValues.spotlight}, transparent 40%)`,
                }}
            />

            {/* Ambient Glow */}
            <motion.div
                className="absolute -inset-1 opacity-0 group-hover:opacity-100 rounded-2xl blur-xl transition-opacity duration-500"
                style={{
                    background: `linear-gradient(135deg, ${colorValues.glow}, transparent)`,
                }}
            />

            {/* Icon Container */}
            <motion.div
                className="mb-6 p-4 bg-white/5 rounded-xl w-fit relative z-10 group-hover:bg-white/10 transition-colors"
                whileHover={{
                    scale: 1.1,
                    rotate: [0, -5, 5, 0],
                }}
                transition={{ duration: 0.5 }}
            >
                <motion.div
                    animate={opacity > 0 ? {
                        filter: [
                            `drop-shadow(0 0 5px ${colorValues.glow})`,
                            `drop-shadow(0 0 15px ${colorValues.glow})`,
                            `drop-shadow(0 0 5px ${colorValues.glow})`,
                        ]
                    } : {}}
                    transition={{ duration: 2, repeat: Infinity }}
                >
                    {feature.icon}
                </motion.div>
            </motion.div>

            {/* Title */}
            <h3 className="text-xl font-bold mb-3 text-white relative z-10 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all">
                {feature.title}
            </h3>

            {/* Description */}
            <p className="text-gray-400 leading-relaxed relative z-10 group-hover:text-gray-300 transition-colors">
                {feature.description}
            </p>

            {/* Corner Decoration */}
            <div
                className="absolute top-0 right-0 w-32 h-32 opacity-20 blur-2xl rounded-full"
                style={{ background: colorValues.glow }}
            />
        </motion.div>
    );
};

const FeaturesGrid = () => {
    return (
        <section id="features" className="py-32 relative overflow-hidden">
            {/* Background Effects */}
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.05, 0.15, 0.05],
                }}
                transition={{ duration: 10, repeat: Infinity }}
                className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-mint-500/10 rounded-full blur-[150px]"
            />
            <motion.div
                animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.05, 0.15, 0.05],
                }}
                transition={{ duration: 12, repeat: Infinity, delay: 1 }}
                className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-ai-purple/10 rounded-full blur-[150px]"
            />

            <div className="container mx-auto px-6">
                <div className="text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-bold mb-6"
                    >
                        Designed for <span className="text-gradient">Immersion</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-gray-400 max-w-2xl mx-auto"
                    >
                        Every interaction is crafted to feel <span className="text-mint-400 font-semibold">premium</span>, <span className="text-ai-blue font-semibold">responsive</span>, and <span className="text-ai-purple font-semibold">alive</span>.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((feature, index) => (
                        <FeatureCard key={index} feature={feature} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturesGrid;
