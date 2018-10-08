import React, { Component } from 'react';
import QuizButtons from '../Components/QuizButtons';
import QuizHeader from '../Components/QuizHeader';
import QuizNextQuestionButton from '../Components/QuizNextQuestionButton';
import QuizInputMultiplier from '../Components/QuizInputMultiplier';

class Quiz extends Component {
  constructor(props){
    super(props);
    this.state = {
      questions: [],
      index: 0,
      scoreEgo: 0,
      scoreMind: 0,
      disableButton: false,
      inputWeigth: 1
    }
  }

  componentDidMount() {
    this.getQuestions();
  }

  getQuestions = () => {
    fetch('/api/questions')
    .then(res => res.json())
    .then(questions => this.setState({ questions }));
  }

  nextQuestion = () => {
    this.setState({
      index: this.state.index + 1,
      disableButton: false
    })
  }

  answerYes = () => {
    const { questions, index, scoreEgo, scoreMind } = this.state;
    this.setState({
      scoreEgo: scoreEgo + questions[index].egoYes,
      scoreMind: scoreMind + questions[index].mindYes,
      disableButton: true
    })
  }

  answerNo = () => {
    const { questions, index, scoreEgo, scoreMind } = this.state;
    this.setState({
      scoreEgo: scoreEgo - questions[index].egoYes,
      scoreMind: scoreMind - questions[index].mindYes,
      disableButton: true
    })
  }

  // onInputChange = (e) => {

  // }

  render() {
    const { questions, index, disableButton } = this.state;
    console.log(this.state.questions)
    return (
      <div className="wrapper">
        {questions.length ? (
        <div className="quiz">
          <QuizHeader questions={questions} index={index}/>
          <QuizButtons answerYes={this.answerYes} answerNo={this.answerNo} disableButton={disableButton}/>
          <QuizInputMultiplier />
          <QuizNextQuestionButton nextQuestion={this.nextQuestion}/>
        </div>
        ) : (
          null
        )
      }
      </div>
    );
  }
}

export default Quiz;