import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import { useEffect, useState } from 'react';
import Icons from '../../../core/ui/utils/icons';
import OtherSayCard from './OtherSayCard';

const AboutOthersSay = () => {
  const cardArray = [
    <OtherSayCard
      imgUrl="/imgs/gallery/lens.png"
      name="Alloy"
      position="Accountant"
      content=" Maecenas suscipit in nulla tristique pretium. Praesent eget tellusMaecenas suscipit in nulla tristique pretium. Praesent eget tellusMaecenas suscipit in nulla tristique pretium. Praesent eget tellus "
      key={1}
    />,
    <OtherSayCard
      imgUrl="/imgs/gallery/lens.png"
      name="Alloy"
      position="Accountant"
      content="              nibh. Praesent mi orci, fringilla sed est ac, efficitur auctor "
      key={2}
    />,
    <OtherSayCard
      imgUrl="/imgs/gallery/lens.png"
      name="Alloy"
      position="Accountant"
      content="              velit. Fusce fermentum feugiat lacinia. Maecenas eleifend bibendum "
      key={3}
    />,
  ];

  return (
    <>
      <div className="px-global w-full pt-[35px] pb-[60px] sm:pt-[72px] sm:pb-[136px] bg-gray-bg">
        <div className="max-w-global mx-auto flex flex-col items-center justify-around">
          <h2 className="mb-[20px] md:mb-[34px]">
            What <strong className="text-red">Others</strong> Say
          </h2>
          <div className="mb-[50px] max-w-[690px] sm:mb-[111px]">
            <p className="text-light-text text-center">
              Maecenas suscipit in nulla tristique pretium. Praesent eget tellus
              nibh. Praesent mi orci, fringilla sed est ac, efficitur auctor
              velit. Fusce fermentum feugiat lacinia. Maecenas eleifend bibendum
              tellus ac
            </p>
          </div>

          <div className="w-full">
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
                840: {
                  slidesPerView: 2,
                  spaceBetween: 40,
                },
                1200: {
                  slidesPerView: 3,
                  spaceBetween: 50,
                },
              }}
              className="flex items-center justify-center max-w-global mx-auto"
            >
              {Array(10)
                .fill(null)
                .map((_, i) => (
                  <SwiperSlide key={`'other'-${i}`} className=" center">
                    <OtherSayCard
                      imgUrl="/imgs/gallery/lens.png"
                      name={`${i + 1} Alloy`}
                      position="Accountant"
                      content=" Maecenas suscipit in nulla tristique pretium. Praesent eget tellusMaecenas suscipit in nulla tristique pretium. Praesent eget tellusMaecenas suscipit in nulla tristique pretium. Praesent eget tellus "
                    />
                  </SwiperSlide>
                ))}
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutOthersSay;
