import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';

export function mount(el) {
  ReactDOM.render(<App />, el);
}

if (process.env.NODE_ENV === 'development') {
  const marketingEl = document.querySelector('#marketing-dev');

  if (marketingEl) {
    mount(marketingEl);
  }
}
