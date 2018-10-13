import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './styleHeader.scss';
import data from './data';

const d = document;
let header;
let firstContent;
let firstContentHeight;
let headerHeight;
let scrollTopLimit;

class HeaderBigLogo extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
      top: '',
      isHide: false
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
  }


  componentDidMount() {
    window.matchMedia('(min-width: 64em)').addListener(() => {
      this.setState({
        isOpen: false
      });
    });

    header = d.getElementById('Header');
    firstContent = d.querySelector('.u-first-content');
    firstContentHeight = window.getComputedStyle(firstContent, null)
      .getPropertyValue('height').split('px')[0];
    headerHeight = window.getComputedStyle(header, null)
      .getPropertyValue('heght').split('px')[0];
    scrollTopLimit = firstContentHeight - headerHeight;

    d.addEventListener('DOMContentLoaded', this.handleScroll);
    window.addEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const newTop = scrollTop > scrollTopLimit ? 'is-down' : '';
    const newIsHide = window.scrollY > this.prev;

    this.setState({
      top: newTop,
      isHide: newIsHide
    });
    this.prev = window.scrollY;
  }

  handleClick(e) {
    e.preventDefault();
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    const items = this.props.items || data;
    return (
      <div className={`Header-container ${this.state.top} ${this.state.isHide === true ? 'is-hide' : ''}`} id="Header">
        <nav className="Header-wrapper">
          <a href="#root" className="Header-logo"></a>
          <div className={`Header-panel ${this.state.isOpen ? 'is-active' : ''}`}>
            <ul className="Header-links">
              {
                items.map((element, index) =>
                  <li className="Header-item" key={index * 22}>
                    <Link to={element.name}>{element.name.toUpperCase()}</Link>
                  </li>)
              }
            </ul>
          </div>
          <a onClick={event => this.handleClick(event)} href="" className="Header-button">
            <button type="button" className={`hamburger hamburger--spring ${this.state.isOpen ? 'is-active' : ''}`}>
              <span className="hamburger-box">
                <span className="hamburger-inner"></span>
              </span>
            </button>
          </a>
        </nav>
      </div>
    );
  }
}

export default HeaderBigLogo;
