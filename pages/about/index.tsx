import { NextPage } from 'next';
import { NextSeo } from 'next-seo';
import { apiInstance } from '../../src/core/services/api';
import { OtherSay, Team } from '../../src/features/about/about';
import AboutPage from '../../src/features/about/AboutPage';

type AboutProps = {
  teams: Team[];
  otherSays: OtherSay[];
};

const About = ({ teams, otherSays }: NextPage & AboutProps) => {
  return (
    <>
      <NextSeo title={'CORHA | About'} />
      <AboutPage teams={teams} otherSays={otherSays} />
    </>
  );
};

export default About;

export async function getStaticProps(): Promise<{ props: AboutProps }> {
  const teams = await apiInstance.get('teams');
  const otherSays = await apiInstance.get('other-says');

  return {
    props: {
      teams: teams.data.data as Team[],
      otherSays: otherSays.data.data as OtherSay[],
    },
  };
}
