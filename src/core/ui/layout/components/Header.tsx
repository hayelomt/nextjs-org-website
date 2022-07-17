import Icons from '../../utils/icons';

const Header = () => {
  return (
    <>
      <div className="flex bg-white">
        <div className="w-full"></div>
        <div className="max-w-global mx-auto flex w-full flex-shrink-0 items-center">
          <div className="pl-3">
            <div className="mr-[90px] h-[60px] md:h-[90px] w-[120px] md:w-[180px] bg-red xl:mr-[188px]"></div>
          </div>
          <div className="flex lg:hidden justify-end w-full pr-4">
            <Icons.Menu />
          </div>

          <div className="hidden w-full flex-col lg:flex">
            <div className="relative flex h-[50px] w-full flex-row items-center justify-between bg-brand pl-[110px] text-white pr-2 border-none">
              <div
                className="absolute top-0 left-[-2px] h-[105%] w-[50px] bg- border border-white bg-white"
                style={{ clipPath: 'polygon(0 0, 0% 100%, 100% 100%)' }}
              ></div>
              <p className="body1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>

              <div className="flex gap-x-4">
                <div className="h-[24px] w-[24px] rounded-full bg-white"></div>
                <div className="h-[24px] w-[24px] rounded-full bg-white"></div>
                <div className="h-[24px] w-[24px] rounded-full bg-white"></div>
                <div className="h-[24px] w-[24px] rounded-full bg-white"></div>
              </div>
            </div>

            <div className="flex w-full items-center justify-between py-4 pl-[50px] gap-x-2 pr-2">
              <div className="flex gap-x-[32px]">
                <p className="text-[16px] font-karla text-link-text">Home</p>
                <span className="flex items-center">
                  <p className="text-[16px] font-karla text-link-text">About</p>
                  <span className="ml-1">ic</span>
                </span>
                <p className="text-[16px] font-karla text-link-text">Blog</p>
                <p className="text-[16px] font-karla text-link-text">
                  Projects
                </p>
                <p className="text-[16px] font-karla text-link-text">Events</p>
                <span className="flex items-center">
                  <p className="text-[16px] font-karla text-link-text">
                    Resources
                  </p>
                  <span className="ml-1">ic</span>
                </span>
                <p className="text-[16px] font-karla text-link-text">Contact</p>
              </div>

              <div>
                <button className="btn">Donate Now</button>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[50px] w-full bg-brand"></div>
      </div>
    </>
  );
};

export default Header;
