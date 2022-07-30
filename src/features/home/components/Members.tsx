import { ArrowedButton } from '../../../core/ui/shared/buttons';
import Icons from '../../../core/ui/utils/icons';

const Members = () => {
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
            <div className="grid grid-cols-1 xs:grid-cols-2 gap-x-[30px] gap-y-[40px] lg:gap-x-[50px] sm:gap-y-[80px]">
              <div className="h-[50px] w-[185px] bg-brand"></div>
              <div className="h-[50px] w-[185px] bg-brand"></div>
              <div className="h-[50px] w-[185px] bg-brand"></div>
              <div className="h-[50px] w-[185px] bg-brand"></div>
            </div>

            <div className="ml-[20px]">
              <Icons.ChevronRight className="w-6 h-6 cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Members;
