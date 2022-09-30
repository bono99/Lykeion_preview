import React, {useState, useRef} from "react";
import { gsap } from "gsap";

const QuestionBox = ({question, options, selected}) => {

    const questionBoxRef = useRef();

    function quizAnimation() {
        gsap.to(questionBoxRef.current, {opacity:0, duration:0.1, zIndex:-1});
        console.log(questionBoxRef.current);
        console.log(question);
    }

    const [answer, setAnswer] = useState(options);
    return (
        <div className="questionBox" ref={questionBoxRef}>
            
            <div className="question"><h1> {question} </h1></div>
            {answer.map((text, index) => (
                
                <button key={index} 
                    onBlur={(e) => {
                        console.log('Triggered because this input lost focus');
                    }}
                    onClick={() => {
                     setAnswer([text]);
                     selected(text);
                     quizAnimation();
                    }}
                    >
                
                    {text} 
             
                </button>
            ))}

        </div>
       
    )
}
export default QuestionBox;