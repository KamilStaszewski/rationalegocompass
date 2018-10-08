import React from 'react'

const QuizNextQuestionButton = ({nextQuestion}) => {
  return (
    <div className="quiz__nextquestion">
        <button onClick={nextQuestion}>Next question</button>
    </div>
  )
}

export default QuizNextQuestionButton
