import { NextPage } from 'next';
import { NextSeo } from 'next-seo';
import { apiInstance } from '../../src/core/services/api';
import { Vacancy } from '../../src/features/vacancy/vacancy';
import VacancyPage from '../../src/features/vacancy/VacancyPage';

type VacancyProps = {
  vacancies: Vacancy[];
};

const Vacancies = ({ vacancies }: VacancyProps & NextPage) => {
  return (
    <>
      <NextSeo title="CORHA | Vacancies" />
      <VacancyPage vacancies={vacancies} />
    </>
  );
};

export default Vacancies;

export async function getStaticProps(): Promise<{ props: VacancyProps }> {
  const res = await apiInstance.get('vacancies/active');
  const vacancies = res.data.data as Vacancy[];

  return {
    props: {
      vacancies,
    },
  };
}
