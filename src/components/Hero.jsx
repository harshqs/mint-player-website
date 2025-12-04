import React, { useRef, useState, useCallback, memo } from 'react';
import { Play, ArrowRight, Sparkles, Zap } from 'lucide-react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

const Hero = memo(() => {
    const heroRef = useRef(null);
    const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springConfig = { damping: 25, stiffness: 150 };
    const x = useSpring(mouseX, springConfig);
    const y = useSpring(mouseY, springConfig);

    const handleMouseMove = useCallback((e) => {
        if (!heroRef.current) return;
        const rect = heroRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        mouseX.set((e.clientX - centerX) / 20);
        mouseY.set((e.clientY - centerY) / 20);

        setMousePosition({
            x: ((e.clientX - rect.left) / rect.width) * 100,
            y: ((e.clientY - rect.top) / rect.height) * 100
        });
    }, [mouseX, mouseY]);

    return (
        <section
            ref={heroRef}
            onMouseMove={handleMouseMove}
            className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden particle-bg"
        >
            {/* Animated Mesh Gradient Background */}
            <div className="absolute inset-0 opacity-30">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 90, 0],
                    }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute top-0 left-0 w-full h-full"
                    style={{
                        background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(219, 39, 119, 0.2) 0%, transparent 50%)`
                    }}
                />
            </div>

            {/* Background Elements with Enhanced Animation */}
            <motion.div
                animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.15, 0.4, 0.15],
                    rotate: [0, 180, 360],
                }}
                transition={{ duration: 15, repeat: Infinity }}
                className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-brand-pink/20 rounded-full blur-[150px] will-change-transform"
            />
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.15, 0.35, 0.15],
                    rotate: [360, 180, 0],
                }}
                transition={{ duration: 18, repeat: Infinity, delay: 2 }}
                className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-brand-blue/20 rounded-full blur-[150px] will-change-transform"
            />

            {/* Floating Particles - Optimized count */}
            {[...Array(8)].map((_, i) => (
                <motion.div
                    key={i}
                    animate={{
                        y: [0, -30, 0],
                        x: [0, Math.random() * 20 - 10, 0],
                        opacity: [0, 1, 0],
                    }}
                    transition={{
                        duration: 3 + Math.random() * 4,
                        repeat: Infinity,
                        delay: Math.random() * 5,
                    }}
                    className="absolute w-1 h-1 bg-brand-pink rounded-full will-change-transform"
                    style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                    }}
                />
            ))}

            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass mb-8 border border-brand-pink/20 hover-3d"
                >
                    <motion.span
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="w-2 h-2 rounded-full bg-brand-pink"
                    />
                    <Sparkles size={14} className="text-brand-pink" />
                    <span className="text-sm font-medium text-brand-pink">v6.0.2 Now Available</span>
                    <Zap size={14} className="text-brand-blue" />
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight"
                    style={{ x, y }}
                >
                    The Future of <br />
                    <motion.span
                        className="text-transparent bg-clip-text bg-gradient-to-r from-brand-pink to-brand-blue inline-block"
                        animate={{
                            backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                        }}
                        transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                        style={{
                            backgroundSize: '200% 200%',
                        }}
                    >
                        Media Playback
                    </motion.span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed"
                >
                    A premium, cinematic experience with <span className="text-brand-pink font-semibold">Recent Files</span>, <span className="text-brand-blue font-semibold">Smart Resume</span>, and <span className="text-mint-400 font-semibold">Customizable Shortcuts</span>. <br className="hidden md:block" />
                    Never lose your place. Control your way.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-6"
                >
                    <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href="#download"
                        className="group relative px-10 py-5 bg-gradient-to-r from-brand-pink to-brand-blue rounded-full font-bold text-lg overflow-hidden text-white shadow-lg shadow-brand-pink/25 magnetic-button"
                    >
                        <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-brand-pink to-brand-blue opacity-0 group-hover:opacity-100 transition-opacity"
                            animate={{
                                x: ['-100%', '100%'],
                            }}
                            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                        />
                        <span className="relative z-10 flex items-center gap-3">
                            Download Now
                            <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                        </span>
                    </motion.a>
                    <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href="#features"
                        className="px-10 py-5 glass rounded-full font-bold text-lg hover:bg-white/10 transition-all flex items-center gap-3 text-white border border-white/10 magnetic-button"
                    >
                        <Play size={20} className="fill-current" />
                        Explore Features
                    </motion.a>
                </motion.div>

                {/* Hero Mockup with 3D Tilt */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="mt-24 relative mx-auto max-w-6xl perspective-1000"
                >
                    <motion.div
                        animate={{
                            y: [0, -15, 0],
                        }}
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                        style={{
                            rotateX: useTransform(y, [-50, 50], [5, -5]),
                            rotateY: useTransform(x, [-50, 50], [-5, 5]),
                        }}
                        className="relative aspect-video glass rounded-3xl border-2 overflow-hidden shadow-2xl group gradient-border"
                    >
                        {/* Holographic Effect */}
                        <div className="absolute inset-0 holographic opacity-50" />

                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent z-10" />

                        {/* Grid Pattern */}
                        <div className="absolute inset-0 opacity-10"
                            style={{
                                backgroundImage: `linear-gradient(rgba(219, 39, 119, 0.5) 1px, transparent 1px),
                                                  linear-gradient(90deg, rgba(59, 130, 246, 0.5) 1px, transparent 1px)`,
                                backgroundSize: '50px 50px'
                            }}
                        />

                        {/* Center Play Button */}
                        <div className="absolute inset-0 flex items-center justify-center z-20">
                            <motion.div
                                whileHover={{ scale: 1.2, rotate: 90 }}
                                whileTap={{ scale: 0.9 }}
                                className="w-24 h-24 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-xl cursor-pointer border-2 border-white/20 hover-3d group"
                                animate={{
                                    boxShadow: [
                                        '0 0 20px rgba(219, 39, 119, 0.3)',
                                        '0 0 40px rgba(219, 39, 119, 0.6)',
                                        '0 0 20px rgba(219, 39, 119, 0.3)',
                                    ]
                                }}
                                transition={{ duration: 2, repeat: Infinity }}
                            >
                                <Play size={36} className="fill-white text-white ml-1 group-hover:fill-brand-pink" />
                            </motion.div>
                        </div>

                        {/* Stats Overlay */}
                        <div className="absolute bottom-6 left-6 right-6 flex justify-between items-center z-20">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 1.2 }}
                                className="glass px-4 py-2 rounded-xl border border-white/10"
                            >
                                <p className="text-xs text-gray-400">QUALITY</p>
                                <p className="text-sm font-bold text-brand-pink">4K Ultra HD</p>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 1.4 }}
                                className="glass px-4 py-2 rounded-xl border border-white/10"
                            >
                                <p className="text-xs text-gray-400">EXPERIENCE</p>
                                <p className="text-sm font-bold text-brand-blue">Cinematic</p>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Decorative Glow Elements */}
                    <motion.div
                        animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.3, 0.6, 0.3],
                        }}
                        transition={{ duration: 3, repeat: Infinity }}
                        className="absolute -bottom-20 -left-20 w-40 h-40 bg-brand-pink/30 rounded-full blur-3xl"
                    />
                    <motion.div
                        animate={{
                            scale: [1, 1.3, 1],
                            opacity: [0.3, 0.5, 0.3],
                        }}
                        transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
                        className="absolute -top-20 -right-20 w-48 h-48 bg-brand-blue/30 rounded-full blur-3xl"
                    />
                </motion.div>
            </div>
        </section>
    );
});

Hero.displayName = 'Hero';

export default Hero;
