import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const shoppingCartContext = createContext(null);

const ShoppingCartContextProvider = ({ children }) => {
  const [productDetails, setProductDetails] = useState(null);
  const [loading, setLoading] = useState(false);
  const [listOfProducts, setListOfProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();

  async function fetchProductList() {
    setLoading(true);
    const apiResponse = await fetch("https://dummyjson.com/products");
    const data = await apiResponse.json();
    if (data && data?.products) {
      setListOfProducts(data.products);
      setLoading(false);
    }
  }

  function handleAddToCart(getProductDetails) {
    console.log(getProductDetails);
    let copyExistingCartItems = [...cartItems];

    const findIndexofCurrentItem = copyExistingCartItems.findIndex(
      (cartItem) => cartItem.id === getProductDetails.id
    );
    console.log(findIndexofCurrentItem);
    if (findIndexofCurrentItem === -1) {
      copyExistingCartItems.push({
        ...getProductDetails,
        quantity: 1,
        totalPrice: getProductDetails?.price,
      });
      console.log("inside if");
    } else {
      console.log("inside else");
      copyExistingCartItems[findIndexofCurrentItem] = {
        ...copyExistingCartItems[findIndexofCurrentItem],
        quantity: copyExistingCartItems[findIndexofCurrentItem].quantity + 1,
        totalPrice:
          (copyExistingCartItems[findIndexofCurrentItem].quantity + 1) *
          copyExistingCartItems[findIndexofCurrentItem].price,
      };
    }
    console.log("copyCArt", copyExistingCartItems);
    setCartItems(copyExistingCartItems);
    localStorage.setItem("cartItems", JSON.stringify(copyExistingCartItems));
    // navigate("/cart");
  }

  function handleRemoveFromCart(getProductDetails, isFullyRemoveFromCart) {
    let copyExistingCartItems = [...cartItems];
    const findIndexofCurrentItem = copyExistingCartItems.findIndex(
      (cartItem) => cartItem.id === getProductDetails.id
    );
    if (isFullyRemoveFromCart) {
      copyExistingCartItems.splice(findIndexofCurrentItem, 1);
    } else {
      copyExistingCartItems[findIndexofCurrentItem] = {
        ...copyExistingCartItems[findIndexofCurrentItem],
        quantity: copyExistingCartItems[findIndexofCurrentItem].quantity - 1,
        totalPrice:
          (copyExistingCartItems[findIndexofCurrentItem].quantity - 1) *
          copyExistingCartItems[findIndexofCurrentItem].price,
      };
    }
    setCartItems(copyExistingCartItems);
    localStorage.setItem("cartItems", JSON.stringify(copyExistingCartItems));
  }
  useEffect(() => {
    fetchProductList();
    setCartItems(JSON.parse(localStorage.getItem("cartItems")) || []);
  }, []);
  return (
    <shoppingCartContext.Provider
      value={{
        listOfProducts,
        loading,
        productDetails,
        setProductDetails,
        handleAddToCart,
        cartItems,
        handleRemoveFromCart,
      }}
    >
      {children}
    </shoppingCartContext.Provider>
  );
};

export default ShoppingCartContextProvider;
