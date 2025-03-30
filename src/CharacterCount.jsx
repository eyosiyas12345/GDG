import { useState, useEffect, useMemo, useCallback, useReducer } from 'react';
import './App.css'; // Reuse App.css for now, adjust as needed
import ProgressBar from './ProgressBar';

const MAX_CHARACTERS = 100; // Example maximum limit

// Reducer function to handle character limits
const characterReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_TEXT':
      return action.payload.length <= MAX_CHARACTERS ? action.payload : state;
    default:
      return state;
  }
};

function CharacterCount() {
  const [text, dispatch] = useReducer(characterReducer, "");
  const characterCount = text.length; // Inline calculation now
  const warningLimit = Math.floor(MAX_CHARACTERS * 0.9);
  const showWarning = characterCount >= warningLimit;

  // Optimized text handling using useCallback and useMemo
  const handleTextChange = useCallback((e) => {
    dispatch({ type: 'UPDATE_TEXT', payload: e.target.value });
  }, []);

  const memoizedTextarea = useMemo(() => (
    <textarea
      value={text}
      onChange={handleTextChange}
      placeholder="Type something..."
      className="text-area"
    />
  ), [text, handleTextChange]);

  const handleCopyClick = useCallback(() => {
    navigator.clipboard.writeText(text);
    alert("Copied to clipboard!");
  }, [text]);

  return (
    <>
      <h1>Real-Time Character Counter</h1>
      {memoizedTextarea}
      <div className="counter-container">
        <span className={showWarning ? "warning" : ""}>
          Character Count: {characterCount} / {MAX_CHARACTERS}
        </span>
      </div>

      <ProgressBar percentage={(characterCount / MAX_CHARACTERS) * 100} />

      {showWarning && <p className="warning-message">Approaching character limit!</p>}

      <button className="copy-button" onClick={handleCopyClick}>
        Copy to Clipboard
      </button>
    </>
  );
}

export default CharacterCount;
