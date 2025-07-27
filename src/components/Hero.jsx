import { ArrowRight } from "lucide-react";
import heroImg from "../assets/hero.png";
import divider from "../assets/divider.png";

const Hero = () => {
  const scrollToProducts = () => {
    const element = document.getElementById("products");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div id="hero" className="lg:mt-40 scroll-mt-[100px]"></div>
      <section className="w-full px-4 sm:px-6 lg:px-8 mt-28 sm:mt-24">
        <div className="w-full max-w-[1200px] mx-auto">
          <div className="flex flex-col lg:flex-row justify-center items-center gap-6 lg:gap-40 w-full">
            {/* Hero Text */}
            <div className="w-full lg:ml-10 lg:w-[38%]">
              <h1 id="heading">
                Revolutionizing
                <br />
                NeoNatal Care
              </h1>
            </div>

            {/* Right Side Content */}
            <div className="flex flex-col lg:flex-row items-start lg:items-end lg:justify-end lg:mr-6 gap-24 sm:gap-4 lg:gap-10 w-full lg:flex-1">
              {/* Empowering Section */}
              <div className="flex items-center gap-2 w-fit lg:mt-14 sm:gap-12">
                <img src={divider} alt="divider" className="h-8 w-auto" />
                <p className="text-sm sm:text-base font-azeret font-semibold leading-5 text-black max-w-[250px] lg:text-left">
                  Empowering Early <br />
                  Diagnosis & Monitoring
                </p>
              </div>

              {/* Our Products Button */}
              <div
                onClick={scrollToProducts}
                className="flex items-center justify-center gap-2 bg-black rounded-3xl px-3 py-3 w-[350px] max-[380px]:w-[300px] lg:w-[204px] lg:justify-center cursor-pointer hover:bg-[#13B2F3] transition-all duration-200 text-white hover:text-black"
              >
                <span className="text-base font-azeret font-bold leading-[19px]">
                  Our Products
                </span>
                <ArrowRight className="w-5 h-5" />
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="w-full mt-8 sm:mt-12 lg:mt-8">
            <div className="w-full max-w-[1200px] mx-auto px-0 sm:px-4 flex justify-center max-[350px]:ml-6 lg:ml-0">
              <img
                src={heroImg}
                alt="NEO Medical Device"
                className="w-[350px] h-[350px] sm:w-full sm:h-auto max-[350px]:w-[300px] max-[350px]:h-[300px] object-cover rounded-2xl lg:rounded-[32px]"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
