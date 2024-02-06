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
