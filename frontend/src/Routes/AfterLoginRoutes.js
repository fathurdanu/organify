import React from "react";
import { Routes, Route } from "react-router-dom";
import {
  HomePage,
  SearchedHomePage,
  EditProfile,
  ProfileUser,
  ProductDetailsUser,
  OrdersPage,
  OrderDetailsPage,
} from "../pages/User";

function AfterLoginRoutes() {
  return (
    // semua yang pakai navbar dan shoppingCart
    <Routes>
      <Route path="/home" element={<HomePage />}></Route>
      <Route path="/home/:query" element={<SearchedHomePage />}></Route>
      <Route path="/edit" element={<EditProfile />}></Route>
      <Route path="/profile" element={<ProfileUser />}></Route>
      <Route path="/details/:id" element={<ProductDetailsUser />}></Route>
      <Route path="/orders" element={<OrdersPage />}></Route>
      <Route path="/orderDetail" element={<OrderDetailsPage />}></Route>
    </Routes>
  );
}

export default AfterLoginRoutes;
