import { Link } from "react-router-dom"
import styles from './ShopPage.module.css'

function ShopPage() {
    return (
      <div className={styles.shopPage}>
        <h1>Shop page</h1>
        <Link to="/">Index</Link>
      </div>
    )
  }
  
  export default ShopPage
  