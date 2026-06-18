import React from "react";
import Banner from "../components/Banner";
import Services from "../components/Services";
import AboutUs from "../components/About";
import EnquirySection from "../components/EnquirySection";


const Home = () => {
  return (
    <>
      <Banner />
      <Services/>
      <AboutUs/>
      <EnquirySection/>
    </>
  );
};

export default Home;