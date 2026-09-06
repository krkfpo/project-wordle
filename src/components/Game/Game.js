import React from 'react';
import GuessInput from '../GuessInput';
import Guess from '../Guess/Guess';
import DisplayResult from '../DisplayResult'
import { sample } from '../../utils';
import KeyBoard from '../KeyBoard/KeyBoard';

import { WORDS } from '../../data';

// Pick a random word on every pageload.
//const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
//console.info({ answer });

function Game() {

  const [inputList,setInputList] = React.useState([]);
  const [gameStatus,setGameStatus] = React.useState(false);
  const [answer,setAnswer] = React.useState(sample(WORDS));
  const [guessStatus,setGuessStatus] = React.useState([]);
  const ROWS = [
    ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
    ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
    ['⏎','Z', 'X', 'C', 'V', 'B', 'N', 'M','⌫'],
  ];
  const [keyBoardStatus, setKeyBoardStatus] = React.useState(() =>
  ROWS.flat().reduce((acc, key) => {
    acc[key] = { letter: key, status: 'unentered' ,id:crypto.randomUUID()};
    return acc;
  }, {})
);
  console.info({ answer });
  {/* [ [{},{}] , [] , [] ]*/}
  //console.log(guessStatus);
  return (
    <>
    <Guess inputList={inputList}/>
    <GuessInput inputList={inputList} setInputList={setInputList} answer={answer} setGameStatus={setGameStatus} gameStatus={gameStatus} setGuessStatus={setGuessStatus} />
    {
      (gameStatus === true || (inputList.length === 6 && gameStatus === false)) ? <DisplayResult inputList={inputList} answer={answer} gameStatus={gameStatus} setGameStatus={setGameStatus} setInputList={setInputList} setAnswer={setAnswer} setKeyBoardStatus={setKeyBoardStatus} ROWS={ROWS} guessStatus={guessStatus} setGuessStatus={setGuessStatus}/> : null
    }
    <KeyBoard inputList={inputList} guessStatus={guessStatus} setGuessStatus={setGuessStatus} ROWS={ROWS} keyBoardStatus={keyBoardStatus} setKeyBoardStatus={setKeyBoardStatus}/>
    </>
  );
}

export default Game;
