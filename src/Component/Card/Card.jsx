// import styles from './Card.module.css'

function Card(imgURL, title, price) {
  return (
    <div>
      <img src={imgURL} alt="" />
      <p>{title}</p>
      <p>{price}</p>
      <input type="number" />
      <button type="button">Add to Cart</button>
    </div>
  );
}

export default Card;
