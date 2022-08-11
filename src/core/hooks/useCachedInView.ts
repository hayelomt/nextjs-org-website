import { useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

const useCachedInView = () => {
  const ref = useRef<any>();
  const inView = useInView(ref);
  const [viewShown, setViewShown] = useState(false);

  useEffect(() => {
    console.log('in view', inView);
    if (inView) {
      setViewShown(true);
    }
  }, [inView]);

  return { ref, inView, viewShown };
};

export default useCachedInView;
