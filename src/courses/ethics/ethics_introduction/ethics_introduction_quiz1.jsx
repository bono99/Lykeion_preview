import React from "react";
import QuizBee from "../../../components/quiz/index";
import { Col } from "reactstrap";

const Quiz1 = (score) =>  {

  console.log(score);

  
  if (score === 4) {
    console.log(score);
    localStorage.setItem('Name', score);
  }


return (
  <Col sm={{ size: 'auto', offset: 1 }}>
    <QuizBee />
  </Col>
  )
}

export default Quiz1;