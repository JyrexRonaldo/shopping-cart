import { Link } from "react-router-dom"
import styles from './CartPage.module.css'

function CartPage() {
    return (
      <div className={styles.cartPage}>
        <h1>Cart Page</h1>
        <Link to="/">Index</Link>
      </div>
    )
  }
  
  export default CartPage
  