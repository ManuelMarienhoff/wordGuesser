import './Grid.css';
import Row from '../Row/Row';

export default function Grid() {
  return (
    <div className="grid">
      <Row rowPosition={0} />
      <Row rowPosition={1} />
      <Row rowPosition={2} />
      <Row rowPosition={3} />
      <Row rowPosition={4} />
      <Row rowPosition={5} />
    </div>
  );
}
// cada row tenga un estado focus - true/false
// cada box tenga un estado focus - true/false
// cuando se monte, row 1 focus, box 1 focus
// cuando completo box 1, pase a la siguiente box
// cuando completo row 1 (las 5 boxes), pase el focus a la row 2, box1
