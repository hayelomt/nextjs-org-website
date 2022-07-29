import Icons from '../../../core/ui/utils/icons';

const JobApplicationForm = ({ onCancel }: { onCancel: () => void }) => {
  return (
    <>
      <div className="mx-4 my-2 w-full flex max-w-[822px] flex-col rounded-[32px] bg-white py-[30px] px-[23px] sm:py-[65px] sm:px-[56px] relative">
        <div
          className="absolute top-[20px] sm:top-[35px] right-[20px] sm:right-[35px]"
          onClick={onCancel}
        >
          <Icons.Close />
        </div>
        <h3 className="mb-[20px] sm:mb-[50px]">
          Accountant Job Application Form
        </h3>

        <div className="mb-[14px] flex flex-col sm:flex-row gap-[16px] sm:mb-[20px] sm:gap-[31px]">
          <input
            className="w-full min-w-fit lg:min-w-[342px] rounded-[16px] border border-[#D6D4D3]"
            type="text"
            placeholder="First Name"
          />
          <input
            className="w-full min-w-fit lg:min-w-[342px] rounded-[16px] border border-[#D6D4D3]"
            type="text"
            placeholder="Last Name"
          />
        </div>

        <div className="mb-[20px] flex flex-col sm:flex-row gap-[16px] sm:mb-[55px] sm:gap-[31px]">
          <input
            className="w-full min-w-fit lg:min-w-[342px] rounded-[16px] border border-[#D6D4D3]"
            type="text"
            placeholder="Email"
          />
          <input
            className="w-full min-w-fit lg:min-w-[342px] rounded-[16px] border border-[#D6D4D3]"
            type="text"
            placeholder="Phone number"
          />
        </div>

        <div className="flex flex-col sm:flex-row items-center">
          <p className="subheading mr-[35px] sm:mr-[60px]">Upload your CV</p>

          <input
            type="file"
            className="file:py-[10px] file:px-[15px] sm:file:px-[24px] file:bg-transparent file:border-0 file:shadow-2xl file:label"
          />
        </div>
      </div>
    </>
  );
};

export default JobApplicationForm;
