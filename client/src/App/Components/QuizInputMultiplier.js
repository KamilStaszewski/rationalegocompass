import React from 'react'

const QuizInputMultiplier = ({onInputChange, inputWeight}) => {
  return (
    <div className="quiz__compass">
        <label htmlFor="volume" className="input-range">Jak istotna jest dla Ciebie ta kwestia?</label>
        <input type="range"
            name='compass' 
            min="1" 
            max="3"
            value={inputWeight}
            onChange={onInputChange}
             />
    </div>
  )
}

export default QuizInputMultiplier
