const OtherSay = () => {
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
      <div className="px-global bg-gray-bg">
        <div className="max-w-global mx-auto flex flex-col xl:flex-row items-center xl:items-start gap-x-10 py-[50px] sm:py-[110px]">
          <div className="flex w-full max-w-[448px] flex-col">
            <h2 className="mb-[14px] sm:mb-[24px]">
              What <strong className="text-red">Others</strong> Say About Us
            </h2>
            <p className="text-light-text mb-[14px] sm:mb-[24px]">
              Maecenas suscipit in nulla tristique pretium. Praesent eget tellus
              nibh. Praesent mi orci, fringilla sed est ac, efficitur
            </p>
            <div>
              <button className="btn">
                View more
                <span className="ml-[10px]">ic</span>
              </button>
            </div>
          </div>

          <div className="w-full justify-center mt-8 xl:mt-0">
            <div className="flex flex-row gap-x-[45px] pb-5 max-w-full xl:max-w-[900px] overflow-x-auto">
              {Array(5)
                .fill(null)
                .map((_, i) => (
                  <OtherSayCard key={`other-say-${i}`} />
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OtherSay;
