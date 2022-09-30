import React from "react";
import {Button} from "reactstrap";

const Result = ({score, playAgain}) => (
    
    <div className="score-board">
        <div className="score"><p>{score} / 5 correct answers!</p></div>
        <Button variant="outline-primary" onClick={playAgain}>
            Play again
        </Button>
    </div>
)

export default Result;