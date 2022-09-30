import React from "react";
import CourseNav from "../../../../components/CourseNav";
import { Col } from 'reactstrap';

const EpistemologyIntroNav = () => {

return (
    <Col>
      <nav>
        <CourseNav link="/Epistemology/Epistemology-intro/chapter1" title="Chapter 1"/>
        <CourseNav link="/Epistemology/Epistemology-intro/quiz1" title="quiz1"/>
        <CourseNav link="/Epistemology/Epistemology-intro/chapter2" title="Chapter 2"/>
      </nav>
    </Col>
  )
}

export default EpistemologyIntroNav;