import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./layout";
import ProductListPage from "./pages/product list";
import ProductDetailsPage from "./pages/product details";
import CartPage from "./pages/cart page";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="products-list" element={<ProductListPage />} />
          <Route path="products-details/:id" element={<ProductDetailsPage />} />
          <Route path="cart" element={<CartPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
