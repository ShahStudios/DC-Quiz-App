// import react libary 
import React, { Component } from 'react';
// import react dom libary
import ReactDOM from 'react-dom';
// import styles sheet 
import './assets/style.css';
// import quiz service component
import quizService from './quizService/index';
// import questionbox component
import QuestionBox from './components/QuestionBox';
// import result component
import Result from './components/Result';

// create root component 
class QuizBee extends Component {

    // create state
    state = {
        questionBank: [],
        score: 0,
        responses: 0
    };

    // create function to get questions
    getQuestions = () => {
        quizService().then(question => {
            // only use state with this. inside function
            this.setState({
                questionBank: question
            });
        });
    };

    // create computeAnswer function
    computeAnswer = (answer, correctAnswer) => {
        if (answer === correctAnswer) {
            this.setState({
                score: this.state.score + 1
            });
        }
        this.setState({
            responses: this.state.responses < 5 ? this.state.responses + 1 : 5
        });
    };

    // fetch new set of questions then reset score
    playAgain = () => {
        this.getQuestions();
        this.setState({
            score: 0,
            responses: 0
        });
    };

    // create component DidMount function
    componentDidMount() {
        this.getQuestions();
    };

    // questionBank length is greater then 0 and the questionBank array maps with that order below
    render() {
        return (
            <div className="container">
                <div className="title">DC Movie Universe Quiz</div>
                {this.state.questionBank.length > 0 &&
                 this.state.responses < 5
                 && this.state.questionBank.map (
                    ({question, answers, correct, questionId}) => (
                    <QuestionBox question={question} options={answers} key={questionId} selected={answer => this.computeAnswer(answer, correct)}/> 
                    )
                 )}
                
                {this.state.responses === 5 ? (
                    <Result score={this.state.score} playAgain={this.playAgain} />
                ) : null}
            </div>
            );
        }
    }

ReactDOM.render(<QuizBee />, document.getElementById("root"));