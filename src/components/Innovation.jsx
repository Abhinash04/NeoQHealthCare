import innovationImg from "../assets/innovation.png";

const Innovation = () => {
  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 mt-24 sm:mt-32 lg:mt-48">
      <div className="w-full max-w-[1122px] mx-auto">
        <div
          className="w-full h-64 sm:h-80 lg:h-[464px] bg-cover bg-center bg-no-repeat rounded-2xl lg:rounded-3xl flex items-center"
          style={{ backgroundImage: `url(${innovationImg})` }}
        >
          <div className="px-8 sm:px-12 lg:px-16">
            <h2 className="text-2xl sm:text-3xl lg:text-[48px] font-montserrat text-global-6">
              <span className="block text-2xl sm:text-3xl lg:text-[32px] font-medium leading-snug lg:leading-[36px]">
                Transforming <br />Neonatal care with
              </span>
              <span className="block text-3xl sm:text-4xl lg:text-[48px] font-bold italic leading-tight lg:leading-[48px] mt-2">
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
