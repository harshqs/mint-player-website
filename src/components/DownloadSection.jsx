import React, { useRef, useState, useCallback, memo } from 'react';
import { Monitor, Hammer, Download, ArrowRight, Sparkles, CheckCircle } from 'lucide-react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

const DownloadCard = memo(({ platform, icon: Icon, description, downloadLink, available = true, delay }) => {
    const cardRef = useRef(null);
    const [isHovered, setIsHovered] = useState(false);

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [5, -5]), { damping: 20, stiffness: 200 });
    const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-5, 5]), { damping: 20, stiffness: 200 });

    const handleMouseMove = useCallback((e) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        mouseX.set((e.clientX - centerX) / (rect.width / 2));
        mouseY.set((e.clientY - centerY) / (rect.height / 2));
    }, [mouseX, mouseY]);

    const handleMouseLeave = useCallback(() => {
        mouseX.set(0);
        mouseY.set(0);
        setIsHovered(false);
    }, [mouseX, mouseY]);

    return (
        <motion.div
            ref={cardRef}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay, duration: 0.5 }}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateX: available ? rotateX : 0,
                rotateY: available ? rotateY : 0,
                transformStyle: 'preserve-3d',
            }}
            className={`relative glass-card p-8 rounded-2xl w-full md:w-1/3 overflow-hidden border-2 
                ${available ? 'border-mint-500/30 shadow-xl shadow-mint-500/10' : 'opacity-60 grayscale hover:grayscale-0 border-white/10'}
                transition-all duration-500`}
        >
            {/* Holographic Background Effect */}
            {available && isHovered && (
                <motion.div
                    className="absolute inset-0 holographic opacity-30"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.3 }}
                />
            )}

            {/* Shimmer Effect */}
            {available && (
                <motion.div
                    className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity"
                    style={{
                        background: 'linear-gradient(135deg, transparent 0%, rgba(16, 185, 129, 0.1) 50%, transparent 100%)',
                        backgroundSize: '200% 200%',
                    }}
                    animate={{
                        backgroundPosition: ['0% 0%', '100% 100%'],
                    }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                />
            )}

            <div className="relative z-10 flex flex-col items-center" style={{ transform: 'translateZ(20px)' }}>
                {/* Icon */}
                <motion.div
                    animate={available && isHovered ? {
                        scale: [1, 1.1, 1],
                        rotate: [0, 5, -5, 0]
                    } : {}}
                    transition={{ duration: 0.5 }}
                    className={`w-20 h-20 rounded-2xl flex items-center justify-center mb-6 text-white shadow-lg relative
                        ${available ? 'bg-gradient-to-br from-mint-500 to-ai-blue shadow-mint-500/30' : 'bg-gray-700/50 text-gray-400'}`}
                >
                    {available && (
                        <motion.div
                            className="absolute inset-0 rounded-2xl"
                            animate={{
                                boxShadow: [
                                    '0 0 20px rgba(16, 185, 129, 0.3)',
                                    '0 0 30px rgba(16, 185, 129, 0.5)',
                                    '0 0 20px rgba(16, 185, 129, 0.3)',
                                ],
                            }}
                            transition={{ duration: 2, repeat: Infinity }}
                        />
                    )}
                    <Icon size={36} />
                </motion.div>

                {/* Platform Name */}
                <h3 className={`text-2xl font-bold mb-2 ${available ? 'text-white' : 'text-gray-400'}`}>
                    {platform}
                </h3>

                {/* Description */}
                <p className={`text-sm mb-8 ${available ? 'text-gray-400' : 'text-gray-500'}`}>
                    {description}
                </p>

                {/* Download Button */}
                {available ? (
                    <motion.a
                        href={downloadLink}
                        download
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="relative w-full py-4 rounded-xl bg-gradient-to-r from-mint-500 to-ai-blue font-bold text-white overflow-hidden group"
                    >
                        {/* Ripple Effect Background */}
                        <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-mint-400 to-tech-blue"
                            initial={{ scale: 0, opacity: 0 }}
                            whileHover={{ scale: 2, opacity: 0.3 }}
                            transition={{ duration: 0.6 }}
                        />

                        <span className="relative z-10 flex items-center justify-center gap-3">
                            <Download size={20} />
                            Download {platform === 'Windows' ? '.exe' : platform}
                            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </span>
                    </motion.a>
                ) : (
                    <button
                        disabled
                        className="w-full py-4 rounded-xl bg-gray-800 border border-gray-700 text-gray-400 cursor-not-allowed flex items-center justify-center gap-2"
                    >
                        <Hammer size={18} />
                        <span>{platform.includes('.deb') ? 'Under Construction' : 'Coming Soon'}</span>
                    </button>
                )}
            </div>

            {/* Corner Accents */}
            {available && (
                <>
                    <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-mint-500/20 to-transparent rounded-bl-full" />
                    <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-ai-blue/20 to-transparent rounded-tr-full" />
                </>
            )}
        </motion.div>
    );
});

