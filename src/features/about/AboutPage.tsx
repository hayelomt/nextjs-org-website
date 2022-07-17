import Layout from '../../core/ui/layout/Layout';
import AboutHeading from './components/AboutHeading';
import AboutOthersSay from './components/AboutOthersSay';
import AboutTeam from './components/AboutTeam';
import Existence from './components/Existence';
import Status from './components/Status';

const AboutPage = () => {
  return (
    <>
      <Layout>
        <AboutHeading />
        <Existence />
        <Status />
        <AboutTeam />
        <AboutOthersSay />
      </Layout>
    </>
  );
};

export default AboutPage;
