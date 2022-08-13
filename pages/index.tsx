import { NextPage } from 'next';
import { NextSeo } from 'next-seo';
import { apiInstance } from '../src/core/services/api';
import { HomeResponse } from '../src/features/home/home';
import HomePage from '../src/features/home/HomePage';

type HomeProps = {
  home: HomeResponse;
};

const Home = ({ home }: HomeProps & NextPage) => {
  return (
    <>
      <NextSeo title="CORHA" />
      <HomePage home={home} />
    </>
  );
};

export default Home;

export async function getStaticProps(): Promise<{ props: HomeProps }> {
  const res = await apiInstance.get('home');
  const home = res.data.data as HomeResponse;

  return {
    props: {
      home,
    },
  };
}
