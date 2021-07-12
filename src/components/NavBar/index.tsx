import { useState } from 'react';
import badgeIcon from '../../assets/icons/badgeIcon.svg';
import './styles.css';

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
        <div className="navBar-container-options">
          <a href="/">
            <img src={badgeIcon} alt="Badge Hapu" />
          </a>

          <a href="/">Create Your Nanny Share</a>
          <a href="/">Browse Shares</a>
          <a href="/">Our Story</a>
        </div>

        <div className="navBar-container-login">
          <button>Become a Nanny Share Host</button>
          <a href="/">Sign In</a>
        </div>
      </div>
    </nav>
  );
}
