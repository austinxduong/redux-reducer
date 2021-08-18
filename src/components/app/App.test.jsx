/* eslint-disable max-len */
import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import { ReduxProvider } from '../state/ReduxProvider';
import { Reducer, initialState } from '../state/reducer';
import userEvent from '@testing-library/user-event';


describe('behavior testing!', () => {
  it('renders presentational compononet color box', async () => {
    render(<ReduxProvider reducer={Reducer} initialState={initialState}><App /></ReduxProvider>);

    const display = screen.getByTestId('display');

    const colorInput = screen.getByTestId('colorInput');
    fireEvent.change(colorInput, { target: { value: '#40C69D' } });
    expect(display).toHaveStyle({ backgroundColor: '#40C69D' });

    const undoButton = screen.getByTestId('undo');
    userEvent.click(undoButton);
    expect(display).toHaveStyle({ backgroundColor: '#40C69D' });


  });
});
