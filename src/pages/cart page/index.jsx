import React, { useContext } from "react";
import { shoppingCartContext } from "../../hooks/useContext";
import { useNavigate } from "react-router-dom";

const CartPage = () => {
  const navigate = useNavigate();
  const { cartItems } = useContext(shoppingCartContext);
  console.log("cart:", cartItems);
  return (
    <div className="max-w-5xl mx-auto max-md:max-w-xl py-4">
      <h1 className="text-2xl font-bold text-gray-800 text-center">
        My Cart Page
      </h1>
      <div className="grid md:grid-cols-3 gap-8 mt-12  ">
        <div className="md:col-span-2 space-y-4  ">
          {cartItems?.length ? (
            cartItems.map((item) => {})
          ) : (
            <p>No item available in cart</p>
          )}{" "}
        </div>
        <div className="bg-gray-100  rounded-sm p-4 h-max">
          <h3 className="text-xl font-extrabold text-gray-950 border-b border-gray-300 pb-2 ">
            Order Summary
          </h3>
          <ul className="text-gray-700 mt-4 space-y-2">
            <p className="flex flex-wrap gap-4 text-sm font-bold   ">
              Total <span> </span>
            </p>
          </ul>
          <div className="mt-5 flex  gap-2  ">
            <button className="text=sm px-4 py-3 bg-black text-white font-extrabold">
              Checkout
            </button>
            <button
              className="text=sm px-4 py-3 bg-black text-white font-extrabold"
              onClick={() => {
                navigate("/ products-list");
              }}
            >
              Continue Shopping
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
