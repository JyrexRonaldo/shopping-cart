import { Link } from "react-router-dom";
import styles from "./HomePage.module.css";

function HomePage() {
  return (
    <div className={styles.homePage}>
      <div>
        <div>
          <p>Shop</p>
          <p>Suburban</p>
        </div>
        <Link to="/shop">
          <button type="button">Shop Now</button>
        </Link>
      </div>
    </div>
  );
}

export default HomePage;
