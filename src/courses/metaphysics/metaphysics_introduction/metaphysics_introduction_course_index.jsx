import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import Loading from "../../../components/Loading";
import { useAuth0 } from "../../../js/react-auth0-spa";
import history from "../../../js/history";
import MetaphysicsIntroNav from "./nav/metaphysics_introduction_nav"
import MetaphysicsIntroChapter1 from "../../../courses/metaphysics/metaphysics_introduction/metaphysics_introduction_chapter1";
import Quiz1 from "../../../courses/metaphysics/metaphysics_introduction/metaphysics_introduction_quiz1";

const MetaphysicsTest = () => {
const { loading } = useAuth0();

if (loading) {
  return <Loading />;
}
  
return (
    <Router history={history}>
      <MetaphysicsIntroNav />
      <Switch>
        <Route path="/Metaphysics/Metaphysics-intro/chapter1" component={MetaphysicsIntroChapter1} /> 
        <Route path="/Metaphysics/Metaphysics-intro/quiz1" component={Quiz1} />         
      </Switch>
    </Router>
  );
};

export default MetaphysicsTest;

