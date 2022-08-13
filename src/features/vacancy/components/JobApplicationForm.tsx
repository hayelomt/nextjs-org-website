import Icons from '../../../core/ui/utils/icons';
import { useCreateJobFormController } from '../hooks/useJobFormController';
import { Vacancy } from '../vacancy';

const JobApplicationForm = ({
  vacancy,
  onCancel,
}: {
  vacancy: Vacancy;
  onCancel: () => void;
}) => {
  const { formik, submitting, progress } = useCreateJobFormController(
    vacancy,
    onCancel
  );

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <div className="my-2 w-full flex max-w-[822px] flex-col rounded-[32px] bg-white py-[40px] px-[23px] sm:py-[65px] sm:px-[56px] relative">
          <div className="absolute top-[20px] right-[20px]" onClick={onCancel}>
            <Icons.Close />
          </div>

          <div className="w-full flex flex-col">
            <h3 className="mb-[20px] sm:mb-[50px]">
              {vacancy.title} Job Application Form
            </h3>
            {Boolean(formik.touched.vacancy_id && formik.errors.vacancy_id) && (
              <p className="error-text mt-1">{formik.errors.vacancy_id}</p>
            )}
          </div>

          <div className="mb-[14px] flex flex-col sm:flex-row gap-[16px] sm:mb-[20px] sm:gap-[31px]">
            <div className="w-full flex flex-col">
              <input
                className="w-full min-w-fit lg:min-w-[342px] rounded-[16px] border border-[#D6D4D3]"
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

          <div className="mb-[20px] flex flex-col sm:flex-row gap-[16px] sm:mb-[55px] sm:gap-[31px]">
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

          <div className="flex flex-col sm:flex-row items-start sm:items-center max-w-[250px] overflow-hidden">
            <p className="subheading mr-[35px] sm:mr-[60px]">Upload your CV</p>

            <div className="flex flex-col">
              <input
                type="file"
                className="file:py-[10px] file:px-[15px] sm:file:px-[24px] file:bg-transparent file:border-0 file:shadow-2xl file:label"
                onChange={({ target: { files } }) => {
                  formik.setFieldValue(
                    'cv',
                    files && files.length ? files[0] : null
                  );
                }}
                accept=".pdf"
              />
              {Boolean(formik.touched.cv && formik.errors.cv) && (
                <p className="error-text">{formik.errors.cv}</p>
              )}
            </div>
          </div>

          {Object.values(formik.errors).length === 0 && progress > 0 && (
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

export default JobApplicationForm;
