import React from "react";
import "./App.css";
import "./components/Assets/FontAwesome/fontAwesomeIcons";
import NavBar from "./components/Navbar/NavBar";
import Footer from "./components/Footer/Footer";
import Homepage from "./components/SinglePages/Homepage/Homepage";
import Events from "./components/SinglePages/EventsPage/Events";
import EventsSpace from "./components/SinglePages/SpacePage/EventsSpace";
import Academies from "./components/SinglePages/Academies/Academies";
import ErrorPage from "./components/SinglePages/ErrorPage/ErrorPage";
import { Container } from "react-bootstrap";
import { Switch, Route, withRouter } from "react-router-dom";
import { TransitionGroup, Transition } from "react-transition-group";
import { play, exit } from "./Timelines/timelines";
import ScrollToTop from "./components/Assets/ScrollToTop/ScrollToTop";

function App() {
  return (
    <Container fluid className="App">
      <ScrollToTop />
      <NavBar />
      <Route
        render={({ location }) => {
          const { pathname } = location;
          return (
            <TransitionGroup component={null}>
              <Transition
                key={pathname ? pathname : "initial"}
                appear={true}
                onEnter={(node) => play(pathname, node)}
                onExit={(node) => exit(node)}
                timeout={{ enter: 1750, exit: 150 }}
              >
                <Switch>
                  <Route
                    path={["/http:", "/https:"]}
                    component={(props) => {
                      window.location.replace(
                        props.location.pathname.substr(1)
                      );
                      return null;
                    }}
                  />
                  <Route exact path="/" component={Homepage} />
                  <Route exact path="/events" component={Events} />
                  <Route exact path="/academies" component={Academies} />
                  <Route exact path="/events-space" component={EventsSpace} />
                  <Route  component={ErrorPage} />
                </Switch>
              </Transition>
            </TransitionGroup>
          );
        }}
      />
      <Footer />
    </Container>
  );
}

export default withRouter(App);
