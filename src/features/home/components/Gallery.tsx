import GalleryImages from '../../gallery/components/GalleryImages';

const Gallery = () => {
  const GalleryCard = () => (
    <div className="h-[252px] w-full sm:w-[321px] xl:w-full  max-w-[321px] overflow-hidden rounded-[20px]">
      <img
        src="/imgs/home/gallery1.jpeg"
        className="w-full h-full"
        alt="gallery"
      />
    </div>
  );

  return (
    <>
      <div className="px-global bg-white">
        <div className="max-w-global mx-auto flex flex-col items-center pt-[50px] pb-[60px] text-center sm:pt-[100px] sm:pb-[120px]">
          <h2 className="text-dark-text mb-[17px] sm:mb-[34px]">
            Our <strong className="text-red">Photo</strong> Gallery
          </h2>
          <div className="mb-[30px] max-w-[677px] sm:mb-[67px]">
            <p className="body1 text-light-text">
              Maecenas suscipit in nulla tristique pretium. Praesent eget tellus
              nibh. Praesent mi orci, fringilla sed est ac, efficitur auctor
              velit. Fusce fermentum feugiat lacinia. Maecenas eleifend bibendum
              tellus ac
            </p>
          </div>
          <div className="flex w-full flex-col items-center gap-x-[30px] xl:flex-row">
            <GalleryImages />
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
