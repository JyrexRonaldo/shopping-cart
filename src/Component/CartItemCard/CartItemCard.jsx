import { useOutletContext } from "react-router-dom";
import styles from "./CartItemCard.module.css";
import PropTypes from "prop-types";

function CartItemCard({ imgURL, title, price, quantity, itemId }) {
  const { cartItems, setCartItems } = useOutletContext();

  function handleRemoveButton() {
    delete cartItems[itemId];
    setCartItems({ ...cartItems });
  }

  return (
    <div className={styles.cartItemCard}>
      <div>
        <img src={imgURL} alt="" />
      </div>
      <div>
        <p>{title}</p>
        <p>Price: {`$${price}`}</p>
        <p>Quantity: {quantity}</p>
        <p>Total: {`$${price * quantity}`}</p>
      </div>
      <div>
        <button type="button" onClick={handleRemoveButton}>
          Remove
        </button>
      </div>
    </div>
  );
}

CartItemCard.propTypes = {
  imgURL: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.number,
  quantity: PropTypes.number,
  itemId: PropTypes.number,
};

export default CartItemCard;
