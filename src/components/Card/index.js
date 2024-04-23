import React from 'react';
import styles from './Card.module.scss'

export default function Card({ onFavorite, imgUrl, title, price, onPlus }) {
  const [isAdded, setIsAdded] = React.useState(false);

  const handlePlusClick = () => {
    onPlus({imgUrl, title, price});
    setIsAdded(!isAdded);
  }

  return (
  <div className={styles.card}>
    <img src="/img/heart-unactive.svg" alt="unliked"
    className={styles.favorite} onClick={onFavorite}></img>
    <img src={imgUrl}
    alt="Мужские Кроссовки Nike Blazers
    Mid Suede"></img>
    <p>
      {title}
    </p>
    <div className={styles.cardBottom}>
      <div>
        <span>ЦЕНА:</span>
        <span className={styles.cardPrice}>{price} руб.</span>
      </div>
      <img src={isAdded ? "/img/card-checked.svg" : "/img/card-unchecked.svg"}
      alt="unchecked" onClick={handlePlusClick} />
    </div>
  </div>
  );
}