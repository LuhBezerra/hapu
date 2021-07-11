import { ReactElement } from 'react';

interface INewslleter {
  title: ReactElement;
  description: ReactElement;
}

export const NEWSLLETER: INewslleter = {
  title: <>Are you a parent without a nanny and looking to share?</>,
  description: (
    <>
      Leave us your name and email and we’ll update you as soon as a share
      becomes available in your area!
    </>
  ),
};
