import './KeyBoard.css';
import Key from '../../components/Key';
import { useCallback, useEffect, useContext } from 'react';
import { AppContext } from '../../App';

const keyRow1 = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'];
const keyRow2 = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'];
const keyRow3 = ['Z', 'X', 'C', 'V', 'B', 'N', 'M'];

export default function KeyBoard() {
  // *********************** KEY PRESS ***********************
  const { onKeySelect, onEnter, onDelete } = useContext(AppContext);

  const keyboardEvent = useCallback(
    (e) => {
      if (e.key === 'Enter') {
        onEnter();
      } else if (e.key === 'Backspace') {
        onDelete();
      } else {
        keyRow1.forEach((key) => {
          if (e.key.toLowerCase() === key.toLowerCase()) {
            onKeySelect(key);
          }
        });
        keyRow2.forEach((key) => {
          if (e.key.toLowerCase() === key.toLowerCase()) {
            onKeySelect(key);
          }
        });
        keyRow3.forEach((key) => {
          if (e.key.toLowerCase() === key.toLowerCase()) {
            onKeySelect(key);
          }
        });
      }
    },
    [onEnter, onDelete, onKeySelect]
  ); /* para que no se actualizen nuestros componentes innecesariamente */

  useEffect(() => {
    document.addEventListener('keydown', keyboardEvent);

    return () => {
      document.removeEventListener('keydown', keyboardEvent);
    };
  }, [keyboardEvent]);

  // *********************************************************************
  return (
    <div className="keyBoard" onKeyDown={keyboardEvent}>
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
          <button className="specialKey">
            <Key keyValue={'ENTER'}></Key>
          </button>
          {keyRow3.map((key) => {
            return (
              <button className="key" key={'key' + key}>
                <Key keyValue={key} />
              </button>
            );
          })}
          <button className="key" id="deleteKey">
            <Key
              keyValue={
                'DEL'
                // <svg
                //   xmlns="http://www.w3.org/2000/svg"
                //   width="24"
                //   height="24"
                //   className="icon">
                //   <path d="M20 5a2 2 0 0 1 1.995 1.85l.005 .15v10a2 2 0 0 1 -1.85 1.995l-.15 .005h-11a1 1 0 0 1 -.608 -.206l-.1 -.087l-5.037 -5.04c-.809 -.904 -.847 -2.25 -.083 -3.23l.12 -.144l5 -5a1 1 0 0 1 .577 -.284l.131 -.009h11zm-7.489 4.14a1 1 0 0 0 -1.301 1.473l.083 .094l1.292 1.293l-1.292 1.293l-.083 .094a1 1 0 0 0 1.403 1.403l.094 -.083l1.293 -1.292l1.293 1.292l.094 .083a1 1 0 0 0 1.403 -1.403l-.083 -.094l-1.292 -1.293l1.292 -1.293l.083 -.094a1 1 0 0 0 -1.403 -1.403l-.094 .083l-1.293 1.292l-1.293 -1.292l-.094 -.083l-.102 -.07z" />
                // </svg>
              }></Key>
          </button>
        </div>
      </div>
    </div>
  );
}
