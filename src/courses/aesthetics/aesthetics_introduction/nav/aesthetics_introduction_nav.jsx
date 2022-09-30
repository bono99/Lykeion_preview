import React from "react";
import CourseNav from "../../../../components/CourseNav";
import { Col } from 'reactstrap';

const AestheticsIntroNav = () => {

return (
    <Col>
      <nav>
        <CourseNav link="/Aesthetics/Aesthetics-intro/chapter1" title="Chapter 1"/>
        <CourseNav link="/Aesthetics/Aesthetics-intro/quiz1" title="quiz1"/>
        <CourseNav link="/Aesthetics/Aesthetics-intro/chapter2" title="Chapter 2"/>
      </nav>
    </Col>
  )
}

export default AestheticsIntroNav;