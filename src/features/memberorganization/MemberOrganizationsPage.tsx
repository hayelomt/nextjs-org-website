import Layout from '../../core/ui/layout/Layout';
import MembersHeading from './components/MembersHeading';

const MemberOrganizationsPage = () => {
  const OrganizationCard = () => (
    <div className="h-[170px] w-full xs:w-[284px] max-w-[284px] bg-brand rounded-[15px]"></div>
  );
  return (
    <>
      <Layout>
        <MembersHeading />

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
