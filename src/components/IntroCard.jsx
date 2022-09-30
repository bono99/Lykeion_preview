import React from 'react';
import { Col, Row } from 'reactstrap';

const IntroCard = props => {
    return (        
        <div className="timeline-item">
            <div className="chapter-info">
                <span>{props.chapter}</span>
            </div>
            <div className="timeline-marker"></div>
            <Row>
                <Col>
                    <img alt="" className="portrait" src={props.image} />
                    <h3 className="text-center">{props.title}</h3>
                    <p className="text-center">{props.text}</p>
                </Col>
            </Row> 
        </div>
    );
}

export default IntroCard;