import { motion } from 'framer-motion';
import { Tag } from '../../../core/ui/shared';
import Icons from '../../../core/ui/utils/icons';

type VideoProps = {
  tag: string;
  title: string;
  date: string;
  imgUrl: string;
  embedUrl: string;
};

const VideoCard = ({ tag, title, date, imgUrl }: VideoProps) => (
  <motion.article
    whileHover={{ y: -15, scale: 1.01, transition: { stiffness: 80 } }}
    animate={{ y: 0, scale: 1, transition: { stiffness: 80 } }}
    className="w-full lg:w-[430px] max-w-[430px] flex flex-col  rounded-[24px] sm:rounded-[32px] flex-shrink-0 bg-white cursor-pointer"
    style={{ boxShadow: '0px 1px 6px 4px rgba(0, 0, 0, 0.05)' }}
  >
    <div
      className="h-[337px] w-full bg-cover bg-center rounded-[24px] relative sm:rounded-[32px]"
      style={{ backgroundImage: `url("${imgUrl}")` }}
    >
      <div className="absolute top-[50%] left-[50%] -translate-y-[50%] -translate-x-[50%]">
        <Icons.YoutubeRed />
      </div>
    </div>
    <div className="py-[22px] sm:py-[32px] px-[18px] sm:px-[27px] flex flex-col">
      <span className="mb-2">
        <Tag label={tag} />
      </span>
      <h3 className="mb-2 text-dark-text line-clamp">{title}</h3>

      <div className="flex items-center">
        <span className="mr-[10px]">
          <Icons.Calendar className="h-4 w-4 text-red" />
        </span>
        <p className="subtitle text-light-text">{date}</p>
      </div>
    </div>
  </motion.article>
);

export default VideoCard;
