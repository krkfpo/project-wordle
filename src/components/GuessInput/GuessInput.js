import React from 'react';
import {checkGuess} from '../../game-helpers';

export default function GuessInput({inputList,setInputList,answer,gameStatus,setGameStatus,setGuessStatus}) {
    const [guessInput,setGuessInput]=React.useState('');
    function verdict(gameStatus){
        if(gameStatus===true || (inputList.length===6 && gameStatus===false))
            return true;
        else
            return false;
    }
    return (
        <form className="guess-input-wrapper" onSubmit={(event)=>{
            event.preventDefault();
            console.log(guessInput);
            if(guessInput===answer){
                setGameStatus(true);
            }
            setInputList([...inputList,checkGuess(guessInput,answer)]);
            setGuessStatus(checkGuess(guessInput,answer));
            setGuessInput('');
            }
            }>
            <label htmlFor="guess-input">Enter guess:</label>
            <input type="text" id="guess-input" onChange={(event)=>(setGuessInput(event.target.value.toUpperCase()))} value={guessInput} required={true} pattern="[A-Z]{5,5}" title="5 letter word" disabled={verdict(gameStatus)}/>
        </form>
    );
}