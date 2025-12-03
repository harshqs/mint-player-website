import React from 'react';
import { Check, X, AlertTriangle } from 'lucide-react';
import { motion } from 'framer-motion';

const ComparisonTable = () => {
    const features = [
        { name: "Modern UI", mint: true, trad: false, mintText: "Glassmorphism", tradText: "Outdated" },
        { name: "Dual Themes", mint: true, trad: false, mintText: "Light & Dark", tradText: "Limited" },
        { name: "Collections", mint: true, trad: false, mintText: "Built-in", tradText: "Basic playlists" },
        { name: "Auto-Updates", mint: true, trad: "warn", mintText: "Intelligent", tradText: "Manual" },
        { name: "Performance", mint: true, trad: "warn", mintText: "Optimized", tradText: "Heavy" },
        { name: "Cross-Platform", mint: true, trad: "warn", mintText: "Yes", tradText: "Limited" },
    ];

    return (
        <section className="py-24 bg-black/20">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold mb-4"
                    >
                        Why Choose <span className="text-brand-pink">Mint Player</span>?
                    </motion.h2>
                </div>

                <div className="max-w-4xl mx-auto overflow-hidden rounded-2xl border border-white/10 glass">
                    <div className="grid grid-cols-3 bg-white/5 p-4 font-bold text-lg border-b border-white/10">
                        <div className="text-gray-400">Feature</div>
                        <div className="text-brand-pink text-center">Mint Player</div>
                        <div className="text-gray-500 text-center">Traditional Players</div>
                    </div>

                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className={`grid grid-cols-3 p-4 items-center border-b border-white/5 hover:bg-white/5 transition-colors ${index === features.length - 1 ? 'border-none' : ''}`}
                        >
                            <div className="font-medium text-white">{feature.name}</div>

                            <div className="flex flex-col items-center justify-center text-center">
                                <div className="flex items-center gap-2 text-green-400 font-bold">
                                    <Check size={20} />
                                    <span>{feature.mintText}</span>
                                </div>
                            </div>

                            <div className="flex flex-col items-center justify-center text-center">
                                <div className={`flex items-center gap-2 font-medium ${feature.trad === 'warn' ? 'text-yellow-500' : 'text-red-500'}`}>
                                    {feature.trad === 'warn' ? <AlertTriangle size={18} /> : <X size={18} />}
                                    <span>{feature.tradText}</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ComparisonTable;
