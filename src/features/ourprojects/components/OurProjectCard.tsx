import Link from 'next/link';
import { Tag } from '../../../core/ui/shared';
import { ArrowedButton, ArrowedLink } from '../../../core/ui/shared/buttons';
import ImageUtils from '../../../core/ui/utils/image';
import TextUtils from '../../../core/utils/text';
import { Project } from '../project';

const OurProjectCard = ({ project }: { project: Project }) => {
  return (
    <>
      <div
        className="flex max-h-none sm:max-h-[385px] max-w-[400px] sm:max-w-[750px] flex-col sm:flex-row rounded-[32px] bg-white mx-auto"
        style={{ boxShadow: '0px 1px 6px 4px rgba(0, 0, 0, 0.05)' }}
      >
        <div className="h-[365] sm:h-[385px] w-full sm:w-[230px] bg-gray-200 flex-shrink-0 rounded-[32px] overflow-hidden relative">
          <div className="absolute top-[15px] left-[15px]">
            <Tag label={project.tag} />
          </div>
          <img
            src={ImageUtils.getMediaUrl(project.media[0])}
            alt="project cover"
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div className="flex w-full flex-col px-[24px] py-[25px] sm:px-[50px] sm:py-[55px]">
          <p className="subtitle mb-2">Progress</p>
          <div className="mb-[18px] h-[8px] w-full bg-gray-bg sm:mb-[30px]">
            <div className="flex h-full w-[50%] bg-red"></div>
          </div>
          <h3 className="mb-2 line-clamp-2">
            {TextUtils.clamp(project.title, 40)}
          </h3>
          <p className="body1 mb-3 text-light-text line-clamp-3">
            {TextUtils.clamp(project.description, 85)}
          </p>
          <div>
            <ArrowedLink
              label="Learn More"
              href="/projects/[id]"
              as={`/projects/${project.id}`}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default OurProjectCard;
