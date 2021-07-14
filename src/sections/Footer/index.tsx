import { CircularButton } from '../../components/CircularButton';

import { FOOTER } from './constants';
import './styles.css';

export function FooterSection() {
  return (
    <section id="footer-section">
      <div className="container">
        <div className="footer-content">
          <h2>{FOOTER.title}</h2>
          <p>{FOOTER.description}</p>

          <button className="footer-button-container" >
            <img
              className="footer-image-content"
              src={FOOTER.buttonIcon}
              alt="calendar icon"
            />
            <div className="footer-button-text">
              <p>{FOOTER.buttonTitle}</p>
              <p>{FOOTER.buttonSubTitle}</p>
            </div>
          </button>

          <a href="/">{FOOTER.link}</a>

          <footer >
            <img
              className="footer-logo-hapu-content"
              src={FOOTER.logoHapu}
              alt="Hapu logo"
            />

            <div className="footer-link-content">
              <a href="/">Share Your Nanny</a>
              <a href="/">Our Story</a>
              <br />
              <a href={FOOTER.blogLink} target="_blank" rel="noreferrer">
                Blog
              </a>
              <a href={FOOTER.TermsPrivacy} target="_blank" rel="noreferrer">
                Terms & Privacy
              </a>
            </div>
            <div className="footer-social-media-button-container">
              <CircularButton
                icon={FOOTER.facebookIcon}
                name="facebook icon"
                title="Facebook"
                href={FOOTER.facebookLink}
              />
              <CircularButton
                icon={FOOTER.twitterIcon}
                name="twitter icon"
                title="Twitter"
                href={FOOTER.twitterLink}
              />
              <CircularButton
                icon={FOOTER.instagramIcon}
                name="instagram icon"
                title="Instagram"
                href={FOOTER.instagramLink}
              />
            </div>
          </footer>
          <span>{FOOTER.copyright}</span>
        </div>
      </div>
    </section>
  );
}
