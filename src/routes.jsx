import App from "./Component/App/App";
import HomePage from "./Component/HomePage/HomePage";
import ShopPage from "./Component/ShopPage/ShopPage";
import CartPage from "./Component/CartPage/CartPage";
import ErrorPage from "./ErrorPage/ErrorPage";

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/home",
    element: <HomePage />,
  },
  {
    path: "/shop",
    element: <ShopPage />,
  },
  {
    path: "/cart",
    element: <CartPage />,
  },

];


export default routes