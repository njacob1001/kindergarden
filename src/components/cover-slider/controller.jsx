import React, { Component } from 'react';
import { connect } from 'react-redux';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';
import SLIDER_ACTIONS from './actionType';

class SliderController extends Component {
  render() {
    const pagItems = [];
    const { slider, pags, changeSlider } = this.props;
     for (let j = 0; j <= pags; j++) {
       pagItems.push(<div onClick={() => changeSlider(j)} key={j + 698} className={`Slider-pagination-item ${this.props.slider === j && 'is-active'}`}></div>);
     }
    return (
      <React.Fragment>
        <div onClick={() => changeSlider(slider > 0 ? slider - 1 : pags)} className="Slider-action goLeft"><IoIosArrowBack /></div>
        <div className="Slider-pagination">{pagItems}</div>
        <div onClick={() => changeSlider(slider < pags ? slider + 1 : 0)} className="Slider-action goRight"><IoIosArrowForward /></div>
      </React.Fragment>
    );
  }
}

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
