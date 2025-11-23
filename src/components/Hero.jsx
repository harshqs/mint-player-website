import React from 'react';
import { Play, ArrowRight } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-mint-500/20 rounded-full blur-[128px] animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-ai-purple/20 rounded-full blur-[128px] animate-pulse delay-1000" />

            <div className="container mx-auto px-6 relative z-10 text-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
                    <span className="w-2 h-2 rounded-full bg-mint-500 animate-pulse" />
                    <span className="text-sm font-medium text-mint-400">v2.0 Now Available</span>
                </div>

                <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-100">
                    Media Intelligence <br />
                    <span className="text-gradient">Reimagined</span>
                </h1>

                <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
                    A cinematic media player powered by Gemini AI. Experience strict typing, smart folders, and a beautiful glassmorphic UI that adapts to your workflow.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
                    <a
                        href="#download"
                        className="px-8 py-4 bg-gradient-to-r from-mint-500 to-ai-blue rounded-full font-bold text-lg hover:shadow-lg hover:shadow-mint-500/25 transition-all hover:-translate-y-1 flex items-center gap-2 group"
                    >
                        Download Now
                        <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                    </a>
                    <a
                        href="#features"
                        className="px-8 py-4 glass rounded-full font-bold text-lg hover:bg-white/20 transition-all hover:-translate-y-1 flex items-center gap-2"
                    >
                        <Play size={20} className="fill-current" />
                        Explore Features
                    </a>
                </div>

                {/* Hero Image / Mockup Placeholder */}
                <div className="mt-20 relative mx-auto max-w-5xl animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-500">
                    <div className="aspect-video glass rounded-2xl border border-white/10 overflow-hidden shadow-2xl relative group">
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent z-10" />
                        {/* Abstract UI representation */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-center">
                                <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-md mb-4 mx-auto group-hover:scale-110 transition-transform duration-500">
                                    <Play size={32} className="fill-white text-white ml-1" />
                                </div>
                                <p className="text-sm text-gray-400 font-medium tracking-widest uppercase">Cinematic Experience</p>
                            </div>
                        </div>
                    </div>

                    {/* Decorative elements */}
                    <div className="absolute -bottom-10 -left-10 w-24 h-24 bg-mint-500/30 rounded-full blur-2xl" />
                    <div className="absolute -top-10 -right-10 w-32 h-32 bg-ai-purple/30 rounded-full blur-2xl" />
                </div>
            </div>
        </section>
    );
};

export default Hero;
