import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import Loading from "../../../components/Loading";
import { useAuth0 } from "../../../js/react-auth0-spa";
import history from "../../../js/history";
import AestheticsIntroNav from "./nav/aesthetics_introduction_nav"
import AestheticsIntroChapter1 from "../../../courses/aesthetics/aesthetics_introduction/aesthetics_introduction_chapter1";
import Quiz1 from "../../../courses/aesthetics/aesthetics_introduction/aesthetics_introduction_quiz1";

const AestheticsTest = () => {
const { loading } = useAuth0();

if (loading) {
  return <Loading />;
}
  
return (
    <Router history={history}>
      <AestheticsIntroNav />
      <Switch>
        <Route path="/Aesthetics/Aesthetics-intro/chapter1" component={AestheticsIntroChapter1} /> 
        <Route path="/Aesthetics/Aesthetics-intro/quiz1" component={Quiz1} />         
      </Switch>
    </Router>
  );
};

export default AestheticsTest;

