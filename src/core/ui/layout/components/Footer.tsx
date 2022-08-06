import Icons from '../../utils/icons';

const Footer = () => {
  return (
    <>
      <div className="px-global w-full bg-[#261945] pt-[35px] pb-[60px] sm:pt-[72px] sm:pb-[136px]">
        <div className="max-w-global mx-auto flex w-full flex-col items-center justify-between gap-y-[20px] pt-[25px] sm:pt-[56px] lg:flex-row lg:items-start">
          <div className="flex max-w-[362px] flex-col items-center lg:items-start">
            <div className="mb-[16px] h-[62px] w-full max-w-[226px] bg-white sm:mb-[24px]"></div>
            <p className="body1 mb-[16px] text-center text-white sm:mb-[24px] lg:text-start">
              Maecenas suscipit in nulla tristique pretium. Praesent eget tellus
              nibh. Praesent mi orci, fringilla sed est ac, efficitur auctor
              velit. Fusc
            </p>

            <p className="mb-2 font-barlow text-[20px] text-white sm:text-[24px]">
              Subscribe to our Newsletter
            </p>
            <div className="relative w-full max-w-[332px]">
              <input
                type="text"
                name=""
                className="h-[46px] w-full rounded-[10px] bg-white"
                placeholder="Enter your email"
              />
              <div className="center absolute top-[50%] right-[10px] h-[28px] w-[28px] -translate-y-[50%] rounded-[6px] bg-red"></div>
            </div>
          </div>

          <div className="flex w-full max-w-[400px] flex-row justify-between gap-x-[60px]">
            <div className="flex flex-col text-white">
              <p className="mb-[16px] font-barlow text-[24px] text-white sm:mb-[24px]">
                Quick Links
              </p>

              <div className="flex flex-col gap-y-3">
                <div className="flex items-center">
                  <span className="mr-2">
                    <Icons.ArrowDouble />
                  </span>
                  <p className="body1 font-medium">Home</p>
                </div>
                <div className="flex items-center">
                  <span className="mr-2">
                    <Icons.ArrowDouble />
                  </span>
                  <p className="body1 font-medium">About</p>
                </div>
                <div className="flex items-center">
                  <span className="mr-2">
                    <Icons.ArrowDouble />
                  </span>
                  <p className="body1 font-medium">Blogs</p>
                </div>
                <div className="flex items-center">
                  <span className="mr-2">
                    <Icons.ArrowDouble />
                  </span>
                  <p className="body1 font-medium">Projects</p>
                </div>
                <div className="flex items-center">
                  <span className="mr-2">
                    <Icons.ArrowDouble />
                  </span>
                  <p className="body1 font-medium">Events</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col text-white">
              <p className="mb-[16px] font-barlow text-[24px] text-white sm:mb-[24px]">
                Resources
              </p>

              <div className="flex flex-col gap-y-3">
                <div className="flex items-center">
                  <span className="mr-2">
                    <Icons.ArrowDouble />
                  </span>
                  <p className="body1 font-medium">Our Gallery</p>
                </div>
                <div className="flex items-center">
                  <span className="mr-2">
                    <Icons.ArrowDouble />
                  </span>
                  <p className="body1 font-medium">Publications</p>
                </div>
                <div className="flex items-center">
                  <span className="mr-2">
                    <Icons.ArrowDouble />
                  </span>
                  <p className="body1 font-medium">Videos</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col text-white">
            <div className="mb-[15px] flex items-center sm:mb-[27px]">
              <span className="mr-[20px] sm:mr-[32px]">
                <Icons.PhoneBig className="h-[45px] md:h-[64px]" />
              </span>
              <div className="flex flex-col">
                <p className="subheading mb-[10px]">Call Us</p>
                <p className="body1 text-white">011-859-624-1</p>
                <p className="body1 text-white">011-859-624-2</p>
              </div>
            </div>

            <div className="mb-[15px] flex items-center sm:mb-[27px]">
              <span className="mr-[20px] sm:mr-[32px]">
                <Icons.Message className="h-[45px] md:h-[64px]" />
              </span>
              <div className="flex flex-col">
                <p className="subheading mb-[10px]">Email Us</p>
                <p className="body1 text-white">info@corhaethiopia.org</p>
              </div>
            </div>

            <div className="flex items-center">
              <span className="mr-[20px] sm:mr-[32px]">
                <Icons.LocationMap className="h-[45px] md:h-[64px]" />
              </span>
              <div className="flex flex-col">
                <p className="subheading mb-[10px]">Location</p>
                <p className="body1 max-w-[253px] text-white">
                  Kaliti Road, In front of the training center for drivers
                  mechanics
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
