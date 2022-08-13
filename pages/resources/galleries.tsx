import { NextPage } from 'next';
import { apiInstance } from '../../src/core/services/api';
import { Paginated } from '../../src/core/ui/utils/types';
import { Gallery } from '../../src/features/gallery/gallery';
import GalleryPage from '../../src/features/gallery/GalleryPage';

type GalleryProps = {
  galleries: Paginated<Gallery>;
};

const Galleries = ({ galleries }: GalleryProps & NextPage) => {
  return <GalleryPage galleriesInit={galleries} />;
};

export default Galleries;

export async function getStaticProps(): Promise<{ props: GalleryProps }> {
  const res = await apiInstance.get('galleries?limit=10');
  const galleries = res.data as Paginated<Gallery>;
  galleries.per_page = 10;

  return {
    props: {
      galleries,
    },
  };
}
