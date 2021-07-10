import { ReactElement } from 'react';
import imageSection5 from '../../assets/images/imageSection5.svg';

interface IComingSoon {
  title: ReactElement;
  description: ReactElement;
  image: string;
}

export const COMING_SOON: IComingSoon = {
  title: <>Coming soon: Nanny Share Daily Diary!</>,
  description: (
    <>
      With the Hapu daily diary your nanny will be able to update you and your
      sharers with photos and commentary of the day. You and sharers will
      receive notifications and you’ll be able to login to view the daily
      adventures fo your little ones. We can’t wait!
    </>
  ),
  image: imageSection5,
};
