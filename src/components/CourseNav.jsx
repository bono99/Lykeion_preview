import React from "react";
import { NavLink as RouterNavLink } from "react-router-dom";
import {NavLink} from "reactstrap";

const CourseNav = props => {

  return (
    <NavLink tag={RouterNavLink} to={props.link} exact><p>{props.title}</p></NavLink>
  )
}

export default CourseNav;

