import React from 'react'

const QuizInputMultiplier = () => {
  return (
    <div className="compass">
        <label htmlFor="volume" className="input-range">Jak istotna jest dla Ciebie ta kwestia?</label>
        <input type="range"
            name='lala' 
            min="0" 
            max="3"
            value={2}
             />
    </div>
  )
}

export default QuizInputMultiplier
