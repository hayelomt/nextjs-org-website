const AboutOthersSay = () => {
  const OtherSayCard = () => (
    <div className="flex min-w-fit max-w-[392px] flex-col rounded-[24px] bg-white py-[26px] px-[18px] xs:min-w-[392px] sm:py-[42px] sm:px-[36px]">
      <div className="mb-[20px] flex w-full items-center justify-between sm:mb-[32px]">
        <div className="flex">
          <div className="mr-[14px] h-[65px] w-[65px] rounded-full border-[3px] border-[#00249C4D] sm:mr-[20px]"></div>
          <div className="flex flex-col">
            <p className="subheading text-dark-text my-1">Abebe Aklilu</p>
            <p className="subtitle text-red">Accountant</p>
          </div>
        </div>
        <div>Ic</div>
      </div>

      <p className="body1 text-light-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tristique,
        metus eget vehicula dictum, purus erat finibus elit, eget finibus orci
        leo nec turpis.
      </p>
    </div>
  );

  return (
    <>
      <div className="px-global w-full pt-[35px] pb-[60px] sm:pt-[72px] sm:pb-[136px] bg-gray-bg">
        <div className="max-w-global mx-auto flex flex-col items-center justify-around">
          <h2 className="mb-[20px] md:mb-[34px]">
            What <strong className="text-red">Others</strong> Say
          </h2>
          <div className="mb-[50px] max-w-[690px] sm:mb-[111px]">
            <p className="text-light-text text-center">
              Maecenas suscipit in nulla tristique pretium. Praesent eget tellus
              nibh. Praesent mi orci, fringilla sed est ac, efficitur auctor
              velit. Fusce fermentum feugiat lacinia. Maecenas eleifend bibendum
              tellus ac
            </p>
          </div>

          <div className="w-full">
            <div className="max-w-global mx-auto flex w-full flex-row items-center text-center">
              <span>ic</span>
              <div className="w-full flex justify-around">
                <OtherSayCard />
                <OtherSayCard />
                <OtherSayCard />
              </div>
              <span>ic</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutOthersSay;
