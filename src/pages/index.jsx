import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import InfoSection from "../components/InfoSection";
import {
  homeObjOne,
  homeObjThree,
  homeObjTwo,
} from "../components/InfoSection/Data";
import Footer from "../components/Footer";
import ServicesSection from "../components/ServicesSection";
import { servicesData } from "../components/ServicesSection/Data";
import TeamSection from "../components/TeamSection";
import { teamMembers } from "../components/TeamSection/Data";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <InfoSection {...homeObjThree} />
      <ServicesSection {...servicesData} />
      <TeamSection teamMembers={teamMembers} />
      <Footer />
    </>
  );
};

export default Home;
