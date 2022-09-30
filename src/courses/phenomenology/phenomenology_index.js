import React from "react";
import { Row, Col, Container} from "reactstrap";
import { Router, Route, Switch } from "react-router-dom";
import Card from "../../components/card";
import PhenomenologyImage from '../../assets/ethics.jpg';
import PhenomenologyIntro from "./phenomenology_introduction/phenomenology_introduction_course_index";
import PhenomenologyIntroChapter1 from "./phenomenology_introduction/phenomenology_introduction_chapter1";
import PhenomenologyIntroChapter2 from "./phenomenology_introduction/phenomenology_introduction_chapter2";
import Loading from "../../components/Loading";
import { useAuth0 } from "../../js/react-auth0-spa";
import history from "../../js/history";
const Phenomenology = () => {
const { loading } = useAuth0();

if (loading) {
  return <Loading />;
}
  
return (
  <div className="next-steps my-5">
    <Router history={history}>
      <Container className="flex-grow-1 mt-5">
      <Switch>
        <Route exact path="/Phenomenology" component={PhenomenologyHome} />         
        <Route path="/Phenomenology/Phenomenology-intro" component={PhenomenologyIntro} />
        <Route path="/Phenomenology/Phenomenology-intro/chapter1" component={PhenomenologyIntroChapter1} />
        <Route path="/Phenomenology/Phenomenology-intro/chapter2" component={PhenomenologyIntroChapter2} />            
      </Switch>
      </Container>
    </Router>
  </div>
  );
};

const PhenomenologyHome = () => (
  <div className="next-steps my-5">
    <h2 className="my-5 text-center">Phenomenology courses</h2>
    <Row className="d-flex justify-content-between">
      <Col md={6} className="mb-4">
        <Card 
          link="/Phenomenology/Phenomenology-intro" 
          image={PhenomenologyImage} 
          title="Phenomenology introduction" 
          text="This course path includes basic, intermediate, advanced courses in Phenomenology." 
          className="mb-3"/>
      </Col>
    </Row>
  </div>
)

export default Phenomenology;

