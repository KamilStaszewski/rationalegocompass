import React from 'react'

const QuizButtons = ({answerYes, answerNo, disableButton}) => {
  return (
    <div className="quiz__buttons">
        <button onClick={answerYes} disabled={disableButton}>Zgadzam się</button>
        <button onClick={answerNo} disabled={disableButton}>Nie zgadzam się</button>
    </div>
  )
}

export default QuizButtons
