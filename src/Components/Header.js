import React from 'react';
import '../App.scss';
import 'macro-css';
import Link from 'react-scroll/modules/components/Link';

export default function Header() {
  return (
    <div>
      <header className="d-flex justify-between">
        <ul className="d-flex">
          <li>
            <Link to="content" spy={true} smooth={true} offset={-170} duration={1000}>
              ХИТЫ
            </Link>
          </li>
          <li>
            <Link to="drinks" spy={true} smooth={true} offset={-170} duration={1000}>
              НАПИТКИ
            </Link>
          </li>
          <li>
            <Link to="delevery" spy={true} smooth={true} offset={-70} duration={1000}>
              ДОСТАВКА И ОПЛАТА
            </Link>
          </li>
        </ul>
        <span>+7 (594) 26-25-693</span>
      </header>
      <div className="advertisingBlock">
        <div>
          <h1>тут есть еда</h1>
          <p>Вкусная. Сочная. Твоя.</p>
        </div>
        <div className="imgPizza">
          <img width={634} height={441} src="../img/f.jpg" alt="Здесь должна быть пицца!" />
        </div>
      </div>
      <div className="wantGiftBlock">
        <ul>
          <li>
            <img width={49} height={49} src="./icons/flash.png" />
            Доставка от 40 минут{' '}
          </li>
          <li>
            <img width={49} height={49} src="./icons/tick-mark.png" /> Качественные продукты
          </li>
          <li>
            <img width={49} height={49} src="./icons/star.png" />
            Повара — профессионалы
          </li>
        </ul>
        <div>
          <button>
            <Link to="discount" spy={true} smooth={true} offset={110} duration={1000}>
              Хочу подарок
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}
