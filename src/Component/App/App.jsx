import { Link, Outlet } from "react-router-dom";
import styles from './App.module.css'

function App() {
  return (
    <div className={styles.app}>
      <nav className={styles.navBar}>
      <p>Suburban</p>
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
    </div>
  );
}

export default App;
