import { useState } from 'react';
import { Game } from '../TicTacToe';
import Square from './Square';

const initialGame: Game = {
  player: 'X',
  score: 0,
  squares: Array(9).fill(null),
};

export default function Board() {
  const [game, setGame] = useState<Game>(initialGame);

  function calculateWinner(squares: Array<number | string | null>) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }

  const winner = calculateWinner(game.squares);
  console.log('winner', winner);

  function handleClick(i: number) {
    console.log('click', game.player);

    if (calculateWinner(game.squares) || game.squares[i]) {
      return;
    }
    const newSquares = [...game.squares];
    newSquares[i] = game.player;
    setGame({ ...game, squares: newSquares, player: game.player === 'X' ? 'O' : 'X' });
  }

  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-100">
            <h1>TIC-TAC-TOE</h1>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div className="board">
            {game.squares.map((_, index) => (
              <Square key={index} index={index} handleClick={handleClick} squares={game.squares} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
