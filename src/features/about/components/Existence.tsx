const Existence = () => {
  return (
    <>
      <section className="px-global">
        <div className="max-w-global mx-auto flex flex-col items-start pt-[60px] sm:pt-[178px] pb-[30px] sm:pb-[60px] lg:flex-row lg:items-center">
          <div className="xm:mb-0 relative mb-[20px] min-h-[400px] w-full pr-10 sm:min-h-[560px]">
            <div
              className="absolute top-0 left-0 h-[80%] w-full max-w-[80%] rounded-[20px] border-[10px] border-white  sm:rounded-[32px] bg-cover"
              style={{ backgroundImage: 'url("/imgs/about/exist1.jpeg")' }}
            >
              <div className="px-[20px] md:px-[30px] py-[16px] md:py-[23px] bg-brand center w-fit absolute center rounded-[20px] top-0 right-[50%] lg:right-0 -translate-y-[50%] translate-x-[65%]">
                <div className="flex text-white items-center">
                  <p className="mr-[12px] text-[50px] md:text-[72px] leading-[72px] tracking-tighter">
                    17
                  </p>
                  <div className="flex flex-col">
                    <p className="subheading">Years</p>
                    <p className="subheading">of experience</p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="absolute top-[65px] left-10 h-[80%] w-full max-w-[80%] rounded-[20px] sm:top-20 sm:left-20 border-[10px] border-white bg-gray-500 bg-cover"
              style={{ backgroundImage: 'url("/imgs/about/hut.jpeg")' }}
            ></div>
          </div>
          <div className="w-full pl-4">
            <h2 className="mb-[12px] md:mb-[20px]">
              We Exists For Non-profits And Social Enterprises
            </h2>
            <p className="body1 text-light-text mb-[20px] md:mb-[40px]">
              Maecenas suscipit in nulla tristique pretium. Praesent eget tellus
              nibh. Praesent mi orci, fringilla sed est ac, efficitur auctor
              velit. Fusce fermentum feugiat lacinia. Maecenas eleifend bibendum
              tellus ac pretium.
            </p>
            <div className="flex gap-x-[12px] md:gap-x-[20px] mb-[15px] md:mb-[28px]">
              <button
                className="px-[12px] md:px-[24px] py-[8px] md:py-[10px] rounded-[10px] bg-red text-white text-button"
                style={{ boxShadow: '0px 1px 10px 3px rgba(0, 0, 0, 0.08)' }}
              >
                Mission
              </button>
              <button
                className="px-[12px] md:px-[24px] py-[8px] md:py-[10px] rounded-[10px] bg-white text-dark text-button"
                style={{ boxShadow: '0px 1px 10px 3px rgba(0, 0, 0, 0.08)' }}
              >
                Vision
              </button>
              <button
                className="px-[12px] md:px-[24px] py-[8px] md:py-[10px] rounded-[10px] bg-white text-dark text-button"
                style={{ boxShadow: '0px 1px 10px 3px rgba(0, 0, 0, 0.08)' }}
              >
                Our Goals
              </button>
            </div>
            <h3 className="mb-3">Lorem ipsum dolor sante</h3>
            <p className="body1 text-light-text">
              Maecenas suscipit in nulla tristique pretium. Praesent eget tellus
              nibh. Praesent mi orci, fringilla sed est ac, efficitur auctor
              velit. Fusce fermentum feugiat lacinia. Maecenas eleifend bibendum
              tellus ac pretium.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Existence;
