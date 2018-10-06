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

  render() {
    const { questions, index } = this.state;
    return (
      <div className="wrapper">
        {questions.length ? (
        <div className="quiz">
          <div className="quiz__questions">
            <p>{questions[index].question}</p>
          </div>
          <div className="quiz__input">
            <input type="range" name="" id=""/>
          </div>
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