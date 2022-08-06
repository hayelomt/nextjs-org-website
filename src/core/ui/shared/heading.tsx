import { motion } from 'framer-motion';
import { ReactElement } from 'react';
import { BreadCrumbs } from '.';

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

const ImageHeading = ({
  imgUrl,
  crumbLinks,
  title,
  description,
}: {
  imgUrl: string;
  crumbLinks: string[];
  title: ReactElement;
  description?: ReactElement;
}) => (
  <motion.section
    variants={sectionVariant}
    initial="hidden"
    animate="visible"
    className="px-global pt-[60px] sm:pt-[127px] pb-[100px] md:pb-[203px]"
    style={{
      background: `linear-gradient(0deg, rgba(0, 0, 0, 0.527), rgba(0, 0, 0, 0.685)), url("${imgUrl}")`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
    }}
  >
    <div className="max-w-global mx-auto flex flex-col text-center items-center">
      <>
        <motion.div variants={titleVariant}>{title}</motion.div>

        <motion.div
          className="flex flex-col items-center"
          variants={descriptionVariant}
        >
          {crumbLinks.length && (
            <span className="mt-3">
              <BreadCrumbs links={crumbLinks} />
            </span>
          )}

          {description && description}
        </motion.div>
      </>
    </div>
  </motion.section>
);

const TextHeading = ({
  crumbLinks,
  title,
  description,
}: {
  crumbLinks: string[];
  title: ReactElement;
  description?: ReactElement;
}) => (
  <motion.section
    variants={sectionVariant}
    initial="hidden"
    animate="visible"
    className="px-global w-full pt-[35px] sm:pt-[72px] bg-white"
  >
    <div className="max-w-global mx-auto flex flex-col items-center">
      <motion.div variants={titleVariant}>{title}</motion.div>
      <motion.div
        variants={descriptionVariant}
        className="flex flex-col items-center"
      >
        {crumbLinks.length && (
          <span className="mt-3">
            <BreadCrumbs
              links={crumbLinks}
              linkColor="text-dark-text"
              crumbColor="black"
            />
          </span>
        )}
        {description && description}
      </motion.div>
    </div>
  </motion.section>
);

export { ImageHeading, TextHeading };
