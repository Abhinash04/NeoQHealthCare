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
    <footer className="w-full bg-[linear-gradient(180deg,#001454_0%,#1d1f24_100%)] px-4 sm:px-6 lg:px-14 py-16 sm:py-20 lg:py-25">
      <div className="w-full max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 lg:gap-0 w-full">
          {/* Left Section - Logo and Copyright */}
          <div className="flex flex-col gap-5 w-full lg:w-auto lg:ml-24">
            <div className="w-[150px] h-[32px]">
              <img
                src={logo}
                alt="NEO Medical Footer Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex items-center gap-1">
              <CopyrightIcon className="w-6 h-6 text-white" />
              <p className="text-base font-azeret font-light leading-[19px] text-footer-1">
                All copyright to NeoQ
              </p>
            </div>
          </div>

          {/* Right Section - Navigation Links */}
          <div className="flex flex-col sm:flex-row justify-between items-start gap-8 sm:gap-16 lg:gap-24 w-full lg:w-auto lg:mr-40">
            {/* Legal Links */}
            <ul className="flex flex-col gap-4 w-full sm:w-auto">
              <li>
                <a
                  href="#"
                  className="text-base font-azeret font-normal leading-[19px] text-global-6 hover:text-footer-1 transition-colors duration-200"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-base font-azeret font-normal leading-[19px] text-global-6 hover:text-footer-1 transition-colors duration-200"
                >
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-base font-azeret font-normal leading-[19px] text-global-6 hover:text-footer-1 transition-colors duration-200"
                >
                  Career
                </a>
              </li>
            </ul>

            {/* Main Navigation Links */}
            <div className="flex flex-col gap-4 w-full sm:w-auto">
              <button
                onClick={() => scrollToSection("about-us")}
                className="text-base font-azeret font-normal leading-[19px] text-global-6 hover:text-footer-1 transition-colors duration-200 text-left"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("products")}
                className="text-base font-azeret font-normal leading-[19px] text-global-6 hover:text-footer-1 transition-colors duration-200 text-left"
              >
                Products
              </button>
              <button
                onClick={() => scrollToSection("why-us")}
                className="text-base font-azeret font-normal leading-[19px] text-global-6 hover:text-footer-1 transition-colors duration-200 text-left"
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
