import './App.scss';
import Header from './Components/Header';
import Content from './Components/Content';
import 'macro-css';
import React from 'react';
import Basket from './Components/Basket';
import BlockBusket from './Components/BlockBusket';
import Drinks from './Components/Drinks';
import Dislount from './Components/Dislount';
import Delevery from './Components/Delevery';

function App() {
  const [items, setItems] = React.useState([]);
  const [inBusket, setInBusket] = React.useState(false);
  const [openBlockBusket, setBusket] = React.useState(false);
  const [addToBasket, setAdd] = React.useState([]);

  function getCategory(obj) {
    if (obj.category == 'icecream/drinks') return true;
  }
  let getCat = items.filter(getCategory);
  console.log(getCat);

  React.useEffect(() => {
    fetch('https://61efda37732d93001778e635.mockapi.io/item')
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setItems(json);
      });
  }, []);

  return (
    <div className="first">
      <div className="clear">
        {inBusket ? <Basket dlina={addToBasket} onClickOpen={() => setBusket(true)} /> : null}

        {openBlockBusket ? (
          <BlockBusket
            propName={setAdd}
            content={addToBasket}
            onClickClose={() => setBusket(false)}
          />
        ) : null}
        <div className="wrapper">
          <Header />
          <div className="tittleTop">
            <h1>ХИТЫ</h1>
            <span>Наши лучшие предложения</span>
          </div>
          <div className="content_Block">
            {items.map((obj) => (
              <Content
                id="content"
                content={addToBasket}
                onClickSee={() => {
                  setAdd([...addToBasket, { ...obj, counter: 1 }]);
                  setInBusket(true);
                }}
                imgUrl={obj.imgUrl}
                title={obj.title}
                description={obj.description}
                price={obj.price}
              />
            ))}{' '}
          </div>
          <div className="tittleTop">
            <h1>Напитки</h1>
            <span>Наши лучшие предложения</span>
          </div>
          <div className="DrinksIcecream">
            {getCat.map((obj) => (
              <Drinks
                id="drinks"
                onClickSee={() => {
                  setAdd([...addToBasket, { ...obj, counter: 1 }]);
                  setInBusket(true);
                }}
                imgUrl={obj.imgUrl}
                title={obj.title}
                description={obj.description}
                price={obj.price}
                category={obj.category}
              />
            ))}
          </div>
        </div>
        <Dislount id="discount" />
        <Delevery id="delevery" />
      </div>
    </div>
  );
}

export default App;
