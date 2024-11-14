import { Link } from "react-router-dom";
// import styles from './App.module.css'

function App() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link></li>
          <li>Shop</li>
          <li>Cart</li>
        </ul>
      </nav>
    </>
  );
}

export default App;
