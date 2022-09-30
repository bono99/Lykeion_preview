import React, {useEffect} from "react";
import { Row, Col, Jumbotron} from "reactstrap";
import Card from "./card";
import MetaphysicsImage from '../assets/metaphysics.jpg';
import EpistemologyImage from '../assets/epistemology.jpg';
import EthicsImage from '../assets/ethics.jpg';
import AestheticsImage from '../assets/aesthetics.jpg';
import PostmodernismImage from '../assets/postmodernism.jpg';
import PhenomenologyImage from '../assets/phenomenology.png';
import PhilosophyOfMindImage from '../assets/philosophyofmind.jpg';
//import { gsap } from "gsap";
import bgImage1 from "../assets/bg1.svg";
  
const Content = () => {

    useEffect(() =>{
      //gsap.to("#path-1s", {x:100, opacity:0});
    });

    return (

      <div className="container">
        <Jumbotron className="test1" style={{ backgroundImage: `url(${bgImage1})`, backgroundSize: 'cover' }}/>
        <div className="next-steps my-5">
          <h2 className="my-5 text-center">Courses</h2>

          <Row className="d-flex justify-content-between">
            <Col md={4} className="mb-5">
                <Card 
                  link="Metaphysics" 
                  image={MetaphysicsImage} 
                  title="Metaphysics" 
                  text="This course path includes basic, intermediate, advanced courses in metaphysics." 
                  className="mb-3"/>
            </Col>
           
            <Col md={4} className="mb-5">
              <Card 
                link="Epistemology" 
                image={EpistemologyImage} 
                title="Epistemology" 
                text='If you are interested in questions about knowledge and questions like: "What are the limits of knowledge?" if so this course could be interesting for you. This course path includes basic, intermediate, advanced courses in epistemology.'
                className="mb-3"/>
            </Col>
            <Col md={4} className="mb-5">
              <Card 
                link="Ethics" 
                image={EthicsImage} 
                title="Ethics" 
                text="This course path includes basic, intermediate, advanced courses in ethics." 
                className="mb-3"/>
            </Col>
            <Col md={4} className="mb-5">
              <Card 
                link="Aesthetics" 
                image={AestheticsImage} 
                title="Aesthetics" 
                text="If you are in love with art and want to get more knowledge about what is beauty. This course path includes basic, intermediate, advanced courses in aesthetics." 
                className="mb-3"/>
            </Col>
            <Col md={4} className="mb-5">
              <Card 
                link="Postmodernism" 
                image={PostmodernismImage} 
                title="Postmodernism" 
                text="This course path includes basic, intermediate, advanced courses in postmodernism." 
                className="mb-3"/>
            </Col>
            <Col md={4} className="mb-5">
              <Card 
                link="Phenomenology" 
                image={PhenomenologyImage} 
                title="Phenomenology" 
                text="This course path includes basic, intermediate, advanced courses in phenomenology." 
                className="mb-3"/>
            </Col>
            <Col md={4} className="mb-5">
              <Card 
                link="philosophy-of-mind" 
                image={PhilosophyOfMindImage} 
                title="Philosophy Of Mind" 
                text="This course path includes basic, intermediate, advanced courses in philosophy Of mind." 
                className="mb-3"/>
            </Col>
          </Row>
          <h2 className="my-5 text-center">Philosophers</h2>
          <p className="text-center">This sections is for deep diving into specific philosophers that we all love</p>
          <Row className="d-flex justify-content-between">
            {/*{contentData.map((col, i) => (
              <Col key={i} md={5} className="mb-4">
                <h6 className="mb-3">
                  <a href={col.link}>
                    <FontAwesomeIcon icon="link" className="mr-2" />
                    {col.title}
                  </a>
                </h6>
               <p>{col.description}</p>
              </Col>
            ))}
            */}
          </Row>
          
        </div>
        
      </div>
    );
  }


export default Content;
