  import React from "react";
  import Banner from "../components/Banner";
  import Services from "../components/Services";
  import AboutUs from "../components/About";
  import EnquirySection from "../components/EnquirySection";
  import Footer from "../components/Footer";
  import TestimonialStats from "../components/TestimonialStats";
  import ChooseUs from "../components/ChooseUs";
  import CleaningProcess from "../components/CleaningProcess";
  import BlogSection from "../components/BlogSection";
  import OurTeam from "../components/OurTeam";
  import OurProjects from "../components/OurProjects";

  const Home = () => {
    return (
      <>
        <Banner />
        <Services/>
        <AboutUs/>
      
        <EnquirySection/>
        <TestimonialStats/>
        <ChooseUs/>
        <CleaningProcess />
        <BlogSection/>
        <OurTeam/>
        <OurProjects />
        <Footer/>
      </>
    );
  };

  export default Home;