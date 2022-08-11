import { motion } from 'framer-motion';
import Layout from '../../core/ui/layout/Layout';
import { BreadCrumbs } from '../../core/ui/shared';
import AboutOthersSay from './components/AboutOthersSay';
import AboutTeam from './components/AboutTeam';
import Existence from './components/Existence';
import Stats from './components/Stats';

const sectionVariant = {
  hidden: {
    // opacity: 0
  },
  visible: {
    // opacity: 1,
    // transition: { duration: 0.2, when: 'beforeChildren' },
  },
};

const titleVariant = {
  hidden: { y: '-30' },
  visible: {
    y: 0,
    transition: { duration: 0.2, type: 'spring', stiffness: 60, damping: 14 },
  },
};

const descriptionVariant = {
  hidden: { y: '30' },
  visible: {
    y: 0,
    transition: { duration: 0.2, type: 'spring', stiffness: 60, damping: 14 },
  },
};

const AboutPage = () => {
  const crumbLinks = [{ label: 'Home', url: '/' }, { label: 'About Us' }];

  return (
    <>
      <Layout>
        {/* <ImageHeading
          imgUrl="/imgs/about/team.jpeg"
          title={<h1 className="mb-3 text-white">About Us </h1>}
         
        /> */}
        <motion.section
          variants={sectionVariant}
          initial="hidden"
          animate="visible"
          className="px-global pt-[60px] sm:pt-[127px] pb-[100px] md:pb-[203px]"
          style={{
            backgroundImage: `url('/imgs/about/team.jpeg')`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
          }}
        >
          <div className="max-w-global mx-auto flex flex-col text-center items-center">
            <>
              <motion.div variants={titleVariant}>
                <h1 className="mb-3 text-white">About Us </h1>
              </motion.div>

              <motion.div
                className="flex flex-col items-center"
                variants={descriptionVariant}
              >
                {crumbLinks.length && (
                  <span className="mt-3">
                    <BreadCrumbs links={crumbLinks} />
                  </span>
                )}
              </motion.div>
            </>
          </div>
        </motion.section>

        <Existence />
        <Stats />
        <AboutTeam />
        <AboutOthersSay />
      </Layout>
    </>
  );
};

export default AboutPage;
