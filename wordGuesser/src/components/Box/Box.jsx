import './Box.css';
import { useContext } from 'react';
import { AppContext } from '../../App';

export default function Box({ letterPosition, rowPosition }) {
  const { grid } = useContext(AppContext);
  const letter = grid[rowPosition][letterPosition];
  return <div className="box">{letter}</div>;
}

Box.propTypes;
