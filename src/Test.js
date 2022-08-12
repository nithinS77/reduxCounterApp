import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

export default function Test() {
  const value = useSelector((state) => {
    return state.value;
  });
  const dispatch = useDispatch();
  return (
    <div>
      <button
        onClick={() => {
          dispatch({
            type: 'increment',
          });
        }}
      >
        increment
      </button>
      <label>{value}</label>
      <button
        onClick={() => {
          dispatch({
            type: 'decrement',
          });
        }}
      >
        decrement
      </button>
    </div>
  );
}
