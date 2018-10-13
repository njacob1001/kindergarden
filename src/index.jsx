import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './shared/configureStore';
import App from './components/app';
import './style.scss';
import './assets/img/og-image.jpg';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

//ACTIVAR ESTE SCRIPT CUANDO SE VAYA A COMPILAR
/* (() => {
  if ('serviceWorker' in navigator) {
    console.log('sw is good');
    navigator.serviceWorker.register('/service-worker.js');
  }
})(); */
