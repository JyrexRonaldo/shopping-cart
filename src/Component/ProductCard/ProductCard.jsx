import styles from "./ProductCard.module.css";

function ProductCard({ imgURL, title, price }) {
  return (
    <div className={styles.card}>
      <div>
        <img src={imgURL} alt="" />
      </div>
      <p>{title}</p>
      <p>{price}</p>
      <input type="number" />
      <button type="button">Add to Cart</button>
    </div>
  );
}

export default ProductCard;
