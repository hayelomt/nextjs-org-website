import clsx from 'clsx';
import Icons from '../utils/icons';

const BreadCrumbs = ({
  links,
  linkColor = 'text-white',
}: {
  links: string[];
  linkColor?: string;
}) => (
  <>
    <div className="flex items-center">
      {links.map((link, i) =>
        i === links.length - 1 ? (
          <p className="body1 text-red" key={`crumb-${i}`}>
            {link}
          </p>
        ) : (
          <div className="flex" key={`crumb-${i}`}>
            <p className={clsx('body1 mr-[14px]', linkColor)}>{link}</p>
            <span className=" mt-[2px]">
              <Icons.ChevronRight className="h-4 w-4 mr-[14px] text-white" />
            </span>
          </div>
        )
      )}
    </div>
  </>
);

const Tag = ({ label }: { label: string }) => (
  <div className="py-[6px] px-[10px] sm:px-[16px] center bg-brand h-fit w-fit rounded-[8px]">
    <p className="label text-white">{label}</p>
  </div>
);

export { Tag, BreadCrumbs };
