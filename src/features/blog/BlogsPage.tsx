import Layout from '../../core/ui/layout/Layout';
import BlogAndNewsHeading from './components/BlogAndNewsHeading';

const BlogsPage = () => {
  const BlogCard = () => (
    <div
      className="flex w-full max-w-[420px] flex-col rounded-[32px]"
      style={{ boxShadow: '0px 1px 6px 4px rgba(0, 0, 0, 0.05)' }}
    >
      <div className="w-full  h-[337px] bg-brand rounded-[32px]"></div>

      <div className="px-[18px] sm:px-[27px] py-[20px] sm:py-[32px] flex flex-col">
        <div className="py-[6px] px-[10px] sm:px-[16px] bg-brand center text-white w-fit rounded-[8px] mb-[14px]">
          <p className="label">Contraception</p>
        </div>

        <h3 className="line-clamp-2 mb-2">
          Lorem ipsum dolor sit amet, consectetur{' '}
        </h3>
        <p className="body1 text-light-text line-clamp-3 mb-[14px] sm:mb-[24px]">
          Maecenas suscipit in nulla tristique pretium. Praesent eget tellus
          nibh. Praesent mi orci, fringilla sed est ac, efficitur auctor velit.
          Fusc
        </p>

        <div className="flex items-center">
          <span className="mr-[10px]">ic</span>
          <p className="subtitle text-light-text">12 July, 2022</p>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <Layout>
        <BlogAndNewsHeading />

        <div className="px-global w-full pt-[35px] pb-[60px] sm:pt-[72px] sm:pb-[136px]">
          <div className="max-w-global mx-auto flex flex-col items-center">
            <div className="xs:w-fit grid w-full grid-cols-1 place-items-center gap-[25px] sm:grid-cols-2 sm:gap-[35px] xl:grid-cols-3 xl:gap-[45px] mb-[25px] sm:mb-[50px]">
              {Array(10)
                .fill(null)
                .map((_, i) => (
                  <BlogCard key={`blog-card-${i}`} />
                ))}
            </div>

            <div className="w-full center gap-x-[14px] max-w-full overflow-x-auto">
              <button className="bg-dark-blue w-[40px] h-[40px] rounded-[12px] center text-white font-barlow ">
                &#60;&#60;
              </button>
              <button className="bg-dark-blue w-[40px] h-[40px] rounded-[12px] center text-white">
                1
              </button>
              <button className="bg-red w-[40px] h-[40px] rounded-[12px] center text-white">
                2
              </button>
              <button className="bg-dark-blue w-[40px] h-[40px] rounded-[12px] center text-white">
                3
              </button>
              <button className="bg-dark-blue w-[40px] h-[40px] rounded-[12px] center text-white">
                &#62;&#62;
              </button>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default BlogsPage;
