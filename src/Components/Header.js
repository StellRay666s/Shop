import React from 'react';
import '../App.scss'
import 'macro-css'

export default function Header() 
{
  return( <div>
        <header className='d-flex justify-between'>
               <ul className='d-flex'>
                   <li>ХИТЫ</li>
                   <li>ПИЦЦЫИПАСТА</li>
                   <li>СУШИИРОЛЛЫ</li>
                   <li>НАПИТКИ</li>
                   <li>ДОСТАВКАИОПЛАТА</li>
                   </ul> 
                <span>+7 (594) 26-25-693</span>
        </header>
        <div className='advertisingBlock'>
            <div>
            <h1>тут есть еда</h1>
            <p>Вкусная. Сочная. Твоя.</p>
            </div>
            <div className='imgPizza'><img width={634} height={441} src='../img/f.jpg' alt='Здесь должна быть пицца!'/></div>
        </div>
        <div className='wantGiftBlock'>
            <ul>
                <li><img width={49} height={49} src='./icons/flash.png'/>Доставка от 40 минут  </li>
                <li><img width={49} height={49} src='./icons/tick-mark.png' /> Качественные продукты</li>
                <li><img width={49} height={49} src='./icons/star.png' />Повара — профессионалы</li>
            </ul>
             <div>
                    <button>Хочу подарок</button>
                </div>


        </div>
  </div>)
}
