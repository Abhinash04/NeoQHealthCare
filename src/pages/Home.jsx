import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { scroller } from "react-scroll";

import ScrollToTop from "../components/ScrollToTop";
import Hero from "../components/Hero";
import About from "../components/About";
import Products from "../components/Products";
import Innovation from "../components/Innovation";
import WhyUs from "../components/WhyUs";
import Contact from "../components/Contact";

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.section) {
      scroller.scrollTo(location.state.section, {
        duration: 0,
        delay: 0,
        smooth: "easeInOutQuart",
      });
    }
  }, [location.state]);

  return (
    <>
      <Hero />
      <About />
      <Products />
      <Innovation />
      <WhyUs />
      <Contact />
      <ScrollToTop />
    </>
  );
};

export default Home;
