import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Toggle } from '../../../core/ui/shared/buttons';

const existVariant = {
  hidden: { y: '30' },
  visible: {
    y: 0,
    transition: { duration: 0.2, type: 'spring', stiffness: 80, damping: 14 },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.1 },
  },
};

const Existence = () => {
  const [displayContent, setDisplayContent] = useState<
    'mission' | 'vision' | 'goal'
  >('mission');

  return (
    <>
      <section className="px-global">
        <div className="max-w-global mx-auto flex flex-col items-start pt-[60px] sm:pt-[178px] pb-[30px] sm:pb-[60px] lg:flex-row lg:items-center">
          <div className="xm:mb-0 relative mb-[20px] min-h-[320px] w-full pr-10 sm:min-h-[560px]">
            <div
              className="absolute top-0 left-0 h-[250px] sm:h-[80%] w-full max-w-[80%]  "
              // style={{ backgroundImage: 'url("/imgs/about/exist1.jpeg")' }}
            >
              <div className="w-full h-full overflow-hidden rounded-[20px] sm:rounded-[32px]  border-[10px] border-white ">
                <motion.img
                  whileHover={{ scale: 1.1, transition: { duration: 1 } }}
                  animate={{ scale: 1, transition: { duration: 1 } }}
                  src="/imgs/about/exist1.jpeg"
                  className="w-full h-full object-cover "
                  alt="about"
                />
              </div>

              <div className="px-[20px] md:px-[30px] py-[16px] md:py-[23px] bg-brand center w-fit absolute center rounded-[20px] top-0 right-[50%] lg:right-0 -translate-y-[50%] translate-x-[65%]">
                <motion.div className="flex text-white items-center">
                  <p className="mr-[12px] text-[50px] md:text-[72px] leading-[72px] tracking-tighter font-barlow">
                    17
                  </p>
                  <div className="flex flex-col">
                    <p className="subheading text-[#D2D2D2]">Years</p>
                    <p className="subheading text-[#D2D2D2]">of experience</p>
                  </div>
                </motion.div>
              </div>
            </div>
            <div className="absolute top-[65px] left-10 h-[250px] sm:h-[80%] w-full max-w-[85%] rounded-[20px] sm:top-20 md:left-[140px] ">
              <div className="w-full h-full overflow-hidden rounded-[20px] sm:rounded-[32px]  border-[10px] border-white ">
                <motion.img
                  whileHover={{ scale: 1.1, transition: { duration: 1 } }}
                  animate={{ scale: 1, transition: { duration: 1 } }}
                  src="/imgs/about/hut.jpeg"
                  className="w-full h-full object-cover "
                  alt="about"
                />
              </div>
            </div>
          </div>
          <div className="w-full px-4 sm:px-[80px]">
            <h2 className="mb-[12px] md:mb-[20px]">
              We Exists For Non-profits And Social Enterprises
            </h2>
            <p className="body1 text-light-text mb-[20px] md:mb-[40px]">
              Maecenas suscipit in nulla tristique pretium. Praesent eget tellus
              nibh. Praesent mi orci, fringilla sed est ac, efficitur auctor
              velit. Fusce fermentum feugiat lacinia. Maecenas eleifend bibendum
              tellus ac pretium.
            </p>
            <div className="flex gap-x-[12px] md:gap-x-[20px] mb-[15px] md:mb-[28px]">
              <Toggle
                active={displayContent === 'mission'}
                onClick={() => setDisplayContent('mission')}
                label="Mission"
              />

              <Toggle
                active={displayContent === 'vision'}
                onClick={() => setDisplayContent('vision')}
                label="Vision"
              />

              <Toggle
                active={displayContent === 'goal'}
                onClick={() => setDisplayContent('goal')}
                label="Our Goals"
              />
            </div>
            <AnimatePresence exitBeforeEnter>
              <motion.div
                key={displayContent}
                variants={existVariant}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                {displayContent === 'mission' && (
                  <>
                    <div className="">
                      <h3 className="mb-3">Mission ipsum dolor sante</h3>
                      <p className="body1 text-light-text">
                        Maecenas suscipit in nulla tristique pretium. Praesent
                        eget tellus nibh. Praesent mi orci, fringilla sed est
                        ac, efficitur auctor velit. Fusce fermentum feugiat
                        lacinia. Maecenas eleifend bibendum tellus ac pretium.
                      </p>
                    </div>
                  </>
                )}

                {displayContent === 'vision' && (
                  <div className="">
                    <h3 className="mb-3">Vision ipsum dolor sante</h3>
                    <p className="body1 text-light-text">
                      Maecenas suscipit in nulla tristique pretium. Praesent
                      eget tellus nibh. Praesent mi orci, fringilla sed est ac,
                      efficitur auctor velit. Fusce fermentum feugiat lacinia.
                      Maecenas eleifend bibendum tellus ac pretium.
                    </p>
                  </div>
                )}
                {displayContent === 'goal' && (
                  <>
                    <h3 className="mb-3">Goal ipsum dolor sante</h3>
                    <p className="body1 text-light-text">
                      Maecenas suscipit in nulla tristique pretium. Praesent
                      eget tellus nibh. Praesent mi orci, fringilla sed est ac,
                      efficitur auctor velit. Fusce fermentum feugiat lacinia.
                      Maecenas eleifend bibendum tellus ac pretium.
                    </p>
                  </>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>
    </>
  );
};

export default Existence;
