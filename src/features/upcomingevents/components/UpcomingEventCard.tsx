import { ArrowedButton } from '../../../core/ui/shared/buttons';
import Icons from '../../../core/ui/utils/icons';

type UpcomingProps = {
  date: string;
  title: string;
  description: string;
  imgUrl: string;
  type?: 'image' | 'plain';
};

const UpcomingEventCard = ({
  date,
  title,
  description,
  imgUrl,
  type = 'plain',
}: UpcomingProps) => {
  const UpcomingCardPlain = () => (
    <div
      className="pt-[20px] sm:pt-[46px] pb-[30px] sm:pb-[60px] px-[30px] xm:px-[55px] w-full flex flex-row bg-white bg-opacity-80 rounded-[24px]"
      style={{
        boxShadow: '0px 1px 6px 4px rgba(0, 0, 0, 0.05)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="w-full flex flex-col ">
        <div className="flex items-center mb-2">
          <span className="mr-[11px]">
            <Icons.Calendar className="h-4 w-4 text-red" />
          </span>
          <p className="subtitle text-light-text">{date}</p>
        </div>
        <h3 className="mb-2 line-clamp-2">{title}</h3>
        <p className="body2 line-clamp-4 text-light-text">{description}</p>
      </div>
      <div>
        <ArrowedButton label="Join Event" onClick={() => {}} />
      </div>
    </div>
  );

  const UpcomingCardImage = () => (
    <div
      className="pt-[20px] sm:pt-[46px] pb-[30px] sm:pb-[60px] px-[30px] xm:px-[55px] w-full flex flex-row bg-gray-800 bg-opacity-80 rounded-[24px] text-white"
      style={{
        background: `linear-gradient(0deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${imgUrl})`,
      }}
    >
      <div className="w-full flex flex-col text-white">
        <div className="flex items-center mb-2">
          <span className="mr-[11px]">
            <Icons.Calendar className="h-4 w-4 text-white" />
          </span>
          <p className="subtitle">{date}</p>
        </div>
        <h3 className="mb-2 line-clamp-2">{title}</h3>
        <p className="body2 line-clamp-4">{description}</p>
      </div>
      <div>
        <ArrowedButton label="Join Event" onClick={() => {}} />
      </div>
    </div>
  );

  return (
    <>{type === 'plain' ? <UpcomingCardPlain /> : <UpcomingCardImage />}</>
  );
};

export default UpcomingEventCard;
