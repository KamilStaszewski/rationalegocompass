import React from 'react'

const QuizHeader = ({questions = [], index}) => {
  return (
    <div className="quiz__header">
      <h2>{questions[index].question}</h2>
    </div>
  )
}

export default QuizHeader
