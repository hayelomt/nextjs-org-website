import { motion, AnimatePresence } from 'framer-motion';
import clsx from 'clsx';
import Icons from '../utils/icons';
import { ReactElement } from 'react';
import Link from 'next/link';

const BreadCrumbs = ({
  links,
  linkColor = 'text-white',
  crumbColor = 'text-white',
}: {
  links: { label: string; url?: string }[];
  linkColor?: string;
  crumbColor?: string;
}) => (
  <>
    <div className="flex items-center">
      {links.map((link, i) =>
        i === links.length - 1 ? (
          <p className="body1 text-red" key={`crumb-${i}`}>
            {link.label}
          </p>
        ) : (
          <div className="flex" key={`crumb-${i}`}>
            <Link href={link.url || ''}>
              <a className={clsx('body1 mr-[14px]', linkColor)}>{link.label}</a>
            </Link>
            <span className=" mt-[2px]">
              <Icons.ChevronRight
                className={clsx('h-4 w-4 mr-[14px] mt-[2px]', crumbColor)}
              />
            </span>
          </div>
        )
      )}
    </div>
  </>
);

const Tag = ({ label }: { label: string }) => (
  <div className="py-[6px] px-[10px] sm:px-[16px] center bg-brand h-fit w-fit rounded-[8px]">
    <p className="label text-white">{label}</p>
  </div>
);

const Modal = ({
  showModal,
  setHideModal,
  children,
}: {
  showModal: boolean;
  setHideModal: () => void;
  children: ReactElement;
}) => {
  const backdrop = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0, when: 'afterChildren' },
  };

  const modal = {
    hidden: { y: '-80vh' },
    visible: {
      y: '0',
      transition: { duration: 0.2, type: 'spring', stiffness: 80, damping: 13 },
    },
    exit: { y: '-120vh', transition: { duration: 1 } },
  };

  return (
    <>
      <AnimatePresence exitBeforeEnter>
        {showModal && (
          <motion.div
            className="backdrop"
            variants={backdrop}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={setHideModal}
          >
            <motion.div
              variants={modal}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={(e) => {
                e.stopPropagation();
              }}
              className="flex items-center justify-center"
            >
              {children}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export { Tag, BreadCrumbs, Modal };
