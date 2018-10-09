import React from 'react';
import { connect } from 'react-redux';
import data from './data';
import InfoTab from './tabcontent';
import TAB_ACTIONS from './action-types';
import './tabs-style.scss';

const Infotab = ({ tab, changeTab }) => {
  console.log(`tab: ${tab}`);

  return (
    <section className="Infotab-container">
      {data.map((Icons, index) => (
        <div
          className={`Infotab-item Infotab-icons ${index === tab ? 'is-active' : ''}`}
          key={Icons.id}
          onClick={() => changeTab(index)}
        >
          {Icons.icon}
          <h3 className="Infotab-name">{Icons.name}</h3>
        </div>)
      )}
      <div className="Infotab-section-container">
        {data.map((element, index) => (
          <article key={`${element.id}content`} className={`Infotab-section ${index === tab ? 'is-active' : ''}`}>
            <InfoTab
              key={`${element.name}content`}
              title={element.name}
              text={element.text}
              imagen={element.img}
            />
          </article>
        ))}
      </div>
    </section>
  );
};

export default connect(({ reducerGridTab }) => ({
  tab: reducerGridTab.tab
}), (dispatch) => ({
  changeTab(value) {
    dispatch({
      type: TAB_ACTIONS.change(),
      tab: value
    });
  }
}))(Infotab);
