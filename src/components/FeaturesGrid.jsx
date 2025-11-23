import React from 'react';
import { FolderOpen, Film, Zap, Settings } from 'lucide-react';

const features = [
    {
        icon: <Film className="w-8 h-8 text-mint-400" />,
        title: "Cinematic Onboarding",
        description: "Immersive splash screens and personalized greetings that adapt to your time of day."
    },
    {
        icon: <FolderOpen className="w-8 h-8 text-ai-purple" />,
        title: "Intelligent Folders",
        description: "Strict typing ensures your media stays organized. Video files in video folders, audio in audio."
    },
    {
        icon: <Zap className="w-8 h-8 text-tech-blue" />,
        title: "Smart Player",
        description: "Automatically switches modes. Full cinematic video player or pulsing audio visualizer."
    },
    {
        icon: <Settings className="w-8 h-8 text-pink-500" />,
        title: "Deep Customization",
        description: "Toggle between Soft Light and Cyber Dark themes. Manage profiles and preferences."
    }
];

const FeaturesGrid = () => {
    return (
        <section id="features" className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">
                        Designed for <span className="text-gradient">Immersion</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Every interaction is crafted to feel premium, responsive, and alive.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="glass-card p-8 rounded-2xl group hover:-translate-y-2 transition-transform duration-300"
                        >
                            <div className="mb-6 p-4 bg-white/5 rounded-xl w-fit group-hover:bg-white/10 transition-colors">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-white group-hover:text-mint-400 transition-colors">
                                {feature.title}
                            </h3>
                            <p className="text-gray-400 leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturesGrid;
