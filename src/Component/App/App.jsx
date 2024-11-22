import { Link, Outlet } from "react-router-dom";
import styles from './App.module.css'

function App() {
  return (
    <>
      <nav className={styles.navBar}>
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
      <Outlet />
    </>
  );
}

export default App;
