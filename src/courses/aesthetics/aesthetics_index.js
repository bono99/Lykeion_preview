import React from "react";
import { Row, Col, Container} from "reactstrap";
import { Router, Route, Switch } from "react-router-dom";
import Card from "../../components/card";
import AestheticsImage from '../../assets/aesthetics.jpg';
import AestheticsIntro from "./aesthetics_introduction/aesthetics_introduction_course_index";
import AestheticsIntroChapter1 from "./aesthetics_introduction/aesthetics_introduction_chapter1";
import Loading from "../../components/Loading";
import { useAuth0 } from "../../js/react-auth0-spa";
import history from "../../js/history";
const Aesthetics = () => {
const { loading } = useAuth0();

if (loading) {
  return <Loading />;
}
  
return (
  <div className="next-steps my-5">
    <Router history={history}>
      <Container className="flex-grow-1 mt-5">
      <Switch>
        <Route exact path="/Aesthetics" component={AestheticsHome} />         
        <Route path="/Aesthetics/Aesthetics-intro" component={AestheticsIntro} />
        <Route path="/Aesthetics/Aesthetics-intro/chapter1" component={AestheticsIntroChapter1} />         
      </Switch>
      </Container>
    </Router>
  </div>
  );
};

const AestheticsHome = () => (
  <div className="next-steps my-5">
    <h2 className="my-5 text-center">Aesthetics courses</h2>
    <Row className="d-flex justify-content-between">
      <Col md={6} className="mb-4">
        <Card 
          link="/Aesthetics/Aesthetics-intro" 
          image={AestheticsImage} 
          title="Aesthetics introduction" 
          text="This course path includes basic, intermediate, advanced courses in aesthetics." 
          className="mb-3"/>
      </Col>
    </Row>
  </div>
)

export default Aesthetics;

