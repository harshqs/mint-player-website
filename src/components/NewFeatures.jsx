import React from 'react';
import { History, Keyboard, Play, Clock, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const NewFeatures = () => {
    return (
        <section className="py-24 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1/2 h-full bg-gradient-to-r from-brand-blue/10 to-transparent pointer-events-none" />

            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-blue/10 border border-brand-blue/20 mb-6"
                    >
                        <Zap size={16} className="text-brand-blue" />
                        <span className="text-sm font-medium text-brand-blue">New in v6.0.2</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold mb-4"
                    >
                        Two Game-Changing <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-pink to-brand-blue">Features</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-gray-400 max-w-2xl mx-auto"
                    >
                        We've added powerful features that transform how you interact with your media
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">

                    {/* Feature 1: Recent Files */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="glass-card p-8 rounded-2xl border-l-4 border-brand-pink group hover:shadow-2xl hover:shadow-brand-pink/10 transition-all duration-300"
                    >
                        <div className="flex items-start gap-4 mb-6">
                            <div className="p-3 bg-brand-pink/10 rounded-xl group-hover:scale-110 transition-transform duration-300">
                                <History className="w-8 h-8 text-brand-pink" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold mb-2">Recent Files & Smart Resume</h3>
                                <p className="text-sm text-gray-400">Never lose your place again</p>
                            </div>
                        </div>

                        <div className="space-y-4 mb-6">
                            <div className="flex items-start gap-3">
                                <Play size={16} className="text-brand-pink mt-1 shrink-0" />
                                <div>
                                    <p className="text-white font-medium">Automatic Progress Tracking</p>
                                    <p className="text-sm text-gray-400">Your position is saved every 10 seconds</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <Clock size={16} className="text-brand-pink mt-1 shrink-0" />
                                <div>
                                    <p className="text-white font-medium">One-Click Resume</p>
                                    <p className="text-sm text-gray-400">Pick up exactly where you left off</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <History size={16} className="text-brand-pink mt-1 shrink-0" />
                                <div>
                                    <p className="text-white font-medium">Visual Progress Bars</p>
                                    <p className="text-sm text-gray-400">See your watch percentage at a glance</p>
                                </div>
                            </div>
                        </div>

                        <div className="glass p-4 rounded-xl border border-brand-pink/10">
                            <p className="text-xs text-gray-400 mb-2">What you get:</p>
                            <ul className="text-sm text-gray-300 space-y-1">
                                <li>✓ Up to 20 recent files stored</li>
                                <li>✓ Smart timestamps (Just now, 5m ago, etc.)</li>
                                <li>✓ Continue Watching section on home</li>
                            </ul>
                        </div>
                    </motion.div>

                    {/* Feature 2: Keyboard Shortcuts */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="glass-card p-8 rounded-2xl border-l-4 border-brand-blue group hover:shadow-2xl hover:shadow-brand-blue/10 transition-all duration-300"
                    >
                        <div className="flex items-start gap-4 mb-6">
                            <div className="p-3 bg-brand-blue/10 rounded-xl group-hover:scale-110 transition-transform duration-300">
                                <Keyboard className="w-8 h-8 text-brand-blue" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold mb-2">Customizable Shortcuts</h3>
                                <p className="text-sm text-gray-400">Control playback your way</p>
                            </div>
                        </div>

                        <div className="space-y-4 mb-6">
                            <div className="flex items-start gap-3">
                                <Keyboard size={16} className="text-brand-blue mt-1 shrink-0" />
                                <div>
                                    <p className="text-white font-medium">Full Customization</p>
                                    <p className="text-sm text-gray-400">Change any shortcut to your preference</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <Zap size={16} className="text-brand-blue mt-1 shrink-0" />
                                <div>
                                    <p className="text-white font-medium">Quick Reference (Press ?)</p>
                                    <p className="text-sm text-gray-400">See all shortcuts in a beautiful overlay</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <Clock size={16} className="text-brand-blue mt-1 shrink-0" />
                                <div>
                                    <p className="text-white font-medium">Persistent Preferences</p>
                                    <p className="text-sm text-gray-400">Your shortcuts saved across sessions</p>
                                </div>
                            </div>
                        </div>

                        <div className="glass p-4 rounded-xl border border-brand-blue/10">
                            <p className="text-xs text-gray-400 mb-2">Default shortcuts:</p>
                            <div className="grid grid-cols-2 gap-2 text-sm text-gray-300">
                                <div className="flex justify-between">
                                    <span>Play/Pause</span>
                                    <code className="bg-white/5 px-2 py-0.5 rounded text-brand-blue">Space</code>
                                </div>
                                <div className="flex justify-between">
                                    <span>Fullscreen</span>
                                    <code className="bg-white/5 px-2 py-0.5 rounded text-brand-blue">F</code>
                                </div>
                                <div className="flex justify-between">
                                    <span>Seek ±5s</span>
                                    <code className="bg-white/5 px-2 py-0.5 rounded text-brand-blue">← →</code>
                                </div>
                                <div className="flex justify-between">
                                    <span>Volume</span>
                                    <code className="bg-white/5 px-2 py-0.5 rounded text-brand-blue">↑ ↓</code>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                </div>

                {/* Call to Action */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mt-12"
                >
                    <p className="text-gray-400 mb-4">Experience these features and more</p>
                    <motion.a
                        href="#download"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-brand-pink to-brand-blue rounded-full font-bold text-white shadow-lg shadow-brand-pink/25"
                    >
                        Download v6.0.2 Now
                        <Zap size={20} />
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
};

export default NewFeatures;
