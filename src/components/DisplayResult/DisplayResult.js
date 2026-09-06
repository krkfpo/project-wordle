import React from 'react';
import logoImg from '../../../public/restart.svg'; // 1. Import at the top
import { sample } from '../../utils';
import { WORDS } from '../../data';

function DisplayResult({inputList,answer,setAnswer, gameStatus,setInputList,setGameStatus,setKeyBoardStatus,ROWS,guessStatus,setGuessStatus}) {
  return (
    <div className={gameStatus===true?"happy banner":"sad banner"} >
  {
    (gameStatus === true) ? 
    (<p>
    <strong>Congratulations!</strong> Got it in{' '}
    <strong>{inputList.length} {inputList.length===1?"guess":"guesses"}</strong>.
  </p>)
    :
    (
    <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
    )
  }
  
    <button style={{ width: '8%', height: '8%'}}>
      <img src={logoImg} 
      onClick={()=>{
        setGuessStatus([]);
        setKeyBoardStatus(
      ROWS.flat().reduce((acc, key) => {
        acc[key] = { letter: key, status: 'unentered' ,id:crypto.randomUUID()};
        return acc;
      }, {})
    );
        setInputList([]);
        setGameStatus(false);
        setAnswer(sample(WORDS))
    }} alt="restart button"/>
    </button>
</div>

  );
}

export default DisplayResult;
