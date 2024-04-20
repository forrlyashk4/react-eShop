export default function Card() {
  return (
  <div className="card">
    <img src="/img/heart-unactive.svg" alt="unliked" class="card__likeButton"></img>
    <img src="/img/blazerMid.png"
    alt="Мужские Кроссовки Nike Blazer
    Mid Suede"></img>
    <p>
      Мужские Кроссовки Nike Blazer
      Mid Suede
    </p>
    <div className="card__bottom">
      <div>
        <span>ЦЕНА:</span>
        <span className="card__price">12 999 руб.</span>
      </div>
      <button>
        <img src="/img/card-unchecked.svg" alt="unchecked"></img>
      </button>
    </div>
  </div>
  );
}