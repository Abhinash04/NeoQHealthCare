import { ArrowRight } from "lucide-react";
import heroImg from "../assets/hero.png";
import divider from "../assets/divider.png"
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
          <div className="w-full lg:w-[38%]">
            <h1 id="heading">
              Revolutionizing
              <br />
              NeoNatal Care
            </h1>
          </div>

          {/* Right Side Content */}
          <div className="flex flex-col lg:flex-row items-center lg:items-end gap-6 lg:gap-0 w-full lg:flex-1">
            {/* Empowering Section */}
            <div className="flex items-center gap-4 lg:gap-16 w-full lg:flex-1 px-4 lg:px-16">
              <div className="w-3 h-6 lg:ml-16">
                <img src={divider} alt="divider" />
              </div>
              <p className="text-base sm:text-lg font-azeret font-medium leading-6 lg:leading-[25px] text-global-1 flex-1">
                Empowering Early Diagnosis & Monitoring
              </p>
            </div>

            {/* Our Products Button */}
            <div
              onClick={scrollToProducts}
              className="flex items-center gap-2 bg-global-2 rounded-3xl px-3 py-3 w-full lg:w-auto justify-center lg:justify-start cursor-pointer hover:bg-opacity-80 transition-all duration-200"
            >
              <span className="text-base font-azeret font-bold leading-[19px] text-global-6">
                Our Products
              </span>
              <ArrowRight className="w-5 h-5 text-white" />
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="w-full mt-12 lg:mt-16">
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
