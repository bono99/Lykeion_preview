import React from "react";
import { Row, Col, Container} from "reactstrap";
import { Router, Route, Switch } from "react-router-dom";
import Card from "../../components/card";
import EpistemologyImage from '../../assets/epistemology.jpg';
import EpistemologyIntro from "./epistemology_introduction/epistemology_introduction_course_index";
import EpistemologyIntroChapter1 from "./epistemology_introduction/epistemology_introduction_chapter1";
import Loading from "../../components/Loading";
import { useAuth0 } from "../../js/react-auth0-spa";
import history from "../../js/history";
const Epistemology = () => {
const { loading } = useAuth0();

if (loading) {
  return <Loading />;
}
  
return (
  <div className="next-steps my-5">
    <Router history={history}>
      <Container className="flex-grow-1 mt-5">
      <Switch>
        <Route exact path="/Epistemology" component={EpistemologyHome} />         
        <Route path="/Epistemology/Epistemology-intro" component={EpistemologyIntro} />
        <Route path="/Epistemology/Epistemology-intro/chapter1" component={EpistemologyIntroChapter1} />         
      </Switch>
      </Container>
    </Router>
  </div>
  );
};

const EpistemologyHome = () => (
  <div className="next-steps my-5">
    <h2 className="my-5 text-center">Epistemology courses</h2>
    <Row className="d-flex justify-content-between">
      <Col md={6} className="mb-4">
        <Card 
          link="/Epistemology/Epistemology-intro" 
          image={EpistemologyImage} 
          title="Epistemology introduction" 
          text="This course path includes basic, intermediate, advanced courses in epistemology." 
          className="mb-3"/>
      </Col>
    </Row>
  </div>
)

export default Epistemology;

