import React, { createContext, useState, useEffect } from "react";
import EventsData from "../Data/EventsData";
import BlogPosts from "../Data/BlogPosts";
import Academies from "../Data/Academies";

const Context = createContext({});
const Provider = (props) => {
  const [showPartnershipModal, setShowPartnershipModal] = useState(false);
  const [showInovationModal, setShowInovationModal] = useState(
    false
  );
  const [upcomingEvents] = useState(EventsData);
  const [blogPosts] = useState(BlogPosts);
  const [academies] = useState(Academies);
  const [areFiltersExpanded, setAreFiltersExpanded] = useState(false);
  const [arrOfEventsForCalendar, setArrOfEventsForCalendar] = useState([]);

  const filtersHolderClicked = () => {
    setAreFiltersExpanded(!areFiltersExpanded);
  };

  const eventsForCalendar = () => {
    let events = [];
    for (let event of EventsData) {
      events.push(...event.calendarDetails);
      setArrOfEventsForCalendar(events);
    }
  };

  useEffect(() => {
    eventsForCalendar();
  }, []);

  const context = {
    showPartnershipModal,
    setShowPartnershipModal,
    showInovationModal,
    setShowInovationModal,
    upcomingEvents,
    areFiltersExpanded,
    filtersHolderClicked,
    blogPosts,
    arrOfEventsForCalendar,
    academies,
  };

  return <Context.Provider value={context}>{props.children}</Context.Provider>;
};

export const MyContext = Context;
export const MyProvider = Provider;
