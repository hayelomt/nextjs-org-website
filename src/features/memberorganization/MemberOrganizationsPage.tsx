import Layout from '../../core/ui/layout/Layout';
import { ImageHeading } from '../../core/ui/shared/heading';
import OrganizationCard from './components/OrganizationCard';

const MemberOrganizationsPage = () => {
  return (
    <>
      <Layout>
        <ImageHeading
          title={
            <h1 className="mb-3 text-white">
              Member <strong className="text-red">Organizations</strong>
            </h1>
          }
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
          crumbLinks={['Home', 'Member Organizations']}
          imgUrl="/imgs/members/heading.jpeg"
        />

        <div className="px-global bg-gray-bg pt-[45px] sm:pt-[92px] pb-[80px] md:pb-[160px]">
          <div className="max-w-global mx-auto flex w-full flex-col items-center text-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-[30px] sm:gap-[40px] lg:gap-[60px] 2xl:gap-[80px] w-full xs:w-fit place-items-center">
              {Array(20)
                .fill(null)
                .map((_, i) => (
                  <OrganizationCard key={`org-${i}`} />
                ))}
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default MemberOrganizationsPage;
