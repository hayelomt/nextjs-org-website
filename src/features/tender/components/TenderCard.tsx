import { DateTime } from 'luxon';
import { ArrowedButton } from '../../../core/ui/shared/buttons';
import Icons from '../../../core/ui/utils/icons';

type TenderProps = {
  title: string;
  description: string;
  deadline: string;
  type: 'plain' | 'brand';
  onShowTender: () => void;
};

const TenderCard = ({
  title,
  description,
  deadline,
  type,
  onShowTender,
}: TenderProps) => {
  const Card1 = () => (
    <div
      className="flex  max-w-[660px] flex-col rounded-[32px] bg-white py-[30px] px-[25px] sm:py-[63px] sm:px-[53px] justify-between"
      style={{ boxShadow: '0px 1px 6px 4px rgba(0, 0, 0, 0.05)' }}
    >
      <div>
        <h3 className="mb-2 sm:mb-4">{title}</h3>
        <p className="body1 mb-[12px] text-light-text sm:mb-[20px] flex-1">
          {description}
        </p>
      </div>

      <div className="flex flex-col">
        <div className="mb-[10px] flex items-center sm:mb-[14px]">
          <span className="mr-2 sm:mr-4">
            <Icons.Deadline />
          </span>
          <p className="text-[14px] sm:text-[16px] font-barlow font-semibold mr-[20px] uppercase !text-[#001234] sm:mr-[32px]">
            DEADLINE
          </p>
          <p className="body1">
            {DateTime.fromISO(deadline).toLocaleString(DateTime.DATE_FULL)}
          </p>
        </div>
        <div className="">
          <ArrowedButton onClick={onShowTender} label="Apply Now" />
        </div>
      </div>
    </div>
  );

  const Card2 = () => (
    <div
      className="flex max-w-[660px] flex-col rounded-[32px] bg-brand py-[30px] px-[25px] text-white sm:py-[63px] sm:px-[53px] justify-between"
      style={{ boxShadow: '0px 1px 6px 4px rgba(0, 0, 0, 0.05)' }}
    >
      <div className="flex flex-col">
        <h3 className="mb-2 sm:mb-4">{title}</h3>
        <p className="body1 mb-[12px] text-gray-bg sm:mb-[20px]">
          {description}
        </p>
      </div>

      <div className="flex flex-col">
        <div className="mb-[10px] flex items-center sm:mb-[14px]">
          <span className="mr-2 sm:mr-4">
            <Icons.Deadline />
          </span>
          <p className="text-[14px] sm:text-[16px] font-barlow font-semibold mr-[20px] uppercase text-white sm:mr-[32px]">
            DEADLINE
          </p>
          <p className="body1">
            {DateTime.fromISO(deadline).toLocaleString(DateTime.DATE_FULL)}
          </p>
        </div>
        <div className="">
          <ArrowedButton onClick={onShowTender} label="Apply Now" />
        </div>
      </div>
    </div>
  );

  return <>{type === 'plain' ? <Card1 /> : <Card2 />}</>;
};

export default TenderCard;
