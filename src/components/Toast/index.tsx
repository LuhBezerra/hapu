import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './styles.css';

interface IToast {
  type: 'success' | 'error';
  message: string;
}
export function toastMessage({ type, message }: IToast) {
  switch (type) {
    case 'success':
      toast.success(message);
      break;
    case 'error':
      toast.error(message);
      break;
  }
}

export function Toast() {
  return <ToastContainer autoClose={4000} hideProgressBar />;
}
