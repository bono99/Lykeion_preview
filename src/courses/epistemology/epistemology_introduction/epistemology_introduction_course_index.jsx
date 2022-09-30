import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import Loading from "../../../components/Loading";
import { useAuth0 } from "../../../js/react-auth0-spa";
import history from "../../../js/history";
import EpistemologyIntroNav from "./nav/epistemology_introduction_nav"
import EpistemologyIntroChapter1 from "../../../courses/epistemology/epistemology_introduction/epistemology_introduction_chapter1";
import Quiz1 from "../../../courses/epistemology/epistemology_introduction/epistemology_introduction_quiz1";

const EpistemologyTest = () => {
const { loading } = useAuth0();

if (loading) {
  return <Loading />;
}
  
return (
    <Router history={history}>
      <EpistemologyIntroNav />
      <Switch>
        <Route path="/Epistemology/Epistemology-intro/chapter1" component={EpistemologyIntroChapter1} /> 
        <Route path="/Epistemology/Epistemology-intro/quiz1" component={Quiz1} />         
      </Switch>
    </Router>
  );
};

export default EpistemologyTest;

