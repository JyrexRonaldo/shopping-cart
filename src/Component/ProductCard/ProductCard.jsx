import styles from "./ProductCard.module.css";

function ProductCard({ imgURL, title, price }) {
  return (
    <div className={styles.card}>
      <div>
        <img src={imgURL} alt="" />
      </div>
      <p>{title}</p>
      <p>{`$${price}`}</p>
      <div>Quantity:<input type="number" /></div>
      <button type="button">Add to Cart</button>
    </div>
  );
}

export default ProductCard;
