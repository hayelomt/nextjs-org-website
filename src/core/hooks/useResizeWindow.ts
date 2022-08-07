import { useEffect } from 'react';

const useResizeWindow = (cb: (width: number) => void) => {
  useEffect(() => {
    const listener = () => {
      cb(window.window.innerWidth);
    };

    window.addEventListener('resize', listener);

    return () => {
      window.removeEventListener('resize', listener);
    };
  }, [cb]);
};

export default useResizeWindow;
