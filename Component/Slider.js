import React, { useState } from 'react';
import './Slider.css';
const Slider = (props) => {
  const [sliderValue, setSliderValue] = useState(50);

  const onChangeHandler = (event) => {
    setSliderValue(event.target.value);
  };
  props.onSlider(sliderValue);
  return (
    <form>
      <div className="slider">
        <div>
          <p>HEIGHT</p>
          <p>{sliderValue} cm</p>
        </div>
        <div className="ranger">
          <input
            onChange={onChangeHandler}
            type="range"
            min="0"
            max="200"
            value={sliderValue}
          />
        </div>
      </div>
    </form>
  );
};

export default Slider;
