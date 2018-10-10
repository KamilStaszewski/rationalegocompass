import React from 'react'

const QuizNextQuestionButton = ({nextQuestion}) => {
  return (
    <div className="quiz__nextquestion">
        <button onClick={nextQuestion} className="quiz__nextbutton">
          <span>Dalej</span>
        </button>
    </div>
  )
}

export default QuizNextQuestionButton
