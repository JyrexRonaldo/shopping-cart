import { useContext, useState } from "react";
import styles from "./ProductCard.module.css";
import PropTypes from "prop-types";
import StoreDataContext from "../StoreDataContext/StoreDataContext";

function ProductCard({ imgURL, title, price, cardId }) {
  const [quantity, setQuantity] = useState(1);

  function handleQuantityInput(e) {
    setQuantity(e.target.value);
  }

  const { cartItems, setCartItems } = useContext(StoreDataContext);

  function handleAddToCart() {
    if (quantity < 1) {
      alert("Quantity can't be less than 1");
    } else if (!Object.keys(cartItems).includes(cardId.toString())) {
      setCartItems({ ...cartItems, ...{ [cardId]: +quantity } });
    } else {
      cartItems[cardId] += +quantity;
      setCartItems({ ...cartItems });
    }
    setQuantity(1);
  }

  return (
    <div className={styles.card}>
      <div>
        <img src={imgURL} alt="" />
      </div>
      <p>{title}</p>
      <p>{`$${price}`}</p>
      <div>
        Quantity:
        <input type="number" value={quantity} onInput={handleQuantityInput} />
      </div>
      <button type="button" onClick={handleAddToCart}>
        Add to Cart
      </button>
    </div>
  );
}

ProductCard.propTypes = {
  imgURL: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.number,
  cardId: PropTypes.number,
};

export default ProductCard;
