import React from 'react';

import { HERO } from './constants';
import './styles.css';

export function HeroSection() {
  return (
    <section id="hero-container">
      <div className="hero-image-background-container">
        <div className="hero-text-content">
          <h2>{HERO.title}</h2>
          <p>{HERO.description}</p>

          <div className="hero-text-link-content">
            <a href="/">
              {' '}
              <img src={HERO.playButtonIcon} title="Play" alt="play button" />
              {HERO.link}
            </a>
          </div>
        </div>

        <img
          className="hero-image-content"
          src={HERO.image}
          alt="feature demo about match with nanny"
        />
      </div>

      <div className="hero-white-background-container">
        <div>
          <img src={HERO.profileInformation.avatar} alt="profile" />
          <a href="/">{HERO.profileInformation.description}</a>
          <span>Wednesday, Thursday, Friday - 7:30 - 5:30</span>
        </div>
      </div>
    </section>
  );
}
