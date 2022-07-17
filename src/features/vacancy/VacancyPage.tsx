const VacancyPage = () => {
  return (
    <>
      <div className="px-global w-full pt-[35px] pb-[60px] sm:pt-[72px] sm:pb-[136px] bg-white">
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
        </div>
      </div>

      <div className="px-global w-full pt-[35px] pb-[60px] sm:pt-[72px] sm:pb-[136px] bg-white">
        <div className="max-w-global mx-auto flex flex-col">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[20px] sm:gap-[43px] mx-auto">
            <div
              className="max-w-[660px] py-[30px] sm:py-[63px] bg-white px-[25px] sm:px-[53px] flex flex-col rounded-[32px]"
              style={{ boxShadow: '0px 1px 6px 4px rgba(0, 0, 0, 0.05)' }}
            >
              <h3 className="mb-2 sm:mb-4">Accountant</h3>
              <p className="body1 text-light-text mb-[12px] sm:mb-[20px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                ut enim vitae nisl cursus feugiat. Praesent condimentum velit
                vitae porta luctus. In hac habitasse platea dictumst. In lacus
                lacus, gravida vel lacus et, tristique faucibus dolor.
              </p>

              <div className="flex flex-col xs:flex-row items-start xs:items-end gap-x-2 gap-y-2 xs:gap-y-0">
                <div className="flex flex-col w-full gap-y-2 sm:gap-y-3">
                  <div className="flex items-center">
                    <span className="mr-2 sm:mr-4 ">ic</span>
                    <p className="body1 uppercase text-dark-text font-semibold mr-[20px] sm:mr-[32px]">
                      DEADLINE
                    </p>
                    <p className="body1">12 Aug 2014</p>
                  </div>
                  <div className="flex items-center">
                    <span className="mr-2 sm:mr-4 ">ic</span>
                    <p className="body1 uppercase text-dark-text font-semibold mr-[20px] sm:mr-[32px]">
                      MINIMUM EXPERIENCE
                    </p>
                    <p className="body1">4+ Years</p>
                  </div>
                  <div className="flex items-center">
                    <span className="mr-2 sm:mr-4 ">ic</span>
                    <p className="body1 uppercase text-dark-text font-semibold mr-[20px] sm:mr-[32px]">
                      AVAILABLE POSITIONS{' '}
                    </p>
                    <p className="body1">2</p>
                  </div>
                </div>
                <div className="flex-shrink-0">
                  <button className="btn">Apply Now</button>
                </div>
              </div>
            </div>
            <div
              className="max-w-[660px] py-[30px] sm:py-[63px] bg-brand text-white px-[25px] sm:px-[53px] flex flex-col rounded-[32px]"
              style={{ boxShadow: '0px 1px 6px 4px rgba(0, 0, 0, 0.05)' }}
            >
              <h3 className="mb-2 sm:mb-4">Accountant</h3>
              <p className="body1 text-gray-bg mb-[12px] sm:mb-[20px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                ut enim vitae nisl cursus feugiat. Praesent condimentum velit
                vitae porta luctus. In hac habitasse platea dictumst. In lacus
                lacus, gravida vel lacus et, tristique faucibus dolor.
              </p>

              <div className="flex flex-col xs:flex-row items-start xs:items-end gap-x-2 gap-y-2 xs:gap-y-0">
                <div className="flex flex-col w-full gap-y-2 sm:gap-y-3">
                  <div className="flex items-center">
                    <span className="mr-2 sm:mr-4 ">ic</span>
                    <p className="body1 uppercase text-white font-semibold mr-[20px] sm:mr-[32px]">
                      DEADLINE
                    </p>
                    <p className="body1">12 Aug 2014</p>
                  </div>
                  <div className="flex items-center">
                    <span className="mr-2 sm:mr-4 ">ic</span>
                    <p className="body1 uppercase text-white font-semibold mr-[20px] sm:mr-[32px]">
                      MINIMUM EXPERIENCE
                    </p>
                    <p className="body1">4+ Years</p>
                  </div>
                  <div className="flex items-center">
                    <span className="mr-2 sm:mr-4 ">ic</span>
                    <p className="body1 uppercase text-white font-semibold mr-[20px] sm:mr-[32px]">
                      AVAILABLE POSITIONS{' '}
                    </p>
                    <p className="body1">2</p>
                  </div>
                </div>
                <div className="flex-shrink-0">
                  <button className="btn">Apply Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-4 my-2 w-full flex max-w-[822px] flex-col rounded-[32px] bg-white py-[30px] px-[23px] sm:py-[65px] sm:px-[56px] relative">
        <div className="absolute top-[20px] sm:top-[35px] right-[20px] sm:right-[35px]">
          IC
        </div>
        <h3 className="mb-[20px] sm:mb-[50px]">
          Accountant Job Application Form
        </h3>

        <div className="mb-[14px] flex gap-x-[16px] sm:mb-[20px] sm:gap-x-[31px]">
          <input
            className="w-full rounded-[16px] border border-[#D6D4D3]"
            type="text"
            placeholder="First Name"
          />
          <input
            className="w-full rounded-[16px] border border-[#D6D4D3]"
            type="text"
            placeholder="Last Name"
          />
        </div>

        <div className="mb-[20px] flex gap-x-[16px] sm:mb-[55px] sm:gap-x-[31px]">
          <input
            className="w-full rounded-[16px] border border-[#D6D4D3]"
            type="text"
            placeholder="Email"
          />
          <input
            className="w-full rounded-[16px] border border-[#D6D4D3]"
            type="text"
            placeholder="Phone number"
          />
        </div>

        <div className="flex">
          <p className="subheading mr-[35px] sm:mr-[60px]">Upload your CV</p>

          <input
            type="file"
            className="file:py-[10px] file:px-[15px] sm:file:px-[24px] file:bg-transparent file:border-0 file:shadow-2xl file:label"
          />
        </div>
      </div>
    </>
  );
};

export default VacancyPage;
