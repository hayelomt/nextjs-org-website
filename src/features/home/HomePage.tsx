import Layout from '../../core/ui/layout/Layout';
import { ArrowedButton } from '../../core/ui/shared/buttons';
import Icons from '../../core/ui/utils/icons';
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
          <div className="max-w-global py-[28px] sm:py-[42px] flex items-center justify-between mx-auto">
            <h3 className="text-white">
              Become A <span className="text-red">Volunteer</span>
            </h3>

            <button
              className={
                'btn !bg-transparent hover:!bg-white hover:text-brand border-2 group border-white hover:shadow-xl hover:-translate-y-1 transition duration-200'
              }
            >
              Learn More
              <span
                className={
                  'ml-[10px] h-[28px] w-[28px] rounded-full center group-hover:bg-brand bg-white text-red flex-shrink-0'
                }
              >
                <Icons.ArrowRight className="w-4 h-4 text-brand group-hover:text-white" />
              </span>
            </button>
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
