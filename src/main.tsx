import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// import App from './App.tsx';
import TicTacToe from './TicTacToe.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TicTacToe />
  </StrictMode>
);
