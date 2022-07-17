import Icons from '../../../core/ui/utils/icons';

const Status = () => {
  return (
    <>
      <div className="px-global w-full bg-brand py-[24px] sm:py-[45px]">
        <div className="max-w-global mx-auto flex flex-row text-white">
          <div className="flex w-full justify-between max-w-full flex-row overflow-x-auto pb-4">
            <div className="mx-12 flex flex-shrink-0 flex-col items-center">
              <span className="h-[60px] mb-5">
                <Icons.Volunteer />
              </span>
              <p className="font-barlow text-[55px] leading-tight sm:text-[82px]">
                1,000
              </p>
              <p className="subtitle">Our volunteers</p>
            </div>
            <div className="mx-12 flex flex-shrink-0 flex-col items-center">
              <span className="h-[60px] mb-5">
                <Icons.Partner />
              </span>
              <p className="font-barlow text-[55px] leading-tight sm:text-[82px]">
                1,100
              </p>
              <p className="subtitle">Global partners</p>
            </div>
            <div className="mx-12 flex flex-shrink-0 flex-col items-center">
              <span className="h-[60px] mb-5">
                <Icons.Medical />
              </span>
              <p className="font-barlow text-[55px] leading-tight sm:text-[82px]">
                1,200
              </p>
              <p className="subtitle">Medical support</p>
            </div>
            <div className="mx-12 flex flex-shrink-0 flex-col items-center">
              <span className="h-[60px] mb-5">
                <Icons.Support />
              </span>
              <p className="font-barlow text-[55px] leading-tight sm:text-[82px]">
                1,300
              </p>
              <p className="subtitle">Children support</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Status;
