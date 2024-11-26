import styles from "./CartItemCard.module.css"

function CartItemCard({ imgURL, title, price, quantity }) {
  return (
    <div className={styles.cartItemCard}>
      <div><img src={imgURL} alt="" /></div>
      <div>
        <p>{title}</p>
        <p>Price: {`$${price}`}</p>
        <p>Quantity: {quantity}</p>
        <p>Total: {`$${price * quantity}`}</p>
      </div>
      <div><button type="button">Remove</button></div>
    </div>
  );
}

export default CartItemCard