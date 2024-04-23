import React from "react";
import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";

function App() {
  const [goods, setGoods] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [cardOpened, setCartOpened] = React.useState(false);

  React.useEffect(() => {
    fetch('https://66275dceb625bf088c081938.mockapi.io/goods')
    .then((res) => res.json())
    .then((json) => setGoods(json));
  }, []);

  const onAddToCart = (obj) => {
    setCartItems([...cartItems, obj]);
  }

  return (
    <div className="wrapper">
      {
        cardOpened &&
        <Drawer onClose={() => setCartOpened(false)}
        items={cartItems} />
      }
      <Header onClickCart={() => setCartOpened(true)} />
      <div className="content">
        <div className="content__top">
          <h1>Все кроссовки</h1>
          <div className="searchBlock">
            <img src="/img/search.svg" alt="search"></img>
            <input placeholder="Поиск..."></input>
          </div>
        </div>
        <div className="cardList">
          {
            goods.map((data) => {
              return <Card
                title={data.name}
                price={data.price}
                imgUrl={data.imgUrl}
                onFavorite={() => console.log('добавили в закладки')}
                onPlus={onAddToCart}
              />
            })
          }
        </div>
      </div>
    </div>
  );
}

export default App;
