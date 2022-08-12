import { motion } from 'framer-motion';
import type { AppProps } from 'next/app';
import { ToastContainer } from 'react-toastify';
import '../src/core/styles/global.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'react-toastify/dist/ReactToastify.css';
import '../src/core/styles/custom.css';

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <motion.div
      key={router.route}
      initial="pageInitial"
      animate="pageAnimate"
      variants={{
        pageInitial: {
          opacity: 0,
        },
        pageAnimate: {
          opacity: 1,
        },
      }}
    >
      <Component {...pageProps} />
      <ToastContainer />
    </motion.div>
  );
}

export default MyApp;
