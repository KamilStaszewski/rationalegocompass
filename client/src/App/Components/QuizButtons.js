import React from 'react'

const QuizButtons = ({answerYes, answerNo}) => {
  return (
    <div className="quiz__buttons">
        <button onClick={answerYes}>Zgadzam się</button>
        <button onClick={answerNo}>Nie zgadzam się</button>
    </div>
  )
}

export default QuizButtons
