import { useState } from 'react';
import usePattern from '../../core/hooks/usePattern';
import Layout from '../../core/ui/layout/Layout';
import { Modal } from '../../core/ui/shared';
import { TextHeading } from '../../core/ui/shared/heading';
import TenderApplicationForm from './components/TenderApplicationForm';
import TenderCard from './components/TenderCard';
import { Tender } from './tender';

const TenderPage = ({ tenders }: { tenders: Tender[] }) => {
  const [showModal, setShowModal] = useState(false);
  const { patterns } = usePattern(tenders.length);

  return (
    <>
      <Layout showHeaderShadow={true}>
        <TextHeading
          title={<h1 className="mb-3">Tenders</h1>}
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
          crumbLinks={[{ label: 'Home', url: '/' }, { label: 'Tenders' }]}
        />

        <div className="px-global w-full pt-[35px] pb-[60px] sm:pt-[72px] sm:pb-[136px] bg-white">
          <div className="max-w-global mx-auto flex flex-col">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-[20px] sm:gap-[43px] mx-auto">
              {tenders.map((tender, i) => (
                <TenderCard
                  key={tender.id}
                  title={tender.title}
                  description={tender.description}
                  deadline={tender.deadline}
                  type={patterns[i] === 0 ? 'plain' : 'brand'}
                  onShowTender={() => setShowModal(true)}
                />
              ))}
            </div>
          </div>
        </div>
      </Layout>

      <Modal showModal={showModal} setHideModal={() => setShowModal(false)}>
        <TenderApplicationForm onCancel={() => setShowModal(false)} />
      </Modal>
    </>
  );
};

export default TenderPage;
