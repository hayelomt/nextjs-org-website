import { NextPage } from 'next';
import { NextSeo } from 'next-seo';
import { apiInstance } from '../src/core/services/api';
import MemberOrganizationsPage from '../src/features/memberorganization/MemberOrganizationsPage';
import { Organization } from '../src/features/memberorganization/organization';

type OrganizationProps = {
  organizations: Organization[];
};

const MemberOrganizations = ({
  organizations,
}: OrganizationProps & NextPage) => {
  return (
    <>
      <NextSeo title="CORHA | Member Organizations" />
      <MemberOrganizationsPage organizations={organizations} />
    </>
  );
};

export default MemberOrganizations;

export async function getStaticProps(): Promise<{ props: OrganizationProps }> {
  const result = await apiInstance.get('organizations');
  const organizations = result.data.data as Organization[];

  return {
    props: {
      organizations,
    },
  };
}
