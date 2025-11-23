import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, Download } from 'lucide-react';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isDark, setIsDark] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
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

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass py-3' : 'bg-transparent py-5'}`}>
            <div className="container mx-auto px-6 flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-gradient-to-br from-mint-400 to-mint-500 rounded-lg flex items-center justify-center">
                        <div className="w-3 h-3 bg-white rounded-full animate-pulse" />
                    </div>
                    <span className="text-xl font-bold tracking-tight">Mint Player</span>
                </div>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-8">
                    <a href="#features" className="text-gray-300 hover:text-mint-400 transition-colors">Features</a>
                    <a href="#ai" className="text-gray-300 hover:text-ai-purple transition-colors">AI Intelligence</a>
                    <a href="#docs" className="text-gray-300 hover:text-tech-blue transition-colors">Docs</a>
                </div>

                {/* Actions */}
                <div className="hidden md:flex items-center gap-4">
                    <button
                        onClick={toggleTheme}
                        className="p-2 rounded-full hover:bg-white/10 transition-colors text-gray-300 hover:text-white"
                    >
                        {isDark ? <Sun size={20} /> : <Moon size={20} />}
                    </button>
                    <a
                        href="#download"
                        className="px-5 py-2 bg-gradient-to-r from-mint-500 to-ai-blue rounded-full font-medium hover:opacity-90 transition-opacity flex items-center gap-2"
                    >
                        <Download size={18} />
                        <span>Get App</span>
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden p-2 text-gray-300"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 right-0 glass border-t border-white/10 p-6 flex flex-col gap-4 animate-in slide-in-from-top-5">
                    <a href="#features" className="text-lg text-gray-300" onClick={() => setIsMobileMenuOpen(false)}>Features</a>
                    <a href="#ai" className="text-lg text-gray-300" onClick={() => setIsMobileMenuOpen(false)}>AI Intelligence</a>
                    <a href="#docs" className="text-lg text-gray-300" onClick={() => setIsMobileMenuOpen(false)}>Docs</a>
                    <div className="flex items-center justify-between pt-4 border-t border-white/10">
                        <button onClick={toggleTheme} className="flex items-center gap-2 text-gray-300">
                            {isDark ? <Sun size={20} /> : <Moon size={20} />}
                            <span>{isDark ? 'Light Mode' : 'Dark Mode'}</span>
                        </button>
                        <a href="#download" className="px-5 py-2 bg-mint-500 rounded-full font-medium">Get App</a>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
