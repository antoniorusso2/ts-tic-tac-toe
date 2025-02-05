import './App.css';
import Board from './components/Board';

export type Player = 'X' | 'O' | null;
export interface Game {
  player: Player;
  score: number;
  squares: Array<number | string | null>;
}

function TicTacToe() {
  return <Board />;
}

export default TicTacToe;
