const AboutTeam = () => {
  const TeamCard = () => (
    <div className="xs:w-[309px] flex w-full max-w-[309px] flex-col rounded-[15px]">
      <div className="h-[309px] w-full rounded-[20px] bg-brand"></div>
      <div
        className="mt-[20px] flex flex-col rounded-[12px] py-[10px] px-4 sm:mt-[32px] sm:py-[15px]"
        style={{ boxShadow: '0px 1px 10px 3px rgba(0, 0, 0, 0.08)' }}
      >
        <p className="subheading mb-[2px]">Mandefro Sisay</p>
        <p className="subtitle text-red">Project Manager</p>
      </div>
    </div>
  );

  return (
    <>
      <div className="px-global w-full pt-[35px] pb-[60px] sm:pt-[72px] sm:pb-[136px]">
        <div className="max-w-global mx-auto flex flex-col items-center justify-around">
          <h2 className="mb-[20px] md:mb-[34px]">
            Meet Our <strong className="text-red">Team</strong>
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
            <div className="max-w-global mx-auto flex w-full flex-col items-center text-center">
              <div className="xs:w-fit grid w-full grid-cols-1 place-items-center gap-[30px] sm:grid-cols-2 sm:gap-[40px] lg:grid-cols-3 lg:gap-[60px] 2xl:grid-cols-4 2xl:gap-[80px]">
                {Array(10)
                  .fill(null)
                  .map((_, i) => (
                    <TeamCard key={`team-${i}`} />
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutTeam;
