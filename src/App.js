import React, {} from "react";

import { Router, Route, Switch } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import Loading from "./components/Loading";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Metaphysics from "./courses/metaphysics/metaphysics_index";
import Epistemology from "./courses/epistemology/epistemology_index";
import Aesthetics from "./courses/aesthetics/aesthetics_index";
import Ethics from "./courses/ethics/ethics_index";
import Postmodernism from "./courses/postmodernism/postmodernism_index";
import Phenomenology from "./courses/phenomenology/phenomenology_index";
import PhilosophyOfMind from "./courses/philosophyofmind/philosophyofmind_index";
import Home from "./js/Home";
import About from "./js/About";
import Profile from "./js/Profile";
import { useAuth0 } from "./js/react-auth0-spa";
import history from "./js/history";

import "./App.css";

// fontawesome
import initFontAwesome from "./js/initFontAwesome";
initFontAwesome();

const App = () => {
 
  const { loading } = useAuth0();

  if (loading) {
    return <Loading />;
  }

  return (
    <Router history={history}>
      <div id="app" className="d-flex flex-column h-100">
        <NavBar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/metaphysics" component={Metaphysics} />
            <Route path="/epistemology" component={Epistemology} />
            <Route path="/ethics" component={Ethics} />
            <Route path="/aesthetics" component={Aesthetics} />
            <Route path="/postmodernism" component={Postmodernism} />
            <Route path="/phenomenology" component={Phenomenology} />
            <Route path="/philosophy-of-mind" component={PhilosophyOfMind} />
            <PrivateRoute path="/profile" component={Profile} />
          </Switch>
        <Footer />
      </div>
    </Router>
  );
};

export default App;