type TenderProps = {
  title: string;
  description: string;
  deadline: string;
  type: 'plain' | 'brand';
};

const TenderCard = ({ title, description, deadline, type }: TenderProps) => {
  const Card1 = () => (
    <div
      className="flex h-fit max-w-[660px] flex-col rounded-[32px] bg-white py-[30px] px-[25px] sm:py-[63px] sm:px-[53px]"
      style={{ boxShadow: '0px 1px 6px 4px rgba(0, 0, 0, 0.05)' }}
    >
      <h3 className="mb-2 sm:mb-4">{title}</h3>
      <p className="body1 mb-[12px] text-light-text sm:mb-[20px]">
        {description}
      </p>

      <div className="mb-[10px] flex items-center sm:mb-[14px]">
        <span className="mr-2 sm:mr-4">ic</span>
        <p className="body1 mr-[20px] uppercase text-dark-text sm:mr-[32px]">
          DEADLINE
        </p>
        <p className="body1">{deadline}</p>
      </div>
      <div className="">
        <button className="btn">Apply Now</button>
      </div>
    </div>
  );

  const Card2 = () => (
    <div
      className="flex max-w-[660px] flex-col rounded-[32px] bg-brand py-[30px] px-[25px] text-white sm:py-[63px] sm:px-[53px]"
      style={{ boxShadow: '0px 1px 6px 4px rgba(0, 0, 0, 0.05)' }}
    >
      <h3 className="mb-2 sm:mb-4">{title}</h3>
      <p className="body1 mb-[12px] text-gray-bg sm:mb-[20px]">{description}</p>

      <div className="mb-[10px] flex items-center sm:mb-[14px]">
        <span className="mr-2 sm:mr-4">ic</span>
        <p className="body1 mr-[20px] uppercase text-white sm:mr-[32px]">
          DEADLINE
        </p>
        <p className="body1">{deadline}</p>
      </div>
      <div className="">
        <button className="btn">Apply Now</button>
      </div>
    </div>
  );

  return <>{type === 'plain' ? <Card1 /> : <Card2 />}</>;
};

export default TenderCard;
