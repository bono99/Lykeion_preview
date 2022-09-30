import React from "react";
import { Col } from 'reactstrap';
import Accordian from "../../../../components/Accordian/Accordian";
import { NavLink as RouterNavLink } from "react-router-dom";
import {NavLink} from "reactstrap";

const MetaphysicsIntroNav = () => {

return (
    <Col>
      <nav>
      <NavLink tag={RouterNavLink} to="/Metaphysics/Metaphysics-intro" title="introduction">
        <Accordian title="Introduction">
          <p className="accordionText">Introduction</p>
        </Accordian>
      </NavLink>
      <NavLink tag={RouterNavLink} to="/Metaphysics/Metaphysics-intro/chapter1" title="Chapter 1">
        <Accordian title="Chapter 1">
          <p className="accordionText">meta</p>
        </Accordian>
      </NavLink>
      </nav>
    </Col>
  )
}

export default MetaphysicsIntroNav;



