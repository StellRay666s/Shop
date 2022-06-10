import React from 'react';
import '../App.scss';
export default function Delevery({ id }) {
  return (
    <div className="deliveryBlock" id={id}>
      <div className="textBox">
        <h1>Доставка и оплата</h1>
        <div className="p1">
          <h2>Какие сроки доставки?</h2>
          <p>
            Мы стараемся доставлять наши заказы как можно быстрее, но в среднем ожидание составляет
            от 40 минут
          </p>
        </div>
        <div className="p1">
          <h2>А что на счет стоимости?</h2>
          <p>У нас бесплатная доставка для заказов от 500 рублей</p>
        </div>
        <div className="p1">
          <h2>Расскажите про оплату?</h2>
          <p>Вы можете оплатить заказ наличными или по карте, курьеру или прямо здесь на сайте.</p>
        </div>
      </div>
      <img src="../items/paket.jpg" />
    </div>
  );
}
