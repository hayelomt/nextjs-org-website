import Icons from '../../../core/ui/utils/icons';
import CountUp from 'react-countup';
import useCachedInView from '../../../core/hooks/useCachedInView';

const Stats = () => {
  const { ref, inView, viewShown } = useCachedInView();

  return (
    <>
      <div
        className="px-global w-full bg-brand py-[24px] sm:py-[45px]"
        ref={ref}
      >
        {(inView || viewShown) && (
          <div className="max-w-global mx-auto flex flex-row text-white">
            <div className="grid grid-cols-2 md:grid-cols-4 w-full gap-8">
              <div className="mx-12 flex flex-shrink-0 flex-col items-center gap-y-3">
                <span className="h-[60px] mb-5">
                  <Icons.Volunteer />
                </span>
                <p className="font-barlow font-semibold text-[45px] leading-tight sm:text-[82px]">
                  <CountUp delay={0.5} end={1200} duration={2} />
                </p>
                <p className="subtitle text-center">Our volunteers</p>
              </div>
              <div className="mx-12 flex flex-shrink-0 flex-col items-center gap-y-3">
                <span className="h-[60px] mb-5">
                  <Icons.Partner />
                </span>
                <p className="font-barlow font-semibold text-[45px] leading-tight sm:text-[82px]">
                  <CountUp delay={0.5} end={1100} duration={2} />
                </p>
                <p className="subtitle text-center">Global partners</p>
              </div>
              <div className="mx-12 flex flex-shrink-0 flex-col items-center gap-y-3">
                <span className="h-[60px] mb-5">
                  <Icons.Medical />
                </span>
                <p className="font-barlow font-semibold text-[45px] leading-tight sm:text-[82px]">
                  <CountUp delay={0.5} end={1200} duration={2} />
                </p>
                <p className="subtitle text-center">Medical support</p>
              </div>
              <div className="mx-12 flex flex-shrink-0 flex-col items-center gap-y-3">
                <span className="h-[60px] mb-5">
                  <Icons.Support />
                </span>
                <p className="font-barlow font-semibold text-[45px] leading-tight sm:text-[82px]">
                  <CountUp delay={0.5} end={1300} duration={2} />
                </p>
                <p className="subtitle text-center">Children support</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Stats;
