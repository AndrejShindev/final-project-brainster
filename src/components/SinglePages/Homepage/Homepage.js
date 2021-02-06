import React from "react";
import "./Homepage.css";
import IntroHeader from "./IntroHeader/IntroHeader";
import AboutUs from "./AboutUs/AboutUs";
import EventsHomePage from "./EventsOnHomePage/EventsHomePage";
import CoworkingHomePage from "./CoworkingOnhomePage/CoworkingHomePage";
import EventsSpaceHomePage from "./EventsOnHomePage/EventsHomePage";
import PartnershipSection from "./PartnershipOnHomePage/PartnershipSection";

const Homepage = () => {
  return (
    <div className="Homepage">
      <IntroHeader />
      <AboutUs />
      <EventsHomePage />
      <CoworkingHomePage />
      <EventsSpaceHomePage />
      <PartnershipSection />
    </div>
  );
};

export default Homepage;
