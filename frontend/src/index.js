import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store.js";
import "./assets/styles/bootstrap.custom.css";
import "./assets/styles/index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import PrivateRoute from "./components/PrivateRoute.jsx";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen.jsx";
import LoginScreen from "./screens/LoginScreen.jsx";
import RegisterScreen from "./screens/RegisterScreen.jsx";
import ShippingScreen from "./screens/ShippingScreen.jsx";
import PaymentScreen from "./screens/PaymentScreen.jsx";
import PlaceOrderScreen from "./screens/PlaceOrderScreen.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} path="/" element={<HomeScreen />}></Route>,
      <Route
        index={false}
        path="/product/:id"
        element={<ProductScreen />}
      ></Route>
      <Route index={false} path="/cart" element={<CartScreen />}></Route>
      <Route index={false} path="/login" element={<LoginScreen />}></Route>
      <Route
        index={false}
        path="/register"
        element={<RegisterScreen />}
      ></Route>
      <Route index={false} path="/shipping" element={<PrivateRoute />}>
        <Route
          index={false}
          path="/shipping"
          element={<ShippingScreen />}
        ></Route>
      </Route>
      <Route index={false} path="/payment" element={<PaymentScreen />}></Route>
      <Route
        index={false}
        path="/placeorder"
        element={<PlaceOrderScreen />}
      ></Route>
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
