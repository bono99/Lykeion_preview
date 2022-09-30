import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import { Container } from 'reactstrap';
import history from "../../../js/history";
import EthicsIntroNav from "./nav/ethics_introduction_nav"
import EthicsIntroChapter1 from "../../../courses/ethics/ethics_introduction/ethics_introduction_chapter1";
import EthicsIntroChapter2 from "../../../courses/ethics/ethics_introduction/ethics_introduction_chapter2";
import Quiz1 from "../../../courses/ethics/ethics_introduction/ethics_introduction_quiz1";
import IntroCard from "../../../components/IntroCard";
import Sartre from "./assets/sartre.jpg";
import MichelFoucault from "./assets/MichelFoucault.jpg";

const EthicsTest = () => {

return (
    <Router history={history}>
      <EthicsIntroNav />
      <Switch>
        <Route exact path="/Ethics/Ethics-intro" component={EthicsIntro} /> 
        <Route path="/Ethics/Ethics-intro/chapter1" component={EthicsIntroChapter1} /> 
        <Route path="/Ethics/Ethics-intro/quiz1" component={Quiz1} />
        <Route path="/Ethics/Ethics-intro/chapter2" component={EthicsIntroChapter2} />          
      </Switch>
    </Router>
  );
};

const EthicsIntro = () => {

  return (
  <div className="intro-container">
    <Container className="timeline-container">
    <h2 className="text-center">Course introduction</h2>
    <p className="text-center">Welcome to this introductory course in ethics</p>
    <h3 className="text-center">Course overview</h3>
        <div className="timeline timeline-centered">
          <IntroCard 
            chapter={"chapter 1"} 
            image={Sartre}
            title={"Utilitarianism"}
            text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud."} 
          />
          <IntroCard 
            chapter={"chapter 2"} 
            image={MichelFoucault}
            title={"Egoism"}
            text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud."} 
          />
          <IntroCard 
            chapter={"chapter 3"} 
            image={Sartre}
            title={"Consequentialism"}
            text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud."} 
          />
          <IntroCard 
            chapter={"chapter 4"} 
            image={Sartre}
            title={"Utilitarianism"}
            text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud."} 
          />
        </div>
    </Container>
  </div>
  )
}

export default EthicsTest;

