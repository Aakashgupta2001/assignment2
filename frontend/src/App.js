import React, { useState } from 'react';
import './App.css';
import Grid from './components/Grid';

export default function App() {
  const gridBase = {
    cells: 8,
    rows: 8,
  };
  const [possibleMoves, SetPossibleMoves] = useState(['']);

  const grid = gridBase;

  return (
    <div className="app">
      <Grid grid={grid} SetPossibleMoves={SetPossibleMoves} />
      <div className="possibleMoves">
        <h1>Possible Moves:</h1>
        <ul>
          {console.log(typeof possibleMoves)}
          {possibleMoves.map((moves, index) => {
            return <h2 key={index}>{moves}</h2>;
          })}
        </ul>
      </div>
    </div>
  );
}
