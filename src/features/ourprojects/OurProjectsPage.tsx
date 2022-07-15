import OurProjectCard from './components/OurProjectCard';

const OurProjectPage = () => {
  return (
    <>
      <div className="px-global w-full pt-[35px] pb-[60px] sm:pt-[72px] sm:pb-[136px] bg-[#F5F5F5]">
        <div className="max-w-global mx-auto flex flex-col items-center">
          <h1 className="mb-3">
            Our <strong className="text-red">Projects</strong>
          </h1>
          <span>bread crimmbs</span>
          <div className="mt-[20px] mb-[20px] max-w-[736px] sm:mt-[32px] sm:mb-[40px]">
            <p className="body1 text-center text-light-text">
              Maecenas suscipit in nulla tristique pretium. Praesent eget tellus
              nibh. Praesent mi orci, fringilla sed est ac, efficitur auctor
              velit. Fusce fermentum feugiat lacinia. Maecenas eleifend bibendum
              tellus ac pretium. Etiam odio arcu, vestibulum id mattis ut,
              gravida sed ante. Nam ut cursus m
            </p>
          </div>

          <div className="mb-[35px] sm:mb-[70px] flex gap-x-[12px]  md:gap-x-[20px] max-w-full overflow-x-auto pb-2">
            <button
              className="text-button rounded-[10px] bg-red px-[12px] py-[8px] text-white md:px-[24px] md:py-[10px]"
              style={{ boxShadow: '0px 1px 10px 3px rgba(0, 0, 0, 0.08)' }}
            >
              All
            </button>
            <button
              className="text-button rounded-[10px] bg-white px-[12px] py-[8px] text-dark md:px-[24px] md:py-[10px]"
              style={{ boxShadow: '0px 1px 10px 3px rgba(0, 0, 0, 0.08)' }}
            >
              Children
            </button>
            <button
              className="text-button rounded-[10px] bg-white px-[12px] py-[8px] text-dark md:px-[24px] md:py-[10px]"
              style={{ boxShadow: '0px 1px 10px 3px rgba(0, 0, 0, 0.08)' }}
            >
              STD
            </button>
            <button
              className="text-button rounded-[10px] bg-white px-[12px] py-[8px] text-dark md:px-[24px] md:py-[10px]"
              style={{ boxShadow: '0px 1px 10px 3px rgba(0, 0, 0, 0.08)' }}
            >
              Contraception
            </button>
          </div>

          <div className="w-full mb-[25px] sm:mb-[58px]">
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-[40px]">
              {Array(10)
                .fill(null)
                .map((_, i) => (
                  <OurProjectCard key={`project-${i}`} />
                ))}
            </div>
          </div>

          <div className="w-full center gap-x-[14px] max-w-full overflow-x-auto">
            <button className="bg-dark-blue w-[40px] h-[40px] rounded-[12px] center text-white font-barlow ">
              &#60;&#60;
            </button>
            <button className="bg-dark-blue w-[40px] h-[40px] rounded-[12px] center text-white">
              1
            </button>
            <button className="bg-red w-[40px] h-[40px] rounded-[12px] center text-white">
              2
            </button>
            <button className="bg-dark-blue w-[40px] h-[40px] rounded-[12px] center text-white">
              3
            </button>
            <button className="bg-dark-blue w-[40px] h-[40px] rounded-[12px] center text-white">
              &#62;&#62;
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurProjectPage;
