import React, { useRef, useState } from 'react';
import { FolderOpen, Film, Zap, Settings } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
    {
        icon: <Film className="w-8 h-8 text-mint-400" />,
        title: "Cinematic Onboarding",
        description: "Immersive splash screens and personalized greetings that adapt to your time of day."
    },
    {
        icon: <FolderOpen className="w-8 h-8 text-ai-purple" />,
        title: "Intelligent Folders",
        description: "Strict typing ensures your media stays organized. Video files in video folders, audio in audio."
    },
    {
        icon: <Zap className="w-8 h-8 text-tech-blue" />,
        title: "Smart Player",
        description: "Automatically switches modes. Full cinematic video player or pulsing audio visualizer."
    },
    {
        icon: <Settings className="w-8 h-8 text-pink-500" />,
        title: "Deep Customization",
        description: "Toggle between Soft Light and Cyber Dark themes. Manage profiles and preferences."
    }
];

const FeatureCard = ({ feature, index }) => {
    const divRef = useRef(null);
    const [isFocused, setIsFocused] = useState(false);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [opacity, setOpacity] = useState(0);

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
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative overflow-hidden rounded-2xl border border-white/10 bg-gray-900/40 px-8 py-8 shadow-2xl"
        >
            <div
                className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
                style={{
                    opacity,
                    background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(52, 211, 153, 0.15), transparent 40%)`,
                }}
            />
            <div className="mb-6 p-4 bg-white/5 rounded-xl w-fit group-hover:bg-white/10 transition-colors relative z-10">
                {feature.icon}
            </div>
            <h3 className="text-xl font-bold mb-3 text-white relative z-10">
                {feature.title}
            </h3>
            <p className="text-gray-400 leading-relaxed relative z-10">
                {feature.description}
            </p>
        </motion.div>
    );
};

const FeaturesGrid = () => {
    return (
        <section id="features" className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold mb-4"
                    >
                        Designed for <span className="text-gradient">Immersion</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-400 max-w-2xl mx-auto"
                    >
                        Every interaction is crafted to feel premium, responsive, and alive.
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
