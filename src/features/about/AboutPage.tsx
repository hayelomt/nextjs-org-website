import Layout from '../../core/ui/layout/Layout';
import { ImageHeading } from '../../core/ui/shared/heading';
import AboutOthersSay from './components/AboutOthersSay';
import AboutTeam from './components/AboutTeam';
import Existence from './components/Existence';
import Stats from './components/Stats';

const AboutPage = () => {
  return (
    <>
      <Layout>
        <ImageHeading
          imgUrl="/imgs/about/team.jpeg"
          title={<h1 className="mb-3 text-white">About Us </h1>}
          crumbLinks={['Home', 'About Us']}
        />
        <Existence />
        <Stats />
        <AboutTeam />
        <AboutOthersSay />
      </Layout>
    </>
  );
};

export default AboutPage;
