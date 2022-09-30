import React from "react";
import { Row, Col, Container} from "reactstrap";
import { Router, Route, Switch } from "react-router-dom";
import Card from "../../components/card";
import MetaphysicsImage from '../../assets/metaphysics_introduction.jpg';
import MetaphysicsIntro from "./metaphysics_introduction/metaphysics_introduction_course_index";
import MetaphysicsIntroChapter1 from "./metaphysics_introduction/metaphysics_introduction_chapter1";
import Loading from "../../components/Loading";
import { useAuth0 } from "../../js/react-auth0-spa";
import history from "../../js/history";
const Metaphysics = () => {
const { loading } = useAuth0();

if (loading) {
  return <Loading />;
}
  
return (
  <div className="next-steps my-5">
    <Router history={history}>
      <Container className="flex-grow-1 mt-5">
      <Switch>
        <Route exact path="/Metaphysics" component={MetaphysicsHome} />         
        <Route path="/Metaphysics/Metaphysics-intro" component={MetaphysicsIntro} />
        <Route path="/Metaphysics/Metaphysics-intro/chapter1" component={MetaphysicsIntroChapter1} />         
      </Switch>
      </Container>
    </Router>
  </div>
  );
};

const MetaphysicsHome = () => (
  <div className="next-steps my-5">
    <h2 className="my-5 text-center">Metaphysics courses</h2>
    <Row className="d-flex justify-content-between">
      <Col md={6} className="mb-4">
        <Card 
          link="/Metaphysics/Metaphysics-intro" 
          image={MetaphysicsImage} 
          title="Metaphysics introduction" 
          text="This course path includes basic, intermediate, advanced courses in metaphysics." 
          className="mb-3"/>
      </Col>
    </Row>
  </div>
)

export default Metaphysics;

