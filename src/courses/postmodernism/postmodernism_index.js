import React from "react";
import { Row, Col, Container} from "reactstrap";
import { Router, Route, Switch } from "react-router-dom";
import Card from "../../components/card";
import PostmodernismImage from '../../assets/ethics.jpg';
import PostmodernismIntro from "./postmodernism_introduction/postmodernism_introduction_course_index";
import PostmodernismIntroChapter1 from "./postmodernism_introduction/postmodernism_introduction_chapter1";
import PostmodernismIntroChapter2 from "./postmodernism_introduction/postmodernism_introduction_chapter2";
import Loading from "../../components/Loading";
import { useAuth0 } from "../../js/react-auth0-spa";
import history from "../../js/history";
const Postmodernism = () => {
const { loading } = useAuth0();

if (loading) {
  return <Loading />;
}
  
return (
  <div className="next-steps my-5">
    <Router history={history}>
      <Container className="flex-grow-1 mt-5">
      <Switch>
        <Route exact path="/Postmodernism" component={PostmodernismHome} />         
        <Route path="/Postmodernism/Postmodernism-intro" component={PostmodernismIntro} />
        <Route path="/Postmodernism/Postmodernism-intro/chapter1" component={PostmodernismIntroChapter1} />
        <Route path="/Postmodernism/Postmodernism-intro/chapter2" component={PostmodernismIntroChapter2} />            
      </Switch>
      </Container>
    </Router>
  </div>
  );
};

const PostmodernismHome = () => (
  <div className="next-steps my-5">
    <h2 className="my-5 text-center">Postmodernism courses</h2>
    <Row className="d-flex justify-content-between">
      <Col md={6} className="mb-4">
        <Card 
          link="/Postmodernism/Postmodernism-intro" 
          image={PostmodernismImage} 
          title="Postmodernism introduction" 
          text="This course path includes basic, intermediate, advanced courses in Postmodernism." 
          className="mb-3"/>
      </Col>
    </Row>
  </div>
)

export default Postmodernism;

