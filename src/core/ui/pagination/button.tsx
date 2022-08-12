import clsx from 'clsx';
import React from 'react';

type PaginationButtonProps = {
  disabled?: boolean;
  onClick: () => void;
  page: React.ReactElement | number;
  active?: boolean;
};

const PaginationButton: React.FC<PaginationButtonProps> = ({
  disabled = false,
  onClick,
  page,
  active = false,
}) => {
  return (
    <>
      <button
        onClick={onClick}
        disabled={disabled}
        className={clsx(
          'w-[40px] h-[40px] rounded-[12px] center text-white font-barlow ',
          [disabled ? 'bg-gray-600' : active ? 'bg-red' : 'bg-dark-blue ']
        )}
      >
        {typeof page === 'number' ? (
          <p className="font-barlow text-[16px] text-white">{page}</p>
        ) : (
          page
        )}
      </button>
    </>
  );
};

export default PaginationButton;
