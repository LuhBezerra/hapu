import { FormEvent, useState } from 'react';

import { Input } from '../../components/Input';
import { Spinner } from '../../components/Spinner';
import { Toast, toastMessage } from '../../components/Toast';
import { registerUserOnNewslleter } from './api';
import { NEWSLLETER } from './constants';
import './styles.css';

interface IResponseRegisterNewlleter {
  detail?: string;
  email?: string[];
}

export function NewslleterSection() {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');

  const [loadingRegister, setLoadingRegister] = useState<boolean>(false);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    try {
      setLoadingRegister(true);

      const response: IResponseRegisterNewlleter =
        await registerUserOnNewslleter({ name, email });

      if (
        response.detail &&
        response.detail.toLocaleLowerCase().includes('ok')
      ) {
        toastMessage({
          type: 'success',
          message: 'Registration successful! Please check your email.',
        });
      } else {
        toastMessage({
          type: 'error',
          message: response.email
            ? response.email[0]
            : 'There was a problem trying to register. Please try again.',
        });
      }
    } catch (error) {
      toastMessage({ type: 'error', message: error });
    } finally {
      setLoadingRegister(false);
    }
  }

  return (
    <section id="newslleter">
      <div className="container">
        <div className="newslleter-content">
          <Toast />
          <div className="newslleter-text-content">
            <h2>{NEWSLLETER.title}</h2>
            <p>{NEWSLLETER.description}</p>
          </div>

          <form onSubmit={handleSubmit}>
            <Input
              name="name"
              placeholder="Your name"
              maxLength={100}
              required
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <Input
              name="name"
              placeholder="Your email"
              maxLength={256}
              required
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <footer>
              <button type="submit" disabled={loadingRegister}>
                {loadingRegister ? <Spinner /> : 'Send'}
              </button>
            </footer>
          </form>
        </div>
      </div>
    </section>
  );
}
