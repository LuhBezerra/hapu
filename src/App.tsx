import React from 'react';

import './assets/styles/global.css';
import { Divider } from './components/Divider';

import {
  HeroSection,
  ProductDescriptionSection,
  NewslleterSection,
  FeatureDemoSection,
  PrinciplesSection,
  ComingSoonSection,
  FooterSection,
} from './sections';

function App() {
  return (
    <div className="App">
      <HeroSection />
      <ProductDescriptionSection />
      <NewslleterSection />
      <Divider />
      <FeatureDemoSection />
      <Divider />
      <PrinciplesSection />
      <ComingSoonSection />
      <FooterSection />
    </div>
  );
}

export default App;
