import React, { useState } from 'react';
import './WeightBar.css';

const WeightBar = (props) => {
  let [weight, setWeight] = useState(70);

  const decWeightHandler = () => {
    setWeight((prev) => prev - 1);
  };

  const incWeightHandler = () => {
    setWeight((prev) => prev + 1);
  };
  props.onWeight(weight);

  return (
    <div className="weightbar">
      <p>WEIGHT</p>
      <p>{weight}</p>
      <div className="second">
        <button onClick={decWeightHandler}>-</button>
        <button onClick={incWeightHandler}>+</button>
      </div>
    </div>
  );
};

export default WeightBar;
