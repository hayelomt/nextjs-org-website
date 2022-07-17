import Layout from '../../core/ui/layout/Layout';
import { ArrowedButton } from '../../core/ui/shared/buttons';
import About from './components/About';
import Gallery from './components/Gallery';
import Heading from './components/Heading';
import LatestNews from './components/LatestNews';
import Members from './components/Members';
import OtherSay from './components/OtherSay';
import UpcomingEvent from './components/UpcomingEvent';

const HomePage = () => {
  return (
    <>
      <Layout>
        <Heading />
        <About />
        <LatestNews />
        <div className="px-global bg-brand">
          <div className="max-w-global py-[28px] sm:py-[42px] flex justify-between mx-auto">
            <h3 className="text-white">
              Become A <span className="text-red">Volunteer</span>
            </h3>

            <ArrowedButton
              label="Learn More"
              onClick={() => {}}
              className="!bg-transparent border-[2px] border-white"
              arrowClassName="!text-brand"
            />
          </div>
        </div>
        <Gallery />
        <OtherSay />
        <UpcomingEvent />
        <Members />
      </Layout>
    </>
  );
};

export default HomePage;
