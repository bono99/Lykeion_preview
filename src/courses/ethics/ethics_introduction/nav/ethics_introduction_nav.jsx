import React from "react";
import { Col } from 'reactstrap';
import Accordian from "../../../../components/Accordian/Accordian";
import { NavLink as RouterNavLink } from "react-router-dom";
import {NavLink} from "reactstrap";

const EthicsIntroNav = () => {

return (
    <Col>
      <nav>
      <NavLink tag={RouterNavLink} to="/Ethics/Ethics-intro" title="introduction">
        <Accordian title="Introduction">
          <p className="accordionText">Introduction</p>
        </Accordian>
      </NavLink>
      <NavLink tag={RouterNavLink} to="/Ethics/Ethics-intro/chapter1" title="Chapter 1">
        <Accordian title="Chapter 1">
          <p className="accordionText">Utilitariansim</p>
        </Accordian>
      </NavLink>
      <NavLink tag={RouterNavLink} to="/Ethics/Ethics-intro/quiz1" title="quiz1">
        <Accordian title="Quiz 1"></Accordian>
      </NavLink>
      <NavLink tag={RouterNavLink} to="/Ethics/Ethics-intro/chapter2" title="Chapter 2">
        <Accordian title="Chapter 2">
          <p className="accordionText">Egoism</p>
        </Accordian>
      </NavLink>
      </nav>
    </Col>
  )
}

export default EthicsIntroNav;