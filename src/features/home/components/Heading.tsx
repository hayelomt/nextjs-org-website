const Heading = () => {
  return (
    <>
      <div
        className="px-global bg-yellow-800"
        style={{
          background:
            'linear-gradient(0deg, rgba(152, 0, 0, 0.08), rgba(152, 0, 0, 0.08)), url("/imgs/home/landing-cover.jpeg")',
          backgroundSize: 'cover',
        }}
      >
        <div className="max-w-global pt-[100px] sm:pt-[205px] pb-[80px] sm:pb-[187px] mx-auto flex flex-col">
          <div className="max-w-[877px] flex flex-col text-white">
            <h1 className="mb-[20px] sm:mb-[33px]">
              Improving The Overall{' '}
              <span className="text-red">
                Health Status And Quality Of Life
              </span>{' '}
              For All Ethiopian People.
            </h1>
            <p className="body2 mb-[30px] sm:mb-[54px]">
              CORHA is mandated to play a strategic role of coordination and
              representation, capacity building, policy dialogue, knowledge
              management and resource mobilization for its member organization.
            </p>
            <div className="flex gap-[12px] md:gap-[18px]">
              <button className="btn">
                <span className="flex mr-[10px]">LEARN MORE</span>
                <div className="h-[28px] w-[28px] rounded-full center bg-white">
                  ic
                </div>
              </button>
              <button className="btn !bg-brand">
                <span className="flex">LEARN MORE</span>
                <div className="h-[28px] w-[28px] ml-[10px] rounded-full center bg-white">
                  ic
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Heading;
