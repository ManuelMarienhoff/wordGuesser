import { useContext } from 'react';
import { AppContext } from '../App';

function Key({ keyValue }) {
  const { grid, setGrid, currentGuess, setCurrentGuess } =
    useContext(AppContext);

  const printLetter = () => {
    // ******************APRETAR TECLA ENTER******************
    if (keyValue === 'ENTER') {
      if (currentGuess.letterPosition != 5) {
        return; /* corta funcion si no hay 5 letras cuando aprieto enter */
      }
      setCurrentGuess({
        /* si hay 5 letras, bajo 1 fila y voy a casilla 0 */
        rowPosition: currentGuess.rowPosition + 1,
        letterPosition: 0,
      });

      // ******************APRETAR TECLA DELETE******************
    } else if (keyValue === 'DEL') {
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

      // ******************APRETAR CUALQUIER LETRA******************
    } else {
      if (currentGuess.letterPosition > 4) {
        /* corta funcion si hay 5 letras */
        return;
      }
      const newGrid = [...grid]; /* agarra los valores actuales de grid */
      newGrid[currentGuess.rowPosition][currentGuess.letterPosition] =
        keyValue; /* le agrega la nueva letra a la posicion actual del 'focus' */
      setGrid(newGrid); /* actualiza el grid */
      setCurrentGuess({
        ...currentGuess,
        letterPosition: currentGuess.letterPosition + 1,
      }); /* actualiza la posicion del 'focus' */
    }
  };

  return <div onClick={printLetter}>{keyValue}</div>;
}

export default Key;

Key.propTypes;
