import { ReactElement } from 'react';
import imageSection3 from '../../assets/images/imageSection3.svg';

interface IFeatureDemo {
  title: ReactElement;
  description: ReactElement;
  image: string;
  link: ReactElement;
}

export const FEATURE_DEMO: IFeatureDemo = {
  title: <>Shared payments made simple</>,
  description: (
    <>
      Sometimes it’s hard enough just sharing a restaurant bill. Try sharing
      that bill week in, week out and you might encounter more than a few
      snares. But not with Hapu. Simply set your rates and our automated payment
      system takes care of the rest. You need never talk money or who owes what.
    </>
  ),
  image: imageSection3,
  link: <>Read how Bridget’s share (without Hapu) ended over $15</>,
};
