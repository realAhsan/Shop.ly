import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex justify-between items-center bg-black text-white p-4">
      <div className="text-xl font-bold">Shop.ly</div>
      <div>
        <ul className="flex space-x-4">
          <li>
            <Link to="/products-list" className="hover:underline">
              Home
            </Link>
          </li>
          <li>
            <Link to="/cart" className="hover:underline">
              Cart
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
