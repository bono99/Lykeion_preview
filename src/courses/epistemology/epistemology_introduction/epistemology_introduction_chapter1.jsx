import React from "react";
import { Col} from "reactstrap";
import Sartre from "./assets/sartre.mp4";

const EpistemologyIntroChapter1 = () => {

return (

  <Col sm={{ size: 'auto', offset: 1 }}>
    <video loop autoPlay>
      <source src={Sartre} type="video/mp4" />
    </video>
    <br/>
    <h3 className="text-center">Utilitarianism</h3>
    <p className="Chapter1Paragraph">
      <span className="capitalisation">U</span>
      tilitarianism comes in many different forms but in this chapter we will focus on classical utilitarianism
      and one of the early founder of utilitarianism John Stuart Mill.
    </p>
  </Col>

  )
}

export default EpistemologyIntroChapter1;