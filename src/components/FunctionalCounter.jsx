import React, { useState } from 'react';

const FunctionalCounter = () => {
  const [counter, setCounter] = useState(0);

  const incrementCount = () => {
    setCounter((prevState) => prevState + 1);
  };

  const decrementCount = () => {
    setCounter((prevState) => prevState - 1);
  };

  return (
    <div className="counterView">
      <h2 className="title">Functional Counter</h2>
      <button className="button" onClick={incrementCount} type="button">
        Increment
      </button>
      <div className="counterField">Counter ={counter}</div>
      <button className="button" onClick={decrementCount} type="button">
        Decrement
      </button>
    </div>
  );
};

export default FunctionalCounter;
