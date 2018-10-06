import React from 'react';
import IconsTab from './icons-svg';
import InfoTab from './tabcontent';
import './tabs-style.scss';

const Infotab = () => {
  console.log('kajkskja');

  return (
    <section className="Infotab-container">
      {IconsTab.map(Icons => (
        <div className="Infotab-item Infotab-icons" key={Icons.id}>
          {Icons.icon}
          <h3 className="Infotab-name">{Icons.name}</h3>
        </div>)
      )}
      <div className="Infotab-section-container">
        {IconsTab.map(element => (
          <InfoTab
            key={`${element.name}content`}
            title={element.name}
            text={element.text}
            imagen={element.img}
          />
        ))}
      </div>
    </section>
  );
};

export default Infotab;
