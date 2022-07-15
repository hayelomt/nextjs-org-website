import About from './components/About';
import Gallery from './components/Gallery';
import Heading from './components/Heading';
import LatestNews from './components/LatestNews';

const HomePage = () => {
  return (
    <>
      <Heading />
      <About />
      <LatestNews />
      <div className="px-global bg-brand">
        <div className="max-w-global py-[28px] sm:py-[42px] flex justify-between mx-auto">
          <h3 className="text-white">
            Become A <span className="text-red">Volunteer</span>
          </h3>

          <button className="btn !bg-transparent border-[2px] border-white">
            <span className="mr-[10px]">Learn More</span>
            ic
          </button>
        </div>
      </div>
      {/* <Gallery /> */}
    </>
  );
};

export default HomePage;
