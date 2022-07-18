import { ArrowedButton } from '../../../core/ui/shared/buttons';

const OurProjectCard = () => {
  return (
    <>
      <div
        className="flex max-h-none sm:max-h-[365px] max-w-[400px] sm:max-w-[750px] flex-col sm:flex-row rounded-[32px] bg-white mx-auto"
        style={{ boxShadow: '0px 1px 6px 4px rgba(0, 0, 0, 0.05)' }}
      >
        <div className="h-[365px] w-full sm:w-[230px] bg-brand flex-shrink-0 rounded-[32px]"></div>
        <div className="flex w-full flex-col px-[24px] py-[25px] sm:px-[50px] sm:py-[55px]">
          <p className="subtitle mb-2">Progress</p>
          <div className="mb-[18px] h-[8px] w-full bg-gray-bg sm:mb-[30px]">
            <div className="flex h-full w-[50%] bg-red"></div>
          </div>
          <h3 className="mb-2 line-clamp-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </h3>
          <p className="body1 mb-3 text-light-text line-clamp-3">
            Maecenas suscipit in nulla tristique pretium. Praesent eget tellus
            nibh. Praesent
          </p>
          <div>
            <ArrowedButton label="Learn More" onClick={() => {}} />
          </div>
        </div>
      </div>
    </>
  );
};

export default OurProjectCard;
