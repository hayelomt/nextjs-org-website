import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { ArrowedButton } from '../../../core/ui/shared/buttons';
import Icons from '../../../core/ui/utils/icons';
import ImageUtils from '../../../core/ui/utils/image';
import { Organization } from '../../memberorganization/organization';

const Members = ({ organizations }: { organizations: Organization[] }) => {
  const [index, setIndex] = useState(0);

  const OrganizationCard = ({
    organization,
  }: {
    organization: Organization;
  }) => (
    <div className="h-full w-full ">
      <img
        src={ImageUtils.getMediaUrl(organization.media[0])}
        alt={organization.name}
        className="w-full h-full object-cover object-center"
      />
    </div>
  );

  const scrollNext = () => {
    let curIndex = index + 4;
    if (curIndex >= organizations.length) {
      curIndex = 0;
    }
    setIndex(curIndex);
  };

  return (
    <>
      <div className="px-global bg-gray-bg">
        <div className="max-w-global mx-auto  flex flex-col md:flex-row items-center gap-10 py-[60px] sm:py-[121px]">
          <div className="flex w-full max-w-[677px] flex-col">
            <h2 className="mb-[14px] sm:mb-[24px]">
              Our <strong className="text-red">Member</strong> Organizations
            </h2>
            <p className="text-light-text body2 mb-[14px] sm:mb-[24px]">
              CORHA strives to build capacities based on the needs of the member
              organizations. It follows the principle of inclusiveness of all
              member organizations and stakeholders in all its activities.
            </p>
            <div>
              <ArrowedButton label="View More" onClick={() => {}} />
            </div>
          </div>

          <div className="min-w-fit flex flex-row items-center w-full justify-between">
            <div></div>
            <AnimatePresence key={index} exitBeforeEnter>
              <motion.div
                key="slider"
                initial={{ x: '30vw', opacity: 0 }}
                animate={{ x: 0, opacity: 1, transition: { duration: 0.5 } }}
                exit={{ x: '-40vw', transition: { duration: 2 } }}
                className="grid grid-cols-1 xs:grid-cols-2 gap-x-[30px] gap-y-[40px] lg:gap-x-[50px] sm:gap-y-[80px]"
              >
                {organizations.slice(index, index + 4).map((organization) => (
                  <div
                    key={organization.id}
                    className="h-[100px] w-[185px] object-cover object-center"
                  >
                    <OrganizationCard organization={organization} />
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>

            <div className="ml-[20px]">
              <button onClick={scrollNext}>
                <Icons.ChevronRight className="w-6 h-6 cursor-pointer" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Members;
