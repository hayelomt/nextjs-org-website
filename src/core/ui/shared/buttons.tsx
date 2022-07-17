import Icons from '../utils/icons';

const ArrowedButton = ({
  label,
  onClick,
}: {
  label: string;
  onClick: () => void;
}) => (
  <button
    className="btn hover:shadow-xl hover:-translate-y-1 transition duration-200"
    onClick={onClick}
  >
    {label}
    <span className="ml-[10px] h-[28px] w-[28px] rounded-full center bg-white text-red flex-shrink-0">
      <Icons.ArrowRight className="w-4 h-4" />
    </span>
  </button>
);

export { ArrowedButton };
