import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import OtherSayCard from '../../about/components/OtherSayCard';
import { ArrowedButton, ArrowedLink } from '../../../core/ui/shared/buttons';
import { OtherSay } from '../../about/about';
import ImageUtils from '../../../core/ui/utils/image';

const OtherSay = ({ otherSays }: { otherSays: OtherSay[] }) => {
  return (
    <>
      <div className="px-global bg-gray-bg">
        <div className="max-w-global mx-auto flex flex-col xl:flex-row items-center xl:items-start gap-x-10 py-[50px] sm:py-[110px]">
          <div className="flex w-full max-w-[448px] flex-col">
            <h2 className="mb-[14px] sm:mb-[24px]">
              What <strong className="text-red">Others</strong> Say <br /> About
              Us
            </h2>
            <p className="text-light-text mb-[14px] sm:mb-[24px]">
              Maecenas suscipit in nulla tristique pretium. Praesent eget tellus
              nibh. Praesent mi orci, fringilla sed est ac, efficitur
            </p>
            <div>
              <ArrowedLink label="View More" href="/about" as="/about" />
            </div>
          </div>

          <div className="w-full justify-center mt-8 xl:mt-0 max-w-fit overflow-hidden">
            <div className="flex flex-row gap-x-[45px] pb-5 max-w-full xl:max-w-[900px] ">
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
                }}
                className="flex items-center justify-center max-w-global mx-auto"
              >
                {otherSays.map((otherSay) => (
                  <SwiperSlide key={otherSay.id} className=" center">
                    <OtherSayCard
                      imgUrl={ImageUtils.getMediaUrl(otherSay.media[0])}
                      name={otherSay.name}
                      position={otherSay.position}
                      content={otherSay.testimony}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OtherSay;
