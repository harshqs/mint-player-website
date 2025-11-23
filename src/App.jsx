import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturesGrid from './components/FeaturesGrid';
import AIShowcase from './components/AIShowcase';
import DocsViewer from './components/DocsViewer';
import DownloadSection from './components/DownloadSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white selection:bg-mint-500/30 selection:text-mint-400">
      <Navbar />
      <main>
        <Hero />
        <FeaturesGrid />
        <AIShowcase />
        <DocsViewer />
        <DownloadSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;