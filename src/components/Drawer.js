export default function Drawer({ onClose, items = [] }) {
  return (
    <div className="overlay">
      <div className="drawer">
        <h2>Корзина
        <img src="/img/remove-active.svg" alt="Close"
        onClick={onClose}></img></h2>

        <div className="cart__content">
          {items.map((itemData) => {
            return (<div className="cartItem">
              <img src={itemData.imgUrl} className="cartItem__img" alt="blazer mid"></img>
              <div>
                <p>{itemData.title}</p>
                <b>{itemData.price} руб.</b>
              </div>
              <img src="/img/remove-active.svg" className="cartItem__icon" alt="remove"></img>
            </div>);
          })}
        </div>

        <div className="bottomItems">
          <ul>
            <li>
              <span>Итого:</span>
              <div></div>
              <b>21 498 руб.</b>
            </li>
            <li>
              <span>Налог 5%:</span>
              <div></div>
              <b>1074 руб.</b>
            </li>
          </ul>
          <button>
            Оформить заказ
            <img src="/img/buttonArrow.svg" alt="arrow next" />
          </button>
        </div>
      </div>
    </div>
  );
}