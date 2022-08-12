import { NextPage } from 'next';
import { NextSeo } from 'next-seo';
import { apiInstance } from '../src/core/services/api';
import { UpcomingEvent } from '../src/features/upcomingevents/upcoming-event';
import UpcomingEventsPage from '../src/features/upcomingevents/UpcomingEventsPage';

type EventProps = {
  events: UpcomingEvent[];
};

const UpcomingEvents = ({ events }: EventProps & NextPage) => {
  return (
    <>
      <NextSeo title="CORHA | Upcoming Events" />
      <UpcomingEventsPage events={events} />
    </>
  );
};

export default UpcomingEvents;

export async function getStaticProps(): Promise<{ props: EventProps }> {
  const res = await apiInstance.get('events');
  const events = res.data.data as UpcomingEvent[];

  return {
    props: {
      events,
    },
  };
}
