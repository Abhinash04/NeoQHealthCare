import React, { useState } from "react";
import Button from "./ui/Button";
import logo from "../assets/Logo.png";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false);
  };

  return (
    <>
      <header className="w-full mt-6 px-4 sm:px-6 lg:px-8 relative z-50">
        <div className="w-full max-w-7xl mx-auto">
          <div className="flex justify-between items-center w-full">
            {/* Logo */}
            <div className="w-[150px] h-[32px] flex-shrink-0">
              <img
                src={logo}
                alt="NEO Medical Logo"
                className="w-full h-full object-contain"
              />
            </div>

            {/* Hamburger Menu Icon (Mobile only) */}
            <button
              className="block lg:hidden p-2 text-global-3 z-60"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
              {/* Animated hamburger icon */}
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <span
                  className={`block h-0.5 w-6 bg-global-3 transition-all duration-300 ease-in-out ${
                    menuOpen ? "rotate-45 translate-y-1.5" : ""
                  }`}
                />
                <span
                  className={`block h-0.5 w-6 bg-global-3 my-1 transition-all duration-300 ease-in-out ${
                    menuOpen ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`block h-0.5 w-6 bg-global-3 transition-all duration-300 ease-in-out ${
                    menuOpen ? "-rotate-45 -translate-y-1.5" : ""
                  }`}
                />
              </div>
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center justify-between w-[518px]">
              <div className="flex items-center gap-10">
                <button
                  role="menuitem"
                  onClick={() => scrollToSection("about-us")}
                  className="text-base font-azeret font-medium leading-[19px] text-global-3 hover:text-global-1 transition-colors duration-200"
                >
                  About Us
                </button>
                <button
                  role="menuitem"
                  onClick={() => scrollToSection("products")}
                  className="text-base font-azeret font-medium leading-[19px] text-global-3 hover:text-global-1 transition-colors duration-200"
                >
                  Our Products
                </button>
                <button
                  role="menuitem"
                  onClick={() => scrollToSection("why-us")}
                  className="text-base font-azeret font-medium leading-[19px] text-global-3 hover:text-global-1 transition-colors duration-200"
                >
                  Why Us!
                </button>
              </div>
              <Button
                variant="outline"
                onClick={() => scrollToSection("contact-us")}
                className="px-8 py-3 text-base font-azeret font-semibold leading-[19px] text-global-1 border border-global-1 rounded-3xl hover:bg-global-1 hover:text-global-6 transition-all duration-200"
              >
                Contact Us
              </Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Overlay */}
      <div
        className={`lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300 ${
          menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setMenuOpen(false)}
      />

      {/* Mobile Navigation Menu */}
      <nav
        className={`lg:hidden fixed top-0 right-0 h-full w-80 max-w-[80vw] bg-global-4 shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Menu Header */}
        <div className="flex justify-between items-center p-6 border-b border-gray-200/20">
          <div className="w-32 h-7">
            <img
              src={logo}
              alt="NEO Medical Logo"
              className="w-full h-full object-contain"
            />
          </div>
          <button
            onClick={() => setMenuOpen(false)}
            className="p-2 hover:bg-gray-200/20 rounded-full transition-colors"
            aria-label="Close menu"
          >
            <svg
              className="w-6 h-6 text-global-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Menu Items */}
        <div className="flex flex-col p-6 space-y-2">
          <button
            role="menuitem"
            onClick={() => scrollToSection("about-us")}
            className="group text-lg font-azeret font-medium text-global-3 hover:text-global-1 transition-all duration-200 text-left py-4 px-4 rounded-lg hover:bg-gray-200/10 border-l-4 border-transparent hover:border-global-1"
          >
            <span className="flex items-center">
              About Us
              <svg
                className="w-5 h-5 ml-auto transform group-hover:translate-x-1 transition-transform duration-200"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </span>
          </button>

          <button
            role="menuitem"
            onClick={() => scrollToSection("products")}
            className="group text-lg font-azeret font-medium text-global-3 hover:text-global-1 transition-all duration-200 text-left py-4 px-4 rounded-lg hover:bg-gray-200/10 border-l-4 border-transparent hover:border-global-1"
          >
            <span className="flex items-center">
              Our Products
              <svg
                className="w-5 h-5 ml-auto transform group-hover:translate-x-1 transition-transform duration-200"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </span>
          </button>

          <button
            role="menuitem"
            onClick={() => scrollToSection("why-us")}
            className="group text-lg font-azeret font-medium text-global-3 hover:text-global-1 transition-all duration-200 text-left py-4 px-4 rounded-lg hover:bg-gray-200/10 border-l-4 border-transparent hover:border-global-1"
          >
            <span className="flex items-center">
              Why Us!
              <svg
                className="w-5 h-5 ml-auto transform group-hover:translate-x-1 transition-transform duration-200"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </span>
          </button>

          {/* Contact Button in Mobile Menu */}
          <div className="pt-6 mt-6 border-t border-gray-200/20">
            <Button
              variant="outline"
              onClick={() => scrollToSection("contact-us")}
              className="w-full px-8 py-4 text-lg font-azeret font-semibold text-global-1 border-2 border-global-1 rounded-2xl hover:bg-global-1 hover:text-global-6 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Contact Us
            </Button>
          </div>
        </div>

        {/* Menu Footer */}
        <div className="absolute bottom-6 left-6 right-6 text-center">
          <p className="text-sm text-global-3/70 font-azeret">
            © 2024 NEO Medical
          </p>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
