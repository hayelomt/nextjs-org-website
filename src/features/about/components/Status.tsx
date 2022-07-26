import Icons from '../../../core/ui/utils/icons';
import CountUp from 'react-countup';
import useCachedInView from '../../../core/hooks/useCachedInView';

const Status = () => {
  const { ref, inView, viewShown } = useCachedInView();

  return (
    <>
      <div
        className="px-global w-full bg-brand py-[24px] sm:py-[45px]"
        ref={ref}
      >
        {(inView || viewShown) && (
          <div className="max-w-global mx-auto flex flex-row text-white">
            <div className="flex w-full justify-between max-w-full flex-row overflow-x-auto pb-4">
              <div className="mx-12 flex flex-shrink-0 flex-col items-center">
                <span className="h-[60px] mb-5">
                  <Icons.Volunteer />
                </span>
                <p className="font-barlow text-[55px] leading-tight sm:text-[82px]">
                  <CountUp delay={0.5} end={1200} duration={2} />
                </p>
                <p className="subtitle">Our volunteers</p>
              </div>
              <div className="mx-12 flex flex-shrink-0 flex-col items-center">
                <span className="h-[60px] mb-5">
                  <Icons.Partner />
                </span>
                <p className="font-barlow text-[55px] leading-tight sm:text-[82px]">
                  <CountUp delay={0.5} end={1100} duration={2} />
                </p>
                <p className="subtitle">Global partners</p>
              </div>
              <div className="mx-12 flex flex-shrink-0 flex-col items-center">
                <span className="h-[60px] mb-5">
                  <Icons.Medical />
                </span>
                <p className="font-barlow text-[55px] leading-tight sm:text-[82px]">
                  <CountUp delay={0.5} end={1200} duration={2} />
                </p>
                <p className="subtitle">Medical support</p>
              </div>
              <div className="mx-12 flex flex-shrink-0 flex-col items-center">
                <span className="h-[60px] mb-5">
                  <Icons.Support />
                </span>
                <p className="font-barlow text-[55px] leading-tight sm:text-[82px]">
                  <CountUp delay={0.5} end={1300} duration={2} />
                </p>
                <p className="subtitle">Children support</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Status;
