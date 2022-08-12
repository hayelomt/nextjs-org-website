import { NextPage } from 'next';
import { NextSeo } from 'next-seo';
import { apiInstance } from '../../src/core/services/api';
import { Paginated } from '../../src/core/ui/utils/types';
import { Publication } from '../../src/features/publication/publication';
import PublicationPage from '../../src/features/publication/PublicationPage';

type PublicationProps = {
  publications: Paginated<Publication>;
};

const Publications = ({
  publications,
}: { publications: Paginated<Publication> } & NextPage) => {
  return (
    <>
      <NextSeo title="CORHA | Publications" />
      <PublicationPage publicationsInit={publications} />
    </>
  );
};

export default Publications;

export async function getStaticProps(): Promise<{ props: PublicationProps }> {
  const res = await apiInstance.get('publications?limit=9');
  const publications = res.data as Paginated<Publication>;
  publications.per_page = 9;

  return {
    props: {
      publications,
    },
  };
}
