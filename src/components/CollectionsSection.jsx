import React from 'react';
import { FolderHeart, ListMusic, Grid, Plus } from 'lucide-react';
import { motion } from 'framer-motion';

const CollectionsSection = () => {
    return (
        <section className="py-24 relative">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center gap-12">

                    <div className="md:w-1/2">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            {/* Abstract representation of collections cards */}
                            <div className="glass-card p-6 rounded-2xl w-full max-w-md mx-auto transform rotate-3 hover:rotate-0 transition-transform duration-500 z-10 relative">
                                <div className="flex items-center justify-between mb-6">
                                    <h3 className="text-lg font-bold">My Favorites</h3>
                                    <span className="text-xs bg-brand-pink/20 text-brand-pink px-2 py-1 rounded">12 items</span>
                                </div>
                                <div className="grid grid-cols-2 gap-3">
                                    {[1, 2, 3, 4].map(i => (
                                        <div key={i} className="aspect-video bg-white/10 rounded-lg animate-pulse" />
                                    ))}
                                </div>
                            </div>

                            <div className="absolute top-4 -right-4 w-full h-full bg-brand-blue/10 rounded-2xl -z-10 transform rotate-6" />
                            <div className="absolute -top-4 -left-4 w-full h-full bg-brand-pink/10 rounded-2xl -z-10 transform -rotate-3" />
                        </motion.div>
                    </div>

                    <div className="md:w-1/2">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl md:text-5xl font-bold mb-6"
                        >
                            Smart <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-pink to-brand-blue">Collections</span>
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-gray-400 text-lg mb-8"
                        >
                            Organize your media your way. Create custom playlists for movies, music, and more with our intuitive collection system.
                        </motion.p>

                        <div className="space-y-6">
                            {[
                                { icon: <FolderHeart className="text-brand-pink" />, title: "Custom Playlists", desc: "Create unlimited collections for any mood or genre." },
                                { icon: <ListMusic className="text-brand-blue" />, title: "Smart Sorting", desc: "Automatically separates video and audio content." },
                                { icon: <Grid className="text-mint-400" />, title: "Visual Cards", desc: "Beautiful card-based interface for your libraries." },
                                { icon: <Plus className="text-white" />, title: "Quick Add", desc: "One-click to add files to any collection." },
                            ].map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="flex items-start gap-4"
                                >
                                    <div className="p-3 bg-white/5 rounded-xl shrink-0">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-white text-lg">{item.title}</h4>
                                        <p className="text-gray-400">{item.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default CollectionsSection;
