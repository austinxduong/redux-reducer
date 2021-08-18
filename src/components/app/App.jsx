import React from 'react';
import { redoColor, undoColor, currentColor } from '../state/actions';
import { useDispatch, useSelector } from '../state/ReduxProvider';
import { selectColor } from '../state/selectors';


export default function App() {
  const current = useSelector(selectColor);
  const dispatch = useDispatch();
  const undo = () => dispatch(undoColor());
  const redo = () => dispatch(redoColor());

  return (
    <>
      <button data-testid="undo" onClick={undo}>undo</button>
      <button data-testid="redo" onClick={redo}>redo</button>
      <input
        data-testid="colorInput"
        type="color"
        value={current}
        onChange={({ target }) => dispatch(currentColor(target.value))}
      />
      <div
        data-testid="display"
        style={{ backgroundColor: current, width: '40rem', height: '40rem' }}>
      </div>
    </>
  );
}
