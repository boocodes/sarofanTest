import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { store } from './redux';
import { Provider } from 'react-redux';




ReactDOM.render(
  <Provider store={store}>
      <App/>
  </Provider>
  ,
  document.getElementById('root')
);


export * from './types';
export * from './redux';
export * from './hooks';
export * from './components';
export * from './ui';
