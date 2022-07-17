import { Tag } from '../../../core/ui/shared';
import Icons from '../../../core/ui/utils/icons';

type BlogProps = {
  tag: string;
  title: string;
  description: string;
  date: string;
  imgUrl: string;
};

const BlogCard = ({ tag, title, description, date, imgUrl }: BlogProps) => (
  <article
    className="w-full xs:w-[430px] flex flex-col  rounded-[24px] sm:rounded-[32px] flex-shrink-0 bg-white"
    style={{ boxShadow: '0px 1px 6px 4px rgba(0, 0, 0, 0.05)' }}
  >
    <div
      className="h-[337px] w-full bg-cover rounded-[24px] sm:rounded-[32px]"
      style={{ backgroundImage: `url("${imgUrl}")` }}
    ></div>
    <div className="py-[22px] sm:py-[32px] px-[18px] sm:px-[27px] flex flex-col">
      <span className="mb-2">
        <Tag label={tag} />
      </span>
      <h3 className="mb-2 text-dark-text line-clamp-2">{title}</h3>
      <p className="body1 text-light-text mb-[18px] sm:mb-[24px] line-clamp-3">
        {description}
      </p>

      <div className="flex items-center">
        <span className="mr-[10px]">
          <Icons.Calendar className="h-4 w-4 text-red" />
        </span>
        <p className="subtitle text-light-text">{date}</p>
      </div>
    </div>
  </article>
);

export default BlogCard;
