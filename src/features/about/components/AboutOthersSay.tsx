import { useEffect, useState } from 'react';
import Icons from '../../../core/ui/utils/icons';
import OtherSayCard from './OtherSayCard';

const AboutOthersSay = () => {
  const [sliceMax, setSliceMax] = useState(1);

  const calculateSlice = (screenWidth: number) => {
    let slice = 1;
    if (screenWidth > 1300) {
      slice = 3;
    } else if (screenWidth > 900) {
      slice = 2;
    }

    console.log(screenWidth, sliceMax, slice, slice !== sliceMax);

    // if (slice !== sliceMax) {
    setSliceMax(slice);
    // }
  };

  useEffect(() => {
    const listener = (e: UIEvent) => {
      console.log('resized', window.screen.width);
      calculateSlice(window.screen.width);
    };
    window.addEventListener('resize', listener);

    // calculateSlice(window.screen.width);

    return () => {
      window.removeEventListener('resize', listener);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
          <h3>Slices {sliceMax}</h3>
          <div className="mb-[50px] max-w-[690px] sm:mb-[111px]">
            <p className="text-light-text text-center">
              Maecenas suscipit in nulla tristique pretium. Praesent eget tellus
              nibh. Praesent mi orci, fringilla sed est ac, efficitur auctor
              velit. Fusce fermentum feugiat lacinia. Maecenas eleifend bibendum
              tellus ac
            </p>
          </div>

          <div className="w-full">
            <div className="max-w-global mx-auto flex w-full flex-row items-center text-center">
              <span>
                <Icons.ChevronRight className="rotate-180 text-light-text w-6 h-6" />
              </span>
              <div className="w-full flex justify-around items-center">
                {cardArray.slice(0, sliceMax).map((i) => i)}
              </div>
              <span>
                <Icons.ChevronRight className="text-light-text w-6 h-6" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutOthersSay;
