import clsx from 'clsx';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ReactElement, useState } from 'react';
import { ArrowedButton } from '../../shared/buttons';
import Icons from '../../utils/icons';

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const router = useRouter();

  const MobileDropLink = ({
    label,
    subLinks,
    active = false,
  }: {
    label: string;
    subLinks: ReactElement;
    active?: boolean;
  }) => {
    const [showSubLinks, setShowSubLinks] = useState(false);

    return (
      <div className="flex flex-col items-center group transition-all duration-500">
        <div
          className="flex items-center"
          onClick={() => setShowSubLinks(!showSubLinks)}
        >
          <h3 className={clsx([active ? 'active-link' : 'inactive-link'])}>
            {label}
          </h3>
          <span
            className={clsx('ml-1 mt-1 transition-transform duration-200', [
              showSubLinks ? 'transform rotate-90' : 'transform rotate-0',
            ])}
          >
            <Icons.ChevronRight />
          </span>
        </div>
        <div
          className={clsx('bg-blue-400 flex-col', [
            showSubLinks ? 'flex' : 'hidden',
          ])}
        >
          {subLinks}
        </div>
      </div>
    );
  };

  const LinkItem = ({
    active = false,
    label,
    url,
  }: {
    label: string;
    active?: boolean;
    url: string;
  }) => (
    <Link href={url}>
      <a
        className={clsx(
          'text-[16px] font-karla cursor-pointer hover:text-red hover:font-semibold transition duration-150',
          [active ? 'active-link' : 'inactive-link']
        )}
      >
        {label}
      </a>
    </Link>
  );

  const LinkDropItem = ({
    label,
    active = false,
    children,
  }: {
    label: string;
    children: ReactElement;
    active?: boolean;
  }) => (
    <div className="w-fit relative group ">
      <div className="flex items-center">
        <p
          className={clsx(
            'text-[16px] font-karla cursor-pointer group-hover:active-link',
            [active ? 'active-link' : 'inactive-link']
          )}
        >
          {label}
        </p>
        <span className="ml-[6px] transition-transform duration-300 group-hover:rotate-180 ">
          <Icons.ChevronDown className="w-[12px] h-fit" />
        </span>
      </div>
      <div className="pt-2">
        <div className="absolute top-[100%] left-[50%] -translate-x-[50%] bg-white border border-gray-bg p-4 w-screen max-w-fit rounded-lg shadow-lg whitespace-nowrap hidden group-hover:flex transition-all duration-200 flex-col">
          {children}
        </div>
      </div>
    </div>
  );

  const MobileLinkItem = ({
    active = false,
    label,
    url,
  }: {
    label: string;
    active?: boolean;
    url: string;
  }) => (
    <Link href={url}>
      <h3>
        <a
          className={clsx(
            'cursor-pointer hover:text-red hover:font-semibold transition duration-150',
            [active ? 'active-link' : 'inactive-link']
          )}
        >
          {label}
        </a>
      </h3>
    </Link>
  );

  const MobileMenu = () => (
    <>
      <div className="flex lg:hidden justify-end w-full pr-4">
        <button onClick={() => setShowMenu(true)}>
          <Icons.Menu />
        </button>
      </div>
      <div
        className={clsx(
          'fixed top-0 bottom-0 left-0 right-0 h-full w-full lg:hidden bg-gray-200 bg-opacity-[.98] transition ease-in-out duration-300 origin-top text-link-text',
          [showMenu ? 'opacity-100 z-10 ' : 'opacity-0 -z-10 ']
        )}
      >
        <div className="relative w-full h-full">
          <div className="relative flex h-full w-full flex-col items-center justify-center -translate-y-[6%]">
            <div className="flex flex-col items-center gap-y-6">
              <MobileLinkItem
                label="Home"
                url="/"
                active={router.pathname === '/'}
              />
              <MobileDropLink
                label="About"
                active={router.pathname.startsWith('/about')}
                subLinks={
                  <>
                    <p className="text-[24px]">Us</p>
                    <p className="text-[24px]">them</p>
                    <p className="text-[24px]">we</p>
                  </>
                }
              />
              <MobileLinkItem
                label="Blogs"
                url="/blogs"
                active={router.pathname === '/blogs'}
              />
              <MobileLinkItem
                label="Projects"
                url="/our-projects"
                active={router.pathname === '/projects'}
              />
              <MobileLinkItem label="Events" url="/upcoming-events" />
              <MobileDropLink
                label="Resources"
                subLinks={
                  <>
                    <p className="text-[24px]">Us</p>
                    <p className="text-[24px]">them</p>
                    <p className="text-[24px]">we</p>
                  </>
                }
              />
              <MobileLinkItem label="Contact" url="/contact-us" />
              <button className="btn">Donate Now</button>
              <div className="flex bg-brand px-6 py-2 gap-x-4 rounded-[20px]">
                <div className="flex gap-x-4">
                  <div className="h-[24px] w-[24px] rounded-full bg-brand">
                    <Icons.Facebook />
                  </div>
                  <div className="h-[24px] w-[24px] rounded-full bg-brand">
                    <Icons.Twitter />
                  </div>
                  <div className="h-[24px] w-[24px] rounded-full bg-brand">
                    <Icons.LinkedIn />
                  </div>
                  <div className="h-[24px] w-[24px] rounded-full bg-brand">
                    <Icons.Youtube />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <button
          onClick={() => setShowMenu(false)}
          className="absolute right-[30px] top-[30px] z-10"
        >
          <Icons.CloseCircle className="w-10 h-10 cursor-pointer hover:text-red hover:shadow-xl rounded-full hover:scale-110 transition ease-in duration-200 " />
        </button>
      </div>
    </>
  );

  const DesktopMenu = () => (
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
          <div className="h-[24px] w-[24px] rounded-full bg-brand">
            <Icons.Facebook />
          </div>
          <div className="h-[24px] w-[24px] rounded-full bg-brand">
            <Icons.Twitter />
          </div>
          <div className="h-[24px] w-[24px] rounded-full bg-brand">
            <Icons.LinkedIn />
          </div>
          <div className="h-[24px] w-[24px] rounded-full bg-brand">
            <Icons.Youtube />
          </div>
        </div>
      </div>

      <div className="flex w-full items-center justify-between py-4 pl-[50px] gap-x-2 pr-2">
        <div className="flex gap-x-[32px]">
          <LinkItem label="Home" url="/" active={router.pathname === '/'} />
          <LinkDropItem
            label="About"
            active={router.pathname.startsWith('/about')}
          >
            <>
              <LinkItem label="Team" url="/team" />
              <LinkItem label="Projects" url="/projects" />
            </>
          </LinkDropItem>
          <LinkItem
            label="Blog"
            url="/blogs"
            active={router.pathname === '/blogs'}
          />
          <LinkItem
            label="Projects"
            url="/projects"
            active={router.pathname === '/projects'}
          />
          <LinkItem label="Events" url="/upcoming-events" />
          <LinkDropItem label="Resource" active={false}>
            <>
              <LinkItem label="Team" url="/team" />
              <LinkItem label="Projects" url="/projects" />
            </>
          </LinkDropItem>
          <LinkItem label="Contact" url="/contact-us" />
        </div>

        <div>
          <ArrowedButton onClick={() => {}} label="Donate Now" />
        </div>
      </div>
    </div>
  );

  return (
    <>
      <div className="flex bg-white">
        <div className="w-full"></div>
        <div className="max-w-global mx-auto flex w-full flex-shrink-0 items-center">
          <div className="pl-3">
            <div className="mr-[40px] h-[60px] md:h-[90px] w-[120px] md:w-[180px] xl:mr-[188px] py-2">
              <img
                src="/imgs/layout/logo.png"
                className="w-full h-full object-contain object-center"
                alt="corha logo"
              />
            </div>
          </div>
          <MobileMenu />

          <DesktopMenu />
        </div>
        <div className="h-[50px] w-full bg-brand"></div>
      </div>
    </>
  );
};

export default Header;
