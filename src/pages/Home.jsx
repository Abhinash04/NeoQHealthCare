import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { scroller } from "react-scroll";

import ScrollToTop from "../components/ScrollToTop";
import Hero from "../components/Hero";
import About from "../components/About";
import Products from "../components/Products";
import Innovation from "../components/Innovation";
import WhyUs from "../components/WhyUs";
import Contact from "../components/Contact";
import Loader from "../components/Loader";

const Home = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (location.state?.section) {
      scroller.scrollTo(location.state.section, {
        duration: 0,
        delay: 0,
        smooth: "easeInOutQuart",
      });
    }
  }, [location.state]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

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
