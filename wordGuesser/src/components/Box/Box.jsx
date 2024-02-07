import './Box.css';
import { useContext } from 'react';
import { AppContext } from '../../App';

export default function Box({ rowPosition, letterPosition }) {
  const { grid } = useContext(AppContext);
  const letter = grid[rowPosition][letterPosition];
  /* guardamos en letter, la letra que este en esa posicion del estado de grid para despues imprimirla en el grid 'fisico'*/
  return <div className="box">{letter}</div>;
}

Box.propTypes;
