import BlogCard from '../../blog/components/BlogCard';

const LatestNews = () => {
  return (
    <>
      <section className="px-global bg-white">
        <div className="max-w-global mx-auto flex flex-col pt-[35px] sm:pt-[72px] pb-[30px] sm:pb-[60px] items-center">
          <h2 className="mb-[17px] sm:mb-[34px] text-dark-text">
            Latest <span className="text-red">News</span> & Blogs
          </h2>
          <div className="max-w-[736px] mb-[30px] sm:mb-[67px]">
            <p className="body2 text-center text-light-text">
              Maecenas suscipit in nulla tristique pretium. Praesent eget tellus
              nibh. Praesent mi orci, fringilla sed est ac, efficitur auctor
              velit. Fusce fermentum feugiat lacinia. Maecenas eleifend bibendum
              tellus ac pretium.{' '}
            </p>
          </div>

          <div className=" w-full">
            <div className="flex max-w-[1370px] mx-auto overflow-x-auto gap-x-[20px] sm:gap-x-[45px] pb-5 sm:pb-10">
              {Array(4)
                .fill(null)
                .map((_, i) => (
                  <BlogCard
                    key={`blog-card-${i}`}
                    title="Lorem ipsum dolor sit amet, consectetur"
                    description="Maecenas suscipit in nulla tristique pretium. Praesent eget tellus nibh.
                  Praesent mi orci, fringilla sed est ac, efficitur auctor velit. Fusc"
                    tag="contraception"
                    date="12 July, 2022"
                    imgUrl="/imgs/home/talk.jpeg"
                  />
                ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LatestNews;
