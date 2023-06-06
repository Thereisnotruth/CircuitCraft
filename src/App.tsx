import { useState } from 'react';

import './App.css';
import Board from '@components/Board';

import '@styles/main.scss';

function App() {
  return (
    <div className="app">
      <Board />
    </div>
  );
}

export default App;
