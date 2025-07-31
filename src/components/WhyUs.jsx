import ValidationIcon from "../assets/ValidationIcon.png";
import technologyIcon from "../assets/TechnologyIcon.png";
import IndiaIcon from "../assets/IndiaIcon.png";
import ScalableIcon from "../assets/ScalableIcon.png";

const WhyUs = () => {
  return (
    <>
      <div id="why-us"></div>
      <section className="w-full px-4 sm:px-6 lg:px-8 mt-24 sm:mt-32 lg:mt-48">
        <div className="w-full max-w-[1120px] mx-auto">
          <h2 id="heading" className="max-w-[202px]">
            Why Us
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {/* Clinically-Validated Designs */}
            <div className="bg-global-3 rounded-3xl p-8 lg:p-14 max-[500px]:p-6">
              <div className="flex flex-col gap-5 lg:gap-6 max-[500px]:gap-4">
                <div className="w-12 h-12 max-[500px]:w-10 max-[500px]:h-10">
                  <img
                    src={ValidationIcon}
                    alt="Validation icon"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-azeret font-semibold leading-6 text-global-1 mb-2 max-[500px]:text-lg max-[500px]:leading-5 max-[500px]:mb-1">
                    Clinically-Validated Designs
                  </h3>
                  <p className="text-xl font-azeret font-normal leading-7 text-global-5 max-[500px]:text-base max-[500px]:leading-6">
                    Built with inputs from leading neonatologists and
                    pediatricians.
                  </p>
                </div>
              </div>
            </div>

            {/* Technology with Purpose */}
            <div className="bg-global-3 rounded-3xl p-8 lg:p-14 max-[500px]:p-6">
              <div className="flex flex-col gap-5 lg:gap-6 max-[500px]:gap-4">
                <div className="w-12 h-12 max-[500px]:w-10 max-[500px]:h-10">
                  <img
                    src={technologyIcon}
                    alt="Technology icon"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-azeret font-semibold leading-6 text-global-1 mb-1 max-[500px]:text-lg max-[500px]:leading-5">
                    Technology with Purpose
                  </h3>
                  <p className="text-xl font-azeret font-normal leading-7 text-global-5 max-[500px]:text-base max-[500px]:leading-6">
                    Combining FDA-grade sensors, Al algorithms, and
                    edge-computing.
                  </p>
                </div>
              </div>
            </div>

            {/* India-Centric Innovation */}
            <div className="bg-global-3 rounded-3xl p-8 lg:p-14 max-[500px]:p-6">
              <div className="flex flex-col gap-5 max-[500px]:gap-4">
                <div className="w-14 h-14 max-[500px]:w-10 max-[500px]:h-10">
                  <img
                    src={IndiaIcon}
                    alt="Innovation icon"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-azeret font-semibold leading-6 text-global-1 mb-2 max-[500px]:text-lg max-[500px]:leading-5 max-[500px]:mb-1">
                    India-Centric Innovation
                  </h3>
                  <p className="text-xl font-azeret font-normal leading-7 text-global-5 max-[500px]:text-base max-[500px]:leading-6">
                    Tailored for low-resource hospitals and rural access points.
                  </p>
                </div>
              </div>
            </div>

            {/* Scalable and Affordable */}
            <div className="bg-global-3 rounded-3xl p-8 lg:p-14 max-[500px]:p-6">
              <div className="flex flex-col gap-5 max-[500px]:gap-4">
                <div className="w-12 h-12 max-[500px]:w-10 max-[500px]:h-10">
                  <img
                    src={ScalableIcon}
                    alt="Scalable icon"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-azeret font-semibold leading-6 text-global-1 mb-1 max-[500px]:text-lg max-[500px]:leading-5">
                    Scalable and Affordable
                  </h3>
                  <p className="text-xl font-azeret font-normal leading-7 text-global-5 max-[500px]:text-base max-[500px]:leading-6">
                    Built to be cost-effective without compromising quality.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyUs;