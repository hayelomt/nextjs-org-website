import { NextPage } from 'next';
import { apiInstance } from '../src/core/services/api';
import { Paginated } from '../src/core/ui/utils/types';
import { Blog } from '../src/features/blog/blog';
import BlogsPage from '../src/features/blog/BlogsPage';

type BlogProps = {
  blogs: Paginated<Blog>;
};

const Blog = ({ blogs }: BlogProps & NextPage) => {
  return <BlogsPage blogsInit={blogs} />;
};

export default Blog;

export async function getStaticProps(): Promise<{ props: BlogProps }> {
  const result = await apiInstance.get('blogs?limit=9');
  const blogs = result.data as Paginated<Blog>;
  blogs.per_page = 9;

  return {
    props: {
      blogs,
    },
  };
}
