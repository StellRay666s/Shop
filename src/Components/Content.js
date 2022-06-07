import React from 'react';
import '../App.scss';

export default function Content(props) {
  return (
    <div className="topBlok">
      <div className="items">
        <div className="cartItems">
          <img width={325} height={328} src={props.imgUrl} />
          <h2>{props.title}</h2>
          <span>{props.description}</span>
          <div className="priceNumber">
            <p>{props.price}</p>
          </div>
          <div className="buttonBlock">
            <button onClick={props.onClickSee} className="inBusket">
              В корзину
            </button>
            <button className="more">Подробнее</button>
          </div>
        </div>
      </div>
    </div>
  );
}
