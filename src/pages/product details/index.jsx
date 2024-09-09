import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { shoppingCartContext } from "../../hooks/useContext";

const ProductDetailsPage = () => {
  const { productDetails, setProductDetails, handleAddToCart, cartItems } =
    useContext(shoppingCartContext);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();

  function handleGotoCart() {
    navigate("/cart");
  }

  async function fetchSingleProduct() {
    setLoading(true);
    const apiResponse = await fetch(`https://dummyjson.com/products/${id}`);
    const data = await apiResponse.json();
    setProductDetails(data);
    setLoading(false);

    console.log(productDetails);
  }

  useEffect(() => {
    fetchSingleProduct();
  }, [id]);

  if (loading) {
    return (
      <>
        <div className="flex justify-center items-center h-screen">
          <div className="w-10 h-10 border-8 border-gray-300 border-t-black rounded-full animate-spin"></div>
        </div>
      </>
    );
  }
  return (
    <div className="p-6 lg:max-w-7xl max-w-4xl mx-auto">
      <div className="grid items-center grid-cols-1 lg:grid-cols-5 gap-12 shadow-sm p-6">
        <div className="lg:col-span-3 w-full lg:sticky top-0 text-center">
          <div className="px-4 py-10 rounded-xl shadow-lg relative">
            <img
              src={productDetails?.thumbnail}
              alt={productDetails?.title}
              className="w-4/5 rounded object-cover"
            />
          </div>
          <div className="mt-6 flex flex-wrap  justify-center gap-6 mx-auto">
            {productDetails?.images.length
              ? productDetails?.images.map((imageItem) => {
                  return (
                    <div key={imageItem} className="rounded-xl p-4  shadow-md">
                      <img
                        src={imageItem}
                        alt="Secondary images"
                        className="w-24 cursor-pointer"
                      />
                    </div>
                  );
                })
              : null}
          </div>
        </div>
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-extrabold text-[#333333]">
            {productDetails?.title}
          </h2>
          <div className="flex flex-wrap gap-4 mt-4">
            <p className="text-xl font-bold">${productDetails?.price}</p>
          </div>
          <div>
            <button
              className="disabled:opacity-50  mt-5 min-w-[200px] px-4 py-3 border border-[333] bg-transparent text-sm font-semibold rounded"
              onClick={() => {
                handleAddToCart(productDetails);
              }}
              disabled={
                cartItems.findIndex((item) => item.id === productDetails.id) >
                -1
              }
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
