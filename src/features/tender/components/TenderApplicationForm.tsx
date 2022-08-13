import Icons from '../../../core/ui/utils/icons';
import { useCreateTenderController } from '../hooks/useTenderFormController';
import { Tender } from '../tender';

const TenderApplicationForm = ({
  onCancel,
  tender,
}: {
  tender: Tender;
  onCancel: () => void;
}) => {
  const { formik, submitting, progress } = useCreateTenderController(
    tender,
    onCancel
  );

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <div className="my-2 w-full flex max-w-[822px] flex-col rounded-[32px] bg-white py-[40px] px-[23px] sm:py-[65px] sm:px-[56px] relative max-h-screen overflow-y-auto">
          <div
            className="absolute top-[20px]  right-[20px] "
            onClick={onCancel}
          >
            <Icons.Close />
          </div>

          <div className="w-full flex flex-col flex-wrap mb-[20px] sm:mb-[30px]">
            <h3 className="">{tender.title} Bid Form</h3>
            {Boolean(formik.touched.tender_id && formik.errors.tender_id) && (
              <p className="error-text mt-1">{formik.errors.tender_id}</p>
            )}
          </div>

          <div className="mb-[14px] sm:mb-[20px] flex flex-col sm:flex-row gap-[16px] sm:gap-[31px]">
            <div className="w-full flex flex-col">
              <input
                className="w-full min-w-0 xs:min-w-fit lg:min-w-[342px] rounded-[16px] border border-[#D6D4D3]"
                type="text"
                placeholder="First Name"
                name="fname"
                value={formik.values.fname}
                onChange={formik.handleChange}
              />
              {Boolean(formik.touched.fname && formik.errors.fname) && (
                <p className="error-text">{formik.errors.fname}</p>
              )}
            </div>

            <div className="w-full flex flex-col">
              <input
                className="w-full min-w-fit lg:min-w-[342px] rounded-[16px] border border-[#D6D4D3]"
                type="text"
                placeholder="Last Name"
                name="lname"
                value={formik.values.lname}
                onChange={formik.handleChange}
              />
              {Boolean(formik.touched.lname && formik.errors.lname) && (
                <p className="error-text">{formik.errors.lname}</p>
              )}
            </div>
          </div>

          <div className="mb-[14px] sm:mb-[20px] flex flex-col sm:flex-row gap-[16px] sm:gap-[31px]">
            <div className="w-full flex flex-col">
              <input
                className="w-full min-w-fit lg:min-w-[342px] rounded-[16px] border border-[#D6D4D3]"
                type="text"
                placeholder="Email"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
              />
              {Boolean(formik.touched.email && formik.errors.email) && (
                <p className="error-text">{formik.errors.email}</p>
              )}
            </div>

            <div className="w-full flex flex-col">
              <input
                className="w-full min-w-fit lg:min-w-[342px] rounded-[16px] border border-[#D6D4D3]"
                type="text"
                placeholder="Phone number"
                name="phone"
                value={formik.values.phone}
                onChange={formik.handleChange}
              />
              {Boolean(formik.touched.phone && formik.errors.phone) && (
                <p className="error-text">{formik.errors.phone}</p>
              )}
            </div>
          </div>

          <div className="mb-[20px] sm:mb-[55px]">
            <div className="w-full flex flex-col">
              <input
                className="w-full rounded-[16px] border border-[#D6D4D3]"
                type="text"
                placeholder="Company Name"
                name="company"
                value={formik.values.company}
                onChange={formik.handleChange}
              />
              {Boolean(formik.touched.company && formik.errors.company) && (
                <p className="error-text">{formik.errors.company}</p>
              )}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-2 items-start sm:items-center max-w-[280px] xs:max-w-none overflow-hidden">
            <p className="subheading mr-[35px] sm:mr-[60px]">
              Upload your Bid document
            </p>

            <div className="flex flex-col">
              <input
                type="file"
                className="file:py-[10px]  w-fit file:px-[10px] sm:file:px-[24px] file:bg-transparent file:border-0 file:shadow-2xl file:label "
                onChange={({ target: { files } }) => {
                  formik.setFieldValue(
                    'doc',
                    files && files.length ? files[0] : null
                  );
                }}
                accept=".pdf,.doc,.docx"
              />
              {Boolean(formik.touched.doc && formik.errors.doc) && (
                <p className="error-text">{formik.errors.doc}</p>
              )}
            </div>
          </div>

          {progress > 0 && (
            <div className=" h-[8px] w-full bg-gray-bg mt-2">
              <div
                className="flex h-full bg-red"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          )}

          <div className="mt-2">
            <button type="submit" disabled={submitting} className="btn">
              {submitting ? 'Submitting' : 'Submit'}
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default TenderApplicationForm;
