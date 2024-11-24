import { useState } from "react";
import styles from "./ProductCard.module.css";
import { useOutletContext } from "react-router-dom";

function ProductCard({ imgURL, title, price, cardId }) {
  const [quantity, setQuantity] = useState(1);

  function handleQuantityInput(e) {
    setQuantity(e.target.value);
  }

  const { cartItems, setCartItems } = useOutletContext();

  function handleAddToCart() {
    if (quantity < 1) {
      alert("Quantity can't be less than 1")
      return
    }
    setCartItems({ ...cartItems, ...{ [cardId]: quantity } });
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

export default ProductCard;
