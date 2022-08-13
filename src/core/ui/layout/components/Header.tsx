import clsx from 'clsx';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ReactElement, useState } from 'react';
import { ArrowedButton } from '../../shared/buttons';
import Icons from '../../utils/icons';

const Header = ({
  setShowMenu,
  showShadow = false,
}: {
  setShowMenu: (show: boolean) => void;
  showShadow?: boolean;
}) => {
  const router = useRouter();

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
          'text-[16px] font-karla cursor-pointer hover:text-red transition duration-150',
          [active ? 'active-link' : 'inactive-link']
        )}
      >
        {label}
      </a>
    </Link>
  );

  const DropLinkItem = ({
    active = false,
    label,
    url,
  }: {
    label: string;
    active?: boolean;
    url: string;
  }) => (
    <Link href={url}>
      <div className="flex items-center flex-row-reverse justify-end">
        <a
          className={clsx(
            'text-[16px] px-[20px]  py-[12px]  peer cursor-pointer text-link-text'
          )}
        >
          {label}
        </a>
        <div
          className={clsx('h-[44px] w-[4px] rounded-r-2xl peer-hover:bg-red', [
            active ? 'bg-red' : 'bg-transparent',
          ])}
        ></div>
      </div>
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
      <div className="pt-0">
        <div className="top-[100%] left-[50%] -translate-x-[50%] absolute hidden group-hover:flex transition-all duration-200">
          <div
            className=" bg-white  py-[12px]  w-screen max-w-fit rounded-b-[14px] shadow-lg whitespace-nowrap   flex-col pr-[23px] mt-[35px] "
            style={{ boxShadow: '1px 3px 5px 1px rgba(0, 0, 0, 0.15)' }}
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  );

  const MobileMenu = () => (
    <>
      <div className="flex lg:hidden justify-end w-full pr-4">
        <button onClick={() => setShowMenu(true)}>
          <Icons.Menu className="h-6 w-6 text-link-text" />
        </button>
      </div>
    </>
  );

  const DesktopMenu = () => (
    <div className="hidden w-full flex-col lg:flex">
      <div className="relative flex h-[50px] w-full flex-row items-center justify-between bg-brand pl-[110px] text-white pr-4 border-none">
        <div
          className="absolute top-0 left-[-2px] h-[105%] w-[50px] bg- border border-white bg-white"
          style={{ clipPath: 'polygon(0 0, 0% 100%, 100% 100%)' }}
        ></div>
        <p className="body1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>

        <div className="flex gap-x-4 pr-0">
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

      <div className="flex w-full items-center justify-between py-4 pl-[50px] gap-x-2 pr-4">
        <div className="flex gap-x-[32px]">
          <LinkItem label="Home" url="/" active={router.pathname === '/'} />
          <LinkDropItem
            label="About"
            active={router.pathname.startsWith('/about')}
          >
            <>
              <DropLinkItem
                label="Introduction"
                url="/about"
                active={router.pathname === '/about'}
              />
              <DropLinkItem
                label="Tenders"
                url="/about/tenders"
                active={router.pathname === '/about/tenders'}
              />
              <DropLinkItem
                label="Vacancies"
                url="/about/vacancies"
                active={router.pathname === '/about/vacancies'}
              />
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
          <LinkItem
            label="Events"
            url="/upcoming-events"
            active={router.pathname === '/upcoming-events'}
          />
          <LinkDropItem
            label="Resources"
            active={router.pathname.startsWith('/resources')}
          >
            <>
              <DropLinkItem
                label="Gallery"
                url="/resources/galleries"
                active={router.pathname === '/resources/galleries'}
              />
              <DropLinkItem
                label="Publication"
                url="/resources/publications"
                active={router.pathname === '/resources/publications'}
              />
              <DropLinkItem
                label="Videos"
                url="/resources/videos"
                active={router.pathname === '/resources/videos'}
              />
            </>
          </LinkDropItem>
          <LinkItem
            label="Contact"
            url="/contact-us"
            active={router.pathname === '/contact-us'}
          />
        </div>

        <div>
          <ArrowedButton onClick={() => {}} label="Donate Now" />
        </div>
      </div>
    </div>
  );

  return (
    <>
      <div
        className={clsx('flex bg-white z-10 ', [showShadow && 'mb-2'])}
        style={{ boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)' }}
      >
        <div className="w-full"></div>
        <div className="max-w-global mx-auto flex w-full flex-shrink-0 items-center">
          <div className="pl-4">
            <div className="mr-[10px] h-[60px] md:h-[90px] w-[120px] md:w-[180px] xl:mr-[188px] py-2 flex justify-start flex-shrink">
              <img
                src="/imgs/layout/logo.png"
                className="w-full h-full object-contain object-left"
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
