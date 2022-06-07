import React from 'react';
import '../App.scss';
export default function Basket(props) {
  return (
    <div>
      <div className="iconBusket">
        <div className="mainCircle">
          <div className="circle">{props.dlina.length}</div>
        </div>
        <img onClick={props.onClickOpen} width={50} height={50} src="../icons/shoping.png" />
      </div>
    </div>
  );
}
