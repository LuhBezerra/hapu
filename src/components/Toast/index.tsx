import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './styles.css';

interface ToastProps {
  type: 'success' | 'error';
  message: string;
}
export function toastMessage({ type, message }: ToastProps) {
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
  return <ToastContainer hideProgressBar />;
}
