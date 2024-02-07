import { useContext } from 'react';
import { AppContext } from '../App';

function Key({ keyValue }) {
  const { onKeySelect, onEnter, onDelete } = useContext(AppContext);

  const printLetter = () => {
    if (keyValue === 'ENTER') {
      onEnter();
    } else if (keyValue === 'DEL') {
      onDelete();
    } else {
      onKeySelect(keyValue);
    }
  };

  return <div onClick={printLetter}>{keyValue}</div>;
}

export default Key;

Key.propTypes;
