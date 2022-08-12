import { useCreateContactController } from '../hooks/useContactFormController';

const ContactUsForm = () => {
  const { formik, submitting } = useCreateContactController();

  return (
    <>
      <div className="lg:w-full">
        <div className="flex max-w-[743px] flex-col rounded-[32px] bg-white py-[40px] px-[35px] sm:py-[97px] sm:px-[72px]">
          <h1 className="mb-[20px] sm:mb-[32px]">Feel Free to Send Message</h1>

          <form onSubmit={formik.handleSubmit}>
            <div className="flex flex-col gap-y-[18px] sm:gap-y-[31px]">
              <div className="flex flex-col sm:flex-row gap-y-[18px] sm:gap-y-0 gap-x-0 sm:gap-x-[31px]">
                <div className="w-full flex flex-col">
                  <input
                    className="w-full rounded-[16px] border border-[#D6D4D3]"
                    type="text"
                    name="name"
                    onChange={formik.handleChange}
                    value={formik.values.name}
                    placeholder="Your Name"
                  />
                  {Boolean(formik.touched.name && formik.errors.name) && (
                    <p className="error-text">{formik.errors.name}</p>
                  )}
                </div>
                <div className="w-full flex flex-col">
                  <input
                    className="w-full rounded-[16px] border border-[#D6D4D3]"
                    type="email"
                    name="email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    placeholder="Your Email"
                  />
                  {Boolean(formik.touched.email && formik.errors.email) && (
                    <p className="error-text">{formik.errors.email}</p>
                  )}
                </div>
              </div>

              <div className="flex flex-col">
                <input
                  className="w-full rounded-[16px] border border-[#D6D4D3]"
                  type="text"
                  name="subject"
                  onChange={formik.handleChange}
                  value={formik.values.subject}
                  placeholder="Subject"
                />
                {Boolean(formik.touched.subject && formik.errors.subject) && (
                  <p className="error-text">{formik.errors.subject}</p>
                )}
              </div>

              <div className="flex flex-col">
                <textarea
                  className="min-h-[170px] w-full rounded-[16px] border border-[#D6D4D3]"
                  name="message"
                  onChange={formik.handleChange}
                  value={formik.values.message}
                  placeholder="Message"
                ></textarea>

                {Boolean(formik.touched.message && formik.errors.message) && (
                  <p className="error-text">{formik.errors.message}</p>
                )}
              </div>

              <button type="submit" className="btn" disabled={submitting}>
                {submitting ? 'Sending' : 'Send Message'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactUsForm;
