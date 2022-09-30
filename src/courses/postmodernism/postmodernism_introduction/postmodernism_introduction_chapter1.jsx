import React from "react";
import { Col} from "reactstrap";
import MichelFoucault from "./assets/MichelFoucault.mp4";

const PostmodernismIntroChapter1 = () => {

return (

  <Col sm={{ size: 'auto', offset: 1 }}>
    <video loop autoPlay>
      <source src={MichelFoucault} type="video/mp4" />
    </video>
    <br/>
    <h3 className="text-center">Michel Foucault</h3>
    <p className="Chapter1Paragraph">
      <span className="capitalisation">M</span>
    </p>
  </Col>

  )
}

export default PostmodernismIntroChapter1;