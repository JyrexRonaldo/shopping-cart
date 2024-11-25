import styles from "./CartItemCard.module.css"

function CartItemCard({ imgURL, title, price, quantity }) {
  return (
    <div className={styles.cartItemCard}>
      <img src={imgURL} alt="" />
      <div>
        <p>{title}</p>
        <p>Price: {`$${price}`}</p>
        <p>Quantity: {quantity}</p>
        <p>Total: {`$${price * quantity}`}</p>
      </div>
      <button type="button">Remove</button>
    </div>
  );
}

export default CartItemCard