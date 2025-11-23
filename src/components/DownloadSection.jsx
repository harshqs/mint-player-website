import React from 'react';
import { Monitor, Hammer } from 'lucide-react';

const DownloadSection = () => {
    return (
        <section id="download" className="py-24 relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-transparent via-mint-900/10 to-transparent pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10 text-center">
                <h2 className="text-3xl md:text-5xl font-bold mb-8">
                    Ready to <span className="text-gradient">Experience It?</span>
                </h2>
                <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
                    Download Mint Player today and transform how you interact with your media library.
                </p>

                <div className="flex flex-col md:flex-row items-center justify-center gap-6 max-w-4xl mx-auto">

                    {/* Windows Card */}
                    <div className="glass-card p-8 rounded-2xl w-full md:w-1/3 relative group overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        <div className="relative z-10 flex flex-col items-center">
                            <div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center mb-6 text-blue-400">
                                <Monitor size={32} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">Windows</h3>
                            <p className="text-sm text-gray-400 mb-6">Windows 10/11 (64-bit)</p>

                            <a
                                href="https://github.com/harshqs/mint-player-website/releases/download/v.2.0.6/Mint.Player.Setup.2.0.6.exe"
                                className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 font-bold text-white hover:shadow-lg hover:shadow-cyan-500/25 transition-all hover:-translate-y-1 text-center block"
                                download
                            >
                                Download .exe
                            </a>
                        </div>
                    </div>

                    {/* Linux Deb Card */}
                    <div className="glass-card p-8 rounded-2xl w-full md:w-1/3 opacity-75 grayscale hover:grayscale-0 transition-all">
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
                    </div>

                    {/* Linux RPM Card */}
                    <div className="glass-card p-8 rounded-2xl w-full md:w-1/3 opacity-75 grayscale hover:grayscale-0 transition-all">
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
                    </div>

                </div>
            </div>
        </section>
    );
};

export default DownloadSection;
