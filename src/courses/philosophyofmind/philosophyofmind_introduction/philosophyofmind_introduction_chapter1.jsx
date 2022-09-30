import React from "react";
import { Col} from "reactstrap";
import EdmundHusserl from "./assets/EdmundHusserl.mp4";

const PhilosophyOfMindIntroChapter1 = () => {

return (

  <Col sm={{ size: 'auto', offset: 1 }}>
    <video loop autoPlay>
      <source src={EdmundHusserl} type="video/mp4" />
    </video>
    <br/>
    <h3 className="text-center">Edmund Husserl</h3>
    <p className="Chapter1Paragraph">
      <span className="capitalisation">E</span>
    </p>
  </Col>

  )
}

export default PhilosophyOfMindIntroChapter1;