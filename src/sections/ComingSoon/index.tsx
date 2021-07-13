import { COMING_SOON } from './constants';
import './styles.css';

export function ComingSoonSection() {
  return (
    <section id="coming-soon">
      <div className="container">
        <div className="coming-soon-content">
          <img
            className="coming-soon-image-content"
            src={COMING_SOON.image}
            alt="children's face drawing"
          />

          <div className="coming-soon-text-content">
            <h2>{COMING_SOON.title}</h2>
            <p>{COMING_SOON.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
