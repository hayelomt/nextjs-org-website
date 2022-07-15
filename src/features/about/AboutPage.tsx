import Layout from '../../core/ut/layout/Layout';
import AboutHeading from './components/AboutHeading';
import Existence from './components/Existence';

const AboutPage = () => {
  return (
    <>
      <Layout>
        <AboutHeading />
        <Existence />
      </Layout>
    </>
  );
};

export default AboutPage;
