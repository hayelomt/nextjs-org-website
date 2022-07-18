import { ArrowedButton } from '../../core/ui/shared/buttons';
import { TextHeading } from '../../core/ui/shared/hading';
import Icons from '../../core/ui/utils/icons';

const UpcomingEventsPage = () => {
  return (
    <>
      <TextHeading
        title={
          <h1 className="mb-3">
            Upcoming <strong className="text-red">Events</strong>
          </h1>
        }
        description={
          <div className="mt-[20px] mb-[40px] max-w-[736px] sm:mt-[32px] sm:mb-[96px]">
            <p className="body1 text-center text-dark-text">
              Maecenas suscipit in nulla tristique pretium. Praesent eget tellus
              nibh. Praesent mi orci, fringilla sed est ac, efficitur auctor
              velit. Fusce fermentum feugiat lacinia. Maecenas eleifend bibendum
              tellus ac pretium. Etiam odio arcu, vestibulum id mattis ut,
              gravida sed ante. Nam ut cursus m
            </p>
          </div>
        }
        crumbLinks={['Home', 'Events']}
      />

      <div className="px-global w-full pb-[60px] sm:pb-[136px] bg-white">
        <div className="max-w-global mx-auto flex flex-col items-center">
          <div className="w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-[23px]">
              <div className="pt-[20px] sm:pt-[46px] pb-[30px] sm:pb-[60px] px-[30px] xm:px-[55px] w-full flex flex-row bg-gray-800 bg-opacity-80 rounded-[24px]">
                <div className="w-full flex flex-col text-white">
                  <div className="flex items-center mb-2">
                    <span className="mr-[11px]">
                      <Icons.Calendar className="h-4 w-4 text-red" />
                    </span>
                    <p className="subtitle">14 August, 2022</p>
                  </div>
                  <h3 className="mb-2">Fund Raising Event For Children</h3>
                  <p className="body2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    semper arcu mauris, eget iaculis sem scelerisque eu
                  </p>
                </div>
                <div>
                  <ArrowedButton label="Join Event" onClick={() => {}} />
                </div>
              </div>
              <div
                className="pt-[20px] sm:pt-[46px] pb-[30px] sm:pb-[60px] px-[30px] xm:px-[55px] w-full flex flex-row bg-white bg-opacity-80 rounded-[24px]"
                style={{ boxShadow: '0px 1px 6px 4px rgba(0, 0, 0, 0.05)' }}
              >
                <div className="w-full flex flex-col ">
                  <div className="flex items-center mb-2">
                    <span className="mr-[11px]">
                      <Icons.Calendar className="h-4 w-4 text-red" />
                    </span>
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

export default UpcomingEventsPage;
