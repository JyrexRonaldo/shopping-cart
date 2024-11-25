import { useOutletContext } from "react-router-dom";
import CartItemCard from "../CartItemCard/CartItemCard";
import styles from "./CartPage.module.css";

function CartPage() {
  const { productsData, cartItems } = useOutletContext();

  // console.log({productsData, cartItems})

  console.log(cartItems);

  let cartItemCards = [];

  for (const key in cartItems) {
    if (Object.prototype.hasOwnProperty.call(cartItems, key)) {
      // cartItemCards += key
      const itemInfo = productsData.find((product) => {
        return +key === product.id;
      });
      console.log(itemInfo);
      cartItemCards.push(
        <CartItemCard
          imgURL={itemInfo.image}
          title={itemInfo.title}
          price={itemInfo.price}
          quantity={cartItems[key]}
        />
      );
    }
  }

  console.log(cartItemCards);

  return (
    <div className={styles.cartPage}>
      <div>
        <h1>Shopping Cart</h1>
        <div>{cartItemCards}</div>
      </div>
      <div></div>
    </div>
  );
}

export default CartPage;