DownloadCard.displayName = 'DownloadCard';

const DownloadSection = memo(() => {
    return (
        <section id="download" className="py-32 relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-transparent via-mint-900/10 to-transparent pointer-events-none" />

            {/* Animated Orbs */}
            <motion.div
                animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.1, 0.25, 0.1],
                    rotate: [0, 180, 360],
                }}
                transition={{ duration: 15, repeat: Infinity }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-mint-500/10 rounded-full blur-[150px] pointer-events-none will-change-transform"
            />

            {/* Floating Particles - Optimized count */}
            {[...Array(5)].map((_, i) => (
                <motion.div
                    key={i}
                    animate={{
                        y: [0, -40, 0],
                        opacity: [0, 0.5, 0],
                    }}
                    transition={{
                        duration: 4 + Math.random() * 3,
                        repeat: Infinity,
                        delay: Math.random() * 5,
                    }}
                    className="absolute w-2 h-2 bg-mint-400 rounded-full will-change-transform"
                    style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                    }}
                />
            ))}

            <div className="container mx-auto px-6 relative z-10 text-center">
                {/* Version Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-mint-500/10 border border-mint-500/20 mb-8 hover-3d"
                >
                    <motion.span
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="w-2.5 h-2.5 rounded-full bg-mint-500"
                    />
                    <Sparkles size={16} className="text-mint-400" />
                    <span className="text-sm font-semibold text-mint-400">Latest Version 5.0.9</span>
                    <CheckCircle size={16} className="text-mint-400" />
                </motion.div>

                {/* Heading */}
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-4xl md:text-6xl font-bold mb-6"
                >
                    Ready to <span className="text-gradient">Experience It?</span>
                </motion.h2>

                {/* Subheading */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="text-xl md:text-2xl text-gray-400 mb-16 max-w-3xl mx-auto"
                >
                    Download Mint Player today and <span className="text-mint-400 font-semibold">transform</span> how you interact with your media library.
                </motion.p>

                {/* Download Cards */}
                <div className="flex flex-col md:flex-row items-center justify-center gap-8 max-w-6xl mx-auto perspective-1000">
                    <DownloadCard
                        platform="Windows"
                        icon={Monitor}
                        description="Windows 10/11 (64-bit)"
                        downloadLink="https://github.com/harshqs/mint-player-website/releases/download/v5.0.9/Mint-Player-Setup-5.0.9.exe"
                        available={true}
                        delay={0.6}
                    />
                    <DownloadCard
                        platform="Linux .deb"
                        icon={Hammer}
                        description="Debian / Ubuntu"
                        available={false}
                        delay={0.7}
                    />
                    <DownloadCard
                        platform="Linux .rpm"
                        icon={Hammer}
                        description="Fedora / Red Hat"
                        available={false}
                        delay={0.8}
                    />
                </div>
            </div>
        </section>
    );
});

DownloadSection.displayName = 'DownloadSection';

export default DownloadSection;
