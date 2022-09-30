import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import Loading from "../../../components/Loading";
import { Container } from 'reactstrap';
import { useAuth0 } from "../../../js/react-auth0-spa";
import history from "../../../js/history";
import PostmodernismIntroNav from "./nav/postmodernism_introduction_nav"
import PostmodernismIntroChapter1 from "../../../courses/postmodernism/postmodernism_introduction/postmodernism_introduction_chapter1";
import PostmodernismIntroChapter2 from "../../../courses/postmodernism/postmodernism_introduction/postmodernism_introduction_chapter2";
import Quiz1 from "../../../courses/postmodernism/postmodernism_introduction/postmodernism_introduction_quiz1";
import IntroCard from "../../../components/IntroCard";
import MichelFoucault from "./assets/MichelFoucault.mp4";

const PostmodernismTest = () => {
const { loading } = useAuth0();

if (loading) {
  return <Loading />;
}
  
return (
    <Router history={history}>
      <PostmodernismIntroNav />
      <Switch>
        <Route exact path="/Postmodernism/Postmodernism-intro" component={PostmodernismIntro} /> 
        <Route path="/Postmodernism/Postmodernism-intro/chapter1" component={PostmodernismIntroChapter1} /> 
        <Route path="/Postmodernism/Postmodernism-intro/quiz1" component={Quiz1} />
        <Route path="/Postmodernism/Postmodernism-intro/chapter2" component={PostmodernismIntroChapter2} />          
      </Switch>
    </Router>
  );
};


const PostmodernismIntro = () => {

  return (
  <div className="intro-container">
    <Container className="timeline-container">
    <h2 className="text-center">Course introduction</h2>
    <p className="text-center">Welcome to this introductor course in ethics</p>
    <h3 className="text-center">Course overview</h3>
        <div className="timeline timeline-centered">
          <IntroCard 
            chapter={"chapter 1"} 
            image={MichelFoucault}
            title={"Michel Foucault"}
            text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud."} 
          />
          <IntroCard 
            chapter={"chapter 2"} 
            image={MichelFoucault}
            title={"Jacques Derrida"}
            text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud."} 
          />
          <IntroCard 
            chapter={"chapter 3"} 
            image={MichelFoucault}
            title={"Consequentialism"}
            text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud."} 
          />
          <IntroCard 
            chapter={"chapter 4"} 
            image={MichelFoucault}
            title={"Utilitarianism"}
            text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud."} 
          />
        </div>
    </Container>
  </div>
  )
}

export default PostmodernismTest;



