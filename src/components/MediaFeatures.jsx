import React from 'react';
import { Play, Film, Music, Settings, Maximize, Repeat, Volume2, FastForward } from 'lucide-react';
import { motion } from 'framer-motion';

const MediaFeatures = () => {
    return (
        <section className="py-24 bg-black/20">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row gap-16 items-start">

                    {/* Left Side: Formats */}
                    <div className="lg:w-1/2">
                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl md:text-4xl font-bold mb-8"
                        >
                            Play <span className="text-brand-pink">Anything</span>
                        </motion.h2>

                        <div className="space-y-8">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="glass p-6 rounded-2xl border-l-4 border-brand-blue"
                            >
                                <div className="flex items-center gap-3 mb-4">
                                    <Film className="text-brand-blue" />
                                    <h3 className="text-xl font-bold">Video Formats</h3>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {['MP4', 'MKV', 'AVI', 'MOV', 'WebM', 'FLV', 'M4V', 'WMV', '3GP', 'MPG'].map((fmt) => (
                                        <span key={fmt} className="px-3 py-1 bg-brand-blue/10 text-brand-blue rounded-full text-sm font-medium border border-brand-blue/20">
                                            {fmt}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="glass p-6 rounded-2xl border-l-4 border-brand-pink"
                            >
                                <div className="flex items-center gap-3 mb-4">
                                    <Music className="text-brand-pink" />
                                    <h3 className="text-xl font-bold">Audio Formats</h3>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {['MP3', 'WAV', 'FLAC', 'AAC', 'OGG', 'M4A', 'WMA', 'Opus', 'APE'].map((fmt) => (
                                        <span key={fmt} className="px-3 py-1 bg-brand-pink/10 text-brand-pink rounded-full text-sm font-medium border border-brand-pink/20">
                                            {fmt}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    </div>

                    {/* Right Side: Controls */}
                    <div className="lg:w-1/2">
                        <motion.h2
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl md:text-4xl font-bold mb-8"
                        >
                            Total <span className="text-brand-blue">Control</span>
                        </motion.h2>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {[
                                { icon: <Play size={20} />, label: "Intuitive Playback", desc: "Play, pause, and seek with ease." },
                                { icon: <Volume2 size={20} />, label: "Precise Volume", desc: "Fine-tuned volume adjustment." },
                                { icon: <FastForward size={20} />, label: "Speed Control", desc: "0.25x to 2x playback speed." },
                                { icon: <Repeat size={20} />, label: "Loop & Repeat", desc: "Repeat your favorite content." },
                                { icon: <Maximize size={20} />, label: "Fullscreen", desc: "Immersive viewing experience." },
                                { icon: <Settings size={20} />, label: "Advanced Options", desc: "Chapters, subtitles, and tracks." },
                            ].map((feature, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.05 }}
                                    className="p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors border border-white/5"
                                >
                                    <div className="mb-3 text-gray-300">{feature.icon}</div>
                                    <h4 className="font-bold text-white mb-1">{feature.label}</h4>
                                    <p className="text-sm text-gray-400">{feature.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default MediaFeatures;
