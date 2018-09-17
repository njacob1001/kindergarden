import React from 'react';
import './styleSlider.scss';

const SlidersContent = props => props.data.map((item, index) => (
  <article key={index * 36} className={`Slider-img item-${index}`}>
    <div className="Slider-cover"></div>
    <h2 className="Slider-title">{item.title.toUpperCase()}</h2>
    <p className='Slider-text'>{item.content}</p>
    <a href="" className="Slider-button"><span>Ver más</span></a>
  </article>
));

export default SlidersContent;
