import React from 'react';
import { render } from 'react-dom';
import App from './components/app/App';
import { ReduxProvider } from './components/state/ReduxProvider';
import { initialState, Reducer } from './components/state/reducer';

render(
  <ReduxProvider reducer={Reducer} initialState={initialState}>
    <App />
  </ReduxProvider>,
  document.getElementById('root')
);
