import { Link, Outlet } from "react-router-dom";
import styles from "./App.module.css";
import { useEffect, useState } from "react";

function App() {
  const useProductsData = () => {
    const [productsData, setProductsData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      fetch("https://fakestoreapi.com/products")
        .then((response) => {
          if (response.status >= 400) {
            throw new Error("server error");
          }
          return response.json();
        })
        .then((response) => setProductsData(response))
        .catch((error) => setError(error))
        .finally(() => setLoading(false));
    }, []);

    return [productsData, error, loading] ;
  };

  const productsData = useProductsData()




  return (
    <div className={styles.app}>
      <nav className={styles.navBar}>
        <Link to="/"><p>Suburban</p></Link>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/shop">Shop</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
        </ul>
      </nav>
      <Outlet context={productsData}/>
    </div>
  );
}

export default App;
