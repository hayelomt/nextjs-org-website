type VacancyProps = {
  title: string;
  description: string;
  deadline: string;
  minExperience: string;
  positions: string;
  type?: 'plain' | 'brand';
};

const VacancyCard = ({
  title,
  description,
  deadline,
  minExperience,
  positions,
  type = 'plain',
}: VacancyProps) => {
  const Card1 = () => (
    <div
      className="max-w-[660px] py-[30px] sm:py-[63px] bg-white px-[25px] sm:px-[53px] flex flex-col rounded-[32px]"
      style={{ boxShadow: '0px 1px 6px 4px rgba(0, 0, 0, 0.05)' }}
    >
      <h3 className="mb-2 sm:mb-4">{title}</h3>
      <p className="body1 text-light-text mb-[12px] sm:mb-[20px]">
        {description}
      </p>

      <div className="flex flex-col xs:flex-row items-start xs:items-end gap-x-2 gap-y-2 xs:gap-y-0">
        <div className="flex flex-col w-full gap-y-2 sm:gap-y-3">
          <div className="flex items-center">
            <span className="mr-2 sm:mr-4 ">ic</span>
            <p className="body1 uppercase text-dark-text font-semibold mr-[20px] sm:mr-[32px]">
              DEADLINE
            </p>
            <p className="body1">{deadline}</p>
          </div>
          <div className="flex items-center">
            <span className="mr-2 sm:mr-4 ">ic</span>
            <p className="body1 uppercase text-dark-text font-semibold mr-[20px] sm:mr-[32px]">
              MINIMUM EXPERIENCE
            </p>
            <p className="body1">{minExperience}</p>
          </div>
          <div className="flex items-center">
            <span className="mr-2 sm:mr-4 ">ic</span>
            <p className="body1 uppercase text-dark-text font-semibold mr-[20px] sm:mr-[32px]">
              AVAILABLE POSITIONS
            </p>
            <p className="body1">{positions}</p>
          </div>
        </div>
        <div className="flex-shrink-0">
          <button className="btn">Apply Now</button>
        </div>
      </div>
    </div>
  );

  const Card2 = () => (
    <div
      className="max-w-[660px] py-[30px] sm:py-[63px] bg-brand text-white px-[25px] sm:px-[53px] flex flex-col rounded-[32px]"
      style={{ boxShadow: '0px 1px 6px 4px rgba(0, 0, 0, 0.05)' }}
    >
      <h3 className="mb-2 sm:mb-4">{title}</h3>
      <p className="body1 text-gray-bg mb-[12px] sm:mb-[20px]">{description}</p>

      <div className="flex flex-col xs:flex-row items-start xs:items-end gap-x-2 gap-y-2 xs:gap-y-0">
        <div className="flex flex-col w-full gap-y-2 sm:gap-y-3">
          <div className="flex items-center">
            <span className="mr-2 sm:mr-4 ">ic</span>
            <p className="body1 uppercase text-white font-semibold mr-[20px] sm:mr-[32px]">
              DEADLINE
            </p>
            <p className="body1">{deadline}</p>
          </div>
          <div className="flex items-center">
            <span className="mr-2 sm:mr-4 ">ic</span>
            <p className="body1 uppercase text-white font-semibold mr-[20px] sm:mr-[32px]">
              MINIMUM EXPERIENCE
            </p>
            <p className="body1">{minExperience}</p>
          </div>
          <div className="flex items-center">
            <span className="mr-2 sm:mr-4 ">ic</span>
            <p className="body1 uppercase text-white font-semibold mr-[20px] sm:mr-[32px]">
              AVAILABLE POSITIONS{' '}
            </p>
            <p className="body1">{positions}</p>
          </div>
        </div>
        <div className="flex-shrink-0">
          <button className="btn">Apply Now</button>
        </div>
      </div>
    </div>
  );

  return <>{type === 'plain' ? <Card1 /> : <Card2 />}</>;
};

export default VacancyCard;
