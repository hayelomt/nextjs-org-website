import { DateTime } from 'luxon';
import { ArrowedButton } from '../../../core/ui/shared/buttons';
import Icons from '../../../core/ui/utils/icons';

type VacancyProps = {
  title: string;
  description: string;
  deadline: string;
  minExperience: string;
  positions: number;
  type?: 'plain' | 'brand';
  onShowVacancy: () => void;
};

const VacancyCard = ({
  title,
  description,
  deadline,
  minExperience,
  positions,
  type = 'plain',
  onShowVacancy,
}: VacancyProps) => {
  const Card1 = () => (
    <div
      className="max-w-[660px] py-[30px] sm:py-[63px] bg-white px-[25px] sm:px-[53px] flex flex-col rounded-[32px] justify-between"
      style={{ boxShadow: '0px 1px 6px 4px rgba(0, 0, 0, 0.05)' }}
    >
      <div className="flex flex-col">
        <h3 className="mb-2 sm:mb-4">{title}</h3>
        <p className="body1 text-light-text mb-[12px] sm:mb-[20px]">
          {description}
        </p>
      </div>

      <div className="flex flex-col xs:flex-row items-start xs:items-end gap-x-2 gap-y-2 xs:gap-y-0">
        <div className="flex flex-col w-full gap-y-2 sm:gap-y-3">
          <div className="flex items-center">
            <span className="mr-2 sm:mr-4 ">
              <Icons.Deadline />
            </span>
            <p className="uppercase text-[14px] sm:text-[16px] font-barlow !text-[#001234] !font-medium  mr-[20px] sm:mr-[32px]">
              DEADLINE
            </p>
            <p className="body1">
              {DateTime.fromISO(deadline).toLocaleString(DateTime.DATE_FULL)}
            </p>
          </div>
          <div className="flex items-center">
            <span className="mr-2 sm:mr-4 ">
              <Icons.Experience />
            </span>
            <p className="uppercase text-[14px] sm:text-[16px] font-barlow !text-[#001234] !font-medium  mr-[20px] sm:mr-[32px]">
              MINIMUM EXPERIENCE
            </p>
            <p className="body1">{minExperience}</p>
          </div>
          <div className="flex items-center">
            <span className="mr-2 sm:mr-4 ">
              <Icons.Positions />
            </span>
            <p className="uppercase text-[14px] sm:text-[16px] font-barlow !text-[#001234] !font-medium  mr-[20px] sm:mr-[32px]">
              AVAILABLE POSITIONS
            </p>
            <p className="body1">{positions}</p>
          </div>
        </div>
        <div className="flex-shrink-0">
          <ArrowedButton onClick={onShowVacancy} label="Apply Now" />
        </div>
      </div>
    </div>
  );

  const Card2 = () => (
    <div
      className="max-w-[660px] py-[30px] sm:py-[63px] bg-brand text-white px-[25px] sm:px-[53px] flex flex-col rounded-[32px] justify-between"
      style={{ boxShadow: '0px 1px 6px 4px rgba(0, 0, 0, 0.05)' }}
    >
      <div className="flex flex-col">
        <h3 className="mb-2 sm:mb-4">{title}</h3>
        <p className="body1 text-gray-bg mb-[12px] sm:mb-[20px]">
          {description}
        </p>
      </div>

      <div className="flex flex-col xs:flex-row items-start xs:items-end gap-x-2 gap-y-2 xs:gap-y-0">
        <div className="flex flex-col w-full gap-y-2 sm:gap-y-3">
          <div className="flex items-center">
            <span className="mr-2 sm:mr-4 ">
              <Icons.Deadline />
            </span>
            <p className="uppercase text-[14px] sm:text-[16px] font-barlow text-white font-medium mr-[20px]  sm:mr-[32px]">
              DEADLINE
            </p>
            <p className="body1">
              {DateTime.fromISO(deadline).toLocaleString(DateTime.DATE_FULL)}
            </p>
          </div>
          <div className="flex items-center">
            <span className="mr-2 sm:mr-4 ">
              <Icons.Experience />
            </span>
            <p className="uppercase text-[14px] sm:text-[16px] font-barlow text-white font-medium mr-[20px] sm:mr-[32px]">
              MINIMUM EXPERIENCE
            </p>
            <p className="body1">{minExperience}</p>
          </div>
          <div className="flex items-center">
            <span className="mr-2 sm:mr-4 ">
              <Icons.Positions />
            </span>
            <p className="uppercase text-[14px] sm:text-[16px] font-barlow text-white font-medium mr-[20px] sm:mr-[32px]">
              AVAILABLE POSITIONS
            </p>
            <p className="body1">{positions}</p>
          </div>
        </div>
        <div className="flex-shrink-0">
          <ArrowedButton onClick={onShowVacancy} label="Apply Now" />
        </div>
      </div>
    </div>
  );

  return <>{type === 'plain' ? <Card1 /> : <Card2 />}</>;
};

export default VacancyCard;
