import { toast, Slide } from 'react-toastify';

export const toastError = (error: string) =>
  toast.error(error, {
    autoClose: 3000,
    // hideProgressBar: true,
    pauseOnFocusLoss: false,
    progressStyle: { color: 'crimson' },
  });

export const toastMessage = (message: string) =>
  toast.success(message, {
    autoClose: 3000,
    pauseOnFocusLoss: false,
    transition: Slide,
    progressStyle: { color: 'green' },
  });
