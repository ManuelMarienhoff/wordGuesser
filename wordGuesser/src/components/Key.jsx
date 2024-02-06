import { useContext } from 'react';
import { AppContext } from '../App';

function Key({ keyValue }) {
  const { grid, setGrid, currentGuess, setCurrentGuess } =
    useContext(AppContext);

  const printLetter = () => {
    const newGrid = [...grid]; /* agarra valores actuales de grid */
    newGrid[currentGuess.rowPosition][currentGuess.letterPosition] =
      keyValue; /* le agrega la nueva letra a la posicion actual del 'focus' */
    setGrid(newGrid); /* actualiza el grid */
    setCurrentGuess({
      ...currentGuess,
      letterPosition: currentGuess.letterPosition + 1,
    }); /* actualiza la posicion del 'focus' */
  };

  return <div onClick={printLetter}>{keyValue}</div>;
}

export default Key;

Key.propTypes;
