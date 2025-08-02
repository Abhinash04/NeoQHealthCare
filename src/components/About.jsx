import cribIcon from "../assets/cribIcon.png";
import researchIcon from "../assets/researchIcon.png";
import missionIcon from "../assets/missonIcon.png";

const AboutUs = () => {
  return (
    <>
      <div id="about-us"></div>
      <section className="w-full px-4 sm:px-6 lg:px-8 mt-24 sm:mt-32 lg:mt-48">
        <div className="w-full max-w-[1120px] mx-auto">
          <h2 id="heading" className="max-w-[241px]">
            About Us
          </h2>

          <div className="flex flex-col lg:flex-row gap-8 w-full">
            {/* Left Column */}
            <div className="flex flex-col gap-8 w-full lg:w-1/2 lg:min-h-[590px]">
              {/* Mission Card */}
              <div className="bg-global-3 rounded-3xl p-8 lg:p-14 min-h-[200px] sm:min-h-[180px] lg:min-h-[224px]">
                <div className="flex flex-col sm:flex-row gap-6 lg:gap-7 items-start lg:items-center lg:justify-center h-full">
                  <div className="w-16 h-16 flex-shrink-0 max-[500px]:w-12 max-[500px]:h-12">
                    <img
                      src={missionIcon}
                      alt="Mission icon"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="flex-1">
                    <p className="text-base sm:text-lg font-azeret leading-6 lg:leading-[25px] text-left max-[500px]:text-[18px] max-[380px]:text-sm max-[500px]:leading-5">
                      <span className="font-semibold text-global-1">
                        Medtech with a mission.{" "}
                      </span>{" "}
                      <br />
                      <span className="font-normal text-global-3">
                        We are a startup focused on neonatal care, designing
                        life-saving tools for newborns in need.
                      </span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Care Card - Matching Engineers card height */}
              <div className="bg-global-3 rounded-3xl p-8 lg:p-12 relative overflow-hidden min-h-[320px] sm:min-h-[300px] lg:min-h-[334px]">
                <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6 lg:gap-8 h-full">
                  <div className="flex-1 lg:w-[58%] lg:pr-4">
                    <p className="text-base sm:text-lg font-azeret leading-6 lg:leading-[25px] text-left max-[500px]:text-[18px] max-[380px]:text-sm max-[500px]:leading-5">
                      <span className="font-semibold text-global-1">
                        Every newborn <br className="min-[380px]:inline hidden"/>
                        deserves accurate <br className="min-[380px]:inline hidden"/>
                        care.{" "}
                      </span>
                      <span className="font-normal text-global-3">
                        No matter where <br className="min-[380px]:inline hidden" />
                        they are born, timely <br className="min-[380px]:inline hidden" />
                        diagnosis should be <br className="min-[380px]:inline hidden" />a right, not a privilege.
                      </span>
                    </p>
                  </div>
                  <div className="absolute bottom-0 right-0 w-40 h-44 lg:w-64 lg:h-64 translate-x-[16px] max-[500px]:w-48 max-[500px]:h-56">
                    <img
                      src={cribIcon}
                      alt="Medical chart"
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="flex flex-col gap-8 w-full lg:w-1/2 lg:min-h-[590px]">
              {/* Engineers & Clinicians Card */}
              <div className="bg-global-3 rounded-3xl p-8 lg:p-12 min-h-[320px] sm:min-h-[300px] lg:min-h-[334px]">
                <div className="text-center h-full flex flex-col justify-center">
                  <p className="text-lg sm:text-xl font-azeret leading-6 lg:leading-[22px] text-left mb-6 lg:mb-8 max-[500px]:text-lg max-[500px]:leading-5 max-[500px]:mb-4">
                    <span className="font-semibold text-global-1">
                      Built by
                    </span>
                    <br />
                    <span className="text-2xl sm:text-3xl lg:text-[40px] font-bold leading-tight lg:leading-[44px] text-[#13b2f3] max-[500px]:text-4xl max-[500px]:leading-8 max-[380px]:text-3xl max-[380px]:leading-6">
                      ENGINEERS &{" "}
                    </span>
                    <br />
                    <span className="text-2xl sm:text-3xl lg:text-[40px] font-bold leading-tight lg:leading-[44px] text-[#13b2f3] max-[500px]:text-4xl max-[500px]:leading-8 max-[380px]:text-3xl max-[380px]:leading-6">
                      CLINICIANS
                    </span>
                    {/* <span className="text-lg sm:text-xl font-bold text-global-1 max-[500px]:text-base">
                      {" "}
                    </span> */}
                    <span className="text-lg sm:text-xl font-semibold text-global-1 max-[500px]:text-base">
                      who care.
                    </span>
                  </p>
                  <p className="text-base sm:text-lg font-azeret font-normal leading-6 lg:leading-[27px] text-global-3 text-left max-[500px]:text-lg max-[380px]:text-sm max-[500px]:leading-5">
                    We combine deep tech expertise with front-line medical
                    insight to make tools that matter.
                  </p>
                </div>
              </div>

              {/* Research Card - Matching Mission card height */}
              <div className="bg-global-3 rounded-3xl relative overflow-hidden min-h-[200px] sm:min-h-[180px] lg:min-h-[224px]">
                <div className="p-8 lg:p-12 relative z-10 h-full flex items-center">
                  <p className="text-base sm:text-xl font-azeret leading-6 lg:leading-[24px] lg:w-[340px] text-left max-[500px]:text-[18px] max-[380px]:text-sm max-[500px]:leading-5">
                    <span className="text-lg font-bold text-global-1 max-[500px]:text-base">
                      Driven by research
                    </span>
                    <span className="font-normal text-global-2">
                      , grounded in care. We work closely with pediatric experts and validate every product in the field.
                    </span>
                  </p>
                </div>
                <div className="absolute bottom-0 right-0 w-32 h-32 lg:w-36 lg:h-36 max-[500px]:w-24 max-[500px]:h-24">
                  <img
                    src={researchIcon}
                    alt="Research flask"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
