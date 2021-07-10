import { ReactElement } from 'react';
import imageSection4 from '../../assets/images/imageSection4.svg';

interface IPrinciples {
  title: ReactElement;
  description: ReactElement;
  image: string;
  link: ReactElement;
}

export const PRINCIPLES: IPrinciples = {
  title: <>A framework built for the long term</>,
  description: (
    <>
      Childcare is for the long term. And you need a framework you can count on
      that gives your share long term viability and success. That’s why we’ve
      defined Hapu around our three tribal principles; clearly defined process,
      transparency over money and equality of participation.
    </>
  ),
  image: imageSection4,
  link: <>Read how Hapu’s tribal background defines our app </>,
};
