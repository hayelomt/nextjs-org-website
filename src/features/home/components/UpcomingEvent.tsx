import usePattern from '../../../core/hooks/usePattern';
import UpcomingEventCard from '../../upcomingevents/components/UpcomingEventCard';

const UpcomingEvent = () => {
  const { patterns } = usePattern(4);

  return (
    <>
      <div className="px-global bg-white">
        <div className="max-w-global mx-auto flex flex-col items-center py-[50px] sm:py-[111px] ">
          <h2 className="text-dark-text mb-[20px] sm:mb-[34px]">
            <strong className="text-red">Upcoming</strong> Events
          </h2>
          <div className="mb-[30px] max-w-[677px] sm:mb-[60px]">
            <p className="body2 text-light-text text-center">
              Maecenas suscipit in nulla tristique pretium. Praesent eget tellus
              nibh. Praesent mi orci, fringilla sed est ac, efficitur auctor
              velit. Fusce fermentum feugiat lacinia. Maecenas eleifend bibendum
              tellus ac
            </p>
          </div>

          <div className="w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-[23px]">
              {Array(4)
                .fill(null)
                .map((_, i) => (
                  <UpcomingEventCard
                    key={`upcoming-${i}`}
                    date="14 August, 2022"
                    title="Fund Raising Event For Children"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
               semper arcu mauris, eget iaculis sem scelerisque eu"
                    imgUrl="/imgs/blog/heading.jpeg"
                    type={patterns[i] === 0 ? 'image' : 'plain'}
                  />
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpcomingEvent;
