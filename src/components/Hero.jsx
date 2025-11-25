import React from 'react';
import { Play, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
            {/* Background Elements */}
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.2, 0.3, 0.2],
                }}
                transition={{ duration: 8, repeat: Infinity }}
                className="absolute top-1/4 left-1/4 w-96 h-96 bg-mint-500/20 rounded-full blur-[128px]"
            />
            <motion.div
                animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.2, 0.3, 0.2],
                }}
                transition={{ duration: 10, repeat: Infinity, delay: 1 }}
                className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-ai-purple/20 rounded-full blur-[128px]"
            />

            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8"
                >
                    <span className="w-2 h-2 rounded-full bg-mint-500 animate-pulse" />
                    <span className="text-sm font-medium text-mint-400">v2.0 Now Available</span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-5xl md:text-7xl font-bold mb-6 tracking-tight"
                >
                    Media Intelligence <br />
                    <span className="text-gradient">Reimagined</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed"
                >
                    A cinematic media player powered by Gemini AI. Experience strict typing, smart folders, and a beautiful glassmorphic UI that adapts to your workflow.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href="#download"
                        className="px-8 py-4 bg-gradient-to-r from-mint-500 to-ai-blue rounded-full font-bold text-lg hover:shadow-lg hover:shadow-mint-500/25 transition-all flex items-center gap-2 group text-white"
                    >
                        Download Now
                        <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                    </motion.a>
                    <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href="#features"
                        className="px-8 py-4 glass rounded-full font-bold text-lg hover:bg-white/20 transition-all flex items-center gap-2 text-white"
                    >
                        <Play size={20} className="fill-current" />
                        Explore Features
                    </motion.a>
                </motion.div>

                {/* Hero Image / Mockup Placeholder */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="mt-20 relative mx-auto max-w-5xl"
                >
                    <motion.div
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                        className="aspect-video glass rounded-2xl border border-white/10 overflow-hidden shadow-2xl relative group"
                    >
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent z-10" />
                        {/* Abstract UI representation */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-center">
                                <motion.div
                                    whileHover={{ scale: 1.1 }}
                                    className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-md mb-4 mx-auto cursor-pointer border border-white/20"
                                >
                                    <Play size={32} className="fill-white text-white ml-1" />
                                </motion.div>
                                <p className="text-sm text-gray-400 font-medium tracking-widest uppercase">Cinematic Experience</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Decorative elements */}
                    <div className="absolute -bottom-10 -left-10 w-24 h-24 bg-mint-500/30 rounded-full blur-2xl animate-pulse" />
                    <div className="absolute -top-10 -right-10 w-32 h-32 bg-ai-purple/30 rounded-full blur-2xl animate-pulse delay-700" />
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
