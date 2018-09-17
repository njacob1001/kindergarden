import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './styleHeader.scss';

const DEFAULT_ITEMS = [
  { name: 'inicio', url: '#root' },
  { name: 'noticias', url: '#root' },
  { name: 'guía padres', url: '#root' },
  { name: 'galería', url: '#root' },
  { name: 'contacto', url: '#root' }
];

class HeaderBigLogo extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    window.matchMedia('(min-width: 64em)').addListener(() => {
      this.setState({
        isOpen: false
      });
    });
  }

  handleClick(e) {
    e.preventDefault();
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    const items = this.props.items || DEFAULT_ITEMS;
    return (
      <div className="Header-container">
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
