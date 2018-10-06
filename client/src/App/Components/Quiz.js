import React, { Component } from 'react';

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
    const { questions, index } = this.state;
    console.log(questions)
    this.setState({
      scoreEgo: this.state.scoreEgo + questions[index].egoYes
    })
  }

  render() {
    const { questions, index } = this.state;
    console.log(this.state.scoreEgo)
    return (
      <div className="wrapper">
        {questions.length ? (
        <div className="quiz">
          <p>{questions[index].question}</p>
          <div className="quiz__buttons">
            <button onClick={this.answerYes}>Zgadzam się</button>
            <button>Nie zgadzam się</button>
          </div>
          <input type="range" name="" id=""/>
          <div className="quiz__nextquestion">
            <button onClick={this.nextQuestion}>Next question</button>
          </div>
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