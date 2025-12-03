import React from 'react';
import { Palette, Layers, Zap, Monitor } from 'lucide-react';
import { motion } from 'framer-motion';

const highlights = [
    {
        icon: <Palette className="w-8 h-8 text-brand-pink" />,
        title: "Dual Theme System",
        description: "Seamlessly switch between a clean Light Mode with elegant pink accents and a cinematic Dark Mode with sophisticated blue accents."
    },
    {
        icon: <Layers className="w-8 h-8 text-brand-blue" />,
        title: "Glassmorphism Design",
        description: "Modern frosted glass effects throughout the interface create a sense of depth and premium quality."
    },
    {
        icon: <Zap className="w-8 h-8 text-yellow-400" />,
        title: "Smooth Animations",
        description: "Buttery-smooth transitions and micro-interactions running at 60fps for a delightful experience."
    },
    {
        icon: <Monitor className="w-8 h-8 text-mint-400" />,
        title: "Responsive Layout",
        description: "A perfect experience on any screen size, from compact windows to full-screen cinematic viewing."
    }
];

const KeyHighlights = () => {
    return (
        <section className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold mb-4"
                    >
                        Beautiful <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-pink to-brand-blue">Modern UI</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-gray-400 max-w-2xl mx-auto"
                    >
                        Designed to wow. Mint Player combines aesthetics with functionality to deliver a premium user experience.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {highlights.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="glass-card p-6 rounded-2xl hover:bg-white/5 transition-colors group"
                        >
                            <div className="mb-4 p-3 bg-white/5 rounded-xl w-fit group-hover:scale-110 transition-transform duration-300">
                                {item.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-2 text-white">{item.title}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                {item.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default KeyHighlights;
