const GalleryImages = () => {
  return (
    <>
      <div className="max-w-global w-full mx-auto flex flex-col md:flex-row gap-[20px] md:gap-[40px]">
        <div className="flex w-full flex-col gap-y-[12px] sm:gap-y-[24px]">
          <div className="flex w-full gap-x-[15px] md:gap-x-[34px]">
            <div className="small-aspect h-fit w-1/2 overflow-hidden rounded-[14px] sm:rounded-[24px] bg-brand"></div>
            <div className="small-aspect h-fit w-1/2 overflow-hidden rounded-[14px] sm:rounded-[24px] bg-brand"></div>
          </div>
          <div className="flex w-full gap-x-[15px] md:gap-x-[34px]">
            <div className="small-aspect h-fit w-1/2 overflow-hidden rounded-[14px] sm:rounded-[24px] bg-brand"></div>
            <div className="small-aspect h-fit w-1/2 overflow-hidden rounded-[14px] sm:rounded-[24px] bg-brand"></div>
          </div>
          <div className="flex w-full gap-x-[15px] md:gap-x-[34px]">
            <div className="w-full small-aspect overflow-hidden rounded-[14px] sm:rounded-[24px] bg-brand"></div>
          </div>
        </div>

        <div className="w-full flex flex-col gap-y-[12px] sm:gap-y-[24px]">
          <div className="flex w-full gap-x-[15px] md:gap-x-[34px]">
            <div className="w-full small-aspect overflow-hidden rounded-[14px] sm:rounded-[24px] bg-brand"></div>
          </div>

          <div className="flex w-full gap-x-[15px] md:gap-x-[34px]">
            <div className="small-aspect h-fit w-1/2 overflow-hidden rounded-[14px] sm:rounded-[24px] bg-brand"></div>
          </div>
          <div className="flex w-full gap-x-[15px] md:gap-x-[34px]">
            <div className="w-full small-aspect overflow-hidden rounded-[14px] sm:rounded-[24px] bg-brand"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GalleryImages;
