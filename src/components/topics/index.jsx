import React from 'react';
import data from './data';
import './style.scss';

const topics = () => (
  <div className="Topics-container">
    {data.map(item => (
      <div className="Topics-item" key={item.id}>
        <img className="Topics-img" src={item.logo} alt={item.name} />
        <h3 className="Topics-name">{item.name}</h3>
      </div>
    ))}
  </div>
);

export default topics;
