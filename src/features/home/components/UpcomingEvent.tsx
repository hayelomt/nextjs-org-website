const UpcomingEvent = () => {
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
              <div className="pt-[20px] sm:pt-[46px] pb-[30px] sm:pb-[60px] px-[30px] xm:px-[55px] w-full flex flex-row bg-gray-800 bg-opacity-80 rounded-[24px]">
                <div className="w-full flex flex-col text-white">
                  <div className="flex items-center mb-2">
                    <span className="mr-[11px]">ic</span>
                    <p className="subtitle">14 August, 2022</p>
                  </div>
                  <h3 className="mb-2">Fund Raising Event For Children</h3>
                  <p className="body2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    semper arcu mauris, eget iaculis sem scelerisque eu
                  </p>
                </div>
                <div>
                  <button className="btn max-w-[130px] flex-shrink-0">
                    Join Event
                    <span className="ml-[10px]">ic</span>
                  </button>
                </div>
              </div>
              <div
                className="pt-[20px] sm:pt-[46px] pb-[30px] sm:pb-[60px] px-[30px] xm:px-[55px] w-full flex flex-row bg-white bg-opacity-80 rounded-[24px]"
                style={{ boxShadow: '0px 1px 6px 4px rgba(0, 0, 0, 0.05)' }}
              >
                <div className="w-full flex flex-col ">
                  <div className="flex items-center mb-2">
                    <span className="mr-[11px]">ic</span>
                    <p className="subtitle text-light-text">14 August, 2022</p>
                  </div>
                  <h3 className="mb-2 text-dark-text">
                    Fund Raising Event For Children
                  </h3>
                  <p className="body2 text-light-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    semper arcu mauris, eget iaculis sem scelerisque eu
                  </p>
                </div>
                <div>
                  <button className="btn max-w-[130px] flex-shrink-0">
                    Join Event
                    <span className="ml-[10px]">ic</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpcomingEvent;
