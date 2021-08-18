/* eslint-disable max-len */
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import { ReduxProvider } from '../state/ReduxProvider';
import { Reducer, initialState } from '../state/reducer';


describe('behavior testing!', () => {
  it('renders presentational compononet color box', async () => {
    render(<ReduxProvider reducer={Reducer} initialState={initialState}><App /></ReduxProvider>);

    const display = screen.getByTestId('display');

    const colorInput = screen.getByTestId('colorInput');
    fireEvent.change(colorInput, { target: { value: '#40C69D' } });
    expect(display).toHaveStyle({ backgroundColor: '#40C69D' });

    // const { asFragment } = render(<App />);
    // expect(asFragment()).toMatchSnapshot();
  });
});
