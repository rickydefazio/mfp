import React from 'react';
import ReactDOM from 'react-dom';
import { createMemoryHistory, createBrowserHistory } from 'history';
import App from './App';

// Trigger workflow
export function mount(el, { onNavigate, defaultHistory, initialPath }) {
  const history =
    defaultHistory ??
    createMemoryHistory({
      initialEntries: [initialPath],
    });

  if (onNavigate) {
    history.listen(onNavigate);
  }

  ReactDOM.render(<App history={history} />, el);

  return {
    onParentNavigate({ pathname: nextPathname }) {
      const { pathname } = history.location;

      if (pathname !== nextPathname) {
        history.push(nextPathname);
      }
    },
  };
}

if (process.env.NODE_ENV === 'development') {
  const marketingEl = document.querySelector('#marketing-dev');

  if (marketingEl) {
    mount(marketingEl, { defaultHistory: createBrowserHistory() });
  }
}
