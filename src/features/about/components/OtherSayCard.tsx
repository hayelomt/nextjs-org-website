import Icons from '../../../core/ui/utils/icons';

const OtherSayCard = ({
  imgUrl,
  name,
  position,
  content,
}: {
  imgUrl: string;
  name: string;
  position: string;
  content: string;
}) => (
  <div className="flex min-w-fit h-full max-w-[392px] flex-col rounded-[24px] bg-white py-[26px] px-[18px] xs:min-w-[392px] sm:py-[42px] sm:px-[36px]">
    <div className="mb-[20px] flex w-full items-center justify-between sm:mb-[32px]">
      <div className="flex">
        <div className="mr-[14px] h-[65px] w-[65px] rounded-full border-[3px] border-[#00249C4D] sm:mr-[20px]">
          <img
            className="w-full h-full rounded-full object-cover"
            src={imgUrl}
            alt="profile image"
          />
        </div>
        <div className="flex flex-col items-start">
          <p className="subheading text-dark-text my-1 line-clamp-1">{name}</p>
          <p className="subtitle text-red line-clamp-1">{position}</p>
        </div>
      </div>
      <div>
        <Icons.Quote />
      </div>
    </div>

    <p className="body1 text-light-text text-left">{content}</p>
  </div>
);

export default OtherSayCard;
