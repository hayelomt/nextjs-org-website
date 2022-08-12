import usePattern from '../../core/hooks/usePattern';
import Layout from '../../core/ui/layout/Layout';
import { TextHeading } from '../../core/ui/shared/heading';
import ImageUtils from '../../core/ui/utils/image';
import UpcomingEventCard from './components/UpcomingEventCard';
import { UpcomingEvent } from './upcoming-event';

const UpcomingEventsPage = ({ events }: { events: UpcomingEvent[] }) => {
  const { patterns } = usePattern(events.length || 0);

  return (
    <>
      <Layout showHeaderShadow={true}>
        <TextHeading
          title={
            <h1 className="mb-3">
              Upcoming <strong className="text-red">Events</strong>
            </h1>
          }
          description={
            <div className="mt-[20px] mb-[40px] max-w-[736px] sm:mt-[32px] sm:mb-[96px]">
              <p className="body1 text-center text-dark-text">
                Maecenas suscipit in nulla tristique pretium. Praesent eget
                tellus nibh. Praesent mi orci, fringilla sed est ac, efficitur
                auctor velit. Fusce fermentum feugiat lacinia. Maecenas eleifend
                bibendum tellus ac pretium. Etiam odio arcu, vestibulum id
                mattis ut, gravida sed ante. Nam ut cursus m
              </p>
            </div>
          }
          crumbLinks={[{ label: 'Home', url: '/' }, { label: 'Events' }]}
        />

        <div className="px-global w-full pb-[60px] sm:pb-[136px] bg-white">
          <div className="max-w-global mx-auto flex flex-col items-center">
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
      </Layout>
    </>
  );
};

export default UpcomingEventsPage;
