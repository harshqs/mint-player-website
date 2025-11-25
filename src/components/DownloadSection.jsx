import React from 'react';
import { Monitor, Hammer, Download, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const DownloadSection = () => {
    return (
        <section id="download" className="py-24 relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-transparent via-mint-900/10 to-transparent pointer-events-none" />
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.1, 0.2, 0.1],
                }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-mint-500/10 rounded-full blur-[100px] pointer-events-none"
            />

            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-mint-500/10 border border-mint-500/20 mb-6"
                >
                    <span className="w-2 h-2 rounded-full bg-mint-500 animate-pulse" />
                    <span className="text-sm font-medium text-mint-400">Latest Version 2.0.6</span>
                </motion.div>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-3xl md:text-5xl font-bold mb-8"
                >
                    Ready to <span className="text-gradient">Experience It?</span>
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto"
                >
                    Download Mint Player today and transform how you interact with your media library.
                </motion.p>

                <div className="flex flex-col md:flex-row items-center justify-center gap-6 max-w-4xl mx-auto">

                    {/* Windows Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6 }}
                        whileHover={{ y: -10 }}
                        className="glass-card p-8 rounded-2xl w-full md:w-1/3 relative group overflow-hidden border-mint-500/30 shadow-lg shadow-mint-500/10"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-mint-500/10 to-ai-blue/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        <div className="relative z-10 flex flex-col items-center">
                            <div className="w-16 h-16 bg-gradient-to-br from-mint-500 to-ai-blue rounded-2xl flex items-center justify-center mb-6 text-white shadow-lg shadow-mint-500/20 group-hover:scale-110 transition-transform duration-300">
                                <Monitor size={32} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">Windows</h3>
                            <p className="text-sm text-gray-400 mb-6">Windows 10/11 (64-bit)</p>

                            <a
                                href="https://github.com/harshqs/mint-player-website/releases/download/v3.0.0/Mint-Player-Setup-3.0.0.exe"
                                className="w-full py-3 rounded-xl bg-gradient-to-r from-mint-500 to-ai-blue font-bold text-white hover:shadow-lg hover:shadow-mint-500/25 transition-all flex items-center justify-center gap-2 group/btn"
                                download
                            >
                                <Download size={18} />
                                Download .exe
                                <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                            </a>
                        </div>
                    </motion.div>

                    {/* Linux Deb Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.7 }}
                        className="glass-card p-8 rounded-2xl w-full md:w-1/3 opacity-75 grayscale hover:grayscale-0 transition-all hover:opacity-100"
                    >
                        <div className="flex flex-col items-center">
                            <div className="w-16 h-16 bg-gray-700/50 rounded-2xl flex items-center justify-center mb-6 text-gray-400">
                                <Hammer size={32} />
                            </div>
                            <h3 className="text-xl font-bold text-gray-300 mb-2">Linux .deb</h3>
                            <p className="text-sm text-gray-500 mb-6">Debian / Ubuntu</p>

                            <button disabled className="w-full py-3 rounded-xl bg-gray-800 border border-gray-700 text-gray-400 cursor-not-allowed flex items-center justify-center gap-2">
                                <Hammer size={16} />
                                <span>Under Construction</span>
                            </button>
                        </div>
                    </motion.div>

                    {/* Linux RPM Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.8 }}
                        className="glass-card p-8 rounded-2xl w-full md:w-1/3 opacity-75 grayscale hover:grayscale-0 transition-all hover:opacity-100"
                    >
                        <div className="flex flex-col items-center">
                            <div className="w-16 h-16 bg-gray-700/50 rounded-2xl flex items-center justify-center mb-6 text-gray-400">
                                <Hammer size={32} />
                            </div>
                            <h3 className="text-xl font-bold text-gray-300 mb-2">Linux .rpm</h3>
                            <p className="text-sm text-gray-500 mb-6">Fedora / Red Hat</p>

                            <button disabled className="w-full py-3 rounded-xl bg-gray-800 border border-gray-700 text-gray-400 cursor-not-allowed flex items-center justify-center gap-2">
                                <Hammer size={16} />
                                <span>Coming Soon</span>
                            </button>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default DownloadSection;
