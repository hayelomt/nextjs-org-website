import { ReactElement } from 'react';
import ImageUtils from '../../../core/ui/utils/image';
import { Gallery } from '../gallery';

const GalleryImages = ({ galleries }: { galleries: Gallery[] }) => {
  const parseImages = (images: Gallery[], side: string) => {
    const elements: ReactElement[] = [];

    let i = 0;
    while (i < images.length) {
      if (images[i].mode === 'landscape') {
        elements.push(
          <div
            key={`side-${i}`}
            className="flex w-full gap-x-[15px] md:gap-x-[34px]"
          >
            <div className="w-full small-aspect overflow-hidden rounded-[14px] sm:rounded-[24px] bg-gray-200">
              <img
                src={ImageUtils.getMediaUrl(images[i].media[0])}
                className="w-full h-full object-cover object-center"
                alt={images[i].alt}
              />
            </div>
          </div>
        );
      } else {
        if (i < images.length - 1 && images[i + 1].mode === 'portrait') {
          elements.push(
            <div
              key={`side-${i}`}
              className="flex w-full gap-x-[15px] md:gap-x-[34px]"
            >
              <div className="small-aspect h-fit w-1/2 overflow-hidden rounded-[14px] sm:rounded-[24px] bg-gray-200">
                <img
                  src={ImageUtils.getMediaUrl(images[i].media[0])}
                  className="w-full h-full object-cover object-center"
                  alt={images[i].alt}
                />
              </div>
              <div className="small-aspect h-fit w-1/2 overflow-hidden rounded-[14px] sm:rounded-[24px] bg-gray-200">
                <img
                  src={ImageUtils.getMediaUrl(images[i].media[0])}
                  className="w-full h-full object-cover object-center"
                  alt={images[i + 1].alt}
                />
              </div>
            </div>
          );
          i++;
        } else {
          elements.push(
            <div
              key={`side-${i}`}
              className="flex w-full gap-x-[15px] md:gap-x-[34px]"
            >
              <div className="small-aspect h-fit w-1/2 overflow-hidden rounded-[14px] sm:rounded-[24px] bg-gray-200">
                <img
                  src={ImageUtils.getMediaUrl(images[i].media[0])}
                  className="w-full h-full object-cover object-center"
                  alt={images[i].alt}
                />
              </div>
            </div>
          );
        }
      }
      i++;
    }

    return elements;
  };

  const getLeft = () => galleries.slice(0, Math.ceil(galleries.length / 2));

  const getRight = () =>
    galleries.slice(Math.ceil(galleries.length / 2), galleries.length);

  return (
    <>
      <div className="max-w-global w-full mx-auto flex flex-col md:flex-row gap-[20px] md:gap-[40px]">
        <div className="flex w-full flex-col gap-y-[12px] sm:gap-y-[24px]">
          {parseImages(getLeft(), 'left')}
        </div>

        <div className="w-full flex flex-col gap-y-[12px] sm:gap-y-[24px]">
          {parseImages(getRight(), 'right')}
        </div>
      </div>
    </>
  );
};

export default GalleryImages;
