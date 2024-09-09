import React, { useContext } from "react";
import { shoppingCartContext } from "../../hooks/useContext";
import ProductTile from "../../components/productTile";

const ProductListPage = () => {
  const { listOfProducts, loading } = useContext(shoppingCartContext);
  console.log(listOfProducts);

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
    <section className="py-12 bg-white sm:py-16 lg:py-20">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-md mx-auto text-center">
          <h2 className="text-3xl font-bold  text-gray-950 sm:text-4xl">
            Our Featured Products
          </h2>
        </div>
        <div className="grid grid-cols-2 gap-5 mt-10 lg:mt-16 lg:gap-8 lg:grid-cols-4">
          {listOfProducts && listOfProducts.length > 0 ? (
            listOfProducts.map((singleProduct) => {
              return <ProductTile singleProductTile={singleProduct} />;
            })
          ) : (
            <h3>No product found</h3>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProductListPage;
