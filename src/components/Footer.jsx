import React from 'react';

const Footer = () => {
    return (
        <footer className="py-8 border-t border-white/5 bg-black/40">
            <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-gradient-to-br from-mint-400 to-mint-500 rounded-md" />
                    <span className="font-bold text-gray-300">Mint Player</span>
                </div>

                <div className="text-sm text-gray-500">
                    &copy; {new Date().getFullYear()} Mint Player. All rights reserved.
                </div>

                <div className="flex gap-6 text-sm text-gray-400">
                    <a href="#" className="hover:text-mint-400 transition-colors">Privacy</a>
                    <a href="#" className="hover:text-mint-400 transition-colors">Terms</a>
                    <a href="#" className="hover:text-mint-400 transition-colors">Contact</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
