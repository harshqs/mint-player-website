import React, { useState, useEffect } from 'react';
import { Sparkles, MessageSquare, Clock, Brain, Send } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const AIShowcase = () => {
    const [step, setStep] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setStep((prev) => (prev + 1) % 4);
        }, 4000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section id="ai" className="py-24 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-full bg-gradient-to-l from-ai-purple/10 to-transparent pointer-events-none" />

            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-16">

                    {/* Text Content */}
                    <div className="lg:w-1/2">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-ai-purple/10 border border-ai-purple/20 mb-6"
                        >
                            <Sparkles size={16} className="text-ai-purple" />
                            <span className="text-sm font-medium text-ai-purple">Powered by Gemini 3 Pro</span>
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-4xl md:text-6xl font-bold mb-6"
                        >
                            Your Media, <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-ai-purple to-pink-500">
                                Understood.
                            </span>
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            className="text-xl text-gray-400 mb-8 leading-relaxed"
                        >
                            Mint Player doesn't just play files; it understands them. Ask questions, find scenes, and get deep insights instantly.
                        </motion.p>

                        <div className="space-y-6">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.6 }}
                                className="flex gap-4"
                            >
                                <div className="w-12 h-12 rounded-xl bg-ai-purple/10 flex items-center justify-center shrink-0">
                                    <Brain className="text-ai-purple" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-white mb-1">Thinking Mode</h3>
                                    <p className="text-gray-400">Analyzes complex visual scenes, plot points, and objects with high precision.</p>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.8 }}
                                className="flex gap-4"
                            >
                                <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center shrink-0">
                                    <Clock className="text-blue-500" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-white mb-1">Interactive Timestamps</h3>
                                    <p className="text-gray-400">Clickable timestamps in AI responses jump you directly to the action.</p>
                                </div>
                            </motion.div>
                        </div>
                    </div>

                    {/* Visual Showcase / Mock Chat UI */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="lg:w-1/2 w-full"
                    >
                        <div className="relative">
                            {/* Decorative rings */}
                            <div className="absolute inset-0 bg-gradient-to-r from-ai-purple to-pink-500 rounded-2xl blur-xl opacity-20 animate-pulse" />

                            <div className="glass rounded-2xl border border-white/10 overflow-hidden relative z-10">
                                {/* Header */}
                                <div className="p-4 border-b border-white/10 flex items-center justify-between bg-black/20">
                                    <div className="flex items-center gap-3">
                                        <div className="w-3 h-3 rounded-full bg-red-500" />
                                        <div className="w-3 h-3 rounded-full bg-yellow-500" />
                                        <div className="w-3 h-3 rounded-full bg-green-500" />
                                    </div>
                                    <span className="text-xs font-medium text-gray-500 uppercase tracking-widest">AI Analysis Panel</span>
                                </div>

                                {/* Chat Area */}
                                <div className="p-6 space-y-6 bg-black/40 min-h-[400px] flex flex-col justify-end">
                                    <AnimatePresence mode='wait'>
                                        {step >= 1 && (
                                            <motion.div
                                                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                                exit={{ opacity: 0, y: -20 }}
                                                className="flex justify-end"
                                            >
                                                <div className="bg-ai-purple text-white px-4 py-3 rounded-2xl rounded-tr-sm max-w-[80%] shadow-lg shadow-ai-purple/20">
                                                    <p>What happens in the explosion scene?</p>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>

                                    <AnimatePresence mode='wait'>
                                        {step === 2 && (
                                            <motion.div
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, scale: 0.9 }}
                                                className="flex gap-3"
                                            >
                                                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-ai-purple to-pink-500 flex items-center justify-center shrink-0 animate-spin">
                                                    <Sparkles size={14} className="text-white" />
                                                </div>
                                                <div className="glass px-4 py-3 rounded-2xl rounded-tl-sm">
                                                    <span className="text-sm text-gray-400 animate-pulse">Analyzing video context...</span>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>

                                    <AnimatePresence mode='wait'>
                                        {step >= 3 && (
                                            <motion.div
                                                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                                className="flex gap-3"
                                            >
                                                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-ai-purple to-pink-500 flex items-center justify-center shrink-0">
                                                    <Sparkles size={14} className="text-white" />
                                                </div>
                                                <div className="glass px-4 py-3 rounded-2xl rounded-tl-sm max-w-[90%] space-y-2 border border-white/5">
                                                    <p className="text-gray-300">I've analyzed the scene. The main explosion occurs at <button className="text-ai-purple hover:underline font-medium">02:15</button>, triggered by the fuel tank rupture.</p>
                                                    <div className="flex gap-2 mt-2">
                                                        <span className="text-xs bg-white/5 px-2 py-1 rounded text-gray-400 border border-white/5">Action</span>
                                                        <span className="text-xs bg-white/5 px-2 py-1 rounded text-gray-400 border border-white/5">Fire</span>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>

                                {/* Input Area */}
                                <div className="p-4 border-t border-white/10 bg-black/20">
                                    <div className="flex gap-2 relative">
                                        <input
                                            type="text"
                                            placeholder="Ask about the video..."
                                            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm text-white focus:outline-none focus:border-ai-purple/50 transition-colors"
                                            disabled
                                        />
                                        <button className="p-2 bg-ai-purple rounded-lg text-white hover:bg-ai-purple/90 transition-colors">
                                            <Send size={18} />
                                        </button>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default AIShowcase;
