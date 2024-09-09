import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { shoppingCartContext } from "../../hooks/useContext";

const ProductTile = ({ singleProductTile }) => {
  const navigate = useNavigate();
  const { handleAddToCart, cartItems } = useContext(shoppingCartContext);

  function handleNavigateToProductDetailsPage(singleProductId) {
    console.log(singleProductId);
    navigate(`/products-details/${singleProductId}`);
  }
  return (
    <div className="relative group border border-cyan-700 p-6 cursor-pointer">
      <div className="overflow-hidden aspect-w-1 aspect-h-1">
        <img
          src={singleProductTile?.thumbnail}
          alt={singleProductTile?.title}
          className="object-cover w-full h-full transition-all duration-300 group-hover:scale-125"
        />
      </div>
      <div className="flex items-start justify-between mt-4 space-x-4">
        <div className="font-bold text-gray-900 sm:text-sm text-xs  md:text-base">
          <p className="w-[100px] overflow-hidden text-ellipsis whitespace-nowrap">
            {singleProductTile?.title}
          </p>
        </div>
        <div className="text-right">
          <p className="text-xs font-bold text-gray-900 sm:text-sm md:text-[14px]">
            {singleProductTile?.price}
          </p>
        </div>
      </div>
      <button
        className="px-5 mt-5 w-full py-2 rounded-none bg-black text-white font-bold text-lg"
        onClick={() => {
          handleNavigateToProductDetailsPage(singleProductTile?.id);
        }}
      >
        View Details
      </button>
      <button
        className="disabled:opacity-60 disabled:line-through px-5 mt-5 w-full py-2 rounded-none bg-black text-white font-bold text-lg  "
        onClick={() => {
          handleAddToCart(singleProductTile);
        }}
        disabled={
          cartItems.findIndex((item) => item.id === singleProductTile.id) > -1
        }
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductTile;
