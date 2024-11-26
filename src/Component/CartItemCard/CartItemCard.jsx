import { useOutletContext } from "react-router-dom";
import styles from "./CartItemCard.module.css"

function CartItemCard({ imgURL, title, price, quantity, itemId }) {

  const {cartItems, setCartItems} = useOutletContext();

  function handleRemoveButton() {
    delete cartItems[itemId]
    setCartItems({...cartItems})
  }

  return (
    <div className={styles.cartItemCard}>
      <div><img src={imgURL} alt="" /></div>
      <div>
        <p>{title}</p>
        <p>Price: {`$${price}`}</p>
        <p>Quantity: {quantity}</p>
        <p>Total: {`$${price * quantity}`}</p>
      </div>
      <div><button type="button" onClick={handleRemoveButton}>Remove</button></div>
    </div>
  );
}

export default CartItemCard