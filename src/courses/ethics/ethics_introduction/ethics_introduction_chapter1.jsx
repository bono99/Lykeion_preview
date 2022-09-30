import React from "react";
import { Col } from "reactstrap";
import Sartre from "./assets/sartre.mp4";
import JeremyBentham from "./assets/JeremyBentham.jpg";
import ScrollIndicator from "../../../components/Progress/Progress-scroll";
import LazyLoad from 'react-lazyload';

const EthicsIntroChapter1 = () => {
 
return (
  <Col sm={{ size: 'auto', offset: 1 }}>
    <ScrollIndicator />
    <video loop autoPlay>
      <source src={Sartre} type="video/mp4" />
    </video>
    <br/>
    <div className="course-paragraph">
    <h3 className="text-center">Utilitarianism</h3>
    <p>
      <span className="capitalisation">U</span>
      tilitarianism is an ethical view that values the utility of goodness in the form of pleasure. So what results in the most amount of pleasure to the masses is the right thing to do and visa versa: the action that results in the least pleasure to the masses is bad. This definition is true in classical utilitarianism, but utilitarianism comes in many different forms and sizes. The chapter will be about an earlier form of utilitarianism and one of its founders, John Stuart Mill. He helped to develop utilitarianism that the philosopher Jeremy Bentham started. The later part of the chapter is going to be about a modern utilitarian philosopher Peter Singer.
    </p>
    <LazyLoad offset={100}>
      <img alt="test" className="mx-auto d-block" src={JeremyBentham} width={"100%"}/>
    </LazyLoad>
    <blockquote>
    Here is a photo of Jeremy Bentham in flesh, literary his real body is in this picture with a wax head. The exhibition of his remains was requested by himself in his will and located at University College London.
    </blockquote>
    </div>
  </Col>
  )
}

export default EthicsIntroChapter1;