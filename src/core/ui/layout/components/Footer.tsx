import Link from 'next/link';
import Icons from '../../utils/icons';

const Footer = () => {
  return (
    <>
      <div className="px-global w-full bg-[#261945] pt-[35px] sm:pt-[72px]">
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
              <div className="center absolute top-[50%] right-[10px] h-[28px] w-[28px] -translate-y-[50%] rounded-[6px] bg-red center">
                <Icons.Telegram />
              </div>
            </div>
          </div>

          <div className="flex w-full max-w-[400px] flex-row justify-around gap-x-[60px]">
            <div className="flex flex-col text-white">
              <p className="mb-[16px] font-barlow text-[24px] text-white sm:mb-[24px]">
                Quick Links
              </p>

              <div className="flex flex-col gap-y-3">
                <div className="flex items-center">
                  <span className="mr-2">
                    <Icons.ArrowDouble />
                  </span>
                  <Link href="/">
                    <a className="body1 font-medium">Home</a>
                  </Link>
                </div>
                <div className="flex items-center">
                  <span className="mr-2">
                    <Icons.ArrowDouble />
                  </span>
                  <Link href="/about">
                    <a className="body1 font-medium">About</a>
                  </Link>
                </div>
                <div className="flex items-center">
                  <span className="mr-2">
                    <Icons.ArrowDouble />
                  </span>
                  <Link href="/blogs">
                    <a className="body1 font-medium">Blogs</a>
                  </Link>
                </div>
                <div className="flex items-center">
                  <span className="mr-2">
                    <Icons.ArrowDouble />
                  </span>
                  <Link href="/projects">
                    <a className="body1 font-medium">Projects</a>
                  </Link>
                </div>
                <div className="flex items-center">
                  <span className="mr-2">
                    <Icons.ArrowDouble />
                  </span>
                  <Link href="/upcoming-events">
                    <a className="body1 font-medium">Events</a>
                  </Link>
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
                  <Link href="/resources/galleries">
                    <a className="body1 font-medium">Our Gallery</a>
                  </Link>
                </div>
                <div className="flex items-center">
                  <span className="mr-2">
                    <Icons.ArrowDouble />
                  </span>
                  <Link href="/resources/publications">
                    <a className="body1 font-medium">Publications</a>
                  </Link>
                </div>
                <div className="flex items-center">
                  <span className="mr-2">
                    <Icons.ArrowDouble />
                  </span>
                  <Link href="/resources/videos">
                    <a className="body1 font-medium">Videos</a>
                  </Link>
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
                <a href="tel:+251118596241" className="body1 text-white">
                  011-859-624-1
                </a>
                <a href="tel:+251118596242" className="body1 text-white">
                  011-859-624-2
                </a>
              </div>
            </div>

            <div className="mb-[15px] flex items-center sm:mb-[27px]">
              <span className="mr-[20px] sm:mr-[32px]">
                <Icons.Message className="h-[45px] md:h-[64px]" />
              </span>
              <div className="flex flex-col">
                <p className="subheading mb-[10px]">Email Us</p>
                <a
                  href="mailto:info@corhaethiopia.org"
                  className="body1 text-white"
                >
                  info@corhaethiopia.org
                </a>
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

        <div className="flex flex-col xs:flex-row gap-y-2 xs:gap-y-0 items-center justify-between max-w-global mx-auto mt-[18px] md:mt-[38px] bg-[#402A74] p-[14px] md:p-[26px] w-full ">
          <p className="text-[18px] text-white font-karla">
            © Copyright 2022 <span className="text-red">CORHA</span> All Rights
            Reserved.
          </p>

          <div className="flex bg-brand px-6 py-2 gap-x-4 rounded-[20px]">
            <div className="flex gap-x-4">
              <div className="h-[24px] w-[24px] rounded-full bg-brand">
                <a href="#">
                  <Icons.FacebookFilled />
                </a>
              </div>
              <div className="h-[24px] w-[24px] rounded-full bg-brand">
                <a href="#">
                  <Icons.TwitterFilled />
                </a>
              </div>
              <div className="h-[24px] w-[24px] rounded-full bg-brand">
                <a href="#">
                  <Icons.LinkedInFilled />
                </a>
              </div>
              <div className="h-[24px] w-[24px] rounded-full bg-brand">
                <a href="#">
                  <Icons.YoutubeFilled />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-global mx-auto justify-end flex py-[16px] md:py-[28px]">
          <p className="text-[14px] text-white font-karla">
            Powered by{' '}
            <a
              href="https://madtechet.com"
              target="_blank"
              className="text-red"
              rel="noreferrer"
            >
              M.A.D Technologies
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
