import React, { useState } from 'react';
import { Layout, PlayCircle, Brain, ChevronRight } from 'lucide-react';

const tabs = [
    {
        id: 'flow',
        label: 'App Flow',
        icon: <Layout size={18} />,
        content: (
            <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-500">
                <h3 className="text-2xl font-bold text-white">Cinematic Onboarding</h3>
                <p className="text-gray-400">
                    Upon opening Mint Player, you are greeted with a pulsing logo and a fade-in animation.
                    First-time users are asked for their name to personalize the experience.
                </p>
                <div className="glass p-4 rounded-xl border-l-4 border-mint-500">
                    <h4 className="font-bold text-white mb-2">Key Features</h4>
                    <ul className="space-y-2 text-gray-400 text-sm">
                        <li className="flex items-center gap-2"><ChevronRight size={14} className="text-mint-500" /> Auto-transition after 2.5s</li>
                        <li className="flex items-center gap-2"><ChevronRight size={14} className="text-mint-500" /> Personalized greeting based on time of day</li>
                        <li className="flex items-center gap-2"><ChevronRight size={14} className="text-mint-500" /> Name persistence via local storage</li>
                    </ul>
                </div>
            </div>
        )
    },
    {
        id: 'dashboard',
        label: 'Dashboard',
        icon: <PlayCircle size={18} />,
        content: (
            <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-500">
                <h3 className="text-2xl font-bold text-white">The Hub</h3>
                <p className="text-gray-400">
                    The central command center for your media. Organize files into intelligent folders that enforce strict typing.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="glass p-4 rounded-xl">
                        <h4 className="font-bold text-mint-400 mb-2">Video Folders</h4>
                        <p className="text-sm text-gray-400">Only accepts video files. Automatically rejects audio files with a smart toast notification.</p>
                    </div>
                    <div className="glass p-4 rounded-xl">
                        <h4 className="font-bold text-ai-purple mb-2">Audio Folders</h4>
                        <p className="text-sm text-gray-400">Dedicated for music and podcasts. Rejects video files to keep your library clean.</p>
                    </div>
                </div>
            </div>
        )
    },
    {
        id: 'ai',
        label: 'AI Intelligence',
        icon: <Brain size={18} />,
        content: (
            <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-500">
                <h3 className="text-2xl font-bold text-white">Gemini 3 Pro Integration</h3>
                <p className="text-gray-400">
                    A retractable sidebar connects you to Google's most capable AI model.
                </p>
                <div className="glass p-4 rounded-xl space-y-4">
                    <div>
                        <h4 className="font-bold text-white">Context Aware Analysis</h4>
                        <p className="text-sm text-gray-400">Sends current frame and timestamp for precise analysis.</p>
                    </div>
                    <div className="h-px bg-white/10" />
                    <div>
                        <h4 className="font-bold text-white">Click-to-Seek</h4>
                        <p className="text-sm text-gray-400">Timestamps in AI responses are clickable links that jump the player to that exact moment.</p>
                    </div>
                </div>
            </div>
        )
    }
];

const DocsViewer = () => {
    const [activeTab, setActiveTab] = useState('flow');

    return (
        <section id="docs" className="py-24 bg-black/20">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">
                        How it <span className="text-gradient">Works</span>
                    </h2>
                    <p className="text-gray-400">Explore the architecture of Mint Player.</p>
                </div>

                <div className="max-w-5xl mx-auto glass rounded-2xl overflow-hidden flex flex-col md:flex-row min-h-[500px]">
                    {/* Sidebar */}
                    <div className="md:w-1/3 border-r border-white/10 bg-white/5">
                        <div className="p-6">
                            <h3 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">Documentation</h3>
                            <div className="space-y-2">
                                {tabs.map((tab) => (
                                    <button
                                        key={tab.id}
                                        onClick={() => setActiveTab(tab.id)}
                                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${activeTab === tab.id
                                                ? 'bg-mint-500/20 text-mint-400 border border-mint-500/20'
                                                : 'text-gray-400 hover:bg-white/5 hover:text-white'
                                            }`}
                                    >
                                        {tab.icon}
                                        <span className="font-medium">{tab.label}</span>
                                        {activeTab === tab.id && <ChevronRight size={16} className="ml-auto" />}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Content Area */}
                    <div className="md:w-2/3 p-8 md:p-12 bg-black/20">
                        {tabs.find(t => t.id === activeTab)?.content}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DocsViewer;
