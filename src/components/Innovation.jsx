import innovationImg from "../assets/innovation.png";

const Innovation = () => {
  return (
    <section className="w-full mt-24 sm:mt-32 lg:mt-48">
      {/* Centered container for the banner */}
      <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 flex justify-center">
        <div
          className="h-64 sm:h-80 lg:h-[464px] w-full max-w-[393px] sm:max-w-none max-[380px]:w-[345px] max-[350px]:w-340px bg-cover bg-center bg-no-repeat rounded-2xl lg:rounded-3xl flex items-center"
          style={{ backgroundImage: `url(${innovationImg})` }}
        >
          {/* Left-aligned text container */}
          <div className="px-6 sm:px-12 lg:px-16 w-full">
            <h2 className="text-left font-montserrat text-global-6">
              <span className="block text-lg sm:text-2xl lg:text-[32px] font-medium leading-6 sm:leading-snug lg:leading-[36px]">
                Transforming <br />Neonatal care with
              </span>
              <span className="block text-xl sm:text-3xl lg:text-[48px] font-bold italic leading-7 sm:leading-tight lg:leading-[48px] mt-1 sm:mt-2">
                Innovation <br /> & Expertise
              </span>
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Innovation;