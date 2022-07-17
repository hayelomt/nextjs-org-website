import { ArrowedButton } from '../../../core/ui/shared/buttons';
import Icons from '../../../core/ui/utils/icons';

const Heading = () => {
  return (
    <>
      <div
        className="px-global"
        style={{
          background:
            'linear-gradient(0deg, rgba(24, 23, 23, 0.658), rgba(19, 11, 11, 0.199)), url("/imgs/home/landing-cover.jpeg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="max-w-global pt-[100px] sm:pt-[205px] pb-[110px] sm:pb-[187px] mx-auto flex flex-row justify-between items-center">
          <div className="max-w-[877px] flex flex-col text-white">
            <h1 className="mb-[20px] sm:mb-[33px]">
              Improving The Overall{' '}
              <span className="text-red">
                Health Status And Quality Of Life
              </span>{' '}
              For All Ethiopian People.
            </h1>
            <p className="body2 mb-[30px] sm:mb-[54px]">
              CORHA is mandated to play a strategic role of coordination and
              representation, capacity building, policy dialogue, knowledge
              management and resource mobilization for its member organization.
            </p>
            <div className="flex gap-[12px] md:gap-[18px]">
              <ArrowedButton label="Learn More" onClick={() => {}} />
              <ArrowedButton
                label="Our Projects"
                onClick={() => {}}
                className="!bg-brand"
              />
            </div>
          </div>

          <div>
            <Icons.ChevronRight className="h-[40px] w-fit text-white" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Heading;
