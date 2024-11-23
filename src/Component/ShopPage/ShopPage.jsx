import { useOutletContext } from "react-router-dom";
import styles from "./ShopPage.module.css";
import ProductCard from "../ProductCard/ProductCard";

function ShopPage() {
  const [productsData, error, loading] = useOutletContext();

  // console.log({ productsData, error, loading });
  console.log(productsData)

  let productCards = productsData.map((product) => {
      
    return <ProductCard key={product.id} imgURL={product.image} title={product.title} price={product.price} />
  })

  if (loading) return <p>Loading...</p>
  if (error) return <p>A network error was encountered</p>

  return (
    <div className={styles.shopPage}>
      {/* <h1>Shop page</h1>
      <Link to="/">Index</Link> */}
      {productCards}
    </div>
  );
}

export default ShopPage;
