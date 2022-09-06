import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decreaseAction, increaseAction } from '../actions/actions';

const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.selectCount);
  const mutable = useSelector((state) => state.mutableValue);

  const increaseCount = () => {
    dispatch(increaseAction(mutable));
  };
  const decreaseCount = () => {
    dispatch(decreaseAction(mutable));
  };

  return (
    <div className="counterView">
      <h2 className="title">Counter</h2>
      <button className="button" onClick={increaseCount} type="button">
        Increment
      </button>
      <div className="counterField">Counter = {count}</div>
      <button className="button" onClick={decreaseCount} type="button">
        Decrement
      </button>
    </div>
  );
};

export default Counter;
