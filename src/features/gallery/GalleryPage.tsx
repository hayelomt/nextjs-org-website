import Layout from '../../core/ui/layout/Layout';
import { BreadCrumbs } from '../../core/ui/shared';
import GalleryImages from './components/GalleryImages';

const GalleryPage = () => {
  return (
    <>
      <Layout>
        <div className="px-global w-full pt-[35px] pb-[60px] sm:pt-[72px] sm:pb-[136px]">
          <div className="max-w-global mx-auto flex flex-col-reverse md:flex-row items-center gap-y-6 md:gap-y-0 md:gap-x-6">
            <div className="flex w-full flex-col items-center md:items-start">
              <h1 className="mb-3">
                Our Photo <strong className="text-red">Gallery</strong>
              </h1>
              <BreadCrumbs
                links={[
                  { label: 'Home', url: '/' },
                  { label: 'Photo Gallery' },
                ]}
                linkColor="text-black"
                crumbColor="text-black"
              />
              <p className="body1 mt-[20px] text-light-text sm:mt-[32px]">
                Maecenas suscipit in nulla tristique pretium. Praesent eget
                tellus nibh. Praesent mi orci, fringilla sed est ac, efficitur
                auctor velit. Fusce fermentum feugiat lacinia. Maecenas eleifend
                bibendum tellus ac pretium. Etiam odio arcu, vestibulum id
                mattis ut, gravida sed ante. Nam ut cursus m
              </p>
            </div>

            <div className="flex w-full justify-center md:justify-end">
              <div className="mr-0 md:mr-[15%] h-full max-h-[307px] w-full max-w-[307px]">
                <img
                  src="/imgs/gallery/lens.png"
                  className="w-full h-fit"
                  alt="lens"
                />
              </div>
            </div>
          </div>

          <div className="py-[40px] sm:py-[72px]">
            <GalleryImages />
          </div>

          <div className="max-w-global mx-auto flex flex-col items-center">
            <div className="w-full center gap-x-[14px] max-w-full overflow-x-auto">
              <button className="bg-dark-blue w-[40px] h-[40px] rounded-[12px] center text-white font-barlow ">
                &#60;&#60;
              </button>
              <button className="bg-dark-blue w-[40px] h-[40px] rounded-[12px] center text-white">
                1
              </button>
              <button className="bg-red w-[40px] h-[40px] rounded-[12px] center text-white">
                2
              </button>
              <button className="bg-dark-blue w-[40px] h-[40px] rounded-[12px] center text-white">
                3
              </button>
              <button className="bg-dark-blue w-[40px] h-[40px] rounded-[12px] center text-white">
                &#62;&#62;
              </button>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default GalleryPage;
