import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, Download, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isDark, setIsDark] = useState(true);
    const [activeLink, setActiveLink] = useState('');

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);

            // Determine active section
            const sections = ['features', 'ai', 'docs', 'download'];
            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= 100 && rect.bottom >= 100) {
                        setActiveLink(section);
                        break;
                    }
                }
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (isDark) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [isDark]);

    const toggleTheme = () => setIsDark(!isDark);

    const navLinks = [
        { name: 'Features', href: '#features' },
        { name: 'AI Intelligence', href: '#ai' },
        { name: 'Docs', href: '#docs' },
    ];

    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
                    ? 'backdrop-blur-premium py-3 border-b border-white/10 shadow-lg shadow-mint-500/5'
                    : 'bg-transparent py-5'
                }`}
            style={{
                background: isScrolled
                    ? 'linear-gradient(to bottom, rgba(17, 24, 39, 0.8), rgba(17, 24, 39, 0.6))'
                    : 'transparent'
            }}
        >
            {/* Gradient line at bottom */}
            {isScrolled && (
                <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.6 }}
                    className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-mint-500/50 to-transparent"
                />
            )}

            <div className="container mx-auto px-6 flex items-center justify-between relative">
                {/* Logo */}
                <motion.a
                    href="#"
                    className="flex items-center gap-2 group relative z-10"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <motion.div
                        className="w-10 h-10 bg-gradient-to-br from-mint-400 to-mint-600 rounded-xl flex items-center justify-center relative overflow-hidden"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                    >
                        {/* Animated shine effect */}
                        <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                            animate={{
                                x: ['-100%', '100%'],
                            }}
                            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        />
                        <Sparkles className="w-5 h-5 text-white relative z-10" />
                    </motion.div>
                    <span className="text-xl font-bold tracking-tight group-hover:text-mint-400 transition-colors">
                        Mint Player
                    </span>
                </motion.a>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link, index) => (
                        <motion.a
                            key={link.name}
                            href={link.href}
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 + 0.3 }}
                            className="text-gray-300 hover:text-mint-400 transition-colors relative group font-medium"
                            whileHover={{ scale: 1.05 }}
                        >
                            {link.name}
                            <motion.span
                                className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-mint-400 to-ai-blue rounded-full"
                                initial={{ width: 0 }}
                                whileHover={{ width: '100%' }}
                                transition={{ duration: 0.3 }}
                            />
                            {activeLink === link.href.substring(1) && (
                                <motion.span
                                    layoutId="activeLink"
                                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-mint-400 to-ai-blue rounded-full"
                                />
                            )}
                        </motion.a>
                    ))}
                </div>

                {/* Actions */}
                <div className="hidden md:flex items-center gap-4">
                    {/* Theme Toggle */}
                    <motion.button
                        onClick={toggleTheme}
                        whileHover={{ scale: 1.1, rotate: 180 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-2.5 rounded-full hover:bg-white/10 transition-colors text-gray-300 hover:text-white relative overflow-hidden group"
                    >
                        <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-mint-500/20 to-ai-blue/20 opacity-0 group-hover:opacity-100 rounded-full"
                            animate={{
                                scale: [1, 1.2, 1],
                            }}
                            transition={{ duration: 2, repeat: Infinity }}
                        />
                        {isDark ? <Sun size={20} className="relative z-10" /> : <Moon size={20} className="relative z-10" />}
                    </motion.button>

                    {/* Download Button */}
                    <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href="#download"
                        className="relative px-6 py-2.5 bg-gradient-to-r from-mint-500 to-ai-blue rounded-full font-semibold overflow-hidden group"
                    >
                        {/* Animated background */}
                        <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-mint-400 to-tech-blue"
                            animate={{
                                x: ['-100%', '100%'],
                            }}
                            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                        />

                        {/* Glow effect */}
                        <motion.div
                            className="absolute inset-0 blur-lg opacity-50"
                            animate={{
                                boxShadow: [
                                    '0 0 20px rgba(16, 185, 129, 0.5)',
                                    '0 0 30px rgba(16, 185, 129, 0.7)',
                                    '0 0 20px rgba(16, 185, 129, 0.5)',
                                ],
                            }}
                            transition={{ duration: 2, repeat: Infinity }}
                        />

                        <span className="relative z-10 flex items-center gap-2">
                            <Download size={18} />
                            <span>Get App</span>
                        </span>
                    </motion.a>
                </div>

                {/* Mobile Menu Button */}
                <motion.button
                    className="md:hidden p-2 text-gray-300 hover:text-white transition-colors relative z-10"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    whileTap={{ scale: 0.9 }}
                >
                    <AnimatePresence mode="wait">
                        {isMobileMenuOpen ? (
                            <motion.div
                                key="close"
                                initial={{ rotate: -90, opacity: 0 }}
                                animate={{ rotate: 0, opacity: 1 }}
                                exit={{ rotate: 90, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                            >
                                <X />
                            </motion.div>
                        ) : (
                            <motion.div
                                key="menu"
                                initial={{ rotate: 90, opacity: 0 }}
                                animate={{ rotate: 0, opacity: 1 }}
                                exit={{ rotate: -90, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                            >
                                <Menu />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden backdrop-blur-premium border-t border-white/10 overflow-hidden"
                        style={{
                            background: 'linear-gradient(to bottom, rgba(17, 24, 39, 0.9), rgba(17, 24, 39, 0.8))'
                        }}
                    >
                        <div className="p-6 flex flex-col gap-4">
                            {navLinks.map((link, index) => (
                                <motion.a
                                    key={link.name}
                                    href={link.href}
                                    initial={{ x: -20, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="text-lg text-gray-300 hover:text-mint-400 transition-colors font-medium"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </motion.a>
                            ))}
                            <div className="flex items-center justify-between pt-4 border-t border-white/10">
                                <motion.button
                                    onClick={toggleTheme}
                                    whileTap={{ scale: 0.9 }}
                                    className="flex items-center gap-2 text-gray-300 hover:text-white"
                                >
                                    {isDark ? <Sun size={20} /> : <Moon size={20} />}
                                    <span>{isDark ? 'Light Mode' : 'Dark Mode'}</span>
                                </motion.button>
                                <motion.a
                                    href="#download"
                                    whileTap={{ scale: 0.95 }}
                                    className="px-5 py-2 bg-gradient-to-r from-mint-500 to-ai-blue rounded-full font-medium text-white"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    Get App
                                </motion.a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;
