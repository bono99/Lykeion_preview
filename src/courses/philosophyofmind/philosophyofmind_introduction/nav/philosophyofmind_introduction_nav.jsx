import React from "react";
import CourseNav from "../../../../components/CourseNav";
import { Col } from 'reactstrap';

const PhilosophyOfMindIntroNav = () => {

return (
    <Col>
      <nav>
        <CourseNav link="/Philosophy-of-mind/Philosophy-of-mind-intro/chapter1" title="Chapter 1"/>
        <CourseNav link="/Philosophy-of-mind/Philosophy-of-mind-intro/quiz1" title="quiz1"/>
        <CourseNav link="/Philosophy-of-mind/Philosophy-of-mind-intro/chapter2" title="Chapter 2"/>
      </nav>
    </Col>
  )
}

export default PhilosophyOfMindIntroNav;