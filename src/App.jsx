import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import NewFeatures from './components/NewFeatures';
import KeyHighlights from './components/KeyHighlights';
import MediaFeatures from './components/MediaFeatures';
import CollectionsSection from './components/CollectionsSection';
import ComparisonTable from './components/ComparisonTable';
import TechSpecs from './components/TechSpecs';
import DownloadSection from './components/DownloadSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white selection:bg-brand-pink/30 selection:text-brand-pink">
      <Navbar />
      <main>
        <Hero />
        <NewFeatures />

        <div id="features">
          <KeyHighlights />
          <MediaFeatures />
          <CollectionsSection />
        </div>

        <div id="comparison">
          <ComparisonTable />
        </div>

        <div id="specs">
          <TechSpecs />
        </div>

        <DownloadSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;