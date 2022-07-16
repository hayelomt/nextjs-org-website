const ContactUsPage = () => {
  return (
    <>
      <div className="px-global w-full pt-[35px] pb-[60px] sm:pt-[72px] sm:pb-[136px] bg-gray-bg">
        <div className="max-w-global mx-auto flex flex-col lg:flex-row items-center gap-y-10 lg:gap-y-0 w-full">
          <div className="flex lg:w-full flex-col">
            <h1 className="mb-3">Call Or Email Us</h1>
            <p className="body1 mb-[20px] text-light-text sm:mb-[32px] max-w-[584px]">
              Maecenas suscipit in nulla tristique pretium. Praesent eget tellus
              nibh. Praesent mi orci, fringilla sed est ac, efficitur auctor
              velit. Fusce fermentum.
            </p>

            <div className="mb-[15px] flex items-center sm:mb-[27px]">
              <span className="mr-[20px] sm:mr-[32px]">ic</span>
              <div className="flex flex-col">
                <p className="subheading mb-[10px]">Call Us</p>
                <p className="body1 text-light-text">0911554422</p>
                <p className="body1 text-light-text">0911554422</p>
              </div>
            </div>

            <div className="mb-[15px] flex items-center sm:mb-[27px]">
              <span className="mr-[20px] sm:mr-[32px]">ic</span>
              <div className="flex flex-col">
                <p className="subheading mb-[10px]">Email Us</p>
                <p className="body1 text-light-text">info@corhaethiopia.org</p>
              </div>
            </div>

            <div className="flex items-center">
              <span className="mr-[20px] sm:mr-[32px]">ic</span>
              <div className="flex flex-col">
                <p className="subheading mb-[10px]">Location</p>
                <p className="body1 max-w-[253px] text-light-text">
                  Kaliti Road, Infront of the training center for drivers
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
    </>
  );
};

export default ContactUsPage;
