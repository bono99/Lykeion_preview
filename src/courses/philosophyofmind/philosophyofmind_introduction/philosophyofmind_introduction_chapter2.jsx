import React from "react";
import { Col} from "reactstrap";
import Sartre from "./assets/sartre.mp4";

const PhilosophyOfMindIntroChapter2 = () => {

return (

  <Col sm={{ size: 'auto', offset: 1 }}>
    <video loop autoPlay>
      <source src={Sartre} type="video/mp4" />
    </video>
    <br/>
    <h3 className="text-center">Egoism</h3>
    <p className="Chapter2Paragraph">
      <span className="capitalisation">E</span>
    
    </p>
  </Col>

  )
}

export default PhilosophyOfMindIntroChapter2;