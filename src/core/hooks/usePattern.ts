import { useEffect, useState } from 'react';
import {
  buildPattern,
  buildSequentialPattern,
  PatternSymbol,
} from '../utils/global.utils';
import useResizeWindow from './useResizeWindow';

const usePattern = (itemCount: number) => {
  const [patterns, setPatterns] = useState<PatternSymbol[]>([]);

  const parsePattern = (windowWidth: number) => {
    if (windowWidth < 1024) {
      setPatterns(buildSequentialPattern(itemCount));
    } else {
      setPatterns(buildPattern(itemCount));
    }
  };

  useResizeWindow((width) => {
    parsePattern(width);
  });

  useEffect(() => {
    parsePattern(window.screen.width);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { patterns };
};

export default usePattern;
