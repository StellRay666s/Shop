import React from 'react';
import '../App.scss';

export default function BlockBusket({ onClickClose, content, propName }) {
  function Delete(id) {
    const res = content.filter((item) => item.id !== id);
    propName(res);
  }

  function search(id) {
    const currentValue = content.find((obj) => obj.id == id);
    currentValue.counter = currentValue.counter + 1;
    const arr = content.filter((item) => item.id !== id);
    console.log(currentValue);
    propName([currentValue, ...arr]);
  }
  function minus(id) {
    const currentValue = content.find((obj) => obj.id == id);
    if (currentValue.counter != 0) {
      currentValue.counter--;
    }
    const arr = content.filter((item) => item.id !== id);
    propName([currentValue, ...arr]);
  }
  function considerSum() {
    let totalAmount = 0;
    const items = content.map((item) => {
      totalAmount += item.price * item.counter;
    });
    return totalAmount;
  }
  function considerItem(id) {
    let sum = 0;
    const currentId = content.find((obj) => obj.id == id);
    sum = currentId.price * currentId.counter;

    console.log(sum);
    return sum;
  }
  return (
    <div className="under">
      <div className="busketWrapper">
        <img
          onClick={onClickClose}
          className="remove"
          width={28}
          height={28}
          src="../icons/remove.svg"
        />
        <div className="content">
          <h1>Заказ</h1>

          <div className="itemCard">
            {content.map((obj) => (
              <div className="itemCard">
                <div className="cardInfo">
                  <div className="cartImage">
                    <img width={64} height={64} src={obj.imgUrl} />
                  </div>
                  <div className="textPrice">
                    <h3>{obj.title}</h3>
                    <span>{considerItem(obj.id)}</span>
                  </div>
                  <div className="deleteNumber">
                    <div className="number">
                      <img
                        onClick={() => minus(obj.id)}
                        width={22}
                        height={24}
                        src="../svg/minus.svg"
                      />
                      <span>{obj.counter}</span>
                      <img
                        onClick={() => search(obj.id)}
                        width={22}
                        height={24}
                        src="../svg/plus.svg"
                      />
                    </div>
                    <button
                      onClick={() => {
                        Delete(obj.id);
                      }}>
                      Удалить
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="totalSum">
            <span>Сумма:{considerSum()}</span>
          </div>
          <div className="orderDate">
            <h2> Данные для заказа</h2>
            <div className="input">
              <input type="text" placeholder="ФИО"></input>
              <input type="text" placeholder="Телефон"></input>
              <input type="text" placeholder="E-mail"></input>
            </div>

            <div className="orederCalkulation">
              <p>Сумма</p>
              <span>{considerSum()}</span>
            </div>
            <button className="chekoutOrder">Оформить заказ</button>
          </div>
        </div>{' '}
      </div>
    </div>
  );
}
