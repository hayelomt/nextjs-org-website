import { motion } from 'framer-motion';
import { Tag } from '../../../core/ui/shared';
import Icons from '../../../core/ui/utils/icons';
import ImageUtils from '../../../core/ui/utils/image';
import { Publication } from '../publication';

const PublicationCard = ({ publication }: { publication: Publication }) => {
  return (
    <motion.article
      whileHover={{ y: -15, scale: 1.01, transition: { stiffness: 80 } }}
      animate={{ y: 0, scale: 1, transition: { stiffness: 80 } }}
      className="w-full lg:w-[430px] max-w-[430px] flex flex-col  rounded-[24px] sm:rounded-[32px] flex-shrink-0 bg-white cursor-pointer h-full relative"
      style={{ boxShadow: '0px 1px 6px 4px rgba(0, 0, 0, 0.05)' }}
    >
      <div
        className="h-[250px] xs:h-[337px] w-full bg-cover bg-center rounded-[24px] sm:rounded-[32px]"
        style={{
          backgroundImage: `url("${ImageUtils.getMediaUrl(
            publication.media[0]
          )}")`,
        }}
      ></div>
      <div className="py-[22px] sm:py-[32px] px-[18px] sm:px-[27px] flex flex-col pb-[40px]">
        <span className="mb-2">
          <Tag label={publication.tag} />
        </span>
        <h3 className="mb-2 text-dark-text line-clamp-2">
          {publication.title}
        </h3>
        <p className="body1 text-light-text mb-[18px] sm:mb-[24px] line-clamp-3">
          {publication.description}
        </p>
      </div>

      <div className="flex items-center absolute bottom-[22px] sm:bottom-[32px] left-[18px] sm:left-[27px]">
        <span className="mr-[10px]">
          <Icons.Calendar className="h-4 w-4 text-red" />
        </span>
        <p className="subtitle text-light-text">{publication.date}</p>
      </div>
    </motion.article>
  );
};

export default PublicationCard;
