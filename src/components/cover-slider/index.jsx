import React from 'react';
import SliderController from './controller';
import SlidersContent from './sliders';
import './styleSlider.scss';

const CoverSlider = () => (
    <aside className='Slider-container'>
      <SliderController />
      <SlidersContent />
    </aside>
  );

export default CoverSlider;
