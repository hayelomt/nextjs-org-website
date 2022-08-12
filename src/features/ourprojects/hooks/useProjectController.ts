import { useEffect, useState } from 'react';
import usePaginatedFetch from '../../../core/hooks/usePaginatedFetch';
import { Paginated } from '../../../core/ui/utils/types';
import { Project } from '../project';

const useProjectController = (serverData: Paginated<Project>) => {
  const paginated = usePaginatedFetch({
    currentPage: serverData.current_page,
    data: serverData.data,
    perPage: serverData.per_page,
    total: serverData.total,
  });
  const [tag, setTag] = useState<
    'all' | 'children' | 'std' | 'contraception' | ''
  >('');

  useEffect(() => {
    if (tag !== '') {
      let query = `?page=${1}&limit=${paginated.perPage}`;

      if (tag !== 'all') query += `&tag=${tag}`;

      paginated.fetchData('projects', query);
      paginated.setCurrentPage(1);
    }
  }, [tag]);

  return { ...paginated, tag, setTag };
};

export default useProjectController;
