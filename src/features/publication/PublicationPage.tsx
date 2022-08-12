import Layout from '../../core/ui/layout/Layout';
import PaginationGroup from '../../core/ui/pagination/group';
import { ImageHeading } from '../../core/ui/shared/heading';
import { Paginated } from '../../core/ui/utils/types';
import PublicationCard from './components/PublicationCard';
import usePublicationController from './hooks/usePublicationController';
import { Publication } from './publication';

const PublicationPage = ({
  publicationsInit,
}: {
  publicationsInit: Paginated<Publication>;
}) => {
  const {
    data: publications,
    fetchData,
    ...pagination
  } = usePublicationController(publicationsInit);

  return (
    <>
      <Layout>
        <ImageHeading
          title={<h1 className="mb-3 text-white">Publications</h1>}
          description={
            <div className="max-w-[736px] mx-auto flex flex-col text-center items-center">
              <p className="body1 text-white mt-[20px] xm:mt-[32px]">
                Maecenas suscipit in nulla tristique pretium. Praesent eget
                tellus nibh. Praesent mi orci, fringilla sed est ac, efficitur
                auctor velit. Fusce fermentum feugiat lacinia. Maecenas eleifend
                bibendum tellus ac pretium. Etiam odio arcu, vestibulum id
                mattis ut, gravida sed ante. Nam ut cursus m
              </p>
            </div>
          }
          crumbLinks={[{ label: 'Home', url: '/' }, { label: 'Publication' }]}
          imgUrl="/imgs/blog/heading.jpeg"
        />

        <div className="px-global w-full pt-[35px] pb-[60px] sm:pt-[72px] sm:pb-[136px]">
          <div className="max-w-global mx-auto flex flex-col items-center">
            <div className="xs:w-fit grid w-full grid-cols-1 place-items-center gap-[25px] sm:grid-cols-2 lg:gap-[35px] xl:grid-cols-3 xl:gap-[45px] mb-[25px] sm:mb-[50px]">
              {publications.map((publication) => (
                <PublicationCard
                  publication={publication}
                  key={publication.id}
                />
              ))}
            </div>

            <div className="w-full center gap-x-[14px] max-w-full overflow-x-auto">
              <PaginationGroup
                buttonsLimit={5}
                currentPage={pagination.currentPage}
                pageCount={Math.ceil(pagination.total / pagination.perPage)}
                disabled={publications.length === 0 || pagination.loading}
                onPageChange={(page) => {
                  fetchData(
                    'publications',
                    `?page=${page}&limit=${pagination.perPage}`
                  );
                }}
              />
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default PublicationPage;
