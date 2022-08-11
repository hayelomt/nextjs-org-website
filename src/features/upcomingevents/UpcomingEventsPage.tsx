import usePattern from '../../core/hooks/usePattern';
import Layout from '../../core/ui/layout/Layout';
import { TextHeading } from '../../core/ui/shared/heading';
import UpcomingEventCard from './components/UpcomingEventCard';

const UpcomingEventsPage = () => {
  const { patterns } = usePattern(6);

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
                {Array(6)
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
      </Layout>
    </>
  );
};

export default UpcomingEventsPage;
