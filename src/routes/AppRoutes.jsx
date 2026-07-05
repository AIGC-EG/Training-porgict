import { Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import Login from "../pages/Auth/Login";
import ProtectedRoute from "./ProtectedRoute";
import AdminRoute from "./AdminRoute";
import UserRoute from "./UserRoute";
import Home from "../pages/Store/Home.jsx";

import Products from "../pages/Store/Products.jsx";

import Cart from "../pages/Store/Cart.jsx";
import Orders from "../pages/Store/Orders.jsx";
import Profile from "../pages/Store/Profile";
import Wishlist from "../pages/Store/Wishlist";


import Dashbord from "../pages/Dashbord/Dashboard.jsx";

function AppRoutes() {
  return (
    <Routes>
      {/* صفحات Authentication */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<h1>Register</h1>} />

      {/* صفحات الموقع */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />

        <Route element={<UserRoute />}>
              <Route path="/profile" element={<Profile />} />
              <Route path="/products" element={<Products />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/wishlist" element={<Wishlist />} />
              <Route path="/orders" element={<Orders />} />
        </Route>

        <Route element={<AdminRoute />}>
                  <Route path="/Dashbord" element={<Dashbord />} />
        </Route>
      </Route>

      {/* 404 */}
      <Route path="*" element={<h1>404 Not Found</h1>} />
    </Routes>
  );
}

export default AppRoutes;