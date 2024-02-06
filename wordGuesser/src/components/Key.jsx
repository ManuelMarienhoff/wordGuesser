import { useContext } from 'react';
import { AppContext } from '../App';

function Key({ keyValue }) {
  const { grid, setGrid } = useContext(AppContext);

  const printLetter = () => {
    const newGrid = [...grid];
    newGrid[0][0] = keyValue;
    setGrid(newGrid);
  };

  return <div onClick={printLetter}>{keyValue}</div>;
}

export default Key;
