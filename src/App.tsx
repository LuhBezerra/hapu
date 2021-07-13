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
      <Divider />
      <NewslleterSection />
      <Divider />
      <FeatureDemoSection />
      <Divider />
      <PrinciplesSection />
      <Divider />
      <ComingSoonSection />
      <FooterSection />
    </div>
  );
}

export default App;
