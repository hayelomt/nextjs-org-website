import { ReactElement } from 'react';
import { BreadCrumbs } from '.';

const ImageHeading = ({
  imgUrl,
  crumbLinks,
  title,
  description,
}: {
  imgUrl: string;
  crumbLinks: string[];
  title: ReactElement;
  description?: ReactElement;
}) => (
  <section
    className="px-global pt-[60px] sm:pt-[127px] pb-[100px] md:pb-[203px]"
    style={{
      background: `linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url("${imgUrl}")`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
    }}
  >
    <div className="max-w-global mx-auto flex flex-col text-center items-center">
      <>
        {title}
        {crumbLinks.length && (
          <span className="mt-3">
            <BreadCrumbs links={crumbLinks} />
          </span>
        )}

        {description && description}
      </>
    </div>
  </section>
);

const TextHeading = ({
  crumbLinks,
  title,
  description,
}: {
  crumbLinks: string[];
  title: ReactElement;
  description?: ReactElement;
}) => (
  <section className="px-global w-full pt-[35px] sm:pt-[72px] bg-white">
    <div className="max-w-global mx-auto flex flex-col items-center">
      {title}
      {crumbLinks.length && (
        <span className="mt-3">
          <BreadCrumbs links={crumbLinks} linkColor="text-dark-text" />
        </span>
      )}
      {description && description}
    </div>
  </section>
);

export { ImageHeading, TextHeading };
