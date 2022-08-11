import Layout from '../../core/ui/layout/Layout';
import { ImageHeading } from '../../core/ui/shared/heading';
import Icons from '../../core/ui/utils/icons';

const ContactUsPage = () => {
  return (
    <>
      <Layout>
        <ImageHeading
          title={<h1 className="mb-3 text-white">Contact Us</h1>}
          crumbLinks={[{ label: 'Home', url: '/' }, { label: 'Contact Us' }]}
          imgUrl="/imgs/contact/phone.jpeg"
        />

        <div className="px-global w-full pt-[35px] sm:pt-[72px] pb-[60px] sm:pb-[136px] bg-gray-bg">
          <div className="max-w-global mx-auto flex flex-col lg:flex-row items-center gap-y-10 lg:gap-y-0 w-full">
            <div className="flex lg:w-full flex-col">
              <div className="mb-[15px] flex items-center sm:mb-[27px]">
                <span className="mr-[20px] sm:mr-[32px]">
                  <Icons.PhoneBig className="h-[45px] md:h-[64px]" />
                </span>
                <div className="flex flex-col">
                  <p className="subheading mb-[10px]">Call Us</p>
                  <p className="body1 text-light-text">011-859-624-1</p>
                  <p className="body1 text-light-text">011-859-624-2</p>
                </div>
              </div>

              <div className="mb-[15px] flex items-center sm:mb-[27px]">
                <span className="mr-[20px] sm:mr-[32px]">
                  <Icons.Message className="h-[45px] md:h-[64px]" />
                </span>
                <div className="flex flex-col">
                  <p className="subheading mb-[10px]">Email Us</p>
                  <p className="body1 text-light-text">
                    info@corhaethiopia.org
                  </p>
                </div>
              </div>

              <div className="flex items-center">
                <span className="mr-[20px] sm:mr-[32px]">
                  <Icons.LocationMap className="h-[45px] md:h-[64px]" />
                </span>
                <div className="flex flex-col">
                  <p className="subheading mb-[10px]">Location</p>
                  <p className="body1 max-w-[253px] text-light-text">
                    Kaliti Road, In front of the training center for drivers
                    mechanics
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:w-full">
              <div className="flex max-w-[743px] flex-col rounded-[32px] bg-white py-[40px] px-[35px] sm:py-[97px] sm:px-[72px]">
                <h1 className="mb-[20px] sm:mb-[32px]">
                  Feel Free to Send Message
                </h1>

                <div className="flex flex-col gap-y-[18px] sm:gap-y-[31px]">
                  <div className="flex gap-x-[16px] sm:gap-x-[31px]">
                    <input
                      className="w-full rounded-[16px] border border-[#D6D4D3]"
                      type="text"
                      placeholder="Your Name"
                    />
                    <input
                      className="w-full rounded-[16px] border border-[#D6D4D3]"
                      type="text"
                      placeholder="Your Email"
                    />
                  </div>

                  <input
                    className="w-full rounded-[16px] border border-[#D6D4D3]"
                    type="text"
                    placeholder="Subject"
                  />

                  <textarea
                    className="min-h-[170px] w-full rounded-[16px] border border-[#D6D4D3]"
                    placeholder="Message"
                  ></textarea>

                  <button className="btn">Send Message</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full bg-brand h-20 text-white center">map</div>
      </Layout>
    </>
  );
};

export default ContactUsPage;
