import React from 'react';

function KeyBoard({guessStatus,setGuessStatus,ROWS,keyBoardStatus,setKeyBoardStatus}) {
  //console.log(guessStatus)
  
  const newKeyBoardStatus = keyBoardStatus;
  for(let i=0;i<guessStatus.length;i++){
    newKeyBoardStatus[guessStatus[i]['letter']]['status'] = guessStatus[i]['status'];
  }
  console.log(keyBoardStatus);
  function getStyles(status){
    if(status === 'unentered')
      return "cell";
    else if(status === 'correct')
      return "cell correct";
    else if(status === 'incorrect')
      return "cell incorrect";
    else 
      return "cell misplaced";
  }
  return (
    <div className="keyboard">
    {
      ROWS.map(
        (row)=>(
          <p className="guess" key={crypto.randomUUID()}>
          {row.map(
            (char)=>(<button key={keyBoardStatus[char].id} className={getStyles(keyBoardStatus[char].status)}>{char}</button>)
            )
          }
          </p>
        )
      )
    }
    </div>
  );
}

export default KeyBoard;

{/*
  
  */
}