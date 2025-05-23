import CartItemCard from "../CartItemCard/CartItemCard";
import styles from "./CartPage.module.css";
import { useContext } from "react";
import StoreContext from "../StoreContext/StoreContext";

function CartPage() {
  const { productsData, cartItems } = useContext(StoreContext);

  let cartItemCards = [];
  let grandTotal = 0;

  for (const key in cartItems) {
    if (Object.prototype.hasOwnProperty.call(cartItems, key)) {

      const itemInfo = productsData.find((product) => {
        return +key === product.id;
      });

      grandTotal += itemInfo.price * cartItems[key];

      cartItemCards.push(
        <CartItemCard key={itemInfo.id}
          imgURL={itemInfo.image}
          title={itemInfo.title}
          price={itemInfo.price}
          quantity={cartItems[key]}
          itemId={itemInfo.id}
        />
      );
    }
  }

  function handleCheckout() {
    alert("Work in progress 😎")
  }

  return (
    <div className={styles.cartPage}>
      <div>
        <h1>Shopping Cart</h1>
        <div>{cartItemCards}</div>
      </div>
      <div>
        <p>
          Grand Total:{" "}
          {`$${Math.round((grandTotal + Number.EPSILON) * 100) / 100}`}
        </p>
        <button type="button" onClick={handleCheckout}>Proceed to checkout</button>
      </div>
    </div>
  );
}

export default CartPage;
