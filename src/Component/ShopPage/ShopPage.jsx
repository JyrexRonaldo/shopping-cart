import { Link, useOutletContext } from "react-router-dom";
import styles from "./ShopPage.module.css";

function ShopPage() {
  const [productsData, error, loading] = useOutletContext();

  console.log({ productsData, error, loading });

  return (
    <div className={styles.shopPage}>
      <h1>Shop page</h1>
      <Link to="/">Index</Link>
    </div>
  );
}

export default ShopPage;
