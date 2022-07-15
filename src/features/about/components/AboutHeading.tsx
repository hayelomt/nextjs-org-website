const AboutHeading = () => {
  return (
    <>
      <section
        className="px-global pt-[60px] sm:pt-[127px] pb-[100px] md:pb-[203px]"
        style={{
          background:
            'linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url("/imgs/about/team.jpeg")',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
      >
        <div className="max-w-global mx-auto flex flex-col text-center items-center">
          <h1 className="mb-3 text-white">About Us </h1>
          <span>Bread crumb</span>
        </div>
      </section>
    </>
  );
};

export default AboutHeading;
