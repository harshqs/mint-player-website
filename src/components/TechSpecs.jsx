import React from 'react';
import { Cpu, HardDrive, Monitor, Zap, Shield, Code } from 'lucide-react';
import { motion } from 'framer-motion';

const TechSpecs = () => {
    return (
        <section className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold mb-4"
                    >
                        Under the <span className="text-brand-blue">Hood</span>
                    </motion.h2>
                    <p className="text-gray-400">Built with modern technology for maximum performance.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="glass p-6 rounded-2xl text-center"
                    >
                        <div className="w-16 h-16 bg-brand-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Zap className="text-brand-blue w-8 h-8" />
                        </div>
                        <h3 className="text-2xl font-bold mb-2 text-white">Lightning Fast</h3>
                        <p className="text-gray-400">Startup time &lt; 2 seconds</p>
                        <p className="text-gray-400">Low memory footprint (~100MB)</p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="glass p-6 rounded-2xl text-center"
                    >
                        <div className="w-16 h-16 bg-brand-pink/10 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Shield className="text-brand-pink w-8 h-8" />
                        </div>
                        <h3 className="text-2xl font-bold mb-2 text-white">Secure & Private</h3>
                        <p className="text-gray-400">No tracking or analytics</p>
                        <p className="text-gray-400">Verified code signing</p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="glass p-6 rounded-2xl text-center"
                    >
                        <div className="w-16 h-16 bg-mint-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Code className="text-mint-500 w-8 h-8" />
                        </div>
                        <h3 className="text-2xl font-bold mb-2 text-white">Modern Stack</h3>
                        <p className="text-gray-400">Electron + React + Vite</p>
                        <p className="text-gray-400">TypeScript + Tailwind CSS</p>
                    </motion.div>
                </div>

                <div className="glass-card p-8 rounded-2xl max-w-4xl mx-auto">
                    <h3 className="text-xl font-bold mb-6 text-center">System Requirements</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <h4 className="font-bold text-brand-pink mb-4 flex items-center gap-2">
                                <Monitor size={18} /> Minimum
                            </h4>
                            <ul className="space-y-2 text-gray-400 text-sm">
                                <li className="flex justify-between border-b border-white/5 pb-2">
                                    <span>OS</span> <span>Windows 10, Ubuntu 18.04</span>
                                </li>
                                <li className="flex justify-between border-b border-white/5 pb-2">
                                    <span>RAM</span> <span>4GB</span>
                                </li>
                                <li className="flex justify-between border-b border-white/5 pb-2">
                                    <span>Storage</span> <span>200MB free space</span>
                                </li>
                                <li className="flex justify-between pb-2">
                                    <span>Display</span> <span>1280x720</span>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold text-brand-blue mb-4 flex items-center gap-2">
                                <Cpu size={18} /> Recommended
                            </h4>
                            <ul className="space-y-2 text-gray-400 text-sm">
                                <li className="flex justify-between border-b border-white/5 pb-2">
                                    <span>OS</span> <span>Windows 11, Ubuntu 22.04+</span>
                                </li>
                                <li className="flex justify-between border-b border-white/5 pb-2">
                                    <span>RAM</span> <span>8GB+</span>
                                </li>
                                <li className="flex justify-between border-b border-white/5 pb-2">
                                    <span>Storage</span> <span>500MB free space</span>
                                </li>
                                <li className="flex justify-between pb-2">
                                    <span>Display</span> <span>1920x1080+</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default TechSpecs;
