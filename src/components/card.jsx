import React, { Component} from 'react';
import { NavLink} from "reactstrap";
import { NavLink as RouterNavLink } from "react-router-dom";
class Card extends Component {

    render() { 

        return (
            <NavLink className="card text-center overlay" tag={RouterNavLink} to={this.props.link} exact>
                <div className="overflow">
                    <img className="card-img-top" src={this.props.image} alt="" />
                </div>
                <div className="card-body text-dark">
                    <h4 className="card-title">{this.props.title}</h4>
                    <p>{this.props.text}</p>
                    <button className="btn btn-outline-success">Go to course</button>
                </div>
            </NavLink>
        );
    }
}
 
export default Card;