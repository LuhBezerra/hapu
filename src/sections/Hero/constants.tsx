import { ReactElement } from 'react';
import imageHeader from '../../assets/images/imageHeader.svg';
import profileImage from '../../assets/images/profileImage.svg';
import playButtonIcon from '../../assets/icons/playButton.svg';

interface IHero {
  title: ReactElement;
  description: ReactElement;
  image: string;
  playButtonIcon: string;
  link: ReactElement;
  profileInformation: {
    avatar: string;
    description: ReactElement;
    date: ReactElement;
  };
}

export const HERO: IHero = {
  title: <>Easily create or join a local nanny share with Hapu</>,
  description: (
    <>
      Hapu is Airbnb for nanny share. Share your home, nanny and costs and
      create new flexible, affordable solutions in childcare.
    </>
  ),
  image: imageHeader,
  playButtonIcon,
  link: <>See hapu in action (27 seconds)</>,
  profileInformation: {
    avatar: profileImage,
    description: <>Sarah’s day care available now in North Sydney</>,
    date: <>Wednesday, Thursday, Friday - 7:30 - 5:30</>,
  },
};
