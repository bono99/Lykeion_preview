import React from "react";
import { Col } from 'reactstrap';
import Accordian from "../../../../components/Accordian/Accordian";
import { NavLink as RouterNavLink } from "react-router-dom";
import {NavLink} from "reactstrap";

const PostmodernismIntroNav = () => {

return (
    <Col>
      <nav>
      <NavLink tag={RouterNavLink} to="/Postmodernism/Postmodernism-intro" title="introduction">
        <Accordian title="Introduction">
          <p className="accordionText">Introduction</p>
        </Accordian>
      </NavLink>
      <NavLink tag={RouterNavLink} to="/Postmodernism/Postmodernism-intro/chapter1" title="Chapter 1">
        <Accordian title="Chapter 1">
          <p className="accordionText">Michel Foucault</p>
        </Accordian>
      </NavLink>
      <NavLink tag={RouterNavLink} to="/Postmodernism/Postmodernism-intro/quiz1" title="quiz1">
        <Accordian title="Quiz 1">
          <p className="accordionText">aaaaaa</p>
        </Accordian>
      </NavLink>
      <NavLink tag={RouterNavLink} to="/Postmodernism/Postmodernism-intro/chapter2" title="Chapter 2">
        <Accordian title="Chapter 2">
          <p className="accordionText">Jacques Derrida</p>
        </Accordian>
      </NavLink>
      </nav>
    </Col>
  )
}

export default PostmodernismIntroNav;