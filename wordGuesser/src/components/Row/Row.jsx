import './BoxRow.css';
import Box from '../Box/Box';

export default function Row({ rowPosition }) {
  return (
    <div className="boxRow">
      <Box letterPosition={0} rowPosition={rowPosition} />
      <Box letterPosition={1} rowPosition={rowPosition} />
      <Box letterPosition={2} rowPosition={rowPosition} />
      <Box letterPosition={3} rowPosition={rowPosition} />
      <Box letterPosition={4} rowPosition={rowPosition} />
    </div>
  );
}

Row.propTypes;
