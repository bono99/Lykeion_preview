import React from "react";
import CourseNav from "../../../../components/CourseNav";
import { Col } from 'reactstrap';

const PhenomenologyIntroNav = () => {

return (
    <Col>
      <nav>
        <CourseNav link="/Phenomenology/Phenomenology-intro/chapter1" title="Chapter 1"/>
        <CourseNav link="/Phenomenology/Phenomenology-intro/quiz1" title="quiz1"/>
        <CourseNav link="/Phenomenology/Phenomenology-intro/chapter2" title="Chapter 2"/>
      </nav>
    </Col>
  )
}

export default PhenomenologyIntroNav;