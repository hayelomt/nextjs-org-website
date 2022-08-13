import usePattern from '../../../core/hooks/usePattern';
import ImageUtils from '../../../core/ui/utils/image';
import UpcomingEventCard from '../../upcomingevents/components/UpcomingEventCard';
import { UpcomingEvent } from '../../upcomingevents/upcoming-event';

const UpcomingEvent = ({ events }: { events: UpcomingEvent[] }) => {
  const { patterns } = usePattern(events.length);

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
              {events.map((event, i) => (
                <UpcomingEventCard
                  key={event.id}
                  date={event.date}
                  title={event.title}
                  description={event.description}
                  imgUrl={ImageUtils.getMediaUrl(event.media[0])}
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
