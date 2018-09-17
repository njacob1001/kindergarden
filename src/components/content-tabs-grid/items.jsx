import React from 'react';
import IconsTab from './icons-svg';

const Items = () => {
  console.log('kajkskja');

  return (
    <section className="Service-container">
      {IconsTab.map(Icons => <div className="Service-item icon" key={Icons.id}>{Icons.icon}</div>)}
    </section>
  );
};

export default Items;
