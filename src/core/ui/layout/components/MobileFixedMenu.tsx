import clsx from 'clsx';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ReactElement, useState } from 'react';
import Icons from '../../utils/icons';

const MobileLinkItem = ({
  active = false,
  label,
  url,
}: {
  label: string;
  active?: boolean;
  url: string;
}) => (
  <Link href={url}>
    <h3 className="flex-shrink-0">
      <a
        className={clsx(
          'cursor-pointer hover:text-red hover:font-semibold transition duration-150',
          [active ? 'active-link' : 'inactive-link']
        )}
      >
        {label}
      </a>
    </h3>
  </Link>
);

const MobileDropLink = ({
  label,
  subLinks,
  active = false,
}: {
  label: string;
  subLinks: ReactElement;
  active?: boolean;
}) => {
  const [showSubLinks, setShowSubLinks] = useState(active);

  return (
    <div className="flex flex-col items-center group transition-all duration-500">
      <div
        className="flex items-center"
        onClick={() => setShowSubLinks(!showSubLinks)}
      >
        <h3 className={clsx([active ? 'active-link' : 'inactive-link'])}>
          {label}
        </h3>
        <span
          className={clsx('ml-1 mt-1 transition-transform duration-200', [
            showSubLinks ? 'transform rotate-90' : 'transform rotate-0',
          ])}
        >
          <Icons.ChevronRight />
        </span>
      </div>
      <AnimatePresence>
        {showSubLinks && (
          <motion.div
            key="menu"
            initial={{ y: '-50%', scale: 0.5, opacity: 0 }}
            animate={{
              scale: 1,
              opacity: 1,
              y: 0,
              transition: { duration: 0.2, ease: 'easeOut' },
            }}
            className={clsx(
              ' ml-8 pl-2 mt-2 text-[0.9em] flex-col border-l-[3px] border-dark-text gap-y-2 flex'
            )}
          >
            {subLinks}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const backdropVariant = {
  hidden: { x: '100vw' },
  visible: {
    x: 0,
    transition: { type: 'tween', duration: 0.3, when: 'beforeChildren' },
  },
  exit: { x: '100vw', when: 'afterChildren', transition: { duration: 0.2 } },
};

const linkListVariant = {
  visible: { transition: { staggerChildren: 0.07, delayChildren: 0.1 } },
  exit: { transition: { staggerChildren: 0.05, delayChildren: -1 } },
};

const litItemVariant = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

const MobileFixedMenu = ({
  showMenu,
  setShowMenu,
}: {
  showMenu: boolean;
  setShowMenu: (i: boolean) => void;
}) => {
  const router = useRouter();

  return (
    <>
      <AnimatePresence exitBeforeEnter>
        {showMenu && (
          <motion.div
            key="mobile-menu"
            className="backdrop"
            variants={backdropVariant}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div
              className={clsx(
                'fixed top-0 bottom-0 left-0 right-0 h-full w-full lg:hidden  transition ease-in-out duration-300 origin-top text-link-text z-10 overflow-y-auto'
              )}
            >
              <div className="flex flex-col h-full p-4  ">
                <div className="flex justify-end ">
                  <button
                    onClick={() => setShowMenu(false)}
                    className="self-end"
                  >
                    <Icons.CloseCircle className="w-10 h-10 cursor-pointer" />
                  </button>
                </div>
                <motion.ul
                  variants={linkListVariant}
                  className="flex-1 h-full flex flex-col justify-center items-center gap-y-6 min-h-[600px] p-4"
                >
                  <motion.li variants={litItemVariant}>
                    <MobileLinkItem
                      label="Home"
                      url="/"
                      active={router.pathname === '/'}
                    />
                  </motion.li>
                  <motion.li variants={litItemVariant}>
                    <MobileDropLink
                      label="About"
                      active={router.pathname.startsWith('/about')}
                      subLinks={
                        <>
                          <MobileLinkItem
                            label="About Us"
                            url="/about"
                            active={router.pathname === '/about'}
                          />
                          <MobileLinkItem
                            label="Gallery"
                            url="/resources/galleries"
                            active={router.pathname === '/resources/galleries'}
                          />
                        </>
                      }
                    />
                  </motion.li>
                  <motion.li variants={litItemVariant}>
                    <MobileLinkItem
                      label="Blogs"
                      url="/blogs"
                      active={router.pathname === '/blogs'}
                    />
                  </motion.li>
                  <motion.li variants={litItemVariant}>
                    <MobileLinkItem
                      label="Projects"
                      url="/our-projects"
                      active={router.pathname === '/projects'}
                    />
                  </motion.li>
                  <motion.li variants={litItemVariant}>
                    <MobileLinkItem
                      label="Events"
                      url="/upcoming-events"
                      active={router.pathname === '/upcoming-events'}
                    />
                  </motion.li>
                  <motion.li variants={litItemVariant}>
                    <MobileDropLink
                      label="Resources"
                      active={router.pathname.startsWith('/resources')}
                      subLinks={
                        <>
                          <MobileLinkItem
                            label="Publications"
                            url="/resources/publications"
                            active={
                              router.pathname === '/resources/publications'
                            }
                          />
                          <MobileLinkItem
                            label="Tenders"
                            url="/resources/tenders"
                            active={router.pathname === '/resources/tenders'}
                          />
                          <MobileLinkItem
                            label="Vacancies"
                            url="/resources/vacancies"
                            active={router.pathname === '/resources/vacancies'}
                          />
                          <MobileLinkItem
                            label="Videos"
                            url="/resources/videos"
                            active={router.pathname === '/resources/videos'}
                          />
                        </>
                      }
                    />
                  </motion.li>
                  <motion.li variants={litItemVariant}>
                    <MobileLinkItem
                      label="Contact"
                      url="/contact-us"
                      active={router.pathname === '/contact-us'}
                    />
                  </motion.li>
                  <motion.li variants={litItemVariant}>
                    <button className="btn">Donate Now</button>
                  </motion.li>
                  <motion.li variants={litItemVariant}>
                    <div className="flex bg-brand px-6 py-2 gap-x-4 rounded-[20px]">
                      <div className="flex gap-x-4">
                        <div className="h-[24px] w-[24px] rounded-full bg-brand">
                          <Icons.Facebook />
                        </div>
                        <div className="h-[24px] w-[24px] rounded-full bg-brand">
                          <Icons.Twitter />
                        </div>
                        <div className="h-[24px] w-[24px] rounded-full bg-brand">
                          <Icons.LinkedIn />
                        </div>
                        <div className="h-[24px] w-[24px] rounded-full bg-brand">
                          <Icons.Youtube />
                        </div>
                      </div>
                    </div>
                  </motion.li>
                </motion.ul>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
export default MobileFixedMenu;
