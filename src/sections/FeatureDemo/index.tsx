import { FEATURE_DEMO } from './constants';
import './styles.css';

export function FeatureDemoSection() {
  return (
    <section id="feature-demo">
      <div className="container">
        <div className="feature-demo-content">
          <img
            className="feature-demo-image-content"
            src={FEATURE_DEMO.image}
            alt="feature demo of the Hapu's 'Become a Nanny Share"
          />

          <div className="feature-demo-text-content">
            <h2>{FEATURE_DEMO.title}</h2>
            <p>{FEATURE_DEMO.description}</p>

            <a href="/">{FEATURE_DEMO.link}</a>
          </div>
        </div>
      </div>
    </section>
  );
}
