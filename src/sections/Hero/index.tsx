import React from 'react';
import { OptimizelyFeature, OptimizelyProvider } from '@optimizely/react-sdk';

import { optimizely } from '../../services/optimizely';
import { NavBar } from '../../components/NavBar';
import { HERO } from './constants';
import './styles.css';

const defaultTextHeroSection = (
  <>
    <h2>{HERO.title}</h2>
    <p>{HERO.description}</p>
  </>
);

const textWithOptimizelyProvider = (
  <OptimizelyProvider
    optimizely={optimizely}
    user={{
      id: 'user10',
    }}
  >
    <OptimizelyFeature feature="textherosection">
      {(enabled, variables) => {
        return enabled ? (
          <>
            <h2>
              {variables.hero_text
                ? /* @ts-expect-error not recognizing object with type */
                  variables.hero_text.title
                : HERO.title}
            </h2>
            <p>
              {variables.hero_text
                ? /* @ts-expect-error not recognizing object with type */
                  variables.hero_text.description
                : HERO.title}
            </p>
          </>
        ) : (
          defaultTextHeroSection
        );
      }}
    </OptimizelyFeature>
  </OptimizelyProvider>
);

export function HeroSection() {
  return (
    <section id="hero-container">
      <NavBar />
      <div className="hero-image-background-container">
        <div className="hero-text-content">
          {process.env.REACT_APP_USE_OPTIMIZELY
            ? textWithOptimizelyProvider
            : defaultTextHeroSection}

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
