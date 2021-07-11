import { ReactElement } from 'react';

import calendarIcon from '../../assets/icons/calendarIcon.svg';
import logoHapu from '../../assets/icons/logoHapu.svg';
import facebookIcon from '../../assets/icons/facebookIcon.svg';
import twitterIcon from '../../assets/icons/twitterIcon.svg';
import instagramIcon from '../../assets/icons/instagramIcon.svg';

interface IFooter {
  title: ReactElement;
  description: ReactElement;
  buttonIcon: string;
  buttonTitle: ReactElement;
  buttonSubTitle: ReactElement;
  link: ReactElement;
  logoHapu: string;
  TermsPrivacy: string;
  blogLink: string;
  facebookIcon: string;
  twitterIcon: string;
  instagramIcon: string;
  facebookLink: string;
  twitterLink: string;
  instagramLink: string;
  copyright: ReactElement;
}

export const FOOTER: IFooter = {
  title: <>Become a nanny share host</>,
  description: <>Takes less than 5 minutes to get started</>,
  buttonIcon: calendarIcon,
  buttonTitle: <>Create Your Nanny Share</>,
  buttonSubTitle: <>Takes less than 5 minutes</>,
  link: <>Or browse local nanny-shares</>,
  logoHapu: logoHapu,
  TermsPrivacy: 'https://www.hapu.com.au/terms-privacy',
  blogLink: 'https://blog.hapu.com.au/',
  facebookIcon: facebookIcon,
  twitterIcon: twitterIcon,
  instagramIcon: instagramIcon,
  facebookLink: 'https://www.facebook.com/hapunui',
  twitterLink: 'https://twitter.com/hapunui',
  instagramLink: 'https://www.instagram.com/hapunui/',
  copyright: <>Copyright © 2017 Hapu PTY Limited All rights reserved</>,
};
