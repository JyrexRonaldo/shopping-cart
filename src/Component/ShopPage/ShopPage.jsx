import { useOutletContext } from "react-router-dom";
import styles from "./ShopPage.module.css";
import ProductCard from "../ProductCard/ProductCard";

function ShopPage() {
  const { productsData, error, loading } = useOutletContext();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>A network error was encountered</p>;

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
