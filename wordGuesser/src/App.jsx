import { useState, createContext } from 'react';
import './App.css';
import Grid from './components/Grid/Grid';
import Header from './components/Header/Header';
import KeyBoard from './components/KeyBoard/KeyBoard';

export const AppContext =
  createContext(); /* crea un contecto para usarlo en toda la app */

export default function App() {
  const emptyGrid = [
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
  ];
  const [grid, setGrid] =
    useState(
      emptyGrid
    ); /* este grid tiene, en su estado, las letras que debemos imprimir */
  const [currentGuess, setCurrentGuess] = useState({
    rowPosition: 0,
    letterPosition: 0,
  });

  return (
    <>
      <AppContext.Provider
        value={{ grid, setGrid, currentGuess, setCurrentGuess }}>
        {' '}
        {/* aca le paso el contexto que quiero usar en toda la app */}
        <Header />
        <Grid />
        <KeyBoard />
      </AppContext.Provider>
    </>
  );
}
