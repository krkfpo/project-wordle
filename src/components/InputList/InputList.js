import React from 'react';

function InputList({inputList}) {
  return (
    <div className="guess-results">
    {
      inputList.map((inputItem)=>(
        <p className="guess" key={crypto.randomUUID()}>{inputItem}</p>
      ))
    }
    </div>
  );
}

export default InputList;
