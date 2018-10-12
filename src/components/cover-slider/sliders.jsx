import React from 'react';
import { connect } from 'react-redux';
import './styleSlider.scss';
import data from './data';

const calculatePosition = (index, pos) => {
  let status = '';

  if (pos === index) status = 'is-active';
  else if (pos > index) status = 'is-right';
  else if (pos < index) status = 'is-left';

  return status;
};

const SlidersContent = ({ slider }) => data.map((item, index) => (
  <article
    key={index * 36}
    className={`Slider-img ${calculatePosition(index, slider)} u-first-content`}
    style={{ backgroundImage: `url(${item.image})` }}
  >
    <div className="Slider-cover"></div>
    <h2 className="Slider-title">{item.title.toUpperCase()}</h2>
    <p className='Slider-text'>{item.content}</p>
    <a href="" className="Slider-button"><span>Ver más</span></a>
  </article>
));

export default connect(({ reducerSlider }) => ({
  slider: reducerSlider.slider
}), null)(SlidersContent);
