import Layout from '../../core/ui/layout/Layout';
import PaginationGroup from '../../core/ui/pagination/group';
import { BreadCrumbs } from '../../core/ui/shared';
import { Paginated } from '../../core/ui/utils/types';
import GalleryImages from './components/GalleryImages';
import { Gallery } from './gallery';
import useGalleriesController from './hooke/useGalleriesController';

const GalleryPage = ({
  galleriesInit,
}: {
  galleriesInit: Paginated<Gallery>;
}) => {
  const {
    data: galleries,
    fetchData,
    ...pagination
  } = useGalleriesController(galleriesInit);

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
            <GalleryImages galleries={galleries} />
          </div>

          <div className="w-full center gap-x-[14px] max-w-full overflow-x-auto">
            <PaginationGroup
              buttonsLimit={5}
              currentPage={pagination.currentPage}
              pageCount={Math.ceil(pagination.total / pagination.perPage)}
              disabled={pagination.loading}
              onPageChange={(page) => {
                fetchData(
                  'galleries',
                  `?page=${page}&limit=${pagination.perPage}`
                );
              }}
            />
          </div>
        </div>
      </Layout>
    </>
  );
};

export default GalleryPage;
