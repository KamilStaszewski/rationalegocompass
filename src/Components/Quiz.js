import React, { Component } from 'react';
import questions from '../data'

export default class Quiz extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         index: 0
      }
    }
    
    nextQuestion = () => {
      this.setState({
          index: this.state.index + 1
      })
    }
    

  render() {
      let { index } = this.state      
    return (
      <div className="wrapper">
        <div className="quiz">
          <h3>{questions[index].question}</h3>
          <button onClick={this.nextQuestion}>Next</button>
        </div>
      </div>
    )
  }
}
