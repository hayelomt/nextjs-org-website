import { NextPage } from 'next';
import { NextSeo } from 'next-seo';
import { apiInstance } from '../../src/core/services/api';
import { Paginated } from '../../src/core/ui/utils/types';
import { Video } from '../../src/features/video/video';
import VideosPage from '../../src/features/video/VideosPage';

type VideoProps = {
  videos: Paginated<Video>;
};

const Videos = ({ videos }: { videos: Paginated<Video> } & NextPage) => {
  return (
    <>
      <NextSeo title="CORHA | Videos" />
      <VideosPage videosInit={videos} />
    </>
  );
};

export default Videos;

export async function getStaticProps(): Promise<{ props: VideoProps }> {
  const res = await apiInstance.get('videos?limit=9');
  const videos = res.data as Paginated<Video>;
  videos.per_page = 9;

  return {
    props: {
      videos,
    },
  };
}
