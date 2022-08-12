import { NextSeo } from 'next-seo';
import ContactUsPage from '../src/features/contactus/ContactUsPage';

const ContactUs = () => {
  return (
    <>
      <NextSeo title="CORHA | Contact Us" />
      <ContactUsPage />
    </>
  );
};

export default ContactUs;
