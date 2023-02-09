import React from 'react';
import axios from 'axios';

const Grid = ({ grid, SetPossibleMoves }) => {
  const cells = new Array(grid.cells).fill(0);
  const rows = new Array(grid.rows).fill(0);

  const handleClick = async (position) => {
    console.log(position);
    var data = { currentPosition: position };

    var config = {
      method: 'post',
      url: 'http://localhost:3001/',
      headers: {
        'Content-Type': 'application/json',
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data).split(','));
        let result = response.data;
        console.log('r', result);
        SetPossibleMoves(result);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const letters = {
    1: 'a',
    2: 'b',
    3: 'c',
    4: 'd',
    5: 'e',
    6: 'f',
    7: 'g',
    8: 'h',
  };

  return (
    <main>
      <h1>8X8 Chess Board</h1>

      {rows.map((row, index1) => (
        <ul className="row" key={index1}>
          {cells.map((cell, index) => (
            <li
              key={index}
              className="item"
              onClick={() => handleClick(letters[index1 + 1] + (index + 1))}
            >
              {letters[index1 + 1]} {index + 1}
            </li>
          ))}
        </ul>
      ))}
    </main>
  );
};

export default Grid;
