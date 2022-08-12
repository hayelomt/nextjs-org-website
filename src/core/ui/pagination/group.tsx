import React from 'react';
import Icons from '../utils/icons';
import PaginationButton from './button';

type PaginationGroupProps = {
  currentPage: number;
  pageCount: number;
  buttonsLimit?: number;
  onPageChange: (p: number) => void;
  disabled?: boolean;
};

const JumpItems = 4;

const PaginationGroup: React.FC<PaginationGroupProps> = ({
  currentPage,
  pageCount,
  buttonsLimit = 10,
  onPageChange,
  disabled = false,
}) => {
  const generateRowNumbers = (
    curPage: number,
    butLimit: number,
    pageLimit: number
  ) => {
    let rowNumbers: number[] = [];
    let leftDecrement = 1;
    let rightIncrement = 1;

    const checkLimit = (i: number): boolean =>
      butLimit < pageLimit ? i < butLimit : i < pageLimit;

    for (let i = 0; checkLimit(i); i++) {
      const curNumber = curPage;
      if (i === 0) {
        rowNumbers.push(curNumber);
      } else if (i % 2 === 0) {
        if (curPage + rightIncrement <= pageLimit) {
          rowNumbers.push(curNumber + rightIncrement++);
        } else {
          rowNumbers = [curNumber - leftDecrement++, ...rowNumbers];
        }
      } else {
        if (curPage - leftDecrement > 0) {
          rowNumbers = [curNumber - leftDecrement++, ...rowNumbers];
        } else {
          rowNumbers.push(curNumber + rightIncrement++);
        }
      }
    }

    return rowNumbers;
  };

  const renderLinks = () => {
    const rowNumbers: number[] = generateRowNumbers(
      currentPage,
      buttonsLimit,
      pageCount
    );

    if (rowNumbers.length >= buttonsLimit) {
      if (rowNumbers[0] !== 1) {
        rowNumbers.splice(0, 1, 1);
      }
      if (
        rowNumbers.length > 1 &&
        rowNumbers[rowNumbers.length - 1] !== pageCount
      ) {
        rowNumbers.splice(rowNumbers.length - 1, 1, pageCount);
      }
    }

    const rows = rowNumbers.map((row) => (
      <PaginationButton
        key={`paginated-btn-key-${row}`}
        onClick={() => onPageChange(row)}
        page={row}
        disabled={disabled}
        active={currentPage === row}
      />
    ));

    if (pageCount > buttonsLimit && rowNumbers.length > 2) {
      if (rowNumbers[1] !== 2) {
        rows.splice(1, 0, <p key="key-start">..</p>);
      }
      if (rowNumbers[rowNumbers.length - 2] !== pageCount - 1) {
        rows.splice(rows.length - 1, 0, <p key="key-finish">..</p>);
      }
    }

    return <>{rows}</>;
  };

  return (
    <>
      <div className="flex items-end gap-x-[3px] sm:gap-x-[14px]">
        <PaginationButton
          onClick={() =>
            onPageChange(
              Math.max(0, currentPage - Math.ceil(buttonsLimit / JumpItems))
            )
          }
          page={
            <p>
              <Icons.Prev />
            </p>
          }
          disabled={disabled || currentPage === 1}
        />
        {renderLinks()}

        <PaginationButton
          onClick={() =>
            onPageChange(
              Math.min(
                pageCount,
                currentPage + Math.ceil(pageCount / JumpItems)
              )
            )
          }
          page={
            <p>
              <Icons.Next />{' '}
            </p>
          }
          disabled={disabled || currentPage === pageCount}
        />
      </div>
    </>
  );
};

export default PaginationGroup;
