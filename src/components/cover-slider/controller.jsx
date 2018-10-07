import React from 'react';
import { connect } from 'react-redux';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';
import SLIDER_ACTIONS from './actionType';
import data from './data';
import './controller.scss';

const pags = data.length;
const SliderController = ({ slider, changeSlider }) => (
  <div className="Controller-slider">
    <div
      onClick={() => changeSlider(slider > 0 ? slider - 1 : pags - 1)}
      className="Controller-action goLeft"
    ><IoIosArrowBack /></div>
    <div className="Controller-pagination">{
      data.map((item, index) =>
        <div
          onClick={() => changeSlider(index)}
          key={item.title.normalize('NFD').replace(/[\u0300-\u036f]/g, '')}
          className={`Controller-pagination-item ${slider === index && 'is-active'}`}
        ></div>)
    }</div>
    <div
      onClick={() => changeSlider(slider < pags - 1 ? slider + 1 : 0)}
      className="Controller-action goRight"
    ><IoIosArrowForward /></div>
  </div>

);

export default connect(({ reducerSlider }) => ({
  slider: reducerSlider.slider
}), (dispatch) => ({
  changeSlider(value) {
    dispatch({
      type: SLIDER_ACTIONS.change(),
      slider: value
    });
  }
}))(SliderController);
