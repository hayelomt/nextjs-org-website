const BlogAndNewsHeading = () => {
  return (
    <>
      <div
        className="px-global bg-white py-[40px] sm:pt-[82px] pb-[60px] md:pb-[128px]"
        style={{
          background:
            'linear-gradient(0deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("imgs/blog/heading.jpeg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="max-w-[736px] mx-auto flex flex-col text-center items-center">
          <h1 className="mb-3 text-white">Blogs &amp; News</h1>
          <span>Bread crumb</span>
          <p className="body1 text-white mt-[20px] xm:mt-[32px]">
            Maecenas suscipit in nulla tristique pretium. Praesent eget tellus
            nibh. Praesent mi orci, fringilla sed est ac, efficitur auctor
            velit. Fusce fermentum feugiat lacinia. Maecenas eleifend bibendum
            tellus ac pretium. Etiam odio arcu, vestibulum id mattis ut, gravida
            sed ante. Nam ut cursus m
          </p>
        </div>
      </div>
    </>
  );
};

export default BlogAndNewsHeading;
