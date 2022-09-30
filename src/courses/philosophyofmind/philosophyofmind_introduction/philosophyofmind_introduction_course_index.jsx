import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import Loading from "../../../components/Loading";
import { useAuth0 } from "../../../js/react-auth0-spa";
import history from "../../../js/history";
import PhilosophyOfMindIntroNav from "./nav/philosophyofmind_introduction_nav"
import PhilosophyOfMindIntroChapter1 from "../../../courses/philosophyofmind/philosophyofmind_introduction/philosophyofmind_introduction_chapter1";
import PhilosophyOfMindIntroChapter2 from "../../../courses/philosophyofmind/philosophyofmind_introduction/philosophyofmind_introduction_chapter2";
import Quiz1 from "../../../courses/philosophyofmind/philosophyofmind_introduction/philosophyofmind_introduction_quiz1";

const PhilosophyOfMindTest = () => {
const { loading } = useAuth0();

if (loading) {
  return <Loading />;
}
  
return (
    <Router history={history}>
      <PhilosophyOfMindIntroNav />
      <Switch>
        <Route path="/Philosophy-of-mind/Philosophy-of-mind-intro/chapter1" component={PhilosophyOfMindIntroChapter1} /> 
        <Route path="/Philosophy-of-mind/Philosophy-of-mind-intro/quiz1" component={Quiz1} />
        <Route path="/Philosophy-of-mind/Philosophy-of-mind-intro/chapter2" component={PhilosophyOfMindIntroChapter2} />          
      </Switch>
    </Router>
  );
};

export default PhilosophyOfMindTest;

