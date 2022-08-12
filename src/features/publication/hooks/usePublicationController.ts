import usePaginatedFetch from '../../../core/hooks/usePaginatedFetch';
import { Paginated } from '../../../core/ui/utils/types';
import { Publication } from '../publication';

const usePublicationController = (publicationsInit: Paginated<Publication>) => {
  const paginated = usePaginatedFetch({
    currentPage: publicationsInit.current_page,
    total: publicationsInit.total,
    data: publicationsInit.data,
    perPage: publicationsInit.per_page,
  });

  return paginated;
};

export default usePublicationController;
