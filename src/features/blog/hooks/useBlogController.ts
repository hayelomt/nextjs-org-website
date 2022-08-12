import usePaginatedFetch from '../../../core/hooks/usePaginatedFetch';
import { Paginated } from '../../../core/ui/utils/types';
import { Blog } from '../blog';

const useBlogController = (blogsInit: Paginated<Blog>) => {
  const paginated = usePaginatedFetch({
    currentPage: blogsInit.current_page,
    data: blogsInit.data,
    perPage: blogsInit.per_page,
    total: blogsInit.total,
  });

  return paginated;
};

export default useBlogController;
