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
    <section className="w-full px-4 sm:px-6 lg:px-8 mt-16 sm:mt-20 lg:mt-26">
      <div className="w-full max-w-[1122px] mx-auto">
        <div className="flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-12 w-full">
          {/* Hero Text */}
          <div className="w-full ml-8 lg:w-[38%]">
            <h1 id="heading">
              Revolutionizing
              <br />
              NeoNatal Care
            </h1>
          </div>

          {/* Right Side Content */}
          <div className="flex flex-col lg:flex-row items-center lg:items-end gap-6 lg:gap-0 w-full lg:flex-1">
            {/* Empowering Section */}
            <div className="flex items-center lg:gap-16 w-fit">
              <img src={divider} alt="divider" className="h-4 w-auto" />
              <p className="text-sm sm:text-base font-azeret font-semibold leading-5 text-global-1 max-w-[250px] text-center">
                Empowering Early Diagnosis & Monitoring
              </p>
            </div>

            {/* Our Products Button */}
            <div
              onClick={scrollToProducts}
              className="flex items-center gap-2 bg-global-2 rounded-3xl px-3 py-3 w-full lg:w-[204px] lg:mr-8 lg:ml-16 justify-center lg:justify-center cursor-pointer hover:bg-opacity-80 transition-all duration-200"
            >
              <span className="text-base font-azeret font-bold leading-[19px] text-global-6">
                Our Products
              </span>
              <ArrowRight className="w-5 h-5 text-white" />
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="w-full mt-12 lg:mt-8">
          <div className="w-full max-w-[1200px] mx-auto">
            <img
              src={heroImg}
              alt="NEO Medical Device"
              className="w-full h-auto object-cover rounded-2xl lg:rounded-[32px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
