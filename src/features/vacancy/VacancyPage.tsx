import { useState } from 'react';
import usePattern from '../../core/hooks/usePattern';
import Layout from '../../core/ui/layout/Layout';
import { Modal } from '../../core/ui/shared';
import { TextHeading } from '../../core/ui/shared/heading';
import JobApplicationForm from './components/JobApplicationForm';
import VacancyCard from './components/VacancyCard';
import { Vacancy } from './vacancy';

const VacancyPage = ({ vacancies }: { vacancies: Vacancy[] }) => {
  const [apply, setApply] = useState<Vacancy | null>(null);
  const { patterns } = usePattern(vacancies.length);

  return (
    <>
      <Layout showHeaderShadow={true}>
        <TextHeading
          title={
            <h1 className="mb-3">
              Our <strong className="text-red">Vacancies</strong>
            </h1>
          }
          description={
            <div className="mt-[20px] mb-[20px] max-w-[736px] sm:mt-[32px] sm:mb-[40px]">
              <p className="body1 text-center text-light-text">
                Maecenas suscipit in nulla tristique pretium. Praesent eget
                tellus nibh. Praesent mi orci, fringilla sed est ac, efficitur
                auctor velit. Fusce fermentum feugiat lacinia. Maecenas eleifend
                bibendum tellus ac pretium. Etiam odio arcu, vestibulum id
                mattis ut, gravida sed ante. Nam ut cursus m
              </p>
            </div>
          }
          crumbLinks={[{ label: 'Home', url: '/' }, { label: 'Vacancies' }]}
        />

        <div className="px-global w-full pt-[35px] pb-[60px] sm:pt-[72px] sm:pb-[136px] bg-white">
          <div className="max-w-global mx-auto flex flex-col">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-[20px] sm:gap-[43px] mx-auto">
              {vacancies.map((vacancy, i) => (
                <VacancyCard
                  title={vacancy.title}
                  description={vacancy.description}
                  deadline={vacancy.deadline}
                  minExperience={vacancy.min_experience}
                  positions={vacancy.positions}
                  key={vacancy.id}
                  type={patterns[i] === 0 ? 'plain' : 'brand'}
                  onShowVacancy={() => setApply(vacancy)}
                />
              ))}
            </div>
          </div>
        </div>
      </Layout>
      {apply !== null && (
        <Modal showModal={apply !== null} setHideModal={() => setApply(null)}>
          <JobApplicationForm vacancy={apply} onCancel={() => setApply(null)} />
        </Modal>
      )}
    </>
  );
};

export default VacancyPage;
