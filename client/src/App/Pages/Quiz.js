import React, { Component } from 'react';
import QuizButtons from '../Components/QuizButtons';
import QuizHeader from '../Components/QuizHeader';
import QuizNextQuestionButton from '../Components/QuizNextQuestionButton';

class Quiz extends Component {
  constructor(props){
    super(props);
    this.state = {
      questions: [],
      index: 0,
      scoreEgo: 0,
      scoreMind: 0
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
      index: this.state.index + 1
    })
  }

  answerYes = () => {
    const { questions, index, scoreEgo, scoreMind } = this.state;
    this.setState({
      scoreEgo: scoreEgo + questions[index].egoYes,
      scoreMind: scoreMind + questions[index].mindYes
    })
  }

  answerNo = () => {
    const { questions, index, scoreEgo, scoreMind } = this.state;
    this.setState({
      scoreEgo: scoreEgo - questions[index].egoYes,
      scoreMind: scoreMind - questions[index].mindYes
    })
  }

  render() {
    const { questions, index } = this.state;
    console.log(this.state)
    return (
      <div className="wrapper">
        {questions.length ? (
        <div className="quiz">
          <QuizHeader questions={questions} index={index}/>
          <QuizButtons answerYes={this.answerYes} answerNo={this.answerNo}/>
          <input type="range" name="" id=""/>
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