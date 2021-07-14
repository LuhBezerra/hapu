import { useEffect } from 'react';
import { OptimizelyFeature, OptimizelyProvider } from '@optimizely/react-sdk';

import { useHapuContext } from '../../services/contextApi';
import { optimizely } from '../../services/optimizely';
import { NavBar } from '../../components/NavBar';
import { Skeleton } from '../../components/Skeleton';
import { HERO } from './constants';
import './styles.css';

const usingOptimizely = process.env.REACT_APP_USE_OPTIMIZELY === 'true';
const isDevelopmentEnv = process.env.NODE_ENV === 'development';

const defaultTextHeroSection = (
  <>
    <h2>{HERO.title}</h2>
    <p>{HERO.description}</p>
  </>
);

const textWithOptimizelyProvider = (userIp: string) => (
  <OptimizelyProvider
    optimizely={optimizely}
    user={{
      id: isDevelopmentEnv
        ? (Math.floor(Math.random() * 999999) + 100000).toString()
        : userIp,
    }}
  >
    <OptimizelyFeature feature="textherosection">
      {(enabled, variables) => {
        return enabled ? (
          <>
            <h2>
              {variables.hero_text
                ? /* @ts-expect-error not recognizing object like type */
                  variables.hero_text.title
                : HERO.title}
            </h2>
            <p>
              {variables.hero_text
                ? /* @ts-expect-error not recognizing object like type */
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
  const { userIp, loadingUserIp, getUserIp } = useHapuContext();

  useEffect(() => {
    if (!usingOptimizely || isDevelopmentEnv) {
      return;
    }

    getUserIp();
  }, [getUserIp]);

  return (
    <section id="hero-container">
      <NavBar />
      <div className="hero-content">
      <div className="hero-image-background-container">
        <div className="hero-image-background-content">

        <div className="hero-text-content">
          {usingOptimizely ? (
            loadingUserIp ? (
              <Skeleton />
            ) : (
              textWithOptimizelyProvider(userIp.ip)
            )
          ) : (
            defaultTextHeroSection
          )}

          <div className="hero-text-link-content">
            <a href="https://www.youtube.com/watch?v=lao2bxWgqOg" target="_blank" rel="noreferrer">
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
      </div>
      
      <div className="hero-white-background-container">
        <div>
          <img src={HERO.profileInformation.avatar} alt="profile" />
          <a href="/">{HERO.profileInformation.description}</a>
          <span>Wednesday, Thursday, Friday - 7:30 - 5:30</span>
        </div>
      </div>
      </div>
    </section>
  );
}
