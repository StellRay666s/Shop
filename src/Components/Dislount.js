import React, { useEffect, useState } from 'react';
import '../App.scss';

export default function Dislount() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [moveCount, setMoveCount] = useState(0);
  const [cross, setCross] = useState(0);

  const mouseMoveHandler = (event) => {
    setX(event.clientX);
    setY(event.clientY);
  };

  useEffect(() => {
    if (x === y) {
      setCross(x);
    }
  });

  useEffect(() => {
    document.addEventListener('mousemove', mouseMoveHandler);
    return () => {
      document.removeEventListener('mousemove', mouseMoveHandler);
    };
  }, []);

  useEffect(() => {
    setMoveCount((moveCount) => moveCount + 1);
  }, [x, y]);

  return (
    <div>
      <div className="wrapperDiskount">
        <div
          className="leavesDislount"
          style={{ transform: `translate(${x / 100}px, ${y / 100}px)` }}>
          {' '}
        </div>
      </div>
      <div className="textDiskount">
        <div className="textBlock">
          <h1>Подпишитесь на рассылку и мы подарим вам</h1>
          <p>скидку 15%</p>
          <span>на следующий заказ</span>
        </div>
        <div className="inputFlex">
          <input placeholder="Имя"></input>
          <input placeholder="E-mail"></input>
          <input placeholder="Комментарий"></input>
          <div className="but">
            {' '}
            <button>Отправить</button>
          </div>
        </div>
      </div>
    </div>
  );
}
