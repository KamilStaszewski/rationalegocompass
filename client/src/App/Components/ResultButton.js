import React from 'react'

const ResultButton = ({startAgain}) => {
  return (
    <div className="result__button">
        <button onClick={startAgain}>Spróbuj jeszcze raz</button>     
    </div>
  )
}

export default ResultButton
