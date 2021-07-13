import { PRINCIPLES } from './constants';
import './styles.css';

export function PrinciplesSection() {
  return (
    <section id="principles">
      <div className="container">
        <div className="principles-content">
          <div className="principles-text-content">
            <h2>{PRINCIPLES.title}</h2>
            <p>{PRINCIPLES.description}</p>

            <a href="/">{PRINCIPLES.link}</a>
          </div>

          <img
            className="principles-image-content"
            src={PRINCIPLES.image}
            alt="feature demo about billing history"
          />
        </div>
      </div>
    </section>
  );
}
