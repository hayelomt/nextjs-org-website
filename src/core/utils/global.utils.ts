type PatternSymbol = 0 | 1;

const buildPattern = (length: number) => {
  const patternBuilder = (
    accumulator: PatternSymbol[],
    maxCount: number,
    index: number,
    prev1Pattern: PatternSymbol | null = null,
    prev2Pattern: PatternSymbol | null = null
  ): PatternSymbol[] => {
    if (index === maxCount) {
      return accumulator;
    }

    if (index === 0) {
      return patternBuilder([0], maxCount, index + 1, null, null);
    }

    if (prev1Pattern === null) {
      return patternBuilder([...accumulator, 1], maxCount, index + 1, 1, null);
    }
    if (prev2Pattern === null) {
      return patternBuilder([...accumulator, 1], maxCount, index + 1, 1, 1);
    }

    if (prev1Pattern === prev2Pattern) {
      const curSymbol = prev1Pattern === 1 ? 0 : 1;
      return patternBuilder(
        [...accumulator, curSymbol],
        maxCount,
        index + 1,
        curSymbol,
        prev1Pattern
      );
    }

    return patternBuilder(
      [...accumulator, prev1Pattern],
      maxCount,
      index + 1,
      prev1Pattern,
      prev1Pattern
    );
  };

  return patternBuilder([], length, 0);
};

export { buildPattern };
