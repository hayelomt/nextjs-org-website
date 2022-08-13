import usePaginatedFetch from '../../../core/hooks/usePaginatedFetch';
import { Paginated } from '../../../core/ui/utils/types';
import { Gallery } from '../gallery';

const useGalleriesController = (galleriesInit: Paginated<Gallery>) => {
  const paginated = usePaginatedFetch({
    data: galleriesInit.data,
    currentPage: galleriesInit.current_page,
    perPage: galleriesInit.per_page,
    total: galleriesInit.total,
  });

  return paginated;
};

export default useGalleriesController;
