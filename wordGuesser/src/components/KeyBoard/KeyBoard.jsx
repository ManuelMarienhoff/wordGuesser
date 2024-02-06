import './KeyBoard.css';
import Key from '../../components/Key';

export default function KeyBoard() {
  const keyRow1 = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'];
  const keyRow2 = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'];
  const keyRow3 = ['Z', 'X', 'C', 'V', 'B', 'N', 'M'];

  return (
    <div className="keyBoard">
      <div className="keyRowContainer">
        <div className="keyRow">
          {keyRow1.map((key) => {
            return (
              <button className="key" key={'key' + key}>
                <Key keyValue={key} />
              </button>
            );
          })}
        </div>
        <div className="keyRow">
          {keyRow2.map((key) => {
            return (
              <button className="key" key={'key' + key}>
                <Key keyValue={key} />
              </button>
            );
          })}
        </div>
        <div className="keyRow">
          <button className="specialKey" id="sendKey">
            SEND
          </button>
          {keyRow3.map((key) => {
            return (
              <button className="key" key={'key' + key}>
                <Key keyValue={key} />
              </button>
            );
          })}
          <button className="key" id="deleteKey">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              className="icon">
              <path d="M20 5a2 2 0 0 1 1.995 1.85l.005 .15v10a2 2 0 0 1 -1.85 1.995l-.15 .005h-11a1 1 0 0 1 -.608 -.206l-.1 -.087l-5.037 -5.04c-.809 -.904 -.847 -2.25 -.083 -3.23l.12 -.144l5 -5a1 1 0 0 1 .577 -.284l.131 -.009h11zm-7.489 4.14a1 1 0 0 0 -1.301 1.473l.083 .094l1.292 1.293l-1.292 1.293l-.083 .094a1 1 0 0 0 1.403 1.403l.094 -.083l1.293 -1.292l1.293 1.292l.094 .083a1 1 0 0 0 1.403 -1.403l-.083 -.094l-1.292 -1.293l1.292 -1.293l.083 -.094a1 1 0 0 0 -1.403 -1.403l-.094 .083l-1.293 1.292l-1.293 -1.292l-.094 -.083l-.102 -.07z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
