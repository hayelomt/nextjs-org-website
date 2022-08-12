import clsx from 'clsx';
import Link from 'next/link';
import Icons from '../utils/icons';

const ArrowedButton = ({
  label,
  onClick,
  className = '',
  arrowClassName = '',
}: {
  label: string;
  onClick: () => void;
  className?: string;
  arrowClassName?: string;
}) => (
  <button
    className={clsx(
      'btn hover:shadow-xl hover:-translate-y-1 transition duration-200',
      className
    )}
    onClick={onClick}
  >
    {label}
    <span
      className={clsx(
        'ml-[10px] h-[28px] w-[28px] rounded-full center bg-white text-red flex-shrink-0',
        arrowClassName
      )}
    >
      <Icons.ArrowRight className="w-4 h-4" />
    </span>
  </button>
);

const ArrowedLink = ({
  label,
  className = '',
  arrowClassName = '',
  href,
  as,
}: {
  label: string;
  className?: string;
  arrowClassName?: string;
  href: string;
  as: string;
}) => (
  <Link href={href} as={as}>
    <a
      className={clsx(
        'btn hover:shadow-xl hover:-translate-y-1 transition duration-200 w-fit',
        className
      )}
    >
      {label}
      <span
        className={clsx(
          'ml-[10px] h-[28px] w-[28px] rounded-full center bg-white text-red flex-shrink-0',
          arrowClassName
        )}
      >
        <Icons.ArrowRight className="w-4 h-4" />
      </span>
    </a>
  </Link>
);

const PaginationButtons = () => (
  <div className="w-full center gap-x-[14px] max-w-full overflow-x-auto">
    <button className="bg-dark-blue w-[40px] h-[40px] rounded-[12px] center text-white font-barlow ">
      &#60;&#60;
    </button>
    <button className="bg-dark-blue w-[40px] h-[40px] rounded-[12px] center text-white">
      1
    </button>
    <button className="bg-red w-[40px] h-[40px] rounded-[12px] center text-white">
      2
    </button>
    <button className="bg-dark-blue w-[40px] h-[40px] rounded-[12px] center text-white">
      3
    </button>
    <button className="bg-dark-blue w-[40px] h-[40px] rounded-[12px] center text-white">
      &#62;&#62;
    </button>
  </div>
);

const Toggle = ({
  label,
  active = false,
  onClick,
}: {
  label: string;
  active?: boolean;
  onClick: () => void;
}) => (
  <button
    className={clsx(
      'px-[12px] md:px-[24px] py-[8px] md:py-[10px] rounded-[10px]  text-button hover:shadow-lg hover:-translate-y-[2px] transition duration-200',
      [active ? 'bg-red text-white' : 'bg-white text-dark']
    )}
    style={{ boxShadow: '0px 1px 10px 3px rgba(0, 0, 0, 0.08)' }}
    onClick={onClick}
  >
    {label}
  </button>
);

export { ArrowedButton, ArrowedLink, PaginationButtons, Toggle };
