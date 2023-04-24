import React, { useState } from 'react';
import Navbar from '../Component/Navbar.js';
import Slider from '../Component/Slider.js';
import WeightBar from '../Component/WeightBar.js';
// import ButtonSection from '../Component/ButtonSection.js';
import styles from './Button.module.css';
const AllComponent = (props) => {
  const [sliderval, setsliderva] = useState();
  const [weightval, setweightval] = useState();
  const onSliderhandler = (slidervalue) => {
    setsliderva(slidervalue);
  };
  const onWeighthandler = (weightValue) => {
    setweightval(weightValue);
  };

  const onCalculateBMI = () => {
    let bmi = Math.round((weightval / (sliderval * sliderval)) * 10000);
    alert(bmi);
  };
  return [
    <Navbar />,
    <Slider onSlider={onSliderhandler} />,
    <WeightBar onWeight={onWeighthandler} />,
    <button className={styles.button} onClick={onCalculateBMI}>
      CALCULATE YOUR BMI
    </button>,
  ];
};

export default AllComponent;
