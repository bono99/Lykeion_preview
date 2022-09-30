import React from "react";
import { Col} from "reactstrap";
import MichelFoucault from "./assets/MichelFoucault.mp4";
import ScrollIndicator from "../../../components/Progress/Progress-scroll";
const EthicsIntroChapter2 = () => {

return (

  <Col sm={{ size: 'auto', offset: 1 }}>
    <ScrollIndicator />
    <video loop autoPlay>
      <source src={MichelFoucault} type="video/mp4" />
    </video>
    <br/>
    <h3 className="text-center">Egoism</h3>
    <p className="course-paragraph">
      <span className="capitalisation">U</span>
      tilitarianism is an ethical view that values the utility of goodness in the form of pleasure. So what results in the most amount of pleasure to the masses is the right thing to do and visa versa: the action that results in the least pleasure to the masses is bad. This definition is true in classical utilitarianism, but utilitarianism comes in many different forms and sizes. The chapter will be about an earlier form of utilitarianism and one of its founders, John Stuart Mill. He helped to develop utilitarianism that the philosopher Jeremy Bentham started. The later part of the chapter is going to be about a modern utilitarian philosopher Peter Singer.

    </p>
  </Col>

  )
}

export default EthicsIntroChapter2;