const LatestNews = () => {
  const BlogCard = () => (
    <div
      className="w-[430px] flex flex-col  rounded-[24px] sm:rounded-[32px] flex-shrink-0"
      style={{ boxShadow: '0px 1px 6px 4px rgba(0, 0, 0, 0.05)' }}
    >
      <div
        className="h-[337px] w-full bg-cover rounded-[24px] sm:rounded-[32px]"
        style={{ backgroundImage: 'url("/imgs/home/talk.jpeg")' }}
      ></div>
      <div className="py-[22px] sm:py-[32px] px-[18px] sm:px-[27px] flex flex-col">
        <h3 className="mb-2">Lorem ipsum dolor sit amet, consectetur </h3>
        <p className="body1 text-light-text mb-[18px] sm:mb-[24px]">
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
      <div className="px-global bg-white">
        <div className="max-w-global mx-auto flex flex-col pt-[35px] sm:pt-[72px] pb-[50px] sm:pb-[111px] items-center">
          <h2 className="mb-[17px] sm:mb-[34px]">
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

          <div className="flex flex-row gap-x-[30px] sm:gap-x-[45px] overflow-x-auto max-w-global pb-10 px-4">
            {Array(3)
              .fill(null)
              .map((_, i) => (
                <BlogCard key={`blog-card-${i}`} />
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default LatestNews;
