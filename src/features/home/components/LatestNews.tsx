import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
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
            <div className="flex max-w-[1370px] mx-auto">
              <Swiper
                navigation={true}
                modules={[Navigation, Pagination]}
                slidesPerView={1}
                spaceBetween={10}
                breakpoints={{
                  640: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                  },
                  930: {
                    slidesPerView: 2,
                    spaceBetween: 40,
                  },
                  1340: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                  },
                }}
                className="flex items-center justify-center max-w-global mx-auto"
              >
                {Array(4)
                  .fill(null)
                  .map((_, i) => (
                    <SwiperSlide
                      key={`blog-card-${i}`}
                      className=" py-4 center"
                    >
                      <BlogCard
                        title="Lorem ipsum dolor sit amet, consectetur"
                        description="Maecenas suscipit in nulla tristique pretium. Praesent eget tellus nibh.
                  Praesent mi orci, fringilla sed est ac, efficitur auctor velit. Fusc"
                        tag="contraception"
                        date="12 July, 2022"
                        imgUrl="/imgs/home/talk.jpeg"
                      />
                    </SwiperSlide>
                  ))}
              </Swiper>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LatestNews;
