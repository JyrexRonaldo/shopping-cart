import styles from "./ShopPage.module.css";
import ProductCard from "../ProductCard/ProductCard";
import { useContext } from "react";
import StoreDataContext from "../StoreDataContext/StoreDataContext";

function ShopPage() {
  const { productsData, error, loading } = useContext(StoreDataContext);

  if (loading) return  <div className={styles.shopPage}><p className={styles.errorMessage}>Loading...</p></div>;
  if (error) return  <div className={styles.shopPage}><p className={styles.errorMessage}>A network error was encountered</p></div>;

  let productCards = productsData.map((product) => {
    return (
      <ProductCard
        key={product.id}
        imgURL={product.image}
        title={product.title}
        price={product.price}
        cardId={product.id}
      />
    );
  });

  return <div className={styles.shopPage}>{productCards}</div>;
}

export default ShopPage;
