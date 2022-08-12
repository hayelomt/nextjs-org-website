import { AxiosError } from 'axios';
import { useState } from 'react';
import { apiInstance } from '../services/api';
import { Paginated } from '../ui/utils/types';
import { logError } from '../utils/logger';

type PaginatedArg<T> = {
  currentPage: number;
  perPage: number;
  total: number;
  data: T[];
};

type FetchDataArgs = {
  onError?: (err: string) => void;
};

const usePaginatedFetch = <T>(
  arg: PaginatedArg<T> = { total: 0, currentPage: 1, perPage: 10, data: [] }
) => {
  const [currentPage, setCurrentPage] = useState(arg.currentPage);
  const [perPage] = useState(arg.perPage);
  const [total, setTotal] = useState(arg.total);
  const [data, setData] = useState<T[]>(arg.data);
  const [loading, setLoading] = useState(false);

  const fetchData = async (
    endpoint: string,
    query = '?limit=10',
    { onError }: FetchDataArgs = {}
  ) => {
    setLoading(true);

    try {
      const res = await apiInstance.get(`${endpoint}${query}`);
      const result = res.data as Paginated<T>;
      setData(result.data);
      setTotal(result.total);
      setCurrentPage(result.current_page);
    } catch (e) {
      const err = e as AxiosError;
      logError(err);

      if (onError)
        onError(
          `${err.status}` === '500'
            ? 'Server error occurred, try again'
            : err.message
        );
    }

    setLoading(false);
  };

  return {
    currentPage,
    perPage,
    total,
    data,
    loading,
    fetchData,
    setCurrentPage,
  };
};

export default usePaginatedFetch;
