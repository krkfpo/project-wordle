import React from 'react';
import { range } from '../../utils';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

function Guess({inputList}) {
    {/* [ [{},{}] , [] , [] ]*/}
    function addStyle(status){
      if(status ==='correct')
        return "cell correct";
      else if(status === 'incorrect')
        return "cell incorrect";
      else 
        return "cell misplaced";
    }
  return (
    <div className="guess-results">
    {
      range(0,NUM_OF_GUESSES_ALLOWED).map((row)=>(
        <p className="guess" key={crypto.randomUUID()}>
        {range(0,5).map(
          (column)=><span key={crypto.randomUUID()} className={row<inputList.length?addStyle(inputList[row][column]["status"]):"cell"}>{row<inputList.length&&inputList[row][column]["letter"]}</span>
        )
        }
        </p>
      ))
    }
    </div>
  );
}

export default Guess;
