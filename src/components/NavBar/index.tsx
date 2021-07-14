import { useState } from 'react';
import { withOptimizely } from '@optimizely/react-sdk';

import { optimizely } from '../../services/optimizely';
import { RegularButton } from '../RegularButton';
import badgeIcon from '../../assets/icons/badgeIcon.svg';
import './styles.css';

const BUTTON_TEXT = 'Become a Nanny Share Host';

function RegisterInNannyShareButton() {
  function handleOnClick() {
    optimizely.track('registerInNannyShare');
  }

  return <RegularButton onClick={handleOnClick}>{BUTTON_TEXT}</RegularButton>;
}

const WrappedRegisterInNannyShareButton = withOptimizely(
  RegisterInNannyShareButton
);

export function NavBar() {
  const [showWhiteNavbar, setShowWhiteNavbar] = useState<boolean>(false);

  function handleChangeScrollY() {
    if (window.scrollY >= 50) {
      setShowWhiteNavbar(true);
    } else {
      setShowWhiteNavbar(false);
    }
  }

  window.addEventListener('scroll', handleChangeScrollY);

  return (
    <nav className={showWhiteNavbar ? 'navBar active' : 'navBar'}>
      <div className="navBar-container">
        <div className="navBar-content">

          <div className="navBar-container-options">
            <a href="/">
              <img src={badgeIcon} alt="Badge Hapu" />
            </a>

            <a href="/">Create Your Nanny Share</a>
            <a href="/">Browse Shares</a>
            <a href="/">Our Story</a>
          </div>

          <div className="navBar-container-login">
            {process.env.REACT_APP_USE_OPTIMIZELY ? (
              <WrappedRegisterInNannyShareButton />
              ) : (
                <RegularButton>{BUTTON_TEXT}</RegularButton>
                )}
            <a href="/">Sign In</a>
          </div>
          </div>
      </div>
    </nav>
  );
}
