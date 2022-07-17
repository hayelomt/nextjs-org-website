import clsx from 'clsx';
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

export { ArrowedButton };
