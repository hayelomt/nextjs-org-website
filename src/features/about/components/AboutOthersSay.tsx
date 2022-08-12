import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import OtherSayCard from './OtherSayCard';
import { OtherSay } from '../about';
import ImageUtils from '../../../core/ui/utils/image';

const AboutOthersSay = ({ otherSays }: { otherSays: OtherSay[] }) => {
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
              {otherSays.map((i) => (
                <SwiperSlide key={i.id} className=" center">
                  <OtherSayCard
                    imgUrl={ImageUtils.getMediaUrl(i.media[0])}
                    name={i.name}
                    position={i.position}
                    content={i.testimony}
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
