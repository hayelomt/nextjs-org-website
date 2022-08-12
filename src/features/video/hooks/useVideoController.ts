import usePaginatedFetch from '../../../core/hooks/usePaginatedFetch';
import { Paginated } from '../../../core/ui/utils/types';
import { Video } from '../video';

const useVideoController = (videosInit: Paginated<Video>) => {
  const paginated = usePaginatedFetch({
    currentPage: videosInit.current_page,
    perPage: videosInit.per_page,
    data: videosInit.data,
    total: videosInit.total,
  });

  return paginated;
};

export default useVideoController;
