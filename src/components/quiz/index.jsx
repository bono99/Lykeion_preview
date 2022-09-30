import React, { Component } from "react";
import "../../App.css";
import QuizQuestions from "./QuizQuestions";
import QuestionBox from "./QuestionBox";
import Result from "./Result";

class QuizBee extends Component {


    state = {
        questionBank:[],
        score: 0,
        responses: 0
    };
    
    getQuestions = () => {
        QuizQuestions().then(question =>{
            this.setState({
                questionBank: question
            })
        })
    }
    computeAnswer = (answer, correctAnswer) => {
        if (answer === correctAnswer) {
            this.setState({
                score: this.state.score + 1
               
            })

        }
    }

    playAgain = () => {
        this.getQuestions();
        localStorage.removeItem('Name');
        this.setState({
            score: 0,
            responses: 0
        })
    }

    componentDidMount() {
        this.getQuestions();
    }

    render() {
        return (
            <div className="container-quiz">
                <h1> Quiz 1</h1>
                {this.state.questionBank.length > 0 &&
                this.state.responses < 5 &&
                    this.state.questionBank.map(
                        ({question, answers, correct, questionId}) => (
                            <QuestionBox 
                                question={question} 
                                options={answers} 
                                key={questionId}
                                selected={answer => this.computeAnswer(answer, correct)}
                            /> 
                        )) 
                     }
                    
                     {<Result score={this.state.score} playAgain={this.playAgain} />}
            </div>
        );
    }
}

export default QuizBee;