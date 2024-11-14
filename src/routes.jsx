import App from "./Component/App/App";
import ErrorPage from "./ErrorPage/ErrorPage";

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
];


export default routes