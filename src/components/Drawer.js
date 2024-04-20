export default function Drawer() {
  return (
    <div className="overlay">
      <div className="drawer">
        <h2>Корзина <img src="/img/remove-active.svg" alt="remove"></img></h2>

        <div className="cart__content">
          <div className="cartItem">
            <img src="/img/blazerMid.png" className="cartItem__img" alt="blazer mid"></img>
            <div>
              <p>Мужские Кроссовки Nike Air Max 270</p>
              <b>8 499 руб.</b>
            </div>
            <img src="/img/remove-active.svg" className="cartItem__icon" alt="remove"></img>
          </div>
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