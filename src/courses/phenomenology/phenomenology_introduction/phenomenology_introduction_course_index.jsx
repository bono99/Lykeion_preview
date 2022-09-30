import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import Loading from "../../../components/Loading";
import { useAuth0 } from "../../../js/react-auth0-spa";
import history from "../../../js/history";
import PhenomenologyIntroNav from "./nav/phenomenology_introduction_nav"
import PhenomenologyIntroChapter1 from "../../../courses/phenomenology/phenomenology_introduction/phenomenology_introduction_chapter1";
import PhenomenologyIntroChapter2 from "../../../courses/phenomenology/phenomenology_introduction/phenomenology_introduction_chapter2";
import Quiz1 from "../../../courses/phenomenology/phenomenology_introduction/phenomenology_introduction_quiz1";

const PhenomenologyTest = () => {
const { loading } = useAuth0();

if (loading) {
  return <Loading />;
}
  
return (
    <Router history={history}>
      <PhenomenologyIntroNav />
      <Switch>
        <Route path="/Phenomenology/Phenomenology-intro/chapter1" component={PhenomenologyIntroChapter1} /> 
        <Route path="/Phenomenology/Phenomenology-intro/quiz1" component={Quiz1} />
        <Route path="/Phenomenology/Phenomenology-intro/chapter2" component={PhenomenologyIntroChapter2} />          
      </Switch>
    </Router>
  );
};

export default PhenomenologyTest;

