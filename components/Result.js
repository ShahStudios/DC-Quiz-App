// import react 
import React from 'react';

// create function with props
const Result = ({score, playAgain}) => (
  <div className="score-board">
    <div className="score">You Scored {score} / 5 Correct Answers!</div>
    <button className="playBtn" onClick={playAgain}>Play Again!</button>
  </div>
);

// export function
export default Result;