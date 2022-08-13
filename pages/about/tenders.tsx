import { NextPage } from 'next';
import { NextSeo } from 'next-seo';
import { apiInstance } from '../../src/core/services/api';
import { Tender } from '../../src/features/tender/tender';
import TenderPage from '../../src/features/tender/TenderPage';

type TenderProps = {
  tenders: Tender[];
};

const Tenders = ({ tenders }: TenderProps & NextPage) => {
  return (
    <>
      <NextSeo title="CORHA | Tenders" />
      <TenderPage tenders={tenders} />
    </>
  );
};

export default Tenders;

export async function getStaticProps(): Promise<{ props: TenderProps }> {
  const res = await apiInstance.get('tenders/active');
  const tenders = res.data.data as Tender[];

  return {
    props: {
      tenders,
    },
  };
}
