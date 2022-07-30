import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { ArrowedButton } from '../../../core/ui/shared/buttons';
import Icons from '../../../core/ui/utils/icons';

const headingVariant = {
  hidden: { x: '100vw' },
  visible: {
    x: 0,
    transition: { duration: 0.2, type: 'spring', stiffness: 80, damping: 14 },
  },
  exit: {
    // opacity: 0,
    x: '-100vw',
    transition: { duration: 0.1 },
  },
};

const Heading = () => {
  const [contentIndex, setContentIndex] = useState(0);
  const headingContent = [
    <>
      <div className="max-w-[877px] flex flex-col text-white">
        <h1 className="mb-[20px] sm:mb-[33px]">
          1 Improving The Overall{' '}
          <span className="text-red">Health Status And Quality Of Life</span>{' '}
          For All Ethiopian People.
        </h1>
        <p className="body2 mb-[30px] sm:mb-[54px]">
          CORHA is mandated to play a strategic role of coordination and
          representation, capacity building, policy dialogue, knowledge
          management and resource mobilization for its member organization.
        </p>
        <div className="flex gap-[12px] md:gap-[18px]">
          <ArrowedButton label="Learn More" onClick={() => {}} />
          <ArrowedButton
            label="Our Projects"
            onClick={() => {}}
            className="!bg-brand"
          />
        </div>
      </div>
    </>,
    <>
      <div className="max-w-[877px] flex flex-col text-white">
        <h1 className="mb-[20px] sm:mb-[33px]">
          2 Improving The Overall{' '}
          <span className="text-red">Health Status And Quality Of Life</span>{' '}
          For All Ethiopian People.
        </h1>
        <p className="body2 mb-[30px] sm:mb-[54px]">
          CORHA is mandated to play a strategic role of coordination and
          representation, capacity building, policy dialogue, knowledge
          management and resource mobilization for its member organization.
        </p>
        <div className="flex gap-[12px] md:gap-[18px]">
          <ArrowedButton label="Learn More" onClick={() => {}} />
          <ArrowedButton
            label="Our Projects"
            onClick={() => {}}
            className="!bg-brand"
          />
        </div>
      </div>
    </>,
    <>
      <div className="max-w-[877px] flex flex-col text-white">
        <h1 className="mb-[20px] sm:mb-[33px]">
          3 Improving The Overall{' '}
          <span className="text-red">Health Status And Quality Of Life</span>{' '}
          For All Ethiopian People.
        </h1>
        <p className="body2 mb-[30px] sm:mb-[54px]">
          CORHA is mandated to play a strategic role of coordination and
          representation, capacity building, policy dialogue, knowledge
          management and resource mobilization for its member organization.
        </p>
        <div className="flex gap-[12px] md:gap-[18px]">
          <ArrowedButton label="Learn More" onClick={() => {}} />
          <ArrowedButton
            label="Our Projects"
            onClick={() => {}}
            className="!bg-brand"
          />
        </div>
      </div>
    </>,
  ];

  const scrollNext = () => {
    setContentIndex((contentIndex + 1) % headingContent.length);
  };

  return (
    <>
      <div
        className="px-global"
        style={{
          background:
            'linear-gradient(0deg, rgba(24, 23, 23, 0.658), rgba(19, 11, 11, 0.199)), url("/imgs/home/landing-cover.jpeg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="max-w-global pt-[100px] sm:pt-[205px] pb-[110px] sm:pb-[187px] mx-auto flex flex-row justify-between items-center">
          <AnimatePresence exitBeforeEnter>
            <motion.div
              key="heading-content"
              variants={headingVariant}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {contentIndex === 0 && headingContent[0]}
              {contentIndex === 1 && headingContent[1]}
              {contentIndex === 2 && headingContent[2]}
            </motion.div>
          </AnimatePresence>

          <div className="" onClick={scrollNext}>
            <Icons.ChevronRight className="h-[40px] w-fit text-white cursor-pointer" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Heading;
