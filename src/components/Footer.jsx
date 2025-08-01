import logo from '../assets/FooterLogo.png'
import { CopyrightIcon } from "lucide-react";

const Footer = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="w-full bg-[linear-gradient(180deg,#001454_0%,#1d1f24_100%)] px-4 sm:px-6 lg:px-14 py-16 sm:py-20 lg:py-25 max-[500px]:px-3 max-[500px]:py-12">
      <div className="w-full max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 lg:gap-0 w-full max-[500px]:gap-6">
          {/* Left Section - Logo and Copyright */}
          <div className="flex flex-col gap-5 w-full lg:w-auto lg:ml-24 max-[500px]:gap-4 max-[500px]:lg:ml-0">
            <div className="w-[150px] h-[32px] max-[500px]:w-[120px] max-[500px]:h-[26px]">
              <img
                src={logo}
                alt="NEO Medical Footer Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex items-center gap-1">
              <CopyrightIcon className="w-6 h-6 text-white max-[500px]:w-5 max-[500px]:h-5" />
              <p className="text-base font-azeret font-light leading-[19px] text-footer-1 max-[500px]:text-sm max-[500px]:leading-4">
                All copyright to NeoQ
              </p>
            </div>
          </div>

          {/* Right Section - Navigation Links */}
          <div className="flex flex-col sm:flex-row justify-between items-start gap-8 sm:gap-16 lg:gap-24 w-full lg:w-auto lg:mr-40 max-[500px]:flex-row max-[500px]:justify-between max-[500px]:items-start max-[500px]:gap-6 max-[500px]:sm:gap-12 max-[500px]:lg:mr-0">
            {/* Legal Links */}
            <ul className="flex flex-col gap-4 w-full sm:w-auto max-[500px]:gap-3 max-[500px]:w-auto">
              <li>
                <a
                  href="#"
                  className="text-base font-azeret font-normal leading-[19px] text-global-6 hover:text-footer-1 transition-colors duration-200 max-[500px]:text-sm max-[500px]:leading-4"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-base font-azeret font-normal leading-[19px] text-global-6 hover:text-footer-1 transition-colors duration-200 max-[500px]:text-sm max-[500px]:leading-4"
                >
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-base font-azeret font-normal leading-[19px] text-global-6 hover:text-footer-1 transition-colors duration-200 max-[500px]:text-sm max-[500px]:leading-4"
                >
                  Career
                </a>
              </li>
            </ul>

            {/* Main Navigation Links */}
            <div className="flex flex-col gap-4 w-full sm:w-auto max-[500px]:gap-3 max-[500px]:w-auto max-[500px]:items-end">
              <button
                onClick={() => scrollToSection("about-us")}
                className="text-base font-azeret font-normal leading-[19px] text-global-6 hover:text-footer-1 transition-colors duration-200 text-left max-[500px]:text-sm max-[500px]:leading-4 max-[500px]:text-right"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("products")}
                className="text-base font-azeret font-normal leading-[19px] text-global-6 hover:text-footer-1 transition-colors duration-200 text-left max-[500px]:text-sm max-[500px]:leading-4 max-[500px]:text-right"
              >
                Products
              </button>
              <button
                onClick={() => scrollToSection("why-us")}
                className="text-base font-azeret font-normal leading-[19px] text-global-6 hover:text-footer-1 transition-colors duration-200 text-left max-[500px]:text-sm max-[500px]:leading-4 max-[500px]:text-right"
              >
                Why Us!
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;