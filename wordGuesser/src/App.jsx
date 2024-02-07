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
  // ************************************USE STATE******************************************************
  const [grid, setGrid] =
    useState(
      emptyGrid
    ); /* este grid tiene, en su estado, las letras que debemos imprimir */
  const [currentGuess, setCurrentGuess] = useState({
    rowPosition: 0,
    letterPosition: 0,
  });

  // ******************APRETAR CUALQUIER LETRA******************************************************
  const onKeySelect = (keyValue) => {
    if (currentGuess.letterPosition > 4) {
      /* corta funcion si hay 5 letras */
      return;
    }
    const newGrid = [...grid]; /* agarra los valores actuales de grid */
    newGrid[currentGuess.rowPosition][currentGuess.letterPosition] =
      keyValue; /* le agrega la nueva letra a la posicion actual del ss'focus' */
    setGrid(newGrid); /* actualiza el grid */
    setCurrentGuess({
      ...currentGuess,
      letterPosition: currentGuess.letterPosition + 1,
    }); /* actualiza la posicion del 'focus' */
  };

  // ******************APRETAR TECLA ENTER******************************************************
  const onEnter = () => {
    if (currentGuess.letterPosition != 5) {
      return; /* corta funcion si no hay 5 letras cuando aprieto enter */
    }
    setCurrentGuess({
      /* si hay 5 letras, bajo 1 fila y voy a casilla 0 */
      rowPosition: currentGuess.rowPosition + 1,
      letterPosition: 0,
    });
  };
  // ******************APRETAR TECLA DELETE******************************************************

  const onDelete = () => {
    if (currentGuess.letterPosition === 0) {
      return; /* corta funcion si es la primera casilla porque estaria vacia */
    }
    const newGrid = [...grid]; /* agarra los valores actuales de grid */
    newGrid[currentGuess.rowPosition][currentGuess.letterPosition - 1] =
      ''; /* vuelvo una casilla para atras y la casilla que estaba la dejo vacia */
    setGrid(newGrid); /* actualizo el grid */
    setCurrentGuess({
      ...currentGuess,
      letterPosition: currentGuess.letterPosition - 1,
    }); /* actualizo el guess */
  };

  // ******************************************************************************************
  return (
    <>
      <AppContext.Provider
        value={{
          grid,
          setGrid,
          currentGuess,
          setCurrentGuess,
          onKeySelect,
          onEnter,
          onDelete,
        }}>
        {/* aca le paso el contexto que quiero usar en toda la app */}
        <Header />
        <Grid />
        <KeyBoard />
      </AppContext.Provider>
    </>
  );
}
