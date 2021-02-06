import React from "react";
import XCard from "../../../Assets/Cards/XCard";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const EventsSpaceHomePage = () => {
  return (
    <XCard
      className="EventsSpaceHomePage"
      title="Простор за настани"
      text="Можност за презентации, обуки, конференции, networking настани. Одбери ја просторијата која најмногу ќе одговара на твојата идеја. Го задржуваме правото да одбереме кој настан ќе се организира го нашиот Brainster Space."
      image="/homepage/AboutUs/prostor za nastani"
    >
      <Link to="/events-space" className="calendarBtn btn">
        <FontAwesomeIcon icon="arrow-right" />
        ВИДИ ГО ПРОСТОРОТ
      </Link>
    </XCard>
  );
};

export default EventsSpaceHomePage;
