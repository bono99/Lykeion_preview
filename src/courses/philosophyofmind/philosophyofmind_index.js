import React from "react";
import { Row, Col, Container} from "reactstrap";
import { Router, Route, Switch } from "react-router-dom";
import Card from "../../components/card";
import PhilosophyOfMindImage from '../../assets/philosophyofmind.jpg';
import PhilosophyOfMindIntro from "./philosophyofmind_introduction/philosophyofmind_introduction_course_index";
import PhilosophyOfMindIntroChapter1 from "./philosophyofmind_introduction/philosophyofmind_introduction_chapter1";
import PhilosophyOfMindIntroChapter2 from "./philosophyofmind_introduction/philosophyofmind_introduction_chapter2";
import Loading from "../../components/Loading";
import { useAuth0 } from "../../js/react-auth0-spa";
import history from "../../js/history";
const PhilosophyOfMind = () => {
const { loading } = useAuth0();

if (loading) {
  return <Loading />;
}
  
return (
  <div className="next-steps my-5">
    <Router history={history}>
      <Container className="flex-grow-1 mt-5">
      <Switch>
        <Route exact path="/Philosophy-of-mind" component={PhilosophyOfMindHome} />         
        <Route path="/Philosophy-of-mind/Philosophy-of-mind-intro" component={PhilosophyOfMindIntro} />
        <Route path="/Philosophy-of-mind/Philosophy-of-mind-intro/chapter1" component={PhilosophyOfMindIntroChapter1} />
        <Route path="/Philosophy-of-mind/Philosophy-of-mind-intro/chapter2" component={PhilosophyOfMindIntroChapter2} />            
      </Switch>
      </Container>
    </Router>
  </div>
  );
};

const PhilosophyOfMindHome = () => (
  <div className="next-steps my-5">
    <h2 className="my-5 text-center">Philosophy of mind courses</h2>
    <Row className="d-flex justify-content-between">
      <Col md={6} className="mb-4">
        <Card 
          link="/Philosophy-of-mind/Philosophy-of-mind-intro" 
          image={PhilosophyOfMindImage} 
          title="philosophy of mind introduction" 
          text="This course path includes basic, intermediate, advanced courses in philosophy of Mind." 
          className="mb-3"/>
      </Col>
    </Row>
  </div>
)

export default PhilosophyOfMind;

