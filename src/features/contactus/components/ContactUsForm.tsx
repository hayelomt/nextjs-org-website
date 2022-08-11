const ContactUsForm = () => {
  return (
    <>
      <div className="lg:w-full">
        <div className="flex max-w-[743px] flex-col rounded-[32px] bg-white py-[40px] px-[35px] sm:py-[97px] sm:px-[72px]">
          <h1 className="mb-[20px] sm:mb-[32px]">Feel Free to Send Message</h1>

          <div className="flex flex-col gap-y-[18px] sm:gap-y-[31px]">
            <div className="flex flex-col sm:flex-row gap-y-[18px] sm:gap-y-0 gap-x-0 sm:gap-x-[31px]">
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
    </>
  );
};

export default ContactUsForm;
