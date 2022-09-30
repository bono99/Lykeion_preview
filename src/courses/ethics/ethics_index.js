import React from "react";
import { Row, Col, Container} from "reactstrap";
import { Router, Route, Switch } from "react-router-dom";
import Card from "../../components/card";
import EthicsImage from '../../assets/ethics.jpg';
import EthicsIntro from "./ethics_introduction/ethics_introduction_course_index";
import EthicsIntroChapter1 from "./ethics_introduction/ethics_introduction_chapter1";
import EthicsIntroChapter2 from "./ethics_introduction/ethics_introduction_chapter2";
import Quiz1 from "./ethics_introduction/ethics_introduction_quiz1";
import Loading from "../../components/Loading";
import { useAuth0 } from "../../js/react-auth0-spa";
import history from "../../js/history";
const Ethics = () => {
const { loading } = useAuth0();

if (loading) {
  return <Loading />;
}
 
return (
  <div className="next-steps my-5">
    <Router history={history}>
      <Container className="flex-grow-1 mt-5">
      <Switch>
        <Route exact path="/Ethics" component={EthicsHome} />         
        <Route path="/Ethics/Ethics-intro" component={EthicsIntro} />
        <Route path="/Ethics/Ethics-intro/chapter1" component={EthicsIntroChapter1} />
        <Route path="/Ethics/Ethics-intro/chapter2" component={EthicsIntroChapter2} />
        <Route path="/Ethics/Ethics-intro/Quiz1" component={Quiz1} />                        
      </Switch>
      </Container>
    </Router>
  </div>
  );
};

const EthicsHome = () => (

  <div className="next-steps my-5">
    <h2 className="my-5 text-center">Ethics courses</h2>
    <Row className="d-flex justify-content-between">
      <Col md={6} className="mb-4">
        <Card 
          link="/Ethics/Ethics-intro" 
          image={EthicsImage} 
          title="Ethics introduction" 
          text="This course path includes basic, intermediate, advanced courses in ethics." 
          className="mb-3"/>
      </Col>
    </Row>
  </div>
)

export default Ethics;

